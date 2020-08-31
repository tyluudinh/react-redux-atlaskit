import React, { useState, Fragment } from 'react';
import Popup from '@atlaskit/popup';
import { Help } from '@atlaskit/atlassian-navigation';
import {ButtonItem, MenuGroup, Section} from "@atlaskit/menu";
const HelpContent = () => (
    <Fragment>
        <MenuGroup>
            <Section title="Help">
                <ButtonItem>Give us feedback</ButtonItem>
                <ButtonItem>Atlassian Documentation</ButtonItem>
                <ButtonItem>Atlassian Community</ButtonItem>
                <ButtonItem>What's New</ButtonItem>
                <ButtonItem>Get Jira Mobile</ButtonItem>
                <ButtonItem>Keyboard shortcuts</ButtonItem>
                <ButtonItem>About Jira</ButtonItem>
            </Section>
            <Section hasSeparator title={'Legal'}>
                <ButtonItem>Settings</ButtonItem>
            </Section>
            <Section hasSeparator title={'John Smith'}>
                <ButtonItem>Terms of use</ButtonItem>
                <ButtonItem>Privacy Policy</ButtonItem>
            </Section>
        </MenuGroup>
    </Fragment>
);

export const HelpPopup = () => {
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
            content={HelpContent}
            isOpen={isOpen}
            onClose={onClose}
            trigger={triggerProps => (
                <Help
                    isSelected={isOpen}
                    onClick={onClick}
                    tooltip="Help"
                    {...triggerProps}
                />
            )}
        />
    );
};
