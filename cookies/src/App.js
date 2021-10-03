import logo from "./logo.svg";
import "./App.css";
import Logo from "./Components/Logo";
import CookiesList from "./Components/CookiesList";
import cookiesData from "./Components/Cookies";

function App() {
  return (
    <div>
      <Logo />
      <CookiesList cookies={cookiesData} />
    </div>
  );
}

export default App;
