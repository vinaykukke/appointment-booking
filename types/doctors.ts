export interface IDoctors {
  name: string;
  image: string;
  available: boolean;
  timeZone: string;
  daysAvailable: string[];
  timeSlots: {
    [key: string]: string[];
  };
}
