import {Flex, Tag, Typography, Divider} from 'antd'
import CoinInfo from './CoinInfo';

const CoinInfoModal = ({ coin }) => {
  return (
    <>
      <CoinInfo coin={coin} withSymbol/>
      <Divider />
      <Flex>
        <Typography.Paragraph>
          <Typography.Text strong> 1 hour: </Typography.Text>
          <Tag color={coin.priceChange1h > 0 ? 'green' : 'red'}>{coin.priceChange1h}%</Tag>
        </Typography.Paragraph>
        <Typography.Paragraph>
          <Typography.Text strong> 1 day: </Typography.Text>
          <Tag color={coin.priceChange1d > 0 ? 'green' : 'red'}>{coin.priceChange1d}%</Tag>
        </Typography.Paragraph>
        <Typography.Paragraph>
          <Typography.Text strong> 1 week: </Typography.Text>
          <Tag color={coin.priceChange1w > 0 ? 'green' : 'red'}>{coin.priceChange1w}%</Tag>
        </Typography.Paragraph>
      </Flex>
      <Typography.Paragraph>
        <Typography.Text strong>Price: </Typography.Text>
        {coin.price.toFixed(3)}$
      </Typography.Paragraph>
      <Typography.Paragraph>
        <Typography.Text strong>PriceBtc: </Typography.Text>
        {coin.priceBtc.toFixed(2)}
      </Typography.Paragraph>
      <Typography.Paragraph>
        <Typography.Text strong>MarketCap: </Typography.Text>
        {coin.marketCap.toFixed(2)}$
      </Typography.Paragraph>
      {coin.contractAddress && 
      <Typography.Paragraph>
        <Typography.Text strong>ContractAdress: </Typography.Text>
        {coin.contractAddress}
      </Typography.Paragraph>}
        
    </>
  )
};

export default CoinInfoModal
