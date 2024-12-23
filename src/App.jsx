import "./App.css";
import { useState } from "react";
import posts from "./data/posts";

const initialData = {
  title: "",
  author: "",
  status: false,
};

function App() {
  const [formData, stateFormData] = useState({ initialData });
  const [cards, setCards] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setCards([...cards, formData]);
    stateFormData(initialData);
  };

  const handleTitleChange = (e) => {
    stateFormData({ ...formData, title: e.target.value });
  };
  const handleAuthorChange = (e) => {
    stateFormData({ ...formData, author: e.target.value });
  };
  const handleStatusChange = (e) => {
    stateFormData({ ...formData, status: e.target.checked });
  };

  const handleRemoveClick = (e) => {
    const cardId = e.target.closest("li").id;
    const nuoveCards = cards.filter((card, index) => index !== cardId);
    setCards(nuoveCards);
  };

  return (
    <>
      {/* <Header/> */}
      <header>
        <h1>Titolo</h1>
      </header>
      {/* <Main/> */}
      {/*   <Form/> */}
      <section>
        <form action="" onSubmit={handleSubmit}>
          <input
            type="text"
            onChange={handleTitleChange}
            value={formData.title}
            placeholder="Titolo"
          />
          <input
            type="text"
            onChange={handleAuthorChange}
            value={formData.author}
            placeholder="Autore"
          />
          <input
            type="checkbox"
            name="status"
            onChange={handleStatusChange}
            checked={formData.status}
          />
          <label htmlFor="status">Published ?</label>
          <button type="submit">Invia</button>
        </form>
      </section>
      {/* <Cardwrapper/> */}
      <section>
        <ul>
          {cards.map((card, index) => (
            <li key={index}>
              <div>Titolo: {card.title}</div>
              <div>Autore: {card.author}</div>
              <div>Stato: {card.status ? "Pubblicato" : "Non pubblicato"}</div>
              <span onClick={handleRemoveClick}>X</span>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}

export default App;
