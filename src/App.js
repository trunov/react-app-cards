import React, { useState, useEffect } from "react";
import "./App.css";
import Button from "./components/Button";
import Input from "./components/Input";
import Card from "./components/Card";
import Spinner from "./components/Spinner";
import api from "./api/Api";

function App() {
  const [searchText, setSearchText] = useState('');
  const [cards, setCards] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [titleHolder, setTitleHolder] = useState('');

  useEffect(() => {
    setIsLoading(true);
    api.search(searchText).then((data) => {
      const items = data.results.map((el) => ({
        id: el.id,
        title: el.description,
        subtitle: el.user.name,
        alt: el.alt_description,
        src: el.urls.regular,
      }));
      setIsLoading(false);
      setCards(items);
    });
  }, [searchText]);

  return (
    <div className="App">
      <div className="App-content">
        <div className="App-search">
          <Input
            placeholder="Поиск картинок"
            onChange={(e) => {
              setTitleHolder(e.target.value);
            }}
            value={
               titleHolder
            }
          />

          <Button
            title="search"
            handleClick={() => {
              setSearchText(titleHolder);
              setTitleHolder('');
            }}
          />
        </div>
        <div className="App-cards">
          {isLoading ? (
            <Spinner />
          ) : (
            cards.map((item) => (
              <Card
                key={item.id}
                src={item.src}
                alt={item.alt}
                title={item.title}
                subtitle={item.subtitle}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
