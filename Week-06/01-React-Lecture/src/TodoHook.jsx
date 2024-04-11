import { useEffect, useState } from "react";

function TodoHook() {
  const [todo, setTodo] = useState([]);

  useEffect(() => {
    setInterval(function () {
      fetch("https://sum-server.100xdevs.com/todos").then(async (res) => {
        const json = await res.json();
        setTodo(json.todos);
        console.log(json);
      });
    }, 5000);
  }, []);

  return (
    <div>
      {todo.map(function (todo) {
        return (
          <Todo
            key={todo.id}
            title={todo.title}
            description={todo.description}
          ></Todo>
        );
      })}
    </div>
  );
}

function Todo({ title, description, completed }) {
  return (
    <div>
      <h2>{title}</h2>
      <h3>{description}</h3>
    </div>
  );
}

export default TodoHook;
