function WrapperComponent() {
  return (
    <div>
      <Card innerComponent={<TextComponent></TextComponent>}></Card>
      <Card innerComponent={<TextComponent></TextComponent>}></Card>
      <Card innerComponent={<TextComponent></TextComponent>}></Card>
      <Card innerComponent={<TextComponent></TextComponent>}></Card>
    </div>
  );
}

function TextComponent() {
  return <h1>Hello world</h1>;
}

function Card({ innerComponent }) {
  return (
    <div
      style={{
        border: "solid 2px black",
        padding: "2px",
      }}
    >
      {innerComponent}
    </div>
  );
}

export default WrapperComponent;
