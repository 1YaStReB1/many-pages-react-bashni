import React from "react";
import "./header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header__wrapper">
        <h1 className="header__title">
          <strong>
            Здарова  <em> чо каво</em>
          </strong>
          <br />С вами снова димасик
        </h1>
        <div className="header__text">
          <p>Новый вид сайта - многостраничник с тёмной темой. Хостинг бесплатные, поэтому картинки могут долго грузиться</p>
        </div>
        <a href="#!" className="btn">
        Прост
        </a>
      </div>
    </header>
  );
};

export default Header;
