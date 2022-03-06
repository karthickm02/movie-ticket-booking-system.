export interface movie {
  id: number ;
  src: string;
  isTopMovie: boolean;
  title: string;
  lang: string;
  theatres: number[];
}

export interface theatre {
  id: number,
  name: string,
  row: number,
  column: number,
  showTimes : string[];
}

export interface slider {
  class: string,
  src:string,
}




