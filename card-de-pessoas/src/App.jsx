import "./App.css";
import Card from "./components/Developer";

function App() {
  const developers = [
    { name: "Nunes", age: 22, country: "Brasil" },
    { name: "Shmidt", age: 22, country: "Brasil" },
    { name: "Saraiva", age: 21, country: "Brasil" },
  ];

  return (
    <div className="App">
      {developers.map((develop, index) => (
        <Card
          key={index}
          name={develop.name}
          age={develop.age}
          country={develop.country}
        >
          <h3>Olá, Mundo</h3>
        </Card>
      ))}
    </div>
  );
}

export default App;
