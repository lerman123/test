import React from "react";

const Main = () => {
  return (
    <div class="wrapper">
      <main class="main">
      <div class="main__adv">
      <div class="main__adv--block--one">
      <div class="main__adv--left">
      <div class="main__adv--left--img">
        <img src={require("../img/adv_pic.svg")} height="700vh" />
        </div>
      <div class="main__adv--left--left">
      <div class="main__adv-text-block">
        <div class="main__adv-text-block-one">
          Форма для выпечки и жарки
        </div>
        <div class="main__adv-text-block-two">
        «Мечта хозяйки»
        </div>
        </div>
        <div class="main__adv-option">
          <div class="main__adv-option--text">
            Идеально круглая форма ваших блюд
          </div>
          <ul class="main__adv-option--blocks">
            <li class="main__adv-option--blocks--gl">Глазунья</li>
            <li class="main__adv-option--blocks--oml">Омлет</li>
            <li class="main__adv-option--blocks--ola">Оладьи</li>
            <li class="main__adv-option--blocks--syr">Сырники</li>
            <li class="main__adv-option--blocks--dr">Драники</li>
            <li class="main__adv-option--blocks--kotl">Котлеты</li>
          </ul>
          <div class="main__adv-option--price">
          <div class="main__adv-option--price--flag">
            <div class="main__adv-option--price--flag--text--one">
              Скидка
            </div>
            <div class="main__adv-option--price--flag--text--two">
              70%
            </div>
          </div>
          <div class="main__adv-option--price--text">
          <div class="main__adv-option--price--text--one">
            2 формы за
          </div>
          <div class="main__adv-option--price--text--two">
            990₽
          </div>
          <div class="main__adv-option--price--text--three">
            Старая цена:
          </div>
          <div class="main__adv-option--price--text--four">
            3 300₽
          </div>
          </div>
          </div>
          </div>
        </div>
        </div>
        <div class="main__adv--order">
            <div class="main__adv--order--time">
              <div class="main__adv--order--time--info">
              <div class="main__adv--order--time--info--text">
                До конца акции осталось
                </div>
                <div class="main__adv--order--time--info--digit">
                  <div class="main__adv--order--time--info--digit--pseudo">
                <div class="main__adv--order--time--info--digit--field">
                <div class="main__adv--order--time--info--digit--field--top">
                  00
                </div>
                <div class="main__adv--order--time--info--digit--field--bottom">
                  дней
                </div>
                </div>
                </div>
                <div class="main__adv--order--time--info--digit--pseudo">
                <div class="main__adv--order--time--info--digit--field">
                <div class="main__adv--order--time--info--digit--field--top">
                  07
                </div>
                <div class="main__adv--order--time--info--digit--field--bottom">
                  часов
                </div>
                </div>
                </div>
                <div class="main__adv--order--time--info--digit--pseudo">
                <div class="main__adv--order--time--info--digit--field">
                <div class="main__adv--order--time--info--digit--field--top">
                  09
                </div>
                <div class="main__adv--order--time--info--digit--field--bottom">
                  минут
                </div>
                </div>
                </div>
                <div class="main__adv--order--time--info--digit--field">
                <div class="main__adv--order--time--info--digit--field--top">
                  55
                </div>
                <div class="main__adv--order--time--info--digit--field--bottom">
                  секунд
                </div>
                </div>
                </div>
                </div>
                <div class="main__adv--order--time--flag">
              <div class="main__adv--order--time--flag--first">
                Скидка
                </div>
                <div class="main__adv--order--time--flag--second">
                  70%
                </div>
              </div>
              </div>
            <div class="main__adv--order--field">
            <div class="main__adv--order--field--text">
              Оформить заказ
            </div>
            <input type="text" value="Введите Ваше имя" class="main__adv--order--field--name" />
            <input type="text" value="Номер телефона" class="main__adv--order--field--phone" />
            <button class="main__adv--order--field--button">
              Отправить заявку
            </button>
            <div class="main__adv--order--field--remark">
              *Осталось 12шт. по акции
            </div>
            </div>
            <div class="main__adv--order--sending">
              <div class="main__adv--order--sending--text">
                <div class="main__adv--order--sending--text--pic">
                <img src={require("../img/sending.svg")} height="12vh" />
                </div>        
                Доставка по России!
              </div>
              <div class="main__adv--order--sending--cond">
                Почта России, Курьер, Пункт выдачи заказов.
              </div>
            </div>
           </div>
            </div>
            <div class="main__adv--block--two">
          <div class="main__adv--food">
            <div class="main__adv--food--text">
              Одна форма для разных блюд:
            </div>
            <div class="main__adv--food--pics">
            <div class="main__adv--food--pics--one">
              Оладьи
            </div>
            <div class="main__adv--food--pics--two">
            <div class="main__adv--food--pics--two--first">
              Глазунья
              </div>
              <div class="main__adv--food--pics--two--second">
                Омлет
                </div>
            </div>
            <div class="main__adv--food--pics--three">
              Сырники
            </div>
            <div class="main__adv--food--pics--four">
            <div class="main__adv--food--pics--four--first">
              Драники
              </div>
              <div class="main__adv--food--pics--four--second">
                Котлеты
              </div>
            </div>
            </div>
          </div>
          </div>
      </div>
      </main>
    </div>
  )

}

export default Main;