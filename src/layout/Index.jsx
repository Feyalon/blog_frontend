import { Outlet } from "react-router-dom";
import Header from "../components/header/Index";
import AnimatedCursor from 'react-animated-cursor';


export default function MainLayout() {
    return(
        <div className="MainRoute">
            <Header />
            <main>
                <Outlet />
            </main>
        </div>
    )
}