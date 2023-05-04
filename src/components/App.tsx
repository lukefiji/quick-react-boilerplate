import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen w-full flex">
      <div className="flex flex-col gap-2 content-center mx-auto mt-6">
        <h1 className="text-2xl font-bold text-center">
          Quick React Boilerplate
        </h1>
        <button onClick={() => setCount((count) => count + 1)}>
          Count is {count}
        </button>
        <p className="text-center">Delete this and create your application!</p>
      </div>
    </div>
  );
}

export default App;
