import { Tel } from "./Tel";
import { useState } from "react";

export const PersonInfo = (props) => {
  let stateArray = useState(false);
  let isExpanded = stateArray[0];
  let setIsExpanded = stateArray[1];

  const ButtonEl = (
    <button
      onClick={() => {
        setIsExpanded(!isExpanded);
      }}
    >
      {!isExpanded ? "show" : "hiding"}
    </button>
  );
  return (
    <>
      <h1>{props.name}</h1>
      {isExpanded && (
        <>
          <h2>Name: {props.name}</h2>
          <h3>
            Tel: <Tel number={props.number} />
          </h3>
          {props.city && <h3>City: {props.city}</h3>}
        </>
      )}
      {ButtonEl}
      <hr />
    </>
  );
};
