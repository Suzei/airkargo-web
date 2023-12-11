import { Outlet } from "react-router-dom";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

export function DefaultRouteLayout() {
    return (
        <>
            <Header quotation={true} />
            <Outlet />
            <Footer />
        </>
    )
}