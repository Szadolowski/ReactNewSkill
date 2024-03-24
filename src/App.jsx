import person from "./data.jsx";
import { PersonInfo } from "./components/PersonInfo.jsx";
import { Form } from "./components/Form.jsx";
import { useState } from "react";

function App() {
  const [isFormShown, setIsFormShown] = useState(false);
  const [people, setPeople] = useState(person);
  const handleShowFormClick = () => {
    setIsFormShown(true);
  };

  const addPerson = (data) => {
    const newPeople = [...people, data];
    setPeople(newPeople);
    setIsFormShown(false);
  };

  const PersonInfoElement = people.map((people) => (
    <PersonInfo
      number={people.number}
      name={people.name}
      city={people.city}
      key={people.number}
    />
  ));

  return (
    <>
      <h1>Lista Kontaktow</h1>
      {isFormShown ? (
        <Form onAddPerson={addPerson} />
      ) : (
        <button onClick={handleShowFormClick}>Dodaj</button>
      )}
      {PersonInfoElement}
    </>
  );
}

export default App;
