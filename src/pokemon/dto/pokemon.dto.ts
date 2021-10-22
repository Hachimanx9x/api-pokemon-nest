export class SearchPokemonDTO {
  readonly type: string;
  readonly weakness: string;
  readonly heigth: number[]; // [0.1,20]
  readonly weight: number[]; // [0.1,999.9]
  readonly ranges: number[]; // [1,898]
}
