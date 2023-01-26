export interface Service {
  _id: string;
  serviceName: string;
  image: string;
}
export interface ServiceListItem {
  cards: Service[];
}
