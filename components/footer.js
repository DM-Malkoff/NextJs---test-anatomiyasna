import Link from "next/link";

const Footer = () => {
    return (
        <footer className="app-footer">
            <div className="app-footer__bottom">
                <div className="app-footer__bottom-in container">
                    <div className="app-footer__full-version">
                        <a href="#" className="button button--3">Полная версия сайта</a></div>
                    <div className="b-copyright">
                        2022 © <Link href="/" title="Интернет-магазин матрасов по Ижевску"><a>Анатомия сна.</a></Link> Все права защищены.
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;