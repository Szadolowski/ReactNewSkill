import person from "./data.jsx";
import { PersonInfo } from "./components/PersonInfo.jsx";

function App() {
  return person.map((people) => (
    <PersonInfo
      number={people.number}
      name={people.name}
      city={people.city}
      key={people.number}
    />
  ));
}

export default App;
