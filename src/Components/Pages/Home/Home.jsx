import useSetTitle from "../../Hook/useSetTitle/useSetTitle";
import Banner from "../Banner/Banner";
import ToyGallery from "../ToyGallery/ToyGallery";
import Tranding from "../Tranding/Tranding";
import CategoriesSection from "./CategoriesSection/CategoriesSection";
import Gellary from "./Gellary/Gellary";
import Tabs from "./Tabs/Tabs";

const Home = () => {
    useSetTitle('Home')
    return (
        <div className="min-w-min	">
            <Banner></Banner>
            <ToyGallery></ToyGallery>
            <Gellary></Gellary>
            <Tabs></Tabs>
            <CategoriesSection></CategoriesSection>
            <Tranding></Tranding>
        </div>
    );
};

export default Home;