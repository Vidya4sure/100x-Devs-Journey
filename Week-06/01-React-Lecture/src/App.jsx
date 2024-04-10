import { useState } from "react";

function App() {
  const [newTitle, setNewTitle] = useState("Vidya sagar Hansda");

  return (
    <div>
      <HeaderWithButton></HeaderWithButton>
      <Header title={newTitle}></Header>
      <Header title="Kya Bolti company"></Header>
    </div>
  );
}

function Header({ title }) {
  return <div>{title}</div>;
}

function HeaderWithButton() {
  const [title, setTitle] = useState("");

  function updateTitle() {
    setTitle(Math.random());
  }

  return (
    <div>
      <button onClick={updateTitle}>Click me to change the title</button>
      <Header title={title}></Header>
    </div>
  );
}

export default App;
