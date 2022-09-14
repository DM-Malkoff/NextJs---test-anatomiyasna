import Header from "./header";
import Footer from "./footer";
import Content from "./content";

const MainLayout = ({children}) => {
    return (
        <div className="app__wrapper">
            <Header />
            <Content>
                {children}
            </Content>
            <Footer />
        </div>
    );
};

export default MainLayout;