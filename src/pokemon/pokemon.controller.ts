import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Post,
  Query,
  Res,
} from '@nestjs/common';
import { SearchPokemonDTO } from './dto/pokemon.dto';
import { PokemonService } from './pokemon.service';
import { PokemonResolve, Pokemon } from './interfaces/pokemon.interface';
@Controller('pokemon')
export class PokemonController {
  constructor(private pokemonService: PokemonService) {}
  //filter data
  filterPokemons(array: Pokemon[]): PokemonResolve[] {
    let dataResult: PokemonResolve[] = [];
    array.forEach((ele) => {
      dataResult.push({
        id: ele.id,
        imagen: `${process.env.HOST || 'http://localhost:3030'}/image?id=${
          ele.id
        }`,
        nombre: ele.nombre,
        tipos: ele.tipos,
      });
    });
    return dataResult;
  }

  @Get('/')
  async createGet(@Res() res) {
    const pokemon = await this.pokemonService.getPokemonDefault();
    const dataResult: PokemonResolve[] = this.filterPokemons(pokemon);
    return res.status(HttpStatus.OK).json({
      status: 'success',
      pokemons: dataResult,
    });
  }
  @Get('/single')
  async singlePokemon(@Res() res, @Query('id') id: string) {
    const numPokemon: number = parseInt(id, 10);
    const pokemon = await this.pokemonService.getPokemon(numPokemon);

    return res.status(HttpStatus.OK).json({
      status: 'success',
      pokemons: pokemon,
    });
  }
  @Get('/next')
  async nextListPokemon(@Res() res, @Query('next') next: string) {
    const numPokemon: number = parseInt(next);

    const pokemon = await this.pokemonService.getPokemonNext(numPokemon);
    const dataResult: PokemonResolve[] = this.filterPokemons(pokemon);
    return res.status(HttpStatus.OK).json({
      status: 'success',
      pokemons: dataResult,
    });
  }
  @Get('/all')
  async getAllPokeon(@Res() res) {
    const pokemons = await this.pokemonService.getPokemons();
    return res.status(HttpStatus.OK).json({
      status: 'success',
      pokemons: pokemons,
    });
  }
  @Post('/filter')
  async searchpost(@Res() res, @Body() SearchPokemonDTO: SearchPokemonDTO) {
    const pokemon = await this.pokemonService.getPokemonFilter(
      SearchPokemonDTO,
    );
    const dataResult: PokemonResolve[] = this.filterPokemons(pokemon);

    return res.status(HttpStatus.OK).json({
      status: 'success',
      pokemons: dataResult,
    });
  }
}