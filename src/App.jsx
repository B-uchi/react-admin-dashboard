import "./App.css";
import { NavBar } from "./components/navbar/navbar";
import { SideMenu } from "./components/sidemenu/sidemenu";
import { Home } from "./pages/home/home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Users } from "./pages/users/users";

function App() {
  return (
    <Router>
      <NavBar />
      <div className="container">
        <SideMenu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<Users />} />
          <Route path="/products" element={<Users />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
