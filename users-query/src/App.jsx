import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Form from "./components/Form";
import { useGetUsersQuery } from "./app/apiSlice";
function App() {
  const { data, isLoading } = useGetUsersQuery();
  console.log(data);
  if (isLoading) return <div> isLoading ...</div>;
  return (
    <div className="App">
      {data?.map((user) => (
        <>
          <div key={user.id}>
            <h1> {user.name} </h1>
          </div>
        </>
      ))}
    </div>
  );
}

export default App;
