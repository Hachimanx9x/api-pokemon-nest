import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Pokemon, PokemonFilter } from './interfaces/pokemon.interface';
//import { SearchPokemonDTO } from './dto/pokemon.dto';
@Injectable()
export class PokemonService {
  constructor(@InjectModel('Pokemon') readonly pokemonModel: Model<Pokemon>) {}
  async getPokemons(): Promise<Pokemon[]> {
    const pokemons = await this.pokemonModel.find();
    return pokemons;
  }
  async getPokemon(pokemonID: number): Promise<Pokemon> {
    const pokemon = await this.pokemonModel.find({ id: pokemonID });

    return pokemon[0];
  }
  async getPokemonDefault(): Promise<Pokemon[]> {
    const pokemon = await this.pokemonModel.find({}).limit(6);
    return pokemon;
  }
  async getPokemonNext(next: number): Promise<Pokemon[]> {
    const prev = next - 5;
    const pokemon = await this.pokemonModel.find({
      $and: [{ id: { $gte: prev } }, { id: { $lte: next } }],
    });
    return pokemon;
  }
  async getPokemonFilter(SearchPokemonDTO: PokemonFilter): Promise<Pokemon[]> {
    const { type, weakness, heigth, weight, ranges } = SearchPokemonDTO;
    //first type weakness
    if (type !== '' && weakness !== '') {
      const pokemon = await this.pokemonModel.find({
        $and: [
          { altura: { $lte: heigth[1] } },
          { altura: { $gte: heigth[0] } },
          { peso: { $lte: weight[1] } },
          { peso: { $gte: weight[0] } },
          { id: { $lte: ranges[1] } },
          { id: { $gte: ranges[0] } },
          { tipos: type },
          { debilidades: weakness },
        ],
      });
      return pokemon;
    }
    //second only weakness
    if (type === '' && weakness !== '') {
      const pokemon = await this.pokemonModel.find({
        $and: [
          { altura: { $lte: heigth[1] } },
          { altura: { $gte: heigth[0] } },
          { peso: { $lte: weight[1] } },
          { peso: { $gte: weight[0] } },
          { id: { $lte: ranges[1] } },
          { id: { $gte: ranges[0] } },
          { debilidades: weakness },
        ],
      });
      return pokemon;
    }
    //third only weakness
    if (type !== '' && weakness === '') {
      const pokemon = await this.pokemonModel.find({
        $and: [
          { altura: { $lte: heigth[1] } },
          { altura: { $gte: heigth[0] } },
          { peso: { $lte: weight[1] } },
          { peso: { $gte: weight[0] } },
          { id: { $lte: ranges[1] } },
          { id: { $gte: ranges[0] } },
          { tipos: type },
        ],
      });
      return pokemon;
    }
    // default
    const pokemon = await this.pokemonModel.find({
      $and: [
        { altura: { $lte: heigth[1] } },
        { altura: { $gte: heigth[0] } },
        { peso: { $lte: weight[1] } },
        { peso: { $gte: weight[0] } },
        { id: { $lte: ranges[1] } },
        { id: { $gte: ranges[0] } },
      ],
    });
    return pokemon;
  }
}
