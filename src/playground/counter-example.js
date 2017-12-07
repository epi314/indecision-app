let count = 0;
const addOne = () => {
  count += 1;
  renderCounterApp();
}

const minusOne = () => {
  count -= 1;
  renderCounterApp();
}

const reset = () => {
  count = 0;
  renderCounterApp();
}

var appRoot = document.getElementById('app');

const renderCounterApp = () => {
  const template2 = (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={addOne}>+1</button>
      <button onClick={minusOne}>-1</button>
      <button onClick={reset}>reset</button>
    </div>
  );

  ReactDOM.render(template2, appRoot);
}

renderCounterApp();
