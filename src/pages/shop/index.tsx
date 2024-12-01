import Container from "../../components/UI/Container";
import ProductModal from "../../components/layout/ProductModal";
import CategoriesDashboard from "./CategoriesDashboard";
import useScrollToTopPage from "../../hooks/useScrollToTopPage";
import Banner from "../../components/layout/Banner";

export default function ShopRoot() {
    useScrollToTopPage()
    return (
        <Container className="flex flex-col gap-4 mb-12">
            <ProductModal />
            <Banner pageTitle="Shop" />
            <CategoriesDashboard /> {/* Outlet in here */}
        </Container>
    );
}
