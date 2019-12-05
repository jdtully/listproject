import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNavbar from "./components/navBarComponent";
import PaginatedList from "./components/axios.list.controller";

function App() {
  return (
    <div>
      <MyNavbar />
      <PaginatedList />
    </div>
  );
}

export default App;
