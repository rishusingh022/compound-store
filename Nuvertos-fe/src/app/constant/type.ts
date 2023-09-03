export interface Compound {
  id?: number;
  compoundName: string;
  compoundDescription: string;
  compoundImage: string;
};

export interface CompoundResponse {
  count: number;
  rows: Compound[];
};