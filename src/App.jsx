import person from "./data.jsx";
import { PersonInfo } from "./components/PersonInfo.jsx";

const PersonInfoElement = person.map((people) => (
  <PersonInfo
    number={people.number}
    name={people.name}
    city={people.city}
    key={people.number}
  />
));

function App() {
  return (
    <>
      <h1>Lista Kontaktow</h1>
      {PersonInfoElement}
    </>
  );
}

export default App;
