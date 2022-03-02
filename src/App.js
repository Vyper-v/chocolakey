import { ItemLIstContainer } from "./components/ItemLIstContainer";
import { Navbar } from "./components/NavBar";

function App() {
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
