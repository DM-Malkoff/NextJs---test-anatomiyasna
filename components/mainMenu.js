import {useSelector} from "react-redux";
import {useEffect, useRef, useState} from "react";
import Link from "next/link";
import SubMenu from "./subMenu";

const MainMenu = () => {
    const menu = useSelector(state => state.menu.menu)

    const [activeIndex, setActiveIndex] = useState(null)

    const ref = useRef()

    useEffect(() => {
        document.addEventListener('click', (e) => {
            const withinBoundaries = e.composedPath().includes(ref.current)
            if (!withinBoundaries) {
                setActiveIndex(null)
            }
        })

    }, [])

    return (
        <>
            <div className="b-folder-h" ref={ref}>
                <div className="b-folder-h__in container">
                    <nav className="b-folder-h__nav noready" data-url="/izhevsk/api/get-menu/?menu=true">
                        <ul className="b-folder-h__ul">
                            <li className="b-folder-h__li b-folder-h__li--level-2 b-folder-h__li--action">
                                <Link href="https://www.anatomiyasna.ru/aktsii/">
                                    <a>Акции</a>
                                </Link>
                            </li>
                            {menu.map((item, index) => {
                                const subLevel = item.childes
                                const showSubMenu = activeIndex === index ? true : false
                                return (
                                    <SubMenu
                                        key={item.title}
                                        item={item}
                                        subLevel={subLevel}
                                        showSubMenu={showSubMenu}
                                        onClick={() => {
                                            setActiveIndex(index)
                                        }}
                                    />
                                )
                            })}
                        </ul>
                    </nav>
                </div>
            </div>
        </>
    );
};

export default MainMenu;