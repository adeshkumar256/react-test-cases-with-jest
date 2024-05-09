type CounterTwo = {
  count: number
  handleIncrement?: () => void
  handleDecrement?: () => void
}

function Counter(props: CounterTwo) {
  return (
    <div>
      <h1>Counter Two</h1>
      <h2>{props.count}</h2>
      {props.handleIncrement && (
        <button onClick={props.handleIncrement}>Increment</button>
      )}
      {props.handleDecrement && (
        <button onClick={props.handleDecrement}>Decrement</button>
      )}
    </div>
  )
}

export default Counter
