"use client"
import {Breadcrumb, Layout, Menu, theme, Divider} from 'antd';
import type {MenuProps} from 'antd';
import React from 'react';
import 'tailwindcss/tailwind.css'

const {Header, Content, Footer} = Layout;

import {useRouter} from 'next/navigation'

const menu_items: MenuProps['items'] = [
    {
        label: 'Home',
        key: '0'
    },
    {
        label: 'Spokemons',
        key: '1',
    },
    {
        label: 'Login',
        key: '2',
    }]

const menu_url = {
    '0': "/",
    '1': "/profile",
}

export function MenuHeader() {
    const router = useRouter();


    return (
        <div className="bg-sky-950 h-14 flex items-center">
            <div className="relative px-4 bg-sky-950 container items-center flex max-w-5xl mx-auto">
                <p className="text-2xl font-bold text-slate-200" onClick={() => router.push('/')}>
                    {"AgentLive"}
                </p>

                <Menu className="bg-sky-950 text-slate-200 absolute right-0" mode="horizontal" theme="dark" items={menu_items}
                      style={{fontSize: 16}}/>
            </div>
        </div>



    );
}
