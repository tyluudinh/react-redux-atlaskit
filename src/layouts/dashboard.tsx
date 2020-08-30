import React, {Fragment} from "react";

const DashboardLayout = (props: {children: any}) => {
    return (
        <Fragment>
            <nav>
                Navbar dashboard
            </nav>
            <section>
                <h3>content</h3>
                {props.children}
            </section>
        </Fragment>
    )
};
export default DashboardLayout;
