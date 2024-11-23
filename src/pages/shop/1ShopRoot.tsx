import Container from "../../components/UI/Container";
import ProductModal from "../../components/layout/ProductModal";
import CategoriesDashboard from "./CategoriesDashboard";

function Banner() {
    return (
        <div className="flex justify-between items-center bg-zinc-100 h-48 italic uppercase px-6 md:px-16">
            <span className="text-3xl font-medium">Shop</span>
            <span className="text-zinc-600">Shop</span>
        </div>
    )
}

function ShopRoot() {
    return (
        <Container className="flex flex-col gap-4">
            <ProductModal />
            <Banner />
            <CategoriesDashboard /> {/* Outlet in here */}
        </Container>
    );
}

export default ShopRoot;