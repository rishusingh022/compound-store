export interface Compound {
  id?: number;
  name: string;
  description: string;
  imgURL: string;
};
  
export interface CompoundResponse {
  count: number;
  rows: Compound[];
};