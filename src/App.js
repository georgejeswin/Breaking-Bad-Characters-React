import axios from "axios";
import React, { useEffect, useState } from "react";
import "./App.css";
import CharacterGrid from "./components/CharacterGrid";
import Header from "./components/Header";
import Search from "./Search";

function App() {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [name, setName] = useState("");

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(
        `https://www.breakingbadapi.com/api/characters?name=${name}`
      );
      // console.log(result.data);
      setIsLoading(false);
      setItems(result.data);
    };
    fetchItems();
  }, [name]);
  return (
    <div className="app">
      <Header />
      <Search getQuery={(n) => setName(n)} />
      <CharacterGrid isLoading={isLoading} items={items} />
    </div>
  );
}

export default App;
