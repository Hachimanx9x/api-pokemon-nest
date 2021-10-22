import { SchemaDefinitionProperty, Document } from 'mongoose';
export interface Pokemon extends Document {
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
export interface PokemonResolve {
  id: number;

  imagen: string;
  nombre: string;

  tipos: SchemaDefinitionProperty<string[]>;
}

export interface PokemonSingle {
  id: number;
  altura: number;
  peso: number;
  imagen: string;
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
export interface PokemonFilter {
  readonly type: string;
  readonly weakness: string;
  readonly heigth: number[]; // [0.1,20]
  readonly weight: number[]; // [0.1,999.9]
  readonly ranges: number[]; // [1,989]
}
