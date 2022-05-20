import Link from 'next/link';
import React from 'react';

function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
}

export type TabBarItemData = {
    name: string;
    href: string;
    selected: boolean;
};

export type TabBarItemProps = {
    tab: TabBarItemData;
};

export default function TabBarItem(props: TabBarItemProps) {
    const tab = props.tab;

    return (
        <Link key={tab.name} href={tab.href}>
            <a
                className={classNames(
                    tab.selected
                        ? 'text-dark-1'
                        : 'text-dark-3 hover:text-dark-2',
                    'group font-regular whitespace-nowrap text-base'
                )}
                aria-current={tab.selected ? 'page' : undefined}
            >
                <div className="pb-2 px-2">{tab.name}</div>
                <div
                    className={classNames(
                        tab.selected ? 'bg-purple-1' : 'group-hover:bg-dark-2',
                        'rounded-full h-[4px]'
                    )}
                />
            </a>
        </Link>
    );
}
