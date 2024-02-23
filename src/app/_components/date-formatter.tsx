import moment from "jalali-moment";
import { parseISO, format } from "date-fns";

type Props = {
  dateString: string;
};

const DateFormatter = ({ dateString }: Props) => {
  const date = parseISO(dateString);
  const jalaliDate = moment(date).locale("fa").format("YYYY/MM/DD");
  return <time dateTime={dateString}>{jalaliDate}</time>;
};

export default DateFormatter;
