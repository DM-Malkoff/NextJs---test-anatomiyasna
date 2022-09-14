import Link from "next/link";

const BreadCrumbs = ({breadCrumbs}) => {
    console.log("breadCrumbs",breadCrumbs)
    return (
        <div>
            <ol className="path">
                {breadCrumbs.map((item,index) => {
                    return(
                        <>
                            <li>
                                {index !== breadCrumbs.length-1 ?
                                    <Link href={item.url}>
                                        <a>{item.title}</a>
                                    </Link>
                                    :
                                    <li>{item.title}</li>
                                }
                            </li>
                            {index !== breadCrumbs.length-1 ?
                                <li><i>/</i></li>
                                :
                                false
                            }
                        </>
                    )
                })}
            </ol>
        </div>
    );
};

export default BreadCrumbs