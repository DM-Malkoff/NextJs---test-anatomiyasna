import {useEffect} from "react";
import {getMainMenu} from "../../store/menuSlice";
import {useDispatch} from "react-redux";
import BreadCrumbs from "../../components/breadCrumbs";
import Link from "next/link";

const Catalog = ({citiesData, mainMenuData, products}) => {
    const popularLinks = products.popularLinks

    const dispatch = useDispatch()
    useEffect(() => {
        const mainMenu = mainMenuData.catalogs
        dispatch(getMainMenu(mainMenu))
    }, [])

    return (
        <div>
            {/*<BreadCrumbs breadCrumbs={products.breadcrumbs}/>*/}
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
        </div>
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