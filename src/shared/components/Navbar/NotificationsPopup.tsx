import React, { useState } from 'react';
import {Popup} from '@atlaskit/popup';
import Badge from '@atlaskit/badge';
import styled from 'styled-components';
import { Notifications } from '@atlaskit/atlassian-navigation'

const WrapperContent = styled.div`
    width: 540,
    height: 'calc(100vh - 200px)',
    padding-top: 18,
    padding-left: 18,
    display: 'flex',
`;

const NotificationsBadge = () => {
    return (
        <Badge appearance="important">9+</Badge>
    )
};
const NotificationsContent = () => (
    <WrapperContent>
        NotificationsContent
    </WrapperContent>
);
export const NotificationsPopup = () => {
    const [isOpen, setIsOpen] = useState(false);

    const onClick = () => {
        setIsOpen(!isOpen);
    };

    const onClose = () => {
        setIsOpen(false);
    };

    return (
        <Popup
            placement="bottom-start"
            content={NotificationsContent}
            isOpen={isOpen}
            onClose={onClose}
            trigger={triggerProps => (
                <Notifications
                    badge={NotificationsBadge}
                    onClick={onClick}
                    tooltip={``}
                    isSelected={isOpen}
                    {...triggerProps}
                />
            )}
        />
    );
};
