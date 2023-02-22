import React from "react";
import { parseISO, formatDistanceToNow } from "date-fns";

const Time_Ago = ({ timeStamp }) => {
  let timeAgo = "";

  if (timeStamp) {
    const date = parseISO(timeStamp);
    const timePeriosd = formatDistanceToNow(date);
    timeAgo = `${timePeriosd}`;
  }

  return (
    <>
      <span title={timeStamp}>
        &nbsp; <i>{timeAgo}</i>
      </span>
    </>
  );
};

export default Time_Ago;
