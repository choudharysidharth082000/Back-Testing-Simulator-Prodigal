import React from "react";
import "../custom_styles/server.css";

const ShowcaseCard = (props) => {
  return (
    <div
      className={`sampeeCard bg-white mx-3 d-flex justify-content-center align-items-center border p-2 rounded-sm ${
        props.type == "event" ? "border-info" : "border-success"
      } mt-4`}
    >
      <div className="containor2 pt-3 px-4">
        <blockquote
          className={`${props.type == "event" ? "text-info" : "text-success"}`}
        >
          {props.functionName}
        </blockquote>
      </div>
    </div>
  );
};

export default ShowcaseCard;
