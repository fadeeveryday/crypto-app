import { Layout}  from 'antd';
import AppHeader from './AppHeader';
import AppSider from './AppSider';
import AppContent from './AppContent';
import { useContext } from 'react';
import { Spin }  from 'antd';
import CryptoContext from '../context/crypto-context';


const AppLayout = () => {

  const {loading} = useContext(CryptoContext)

  if(loading) {
    return <Spin fullscreen/>
  }
  
  return (
  <Layout>
    <AppHeader />
    <Layout>
      <AppSider />
      <AppContent />
    </Layout>
  </Layout>
  )
};

export default AppLayout
