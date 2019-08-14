import React from "react";

const Header = () => {
    return (<header className="header">
            <div className="header__block-call">
            <div className="header__block-call-pic">
            <img src={require("../img/call-answer.svg")} width="14vw" />
            </div>
            <div className="header__block-call-number">
                8 800 500 14 44
            </div>
            <div className="header__block-call-desc">
                Бесплатные звонки по РФ
            </div>
            </div>
            <button className="header__button">
                Отправить заявку
            </button>
        </header>)
}

export default Header;


