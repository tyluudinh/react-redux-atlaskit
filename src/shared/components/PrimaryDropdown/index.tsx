/** @jsx jsx tsx */
import { jsx } from '@emotion/core';
import {useState, KeyboardEvent, Fragment} from "react";
import {useOverflowStatus, PrimaryDropdownButton} from "@atlaskit/atlassian-navigation";
import {ButtonItem} from "@atlaskit/menu";
import {Popup, PopupProps} from "@atlaskit/popup";
import Tooltip from "@atlaskit/tooltip";

type PrimaryDropdownProps = {
    content: PopupProps['content'];
    text: string;
    isHighlighted?: boolean;
};

const PrimaryDropdown = (props: PrimaryDropdownProps) => {
    const { content, text, isHighlighted } = props;
    const { isVisible, closeOverflowMenu } = useOverflowStatus();
    const [isOpen, setIsOpen] = useState(false);
    const onDropdownItemClick = () => {
        console.log(
            'Programmatically closing the menu, even though the click happens inside the popup menu.',
        );
        closeOverflowMenu();
    };

    if (!isVisible) {
        return (
            <ButtonItem testId={text} onClick={onDropdownItemClick}>
                {text}
            </ButtonItem>
        );
    }

    const onClick = () => {
        setIsOpen(!isOpen);
    };

    const onClose = () => {
        setIsOpen(false);
    };

    const onKeyDown = (event: KeyboardEvent<HTMLElement>) => {
        if (event.key === 'ArrowDown') {
            setIsOpen(true);
        }
    };
    return (
        <Popup
            content={content}
            isOpen={isOpen}
            onClose={onClose}
            placement="bottom-start"
            testId={`${text}-popup`}
            trigger={triggerProps =>
                <Fragment>
                    <Tooltip content={text} position={'bottom'}>
                        <PrimaryDropdownButton
                            onClick={onClick}
                            onKeyDown={onKeyDown}
                            isHighlighted={isHighlighted}
                            isSelected={isOpen}
                            testId={`${text}-popup-trigger`}
                            {...triggerProps}
                        >
                            {text}
                        </PrimaryDropdownButton>
                    </Tooltip>
                </Fragment>
            }
        />
    );
};
export default PrimaryDropdown;
