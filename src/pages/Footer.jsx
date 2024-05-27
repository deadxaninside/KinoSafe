import React from 'react';
import './footer.css';
import FooterNavItem from '../components/FooterNavItem';

function Footer() {
      const usefulLinks = [
        'Главная',
        'Мой список',
      ];
    return (
        <footer id="footer" className="footer">
            <div className="footer-top">
                <div className="container">
                    <div className="row dy-4">
                        <div className="col-lg-5 col-md-12 footer-info">
                            <a href="/" className="logo d-flex align-items-center">
                                <span>KinoSafe</span>
                            </a>
                        </div>

                        <div className="col-lg-2 col-6 footer-links">
                            <h4>Полезная информация</h4>
                            <ul>
                                {usefulLinks.map(link => (
                                    <FooterNavItem key={link} name={link} />
                                ))}
                            </ul>
                        </div>

                        <div className="col-lg-3 col-md-12 footer-contact text-center text-md-start">
                            <h4>Контакты</h4>
                            <p>
                                Авиамоторная <br />
                                Mocква 
                                <br />
                                <strong>Телефон:</strong> +79670379016
                                <br />
                                <strong>Почта:</strong> deadxaninside@gmail.com
                                <br />                               
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="copyright">
                    &copy; Copyright{''}
                    <strong>
                        <span>PP Technology</span>
                    </strong>
                    . Все права защищены
                </div>
                <div className="credits">
                    Создатели <a href="#">PP Technology</a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;