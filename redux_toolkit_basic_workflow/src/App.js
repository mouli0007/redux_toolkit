import "./App.css";
import Profile from "./Components/Profile";
import Login from "./Components/Login";
import ChangeColor from "./Components/ChangeColor";
function App() {
  return (
    <div className="App">
      <Profile />
      <Login />
      <br />
      <ChangeColor />
    </div>
  );
}

export default App;
