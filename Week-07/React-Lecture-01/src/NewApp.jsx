import { useState } from "react";

function NewApp() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <Count count={count} setCount={setCount}></Count>
    </div>
  );
}

function Count({ count, setCount }) {
  return (
    <div>
      <div>{count}</div>
      <Button count={count} setCount={setCount}></Button>
    </div>
  );
}

function Button({ count, setCount }) {
  return (
    <div>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increasing
      </button>
      <button
        onClick={() => {
          if (count > 0) {
            setCount(count - 1);
          }
        }}
      >
        Decreasing
      </button>
    </div>
  );
}

export default NewApp;
