import React from 'react'
const Contacts = () => {
  return (
    <main className="section">
        <div className="container">
                <h1 className="title-1">Контакты</h1>

                <ul className="content-list">
                    <li className="content-list__item">
                        <h2 className="title-2">Местоположение неизвестно</h2>
                        <p>Постоянно перемещаюсь</p>
                    </li>
                    <li className="content-list__item">
                        <h2 className="title-2">Номер я вам не дам, но держите этот</h2>
                        <p><a href="tel:+79051234567">8 (800) 555-35-35</a></p>
                    </li>
                    <li className="content-list__item">
                        <h2 className="title-2">Email</h2>
                        <p><a href="mailto:webdev@protonmail.com">nikolaev-dmitrii2001@mail.ru</a></p>
                    </li>
                </ul>

        </div>
    </main>
  )
}

export default Contacts