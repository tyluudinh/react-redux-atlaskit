import React, {Fragment, ReactNode, useEffect} from "react";
import AppNav from "shared/components/Navbar";
import './main.layout.scss';
import {useDispatch} from "react-redux";
import {ProfileDispatch} from "features/profile/profile.slice";
const MainLayout = (props: {children: ReactNode}) => {
    const dispatch = useDispatch();
    useEffect(() => {
        const getProfile = () => dispatch(ProfileDispatch);
        return () => {
            getProfile();
        }
    }, []);
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
