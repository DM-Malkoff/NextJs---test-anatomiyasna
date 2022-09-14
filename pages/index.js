import Head from 'next/head'
import {useDispatch} from "react-redux";
import {getMainMenu} from "../store/menuSlice"

import {useEffect} from "react";
import {getCities} from "../store/citiesSlice";

function Home({mainMenuData, citiesData}) {
    const dispatch = useDispatch()

    useEffect(() => {
        const mainMenu = mainMenuData.catalogs
        dispatch(getMainMenu(mainMenu))
        dispatch(getCities(citiesData))
    }, [])
    return (
        <>
            <Head>
                <title>Интернет-магазин матрасов, кроватей, диванов в Ижевске - Доступные цены и каталог производителей
                    в магазине «Анатомия сна»</title>
                <meta name="description"
                      content="В магазине «Анатомия сна» широкий ассортимент матрасов, кроватей и диванов в Ижевске всех размеров! Удобные способы оплаты, рассрочка, сезонные скидки и бесплатная доставка в Ижевске. Заводская гарантия, свободный обмен и возврат товара."/>
                <meta name="keywords" content="" />
            </Head>
            <h1 className="about-shop-main__title ready">ИНТЕРНЕТ-МАГАЗИН МАТРАСОВ АНАТОМИЯ СНА в Москве</h1>
        </>
    )
}

export async function getServerSideProps() {
    const mainMenuUrl = await fetch('https://www.anatomiyasna.ru/api/menu/headerCatalog/')
    const mainMenuData = await mainMenuUrl.json()

    const citiesUrl = await fetch('https://www.anatomiyasna.ru/api/region/getRegions/')
    const citiesData = await citiesUrl.json()

    return {props: {
        mainMenuData: mainMenuData,
        citiesData: citiesData,
    }}
}

export default Home