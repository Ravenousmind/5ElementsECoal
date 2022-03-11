import {Route, Link, Routes} from "react-router-dom"
import Home from "./home/Home";
import Articles from "./articles/Articles";
import './App.css'
import Login, {ProtectedRoute} from "./Login/Login";

function App() {
  function toggleMenu() {
    const menu = document.querySelector(".menu");
    const menuItems = document.querySelectorAll(".menuItem");
    const hamburger= document.querySelector(".hamburger");
    const closeIcon= document.querySelector(".closeIcon");
    const menuIcon = document.querySelector(".menuIcon");
    
    

    if (menu.classList.contains("showMenu")) {
      menu.classList.remove("showMenu");
      closeIcon.style.display = "none";
      menuIcon.style.display = "block";
    } else {
      menu.classList.add("showMenu");
      closeIcon.style.display = "block";
      menuIcon.style.display = "none";
    }
  } 
  return (
    <>
   <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>
    <nav>
    <ul className="menu">
    <li> <Link className="menuItem" onClick={toggleMenu} to="/">Home</Link></li>
    <li> <Link className="menuItem" onClick={toggleMenu} to="/articles">News</Link></li>
    <li> <Link className="menuItem" onClick={toggleMenu} to="/Login">Login</Link></li>
      </ul>
      <button className="hamburger" onClick={toggleMenu}> 
        <i class="menuIcon material-icons">menu</i>
        <i class="closeIcon material-icons">close</i>
      </button>
    </nav>
<img className="logo_Team" src="/logo_5_elements.png"/>
      <Routes>
        <Route exact={true} path="/" element={<Home/>}/>
        <Route exact={true} path="/articles" element={<ProtectedRoute><Articles/></ProtectedRoute>}/>
        <Route path="*" element={() => <p>Page Not Found</p>} />
        <Route exact={true} path="/Login" element={<Login/>}/>
      </Routes>
    </>
);


}

export default App;
