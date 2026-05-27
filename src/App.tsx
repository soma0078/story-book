import { useState } from "react";
import ReactLogo from "./assets/react.svg";
import ViteLogo from "/vite.svg";

function App() {
  const [count, setCount] = useState<number>(0);

  return (
    <div className="max-w-[1280px] mx-auto p-8 text-center">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={ReactLogo} className="h-24 p-6 transition-[filter] duration-300 hover:[filter:drop-shadow(0_0_2em_#646cffaa)]" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={ViteLogo} className="h-24 p-6 transition-[filter] duration-300 hover:[filter:drop-shadow(0_0_2em_#61dafbaa)]" alt="React logo" />
        </a>
      </div>
      <h1 className="text-4xl font-bold">Vite + React</h1>
      <div className="p-8">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="text-[#888]">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default App;
