import Link from "next/link";
import {useEffect, useState} from "react";

const BreadCrumbs = ({breadCrumbsData}) => {

    const [breadCrumbs, setBreadCrumbs] = useState([])
    useEffect(() => {
        setBreadCrumbs(breadCrumbsData)
    }, [])

    return (
        <div>
            <ol className="path">
                {breadCrumbs.map((item, index) => {
                    return (
                        <li key={index}>
                            {index !== breadCrumbs.length - 1 ?
                                <Link href={item.url}>
                                    <a>{item.title}</a>

                                </Link>
                                :
                                <span>{item.title}</span>
                            }
                            {index !== breadCrumbs.length - 1 ?
                                <span><i>/</i></span>
                                :
                                false
                            }
                        </li>
                    )
                })}
            </ol>
        </div>
    );
};

export default BreadCrumbs