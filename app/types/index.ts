export interface Product {
  pointA: string;
  pointB: string;
  passengers: number;
  dateDeparture: string;
  dateArrival: string;
  duration: string;
  category: string;
  cost: string;
  comment: string;
}

export interface Event {
  id: number;
  title: string;
  date: string;
  time: string;
  desc: string;
  image: any;
}

export interface Filter {
  id: number;
  name: string;
}
