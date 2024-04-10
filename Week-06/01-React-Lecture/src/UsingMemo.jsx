import React, { useState } from "react";

function UsingMemo() {
  const [title, setTitle] = useState("Vidya Sagar Hansda");

  function updateTitle() {
    setTitle(Math.random());
  }

  return (
    <div>
      <button onClick={updateTitle}>Click me to change the Title</button>
      <Header title={title}></Header>
      <br />
      <Header title="Kya Bolti Company"></Header>
      <Header title="Kya Bolti Company"></Header>
      <Header title="Kya Bolti Company"></Header>
      <Header title="Kya Bolti Company"></Header>
      <Header title="Kya Bolti Company"></Header>
    </div>
  );
}

const Header = React.memo(function MemoHeader({ title }) {
  return <div>{title}</div>;
});

export default UsingMemo;
