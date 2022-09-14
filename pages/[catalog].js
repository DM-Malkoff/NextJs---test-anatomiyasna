import {useEffect} from "react";
import {getMainMenu} from "../store/menuSlice";
import {useDispatch} from "react-redux";
import BreadCrumbs from "../components/breadCrumbs";
import Link from "next/link";
import Head from "next/head";
import {useRouter} from "next/router";
import {getCities} from "../store/citiesSlice";

const Catalog = ({citiesData, mainMenuData, products}) => {
    const popularLinks = products.popularLinks
    const router = useRouter()
    const dispatch = useDispatch()
    useEffect(() => {
        const mainMenu = mainMenuData.catalogs
        dispatch(getMainMenu(mainMenu))
        dispatch((getCities(citiesData)))
    }, [])

    return (
        <>
            <Head>
                <title>{products.heading}</title>
                <meta name="description" content={products.heading} />
                <link rel="canonical" href={router.asPath} />
            </Head>
            <BreadCrumbs breadCrumbs={products.breadcrumbs}/>
            <div className="h1-box">
                <h1>{products.heading}</h1>
            </div>
            <div>
                {popularLinks.length ?
                    <>
                        Покупатели часто ищут:
                        <ul>
                            {popularLinks.map((item) => {
                                return(
                                    <li key={item.title}>
                                        <Link href={item.link}>
                                            <a>
                                                {item.title}
                                            </a>
                                        </Link>
                                    </li>
                                )
                            })}
                        </ul>
                    </>
                    :
                    false
                }
            </div>
        </>
    );
};

export default Catalog;

export async function getServerSideProps(ctx){
    const mainMenuUrl = await fetch('https://www.anatomiyasna.ru/api/menu/headerCatalog/')
    const mainMenuData = await mainMenuUrl.json()

    const citiesUrl = await fetch('https://www.anatomiyasna.ru/api/region/getRegions/')
    const citiesData = await citiesUrl.json()

    const productsData = await fetch(`https://www.anatomiyasna.ru/api/pageData/getPageData/?slug=${ctx.query.catalog}`)
    const products = await productsData.json()

    return{
        props : {
            mainMenuData: mainMenuData,
            citiesData: citiesData,
            products: products
        }
    }
}