import React from "react";
import Header from "../components/header/Header";

const Home = () => {
  return (
    <>
      <Header />

      <main className="section">
        <div className="container">
          <ul className="content-list">
            <li className="content-list__item">
              <h2 className="title-2">Типо описание</h2>
              <p>Да, функционала мало, ну и что? Зато странички жмякаются. Что-то новенькое. Иди жмякай навигацию. А потом и на картиночки тоже жмякай
              </p>
            </li>
            <li className="content-list__item">
              <h2 className="title-2">Анекдот</h2>
              <p>– Тема, говорят, ты начал учить английский?

– Уеs.

– И сколько же слов ты уже знаешь?

– Two.

– Реально всего два?

– Уеs.</p>
            </li>
          </ul>
        </div>
      </main>
    </>
  );
};

export default Home;
