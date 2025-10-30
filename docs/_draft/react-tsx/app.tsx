import React, { FC, useState } from 'react';

// Function Component with TypeScript
interface GreeterProps {
  name: string;
  count?: number;
}

const Greeter: FC<GreeterProps> = ({ name, count = 0 }) => {
  const [clicks, setClicks] = useState(count);

  return (
    <div>
      <h2>Hello, {name}!</h2>
      <button onClick={() => setClicks(prev => prev + 1)}>
        Clicked {clicks} times
      </button>
    </div>
  );
};

// Class Component with TypeScript
interface CounterState {
  count: number;
}

interface CounterProps {
  initialCount: number;
}

class Counter extends React.Component<CounterProps, CounterState> {
  constructor(props: CounterProps) {
    super(props);
    this.state = {
      count: props.initialCount
    };
  }

  increment = () => {
    this.setState(prev => ({ count: prev.count + 1 }));
  };

  render() {
    return (
      <div>
        <h2>Class Counter</h2>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}

// App Component
const App: FC = () => {
  return (
    <div>
      <h1>TypeScript React Demo</h1>
      <Greeter name="User" count={5} />
      <Counter initialCount={0} />
    </div>
  );
};

export default App;