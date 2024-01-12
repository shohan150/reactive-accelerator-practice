import "./App.css";
import Image from "./components/Image";

const people = [
  {
    id: 0,
    name: "Creola Katherine Johnson",
    profession: "mathematician",
  },
  {
    id: 1,
    name: "Mario José Molina-Pasquel Henríquez",
    profession: "chemist",
  },
  {
    id: 2,
    name: "Mohammad Abdus Salam",
    profession: "physicist",
  },
  {
    id: 20,
    name: "Percy Lavon Julian",
    profession: "chemist",
  },
  {
    id: 62,
    name: "Subrahmanyan Chandrasekhar",
    profession: "astrophysicist",
  },
];

function App() {
  const chemists = people.filter((person) => person.profession === "chemist");
  const listItems = people.map((person) => (
    <li key={person.id}>
      <p>
        <b>{person.name}:</b>
        {" " + person.profession + " "}
      </p>
    </li>
  ));
  return (
    <>
      <Image age={undefined} name="shohan" />
      <ul>{listItems}</ul>
    </>
  );
}

export default App;
