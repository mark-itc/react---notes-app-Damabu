import moment from "moment";

function DateComponent() {
  let date;
  date = moment();
  date = date.format("MMM Do, h:mm a");

  return <p>{date}</p>;
}

export default DateComponent;