import React from "react";
import { useSelector } from "react-redux";
import AddTask from "../components/AddTask";
import ListTask from "../components/ListTask";
import Register from "../components/Register";

const Home = () => {
  const user = useSelector((state) => state.user);
  return (
    <div>
      <div className="App p-5 lg:p-10">
        <AddTask />
        <ListTask />
      </div>
    </div>
  );
};

export default Home;
