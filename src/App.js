import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar.js";
import ProductImg from "./components/ProductImg/ProductImg.js";
import Reviews from "./components/Reviews/Reviews.js";
import Blog from "./components/Blog/Blog.js";
// import About from "./components/About/About.js";
import Dashboard from "./components/Dashboard/Dashboard.js";
import Home from "./components/Home/Home.js";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      {/* <ProductImg></ProductImg> */}
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        {/* <Route path="/reviews" element={<Reviews></Reviews>}></Route>
        <Route path="/dashboard" element={<Dashboard></Dashboard>}></Route>
        <Route path="/blog" element={<Blog></Blog>}></Route> */}
        {/* <Route path="/about" element={<About></About>}></Route> */}
      </Routes>
    </div>
  );
}

export default App;
