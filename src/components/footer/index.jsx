import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Footer() {
  return (
    <footer className="bg-dark text-light text-center py-3 mt-auto">
      <div className="container">
        <p>&copy; 2024 Sangue Bom. Todos os direitos reservados.</p>
        <ul className="list-unstyled d-flex justify-content-center mb-0">
          <li className="mx-2">
            <a href="#" className="text-light">
              Política de Privacidade
            </a>
          </li>
          <li className="mx-2">
            <a href="#" className="text-light">
              Termos de Uso
            </a>
          </li>
          <li className="mx-2">
            <a href="#" className="text-light">
              Contato
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
