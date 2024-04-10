import { useState } from "react";

let count = 4;

function Todo() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "GYM",
      description: "going to the gym for deadlifting",
    },
    {
      id: 2,
      title: "Study",
      description: "Complete the Lecture",
    },
    {
      id: 3,
      title: "Hobby",
      description: "Play a chess match with friend",
    },
  ]);

  function addTodo() {
    setTodos([
      ...todos,
      {
        id: count++,
        title: Math.random(),
        description: Math.random(),
      },
    ]);
  }

  return (
    <div>
      <button onClick={addTodo}>Add Todo</button>
      {todos.map(function (todo) {
        return (
          <TodoComp
            key={todo.id}
            title={todo.title}
            description={todo.description}
          ></TodoComp>
        );
      })}
    </div>
  );
}

function TodoComp({ title, description }) {
  return (
    <div>
      <h2>{title}</h2>
      <h4>{description}</h4>
    </div>
  );
}

export default Todo;
