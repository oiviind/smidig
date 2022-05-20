import { useRouter } from 'next/router';
import React, { useMemo } from 'react';
import TabBarItem, { TabBarItemData } from './TabBarItem';

type TabBarProps = {
    className?: string;
    tabs: TabBarItemData[];
};

const createMobileOptions = (tabs) => {
    return tabs.map((tab) => (
        <option key={tab.name} value={tab.href}>
            {tab.name}
        </option>
    ));
};

const createTabItems = (tabs) => {
    return tabs.map((tab) => <TabBarItem key={tab.name} tab={tab} />);
};

export default function TabBar(props: TabBarProps) {
    const router = useRouter();
    const tabs = props.tabs;
    const selectedTabItem = useMemo(
        () => tabs.find((tab) => tab.selected),
        [tabs]
    );
    const tabBarMobileOptions = useMemo(
        () => createMobileOptions(tabs),
        [tabs]
    );
    const tabBarItemComponents = useMemo(() => createTabItems(tabs), [tabs]);

    const onTabChange = async (data) => {
        const url = data?.target?.value;
        if (url) {
            await router.push(url);
        }
    };

    return (
        <div className={props.className}>
            <div className="xs:hidden">
                <select
                    onChange={onTabChange}
                    id="tabs"
                    name="tabs"
                    className="block w-full pl-3 pr-10 py-2 text-md border-dark-3 focus:outline-none focus:ring-purple-2 focus:border-purple-1 sm:text-sm rounded-standard"
                    defaultValue={selectedTabItem.href}
                >
                    {tabBarMobileOptions}
                </select>
            </div>
            <div className="hidden xs:block">
                <div className="border-b-2 border-dark-6">
                    <nav className="-mb-[2px] flex space-x-8" aria-label="Tabs">
                        {tabBarItemComponents}
                    </nav>
                </div>
            </div>
        </div>
    );
}
