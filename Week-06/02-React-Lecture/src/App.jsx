import { useEffect, useState } from "react";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch("https://sum-server.100xdevs.com/todos").then(async (res) => {
      const json = await res.json();
      setTodos(json.todos);
    });
  }, []);

  return (
    <div>
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          id={todo.id}
          title={todo.title}
          description={todo.description}
        ></Todo>
      ))}
    </div>
  );
}

function Todo({ id, title, description }) {
  return (
    <div>
      <h1>ID :{id}</h1>
      <h1>TITLE :{title}</h1>
      <h1>DESCRIPTION :{description}</h1>
    </div>
  );
}

export default App;
