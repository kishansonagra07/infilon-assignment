import React,{Suspense} from "react";
import "./App.css";
import "./../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import Navbar from "./components/Navbar";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

const TableView = React.lazy(() => import("./components/View"));
const EditForm = React.lazy(() => import("./components/EditForm"));

function App() {
  return (
    <div className="container">
        <Router>
          <Navbar/>
          <Routes>
              <Route exact path='/' element={<Suspense fallback={<div>Loading</div>}><TableView/> </Suspense>} />
          </Routes>
          <Routes>
              <Route path='/user/:id' element={<Suspense fallback={<div>Loading</div>}><EditForm/></Suspense>} />
          </Routes>
        </Router>     
    </div>
  );
}

export default App;
