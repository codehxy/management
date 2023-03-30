import {
    DesktopOutlined,
    FileOutlined,
    PieChartOutlined,
    TeamOutlined,
    UserOutlined,
} from '@ant-design/icons';
import React, { useState } from 'react';
import type { MenuProps } from 'antd';
import { Menu, theme } from 'antd';
import { useNavigate, useLocation } from 'react-router-dom';

type MenuItem = Required<MenuProps>['items'][number];

const items: MenuItem[] = [
    {
        label: '栏目 1',
        key: '/page1',
        icon: <PieChartOutlined />
    },
    {
        label: '栏目 2',
        key: '/page2',
        icon: <DesktopOutlined />
    },
    {
        label: '栏目 3',
        key: '/page3',
        icon: <UserOutlined />,
        children: [
            {
                label: '栏目 301',
                key: '/page3/page301',
            }, {
                label: '栏目 302',
                key: '/page3/page302',
            }
        ]
    },
    {
        label: '栏目 4',
        key: '/page4',
        icon: <TeamOutlined />,
        children: [
            {
                label: '栏目 401',
                key: '/page4/page401',
            }, {
                label: '栏目 402',
                key: '/page4/page402',
            }
        ]
    },
    {
        label: '栏目 5',
        key: '/page5',
        icon: <FileOutlined />
    }
]



const Comp = () => {


    const navigateTo = useNavigate();
    const currentRoute = useLocation();
    const menuClick = (e: { key: string }) => {
        navigateTo(e.key);
    }


    let firstOpenKey: string = "";

    function findKey(item: { key: string }) {
        return item.key === currentRoute.pathname;
    }

    for (let i = 0; i < items.length; i++) {
        if (items[i]!['children'] && items[i]!["children"].length > 0 && items[i]!['children'].find(findKey)) {
            firstOpenKey = items[i]!.key as string;
            break;
        }
    }

    const [openKeys, setOpenKeys] = useState([firstOpenKey]);

    const handleOpenChange = (keys: string[]) => {
        setOpenKeys([keys[keys.length - 1]]);
    }

    return (

        <Menu theme="dark"
            defaultSelectedKeys={[currentRoute.pathname]}
            mode="inline"
            items={items}
            onOpenChange={handleOpenChange}
            onClick={menuClick}
            openKeys={openKeys}
        />
    )
}

export default Comp;