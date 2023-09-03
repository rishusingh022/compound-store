export interface Compound {
  id?: number;
  compoundName: string;
  compoundDescription: string;
  compoundImageUrl: string;
};

export interface CompoundResponse {
  count: number;
  rows: Compound[];
};