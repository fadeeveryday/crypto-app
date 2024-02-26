import { Layout, Select, Space, Button, Modal, Drawer}  from 'antd';
import { useCrypto } from '../context/crypto-context';
import { useEffect, useState } from 'react';
import CoinInfoModal from './Layout/CoinInfoModal';
import AddAssetForm from './Layout/AddAssetForm';

const headerStyle = {
  width: '100%',
  textAlign: 'center',
  // background: '#fff',
  padding: '1rem',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  height: 60,
};

const AppHeader = () => {
  const [select, setSelect] = useState(false)
  const [modal, setModal] = useState(false)
  const [coin, setCoin] = useState(null)
  const{ crypto } = useCrypto()
  const [drawer, setDrawer] = useState(false)

  useEffect(() => {
    const keypress = (event) => {
      if (event.key === '/')
      setSelect((prev) => !prev)
    }
    document.addEventListener('keypress', keypress)
    return () => document.removeEventListener('keypress', keypress)
  }, [])

  const handleSelect = (value) => {
    setModal(true)
    setCoin(crypto.find((c) => c.id === value))
  }
  
  return (
    <Layout.Header style={headerStyle}>
    <Select
      style={{
        width: '250px',
      }}
      open={select}
      value="press / to open"
      onSelect={handleSelect}
      onClick={() => setSelect((prev) => !prev)}
      options={crypto.map((coin) => ({
        label: coin.name,
        value: coin.id,
        icon: coin.icon,
      }))}
      optionRender={(option) => (
      <Space>
        <img style={{width: '20px'}} src={option.data.icon} alt={option.data.label}/> {option.data.label}
      </Space>
      )}
    />
    <Button type="primary" onClick={() => setDrawer(true)}>Add Asset</Button>

    <Modal
      open={modal}
      onCancel={() => setModal(false)}
      footer={null}
      >
        <CoinInfoModal coin={coin}/>
      </Modal>
    <Drawer
      width={600}
      title="Basic Drawer" 
      onClose={() => setDrawer(false)}
      destroyOnClose
      open={drawer}>
      
        <AddAssetForm onClose={() => setDrawer(false)}/>
    </Drawer>
  </Layout.Header>

  )
};

export default AppHeader
