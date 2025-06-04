'use client';

import { Menu } from "@atoms/Menu";
import Link from "next/link";

interface MenuProps {
    className?: string;
}

export const MenuSideBar = ({ className = "" }: MenuProps) => {
    return (
        <Menu.Root className={`shadow-2xl mt-9 ${className}`}>
            <Menu.Item>
                <Link href="/">Home</Link>
            </Menu.Item>
            <Menu.Item>
                <Link href="/">Home</Link>
            </Menu.Item>
            <Menu.Item>
                <Link href="/">Home</Link>
            </Menu.Item>
            <Menu.Item>
                <Link href="/">Home</Link>
            </Menu.Item>
            <Menu.Item>
                <Link href="/">Home</Link>
            </Menu.Item>
            <Menu.Item>
                <Link href="/">Home</Link>
            </Menu.Item>
        </Menu.Root>
    );
};
