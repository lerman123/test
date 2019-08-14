import React from "react";

const Footer = () => {
  const ColoredLine = ({ color }) => (
    <hr
        style={{
            color: color,
            backgroundColor: color,
            width: 959
        }}
    />
);
  return (
    <footer class="footer">
      <div class="footer__upper--block">
      <div class="footer__upper--block--left">
      <div class="footer__upper--block--left--logo">
      <img src={require("../img/LeoMax.svg")} height="40rem" />
        </div>
        <div className="footer__block-call">
            <div className="footer__block-call-pic">
            <img src={require("../img/call-answer.svg")} height="14rem" />
            </div>
            <div className="footer__block-call-number">
                8 800 500 14 44
            </div>
            <div className="footer__block-call-desc">
                Бесплатные звонки по РФ
            </div>
            </div>
      </div>
      <ul class="footer__upper--block--right">
        <div class="footer__upper--block--right--icon">
        <img src={require("../img/sending.svg")} height="12vh" />
        </div>
        <li class="footer__upper--block--right--sending">
          Доставка
        </li>
        <div class="footer__upper--block--right--icon">
        <img src={require("../img/wallet.svg")} height="12vh" />
        </div>
        <li class="footer__upper--block--right--cash">
          Оплата
        </li>
        <div class="footer__upper--block--right--icon">
        <img src={require("../img/back.svg")} height="12vh" />
        </div>
        <li class="footer__upper--block--right--back">
          Возврат
        </li>
      </ul>
      </div>
      <ColoredLine color="red" />
      <div class="footer__lower--block">
      <div class="footer__lower--block--string">
      <div class="footer__lower--block--string--one">
        Политика обработки персональных данных.
      </div>
      <div class="footer__lower--block--string--one">
        Согласие на обработку персональных данных.
      </div>
      <div class="footer__lower--block--string--one">
        Пользовательское соглашение.
      </div>
      </div>
      <span class="footer__lower--block--copyright">
      Copyright © Владелец сайта ООО "Теледирект", 2018<br/>
      ОГРН 11377465<br/>
      Товар не может быть доставлен от партнеров.<br/>
      Все права защищены, копирование любых материалов запрещено<br/>
      119361, г. Москва, ул. Большая Очаковская, д. 47А, стр. 1, этаж 5, пом. 02Х<br/>
        </span>
      </div>
    </footer>
  )
}

export default Footer;