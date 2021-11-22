import { SchedulerDateTime } from "@devexpress/dx-react-scheduler";

export interface IAppointmnetModel {
  startDate?: SchedulerDateTime;
  endDate?: SchedulerDateTime;
  title?: string;
  allDay?: boolean;
  id?: number | string;
  rRule?: string;
  exDate?: string;
}