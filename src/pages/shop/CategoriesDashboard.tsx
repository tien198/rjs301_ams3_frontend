import { Outlet } from "react-router-dom";
import Categories from "./Categories";
import ProductModal from "../../components/layout/ProductModal";

export default function CategoriesDashboard() {
    return (
        <div className="grid md:grid-cols-4 gap-4">
            <ProductModal />
            <Categories className='hidden md:col-start-1 md:col-end-2' />
            <div className='md:col-start-2 md:col-end-5'>
                <Outlet />
            </div>
        </div>
    )
}