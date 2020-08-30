import React from "react";
import './login.layout.scss';
const Header = () => {
    return (
        <header>
            <div className="logo">
                <img
                    height={80}
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSiwDK-ICxwdNAWjjWiT5hU4efShwJQIFS45Q&usqp=CAU"
                    alt="Logo"/>
            </div>
        </header>
    );
};
const LoginLayout = (props: {children: any}) => {
    return (
        <div className="login__layout">
            <Header/>
            <section role="main">
                {props.children}
            </section>
        </div>
    )
};
export default LoginLayout;
