import React from "react";
import { parseISO, formatDistanceToNow } from "date-fns";
const TimeAgo = ({ timeStamp }) => {
  let timeago = "";

  if (timeStamp) {
    const date = parseISO(timeStamp);
    const time_period = formatDistanceToNow(date);
    timeago = `${time_period} ago...`;
  }
  return (
    <>
      <span>
        &nbsp; <i>{timeago}</i>
      </span>
    </>
  );
};

export default TimeAgo;
