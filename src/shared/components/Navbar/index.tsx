import React, {Fragment, useEffect, useState} from 'react';
import {ButtonItem, MenuGroup, Section} from "@atlaskit/menu";
import { JiraIcon, JiraLogo } from '@atlaskit/logo';
import {AtlassianNavigation, ProductHome} from "@atlaskit/atlassian-navigation";
import { NavigationSkeleton } from '@atlaskit/atlassian-navigation/skeleton';
import PrimaryDropdown from "../PrimaryDropdown";
import {HelpPopup} from "./HelpPopup";
import {SettingsDrawer} from "./SettingsDrawer";
import {SearchDrawer} from "./SearchDrawer";
import {ProfilePopup} from "./ProfilePopup";
import {NotificationsPopup} from "./NotificationsPopup";
import {sleep} from "../../utils/sleep";
const ProjectsContent = () => (
    <MenuGroup>
        <Section title="Starred">
            <ButtonItem>Mobile Research</ButtonItem>
            <ButtonItem testId="it-services">IT Services</ButtonItem>
        </Section>
        <Section hasSeparator title="Recent">
            <ButtonItem>Engineering Leadership</ButtonItem>
            <ButtonItem>BAU</ButtonItem>
            <ButtonItem>Hardware Support</ButtonItem>
            <ButtonItem>New Features</ButtonItem>
            <ButtonItem>SAS</ButtonItem>
        </Section>
        <Section hasSeparator>
            <ButtonItem>View all projects</ButtonItem>
        </Section>
    </MenuGroup>
);

const FiltersContent = () => (
    <MenuGroup>
        <Section title="Starred">
            <ButtonItem>Assigned to me</ButtonItem>
            <ButtonItem>Created by me</ButtonItem>
            <ButtonItem>Updated recently</ButtonItem>
        </Section>
        <Section hasSeparator title="Recent">
            <ButtonItem>Engineering Leadership</ButtonItem>
            <ButtonItem>Viewed recently</ButtonItem>
            <ButtonItem>Resolved recently</ButtonItem>
            <ButtonItem>Done issues</ButtonItem>
        </Section>
        <Section hasSeparator>
            <ButtonItem>View all filters</ButtonItem>
        </Section>
    </MenuGroup>
);

const DashboardsContent = () => (
    <MenuGroup>
        <Section title="Starred">
            <ButtonItem>System dashboard</ButtonItem>
            <ButtonItem>Innovation week</ButtonItem>
        </Section>
        <Section hasSeparator title="Recent">
            <ButtonItem>Vanguard</ButtonItem>
            <ButtonItem>Performances</ButtonItem>
            <ButtonItem>Vertigo</ButtonItem>
        </Section>
        <Section hasSeparator>
            <ButtonItem>View all dashboards</ButtonItem>
        </Section>
    </MenuGroup>
);

const AppsContent = () => (
    <MenuGroup>
        <Section title="Third Party">
            <ButtonItem>Portfolio</ButtonItem>
            <ButtonItem>Tempo timesheets</ButtonItem>
            <ButtonItem>Slack</ButtonItem>
            <ButtonItem>Incisions</ButtonItem>
        </Section>
        <Section hasSeparator>
            <ButtonItem>Explore apps</ButtonItem>
        </Section>
    </MenuGroup>
);

const primaryItems = [
    <PrimaryDropdown content={ProjectsContent} text="Projects" />,
    <PrimaryDropdown
        isHighlighted
        content={FiltersContent}
        text="Filters &amp; issues"
    />,
    <PrimaryDropdown content={DashboardsContent} text="Dashboards" />,
    <PrimaryDropdown content={AppsContent} text="Apps" />,
];
const ProductHomeExample = () => (
    <ProductHome
        onClick={console.log}
        icon={JiraIcon}
        logo={JiraLogo}
    />
);
const navSkeleton = () => (
    <NavigationSkeleton
        primaryItemsCount={4}
        secondaryItemsCount={4}
        shouldShowSearch={true}
    />
);
const AppNav = () => {
    const [isSkeleton, setIsSkeleton] = useState(true);
    useEffect(() => {
        sleep(500)
            .then(() => setIsSkeleton(false));
    }, []);
    if (isSkeleton) {
        return navSkeleton();
    }
    return (
        <Fragment>
            <AtlassianNavigation
                label="site"
                moreLabel="More"
                primaryItems={primaryItems}
                // renderAppSwitcher={SwitcherPopup}
                // renderCreate={DefaultCreate}
                renderHelp={HelpPopup}
                renderNotifications={NotificationsPopup}
                renderProductHome={ProductHomeExample}
                renderProfile={ProfilePopup}
                renderSearch={SearchDrawer}
                renderSettings={SettingsDrawer}
            />
        </Fragment>
    )
};

export default AppNav;
