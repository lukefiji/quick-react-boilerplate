import { useState } from 'react';
import { cn } from '@/lib/utils';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex min-h-screen w-full">
      <div className="mx-auto mt-6 flex flex-col content-center gap-2">
        <h1 className="text-center text-2xl font-bold">
          Quick React Boilerplate
        </h1>
        <button
          onClick={() => setCount((count) => count + 1)}
          className={cn([
            'border-2 border-solid border-gray-300',
            count > 0 && 'border-black',
          ])}
        >
          Count is {count}
        </button>
        <p className="text-center">Delete this and create your application!</p>
      </div>
    </div>
  );
}

export default App;
