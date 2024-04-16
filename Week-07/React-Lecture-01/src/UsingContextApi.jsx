import { useContext, useState } from "react";
import { CountContext } from "./Context";

function UsingContextApi() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <CountContext.Provider value={{ count, setCount }}>
        <Count count={count} setCount={setCount}></Count>
      </CountContext.Provider>
    </div>
  );
}

function Count() {
  return (
    <div>
      <CountRender></CountRender>
      <Button></Button>
    </div>
  );
}

function CountRender() {
  const count = useContext(CountContext);
  return <div>{count}</div>;
}

function Button() {
  const { count, setCount } = useContext(CountContext);
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

export default UsingContextApi;
