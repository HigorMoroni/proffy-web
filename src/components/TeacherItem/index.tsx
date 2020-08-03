import React from 'react';

import './styles.css';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img
          src="https://avatars2.githubusercontent.com/u/25966584?s=460&u=e94d28fc7b8f64ff430191cb30199b62357a71c5&v=4"
          alt="Higor Moroni"
        />
        <div>
          <strong>Higor Moroni</strong>
          <span>Matemática</span>
        </div>
      </header>

      <p>
        Entusiasta das melhores tecnologias de matemática avançada.
        <br/><br/>
        Apaixonado por calculos e por mudar a vida das pessoas através da matemática...
      </p>

      <footer>
        <p>
          Preço/hora
          <strong>R$ 200,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp"/>
          Entrar em contato
        </button>
      </footer>
    </article>
  );
}

export default TeacherItem;