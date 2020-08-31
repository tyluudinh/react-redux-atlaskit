import React, {Fragment, ReactNode} from "react";
import AppNav from "shared/components/Navbar";
import './main.layout.scss';
const MainLayout = (props: {children: ReactNode}) => {
    return (
        <Fragment>
            <AppNav/>
            <section className={'main__layout'}>
                {props.children}
            </section>
        </Fragment>
    )
};
export default MainLayout;
