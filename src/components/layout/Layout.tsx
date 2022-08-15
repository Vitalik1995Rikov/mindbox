import React, { FC } from "react";
import Header from "./header/Header";
import Sidebar from "./sidebar/Sidebar";

type Props = {
    children?: React.ReactNode
}

const Layout:FC<Props> = ({children}) => {
    return (
        <div>
            <Header/>
            <Sidebar/>
            {children}
        </div>
    )
}

export default Layout;