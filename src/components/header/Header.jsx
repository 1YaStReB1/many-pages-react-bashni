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
          <p>Новый вид сайта - многостраничник с тёмной темой</p>
        </div>
        <a href="#!" className="btn">
          Эта кнопка закинет вам на телефон/комп майнер
        </a>
      </div>
    </header>
  );
};

export default Header;
