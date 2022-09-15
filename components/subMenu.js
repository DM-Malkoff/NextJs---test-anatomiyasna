import Link from "next/link";
import {useEffect, useState} from "react";

const SubMenu = ({item, subLevel, showSubMenu, onClick}) => {
    const [showMenu, setShowMenu] = useState(false)

    useEffect(() => {
        setShowMenu(showSubMenu)
    }, [showSubMenu])

    const handler = (e) => {
        onClick()
    }

    return (
        <li
            className={`b-folder-h__li b-folder-h__li--level-1 dropdown-wrap ${showMenu ? 'opened' : ''}`}
            onClick={handler}
        >
            <Link href="#">
                <a onClick={(e) => {
                    e.preventDefault()
                    setShowMenu(!showMenu)
                }}>
                    {item.title}
                    <span className="svg-icon svg-icon--angle-down"></span>
                </a>
            </Link>
            {subLevel.length ?
                <ul>
                    <li className="level2-li-box">
                        <ul>
                            {subLevel.map((subItem) => {
                                const symbolPositionArr = []
                                for (let i = 0; i < subItem.url.length; i++) {
                                    symbolPositionArr.push(subItem.url.indexOf('/', i))
                                }

                                const url = subItem.url.substr(symbolPositionArr[1], subItem.url.length)

                                return (
                                    <li key={subItem.url}
                                        className="b-folder-h__li b-folder-h__li--level-2 hasChild li_ul__1"
                                        onClick={() => setShowMenu(false)}
                                    >
                                        <Link href={url}>
                                            <a>{subItem.title}</a>
                                        </Link>
                                    </li>
                                )
                            })}
                        </ul>
                    </li>
                    <li className="level3-ul-box">
                    </li>
                </ul>
                :
                false
            }
        </li>
    );
};

export default SubMenu;