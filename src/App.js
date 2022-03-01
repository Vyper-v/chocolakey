import { ItemLIstContainer } from "./components/ItemLIstContainer";
import { Navbar } from "./components/NavBar";
import { useCounter } from "./hooks/useCounter";

function App() {
  const { counter, increment } = useCounter();
  return (
    <div className="flow">
      <header className="wrapper">
        <Navbar />
      </header>
      <main>
        <ItemLIstContainer />
      </main>
    </div>
  );
}

export default App;
