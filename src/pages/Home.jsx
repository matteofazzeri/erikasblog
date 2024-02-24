import React, { useEffect, useState } from "react";
import serverURL from "../config/db";

const Home = () => {
  const [name, setName] = useState();

  const fetchData = async () => {
    await fetch(`${serverURL.production.backendUrl}`, { method: "GET" })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        // Parse the response as JSON
        return response.json();
      })
      .then((payload) => {
        // Check if payload is an array and if it has length greater than 0
        if (Array.isArray(payload) && payload.length > 0) {
          // Log the first item in the array
          console.log("First item:", payload[0]);

          // Set the name state to the name of the first item
          setName(payload[0].name);
        } else {
          console.log("Empty payload or invalid format");
        }
      })
      .catch((err) => console.log(err));
  };

  fetchData();

  return <>ciao--{name && <p>{name}</p>} <a href="/erikasblog/admin">cliccami</a></>;
};

export default Home;
