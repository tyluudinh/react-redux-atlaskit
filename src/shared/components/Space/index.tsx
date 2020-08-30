import React, {Fragment} from "react";
import PropTypes from 'prop-types';
const Space = (props: ISpace) => {
    return (
        <Fragment>
            <div style={props}>
            </div>
        </Fragment>
    )
};
type ISpace = {
    width?: string,
    height: string,
}
const propTypes = {
    width: PropTypes.string,
    height: PropTypes.string.isRequired,
};
const defaultProps = {
    width: '100%',
    height: '2rem'
};
Space.propTypes = propTypes;
Space.defaultProps = defaultProps;
export default Space;
