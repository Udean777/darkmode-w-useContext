import "./index.css";
import DarkButton from "./components/DarkButton";
import { useDarkMode } from "./components/DarkContext";

function App() {
  const { isDarkMode } = useDarkMode();

  return (
    <div
      className={`min-h-screen ${
        isDarkMode
          ? "text-slate-50 bg-gradient-to-b from-slate-600 to-slate-500"
          : "text-slate-700 bg-gradient-to-b from-slate-300 to-slate-200"
      }`}
    >
      <DarkButton />
      <h1>Hello Dunia!</h1>
    </div>
  );
}

export default App;
