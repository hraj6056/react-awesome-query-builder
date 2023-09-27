import type { Moment } from "@314e-react-awesome-query-builder/ui";
import momentGenerateConfig from "rc-picker/lib/generate/moment";
import generateCalendar from "antd/es/calendar/generateCalendar";

const Calendar = generateCalendar<Moment>(momentGenerateConfig);

export default Calendar;