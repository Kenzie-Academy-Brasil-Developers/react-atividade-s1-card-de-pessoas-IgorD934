function Card(props) {
  return (
    <div>
      <h2>Dev: {props.name}</h2>
      <p>Idade: {props.age}</p>
      <p>País: {props.country}</p>
      {/* {props.children} */}
    </div>
  );
}

export default Card;
