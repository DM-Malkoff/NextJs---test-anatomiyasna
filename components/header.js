import Image from "next/image"
import logo from "../public/images/logo.png"
import Link from "next/link";
import MainMenu from "./mainMenu";
import SelectCity from "./selectCity";

const Header = () => {
    return (
        <header className="app-header">
            <div className="desktop-banner">
                <Image
                    src={"https://www.anatomiyasna.ru/uploads/images/banner_images/osennii-sale-v-anatomii-sna-2022.jpg"}
                    width={1174}
                    height={70}
                    alt="sale"
                />
            </div>
            <div className="app-header__top container">
                <div className="app-header__top-left">
                    <div className="app-header__city">
                        <SelectCity/>
                    </div>
                    <div className="app-header__time-work">
                        Время работы: Пн.-Вс. с 9:00 до 22:00 (Мск)
                    </div>
                </div>
                <nav className="menu-head">
                    <ul className="menu-head__ul">
                        <li className="menu-head__li ">
                            <Link href="/o-kompanii/"><a>О компании</a></Link>
                        </li>
                        <li className="menu-head__li ">
                            <Link href="/otzyvy/"><a>Отзывы</a></Link>
                        </li>
                        <li className="menu-head__li ">
                            <Link href="/garantiya/"><a>Гарантия</a></Link>
                        </li>
                        <li className="menu-head__li ">
                            <Link href="/obmen-i-vozvrat/"><a>Обмен и возврат</a></Link>
                        </li>
                        <li className="menu-head__li ">
                            <Link href="/izhevsk/dostavka-i-oplata/"><a>Доставка и оплата</a></Link>
                        </li>
                        <li className="menu-head__li ">
                            <Link href="/izhevsk/kontakty/"><a>Контакты</a></Link>
                        </li>
                        <li className="menu-head__li ">
                            <Link href="/optovikam/"><a>Оптовикам</a></Link>
                        </li>
                        <li className="menu-head__li ">
                            <Link href="/partneram/"><a>Партнерам</a></Link>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className="app-header__middle">
                <div className="app-header__content container">
                    <Link href={'/'}>
                        <a className="app-header__logo">
                            <Image
                                src={logo}
                                width={257}
                                height={39}
                                alt="интернет-магазин Анатомия сна"
                            />
                        </a>
                    </Link>
                    <div className="app-header__content-right">
                        <div className="app-header__contacts">
                            <div className="app-header__search-btn l-ss-search-element-mount">
                                Поиск по сайту
                            </div>
                            <div className="app-header__callback ajax_form_parent">
                                <a rel="nofollow" href="#" className="button button--1 rds_hl_nofollow">
                                    Перезвоните мне
                                </a>
                            </div>
                            <div className="app-header__phone">
                                <div><a href="tel:83412260311" className="cityphone">8 (341) 226-03-11</a></div>
                                <div><a href="tel:88007775417" className="freephone">8 (800) 777-54-17</a></div>
                            </div>
                        </div>
                        <div className="b-site-search">
                            <div className="ya-site-form ya-site-form_inited_no " >
                                <form action="//site.yandex.ru/search/site/catalog/" method="get" target="_self" className="b-site-search__form">
                                    <input type="search" name="text" />
                                    <input type="submit" value="Найти"/>
                                </form>
                            </div>
                        </div>
                        <div className="app-header__navigation">
                            <div className="b-recently-block" id="recentlyInfo" data-text="История">
                                <div className="b-favorites-block__title customer_title_block"
                                     data-href="/izhevsk/customer-reviewed/recently/">
                                    <div className="b-favorites-block__count desktop-custumer-product-count hidden">0
                                    </div>
                                </div>
                                <div className="b-favorites-block__popup-wr customer_popup_block-wr">
                                    <div className="b-favorites-block__popup customer_popup_block"></div>
                                </div>
                            </div>
                            <div className="b-compare-block" id="compareInfo" data-text="Сравнение">
                                <div className="b-compare-block__title customer_title_block"
                                     data-href="/izhevsk/customer-reviewed/compare/">
                                    <div className="b-favorites-block__count desktop-custumer-product-count hidden">0
                                    </div>
                                </div>
                                <div className="b-compare-block__popup-wr customer_popup_block-wr">
                                    <div className="b-compare-block__popup customer_popup_block"><span
                                        className="svg-icon svg-icon--close"></span></div>
                                </div>
                            </div>
                            <div className="b-favorites-block" id="favoriteInfo" data-text="Избранное">
                                <div className="b-favorites-block__title customer_title_block"
                                     data-href="/izhevsk/customer-reviewed/favourite/">

                                    <div className="b-favorites-block__count desktop-custumer-product-count hidden">0
                                    </div>
                                </div>
                                <div className="b-favorites-block__popup-wr customer_popup_block-wr">
                                    <div className="b-favorites-block__popup customer_popup_block"><span
                                        className="svg-icon svg-icon--close"><svg className="svg-icon__link"></svg></span></div>
                                </div>
                            </div>
                            <div className="b-cart-block" id="cartInfo" data-preview-url="/izhevsk/order/cart/preview/"
                                 data-text="Корзина">
                                <div className="b-cart-block__title customer_title_block"></div>
                                <div className="b-cart-block__popup-wr customer_popup_block-wr">
                                    <div className="b-cart-block__popup customer_popup_block"><span
                                        className="svg-icon svg-icon--close"><svg className="svg-icon__link"></svg></span>
                                        <div className="b-mini-prod-list"><p>Вы не добавили ни одного товара в
                                            корзину</p></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <MainMenu />
        </header>
    );
};

export default Header;