import { Schema, SchemaDefinitionProperty } from 'mongoose';

interface Pokemon {
  id: number;
  altura: number;
  peso: number;
  nombre: string;
  descripcion: string;
  tipos: SchemaDefinitionProperty<string[]>;
  debilidades: SchemaDefinitionProperty<string[]>;
  generacion: number;
  estadisticas: {
    PS: number;
    Ataque: number;
    Defensa: number;
    Ataque_Especial: number;
    Defensa_Especial: number;
    Velocidad: number;
  };
}

export const pokemonSchema = new Schema<Pokemon>({
  id: { type: Number, required: true },
  altura: { type: Number, required: true },
  peso: { type: Number, required: true },
  nombre: { type: String, required: true },
  descripcion: { type: String, required: false },
  tipos: { type: Array, required: true },
  debilidades: { type: Array, required: true },
  generacion: { type: Number, required: true },
  estadisticas: {
    PS: { type: Number, required: true },
    Ataque: { type: Number, required: true },
    Defensa: { type: Number, required: true },
    Ataque_Especial: { type: Number, required: true },
    Defensa_Especial: { type: Number, required: true },
    Velocidad: { type: Number, required: true },
  },
});

//export default model('Pokemon', pokemonSchema);
