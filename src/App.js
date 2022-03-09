import { ItemLIstContainer } from "./components/ItemLIstContainer";
import { Navbar } from "./components/NavBar";

const App = () => {
  return (
    <div className="flow">
      <header className="wrapper">
        <Navbar />
      </header>
        <ItemLIstContainer />
    </div>
  );
};

export default App;
