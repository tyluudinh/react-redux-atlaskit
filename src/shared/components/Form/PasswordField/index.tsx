import React, {Fragment, InputHTMLAttributes, useState} from "react";
import TextField from "@atlaskit/textfield";
import WatchFilledIcon from '@atlaskit/icon/glyph/watch-filled';
import WatchIcon from '@atlaskit/icon/glyph/watch';
import './style.scss'

const PasswordField = ({...props}) => {
    const [show, setShow] = useState(false);
    const toggleShow = () => setShow(!show);
    return (
        <Fragment>
            <TextField
                type={show ? 'text' : 'password'}
                {...props}
                elemAfterInput={
                    <div className='form-password-field__icon-wrapper' onClick={toggleShow} >
                        { show ?
                            <WatchFilledIcon label={'show'}/> :
                            <WatchIcon label={'hidden'}/>
                        }
                    </div>
                }
            />
        </Fragment>
    )
};

const propTypes = {} as InputHTMLAttributes<{}>;
const defaultProps = {
   placeholder: 'Enter password',
};
PasswordField.propTypes = propTypes;
PasswordField.defaultProps = defaultProps;
export default PasswordField;
