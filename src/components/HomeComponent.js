import React from 'react'
import { Link } from "react-router-dom";
import { Layout } from 'antd';
const { Header, Footer, Sider, Content } = Layout;

// const headerStyle = {
//     textAlign: 'center',
//     color: '#fff',
//     height: 64,
//     paddingInline: 48,
//     lineHeight: '64px',
//     backgroundColor: '#4096ff',
//   };
//   const contentStyle = {
//     textAlign: 'center',
//     minHeight: 120,
//     lineHeight: '120px',
//     color: '#fff',
//     backgroundColor: '#0958d9',
//   };
//   const siderStyle = {
//     textAlign: 'center',
//     lineHeight: '120px',
//     color: '#fff',
//     backgroundColor: '#1677ff',
//   };
//   const footerStyle = {
//     textAlign: 'center',
//     color: '#fff',
//     backgroundColor: '#4096ff',
//   };
//   const layoutStyle = {
//     borderRadius: 8,
//     overflow: 'hidden',
//     width: 'calc(50% - 8px)',
//     maxWidth: 'calc(50% - 8px)',
//   };

function HomeComponent() {
  return (
    <div>
      <Layout>
            <Header>
                <div style={{gap: "16px" , display:"flex"}}>
                    <Link style={{color: "white"}} to="/">Home</Link>
                    <Link style={{color: "white"}} to="/about">About</Link>
                    <Link style={{color: "white"}} to="/company">Company</Link>
                </div>
            </Header>
            <Content>Content</Content>
            <Footer>&#169; 2024 PT indodev niaga internet</Footer>
    </Layout>
    </div>
  )
}

export default HomeComponent
