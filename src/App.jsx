import person from "./data.jsx";
import { PersonInfo } from "./components/PersonInfo.jsx";
import { Form } from "./components/Form.jsx";
import { useState } from "react";

const PersonInfoElement = person.map((people) => (
  <PersonInfo
    number={people.number}
    name={people.name}
    city={people.city}
    key={people.number}
  />
));

function App() {
  const [isFormShown, setIsFormShown] = useState(false);
  const handleShowFormClick = () => {
    setIsFormShown(!isFormShown);
  };
  return (
    <>
      <h1>Lista Kontaktow</h1>
      {isFormShown ? (
        <Form />
      ) : (
        <button onClick={handleShowFormClick}>Dodaj</button>
      )}
      {PersonInfoElement}
    </>
  );
}

export default App;
