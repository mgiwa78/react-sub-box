import "./App.css";
import NavBar from "./components/nav-bar/nav-bar.components";
import Cart from "./pages/cart/cart.component";
import HomePage from "./pages/home-page/home-page.pages";

function App() {
  return (
    <div className="App">
      <div className="appContiner">
        <NavBar />
        <HomePage />
      </div>

      {/* <Cart /> */}
    </div>
  );
}

export default App;
