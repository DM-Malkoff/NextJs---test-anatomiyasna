import {useDispatch, useSelector} from "react-redux";
import {useEffect, useRef, useState} from "react";
import {changeCity} from "../store/changedCitySlice";

const SelectCity = () => {
    const changedCity = useSelector(state => state.city.city)
    const citiesList = useSelector(state => state.cities.cities)
    const dispatch = useDispatch()
    const [showPopup, setShowPopup] = useState(false)
    const [moscowCities, setMoscowCities] = useState([])

    const ref = useRef()
    const [menuBlockHeight, setMenuBlockHeight] = useState(0)
    useEffect(() => {
        setMenuBlockHeight(ref.current.scrollHeight)
    }, [])

    useEffect(() => {
        if (citiesList.length) {
            setMoscowCities(citiesList[0].moscow)
        }
    }, [citiesList])

    useEffect(() => {
        document.addEventListener('click', (e) => {
            const withinBoundaries = e.composedPath().includes(ref.current)
            if (!withinBoundaries) {
                setShowPopup(false)
            }
        })
    }, [])

    const popupHandler = (e) => {
        e.preventDefault()
        e.stopPropagation()
        setShowPopup(!showPopup)
    }
    const changeCityHandler = (cityName) => {
        dispatch(changeCity(cityName))
        setShowPopup(false)
    }

    return (
        <>
            <a href="#" className="app-header__city-in" onClick={popupHandler}>
                <span className="svg-icon svg-icon--cursor"></span>
                <i className="app-header__city-text">{changedCity}</i>
                <span className="svg-icon svg-icon--angle-down"><svg
                    className="svg-icon__link"></svg></span>
            </a>
            <div className={`city-popup ${showPopup ? 'showPopup' : ''}`} id="region_choice" ref={ref}>
                <div className="city-popup__in">
                    <div className="city-popup__items city-popup__items--moscow">
                        <div className="city-popup__items-title">Москва и МО</div>
                        <div className="city-popup__items-body">
                            {moscowCities.map((item) => {
                                return (
                                    <div key={item.id} className="city-popup__item">
                                        <a href="#" onClick={() => changeCityHandler(item.title)}
                                           className="city-popup__item-link changeRegionLink active">
                                            {item.title}
                                        </a>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
            <style jsx>
                {`
                    .showPopup{
                        transition: 0.3s;
                        display:block;
                        height: ${menuBlockHeight ? menuBlockHeight + 'px' : false};
                        visibility: visible;
                    }
                `}
            </style>
        </>
    );
};

export default SelectCity