import { withInstall } from '../utils';
import _Calendar from './Calendar';

export const Calendar = withInstall(_Calendar);
export default Calendar;
export type { CalendarProps } from './Calendar';
export type {
  CalendarType,
  CalendarDayItem,
  CalendarDayType,
  CalendarInstance,
} from './types';

declare module 'vue' {
  export interface GlobalComponents {
    VanCalendar: typeof Calendar;
  }
}
