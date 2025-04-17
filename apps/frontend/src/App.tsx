import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";

const useResponse = () => {
  const [response, setResponse] = useState<string>("Loading...");

  useEffect(() => {
    const url =
      process.env.NODE_ENV === "production"
        ? "https://express-app-20764232504.us-central1.run.app/"
        : "http://localhost:8080/";
    fetch(url)
      .then((res) => res.text())
      .then((data) => {
        console.log(data);
        setResponse(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return response;
};

function App() {
  const response = useResponse();
  return (
    <div className="App">
      <header className="App-header">
        <h1>{response}</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
