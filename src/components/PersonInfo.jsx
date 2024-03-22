import { Tel } from "./Tel";

export const PersonInfo = (props) => (
  <>
    <h2>Name: {props.name}</h2>
    <h3>
      Tel: <Tel number={props.number} />
    </h3>
    {props.city && <h3>City: {props.city}</h3>}
    <hr />
  </>
);
