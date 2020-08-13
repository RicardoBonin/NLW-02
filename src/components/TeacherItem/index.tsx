import React from "react";
import whatsappIcon from "../../assets/images/icons/whatsapp.svg";

import "./styles.css";

function TeacherItem() {
  return (
    <article className='teacher-item'>
      <header>
        <img
          src='https://avatars1.githubusercontent.com/u/34461380?s=460&u=a0d3942d16778b328c932ad46fccd128559c6f28&v=4'
          alt='Ricardo Bonin'
        />
        <div>
          <strong>Ricardo Bonin</strong>
          <span>Química</span>
        </div>
      </header>
      <p>
        Entusiasta das melhores tecnologias de química avançada.
        <br /> <br />
        Apaixonado por explodir coisas em laboratório e por mudar a vida das
        pessoas através de experiências. Mais de 200.000 pessoas já passaram por
        uma das minhas explosões.
      </p>

      <footer>
        <p>Preço/hora</p>
        <strong>R$ 90,00</strong>
        <button>
          <img src={whatsappIcon} alt='Whatsapp' />
          Entrar em contato
        </button>
      </footer>
    </article>
  );
}

export default TeacherItem;
