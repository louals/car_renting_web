import React, { useState } from 'react';
import reactLogo from '/react.png';
import viteLogo from '/vite.svg';
import tailwindLogo from '/tailwind.png'; // you need a Tailwind logo SVG here

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <div className="flex gap-6 mb-8">
        <img src={reactLogo} className="w-24 h-24 " alt="React Logo" />
        <img src={viteLogo} className="w-24 h-24" alt="Vite Logo" />
        <img src={tailwindLogo} className="w-32 h-20 mt-3" alt="Tailwind Logo" />
      </div>

      <h1 className="text-4xl font-bold mb-4">React + Vite + Tailwind Starter</h1>
      <p className="mb-4 text-lg">Edit <code>App.jsx</code> and save to reload.</p>

      <div className="flex gap-4 items-center">
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
          onClick={() => setCount((count) => count + 1)}
        >
          Count is {count}
        </button>
      </div>

    </div>
  );
}

export default App;
