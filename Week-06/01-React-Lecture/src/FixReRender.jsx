import { useState } from "react";

function FixReRender() {
  return (
    <div>
      <HeaderWithButton></HeaderWithButton>
      <Header title="Vidya Sagar Hansda"></Header>
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

export default FixReRender;
