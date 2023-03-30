// import React from 'react'

// export default function Home() {
//     return (
//         <div>
//             <p>这是home组件</p>
//         </div>
//     )
// }
import React, { useState } from 'react';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import { Outlet } from 'react-router-dom';

import MainMenu from "../components/MainMenu/index"

const { Header, Content, Footer, Sider } = Layout;

const Home: React.FC = () => {
    const [collapsed, setCollapsed] = useState(false);


    const {
        token: { colorBgContainer },
    } = theme.useToken();


    // const navigateTo = useNavigate();

    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
                <div style={{ height: 32, margin: 16, background: 'rgba(255, 255, 255, 0.2)' }} />
                <MainMenu></MainMenu>
            </Sider>
            <Layout className="site-layout">
                <Header style={{ padding: 0, background: colorBgContainer, paddingLeft: "16px" }} >
                    <Breadcrumb style={{ margin: '16px 0' }} items={[{ title: 'User' }, { title: 'Bill' }]} />
                </Header>
                <Content style={{ margin: '16px 16px  0', background: colorBgContainer }}>
                    <Outlet></Outlet>
                </Content>
                <Footer style={{ textAlign: 'center', padding: 0, lineHeight: "48px" }}>Ant Design ©2023 Created by Ant UED</Footer>
            </Layout>
        </Layout>
    );
};

export default Home;