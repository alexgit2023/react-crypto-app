import { Divider, Flex, Tag, Typography } from "antd";

export default function CoinInfoModal({ coin }) {
  return (
    <>
      <Flex align="center">
        <img
          src={coin.icon}
          alt={coin.name}
          style={{ width: "40", marginRight: "10" }}
        />
        <Typography level={2} style={{ margin: "0" }}>
          {coin.symbol} {coin.name}
        </Typography>
      </Flex>
      {/* <Divider /> */}
      <Typography.Paragraph>
        <Typography.Text strong>1 hour: </Typography.Text>
        <Tag color={coin.priceChange1h > 0 ? "green" : "red"}>
          {coin.priceChange1h}%
        </Tag>
        <Typography.Text strong>1 day: </Typography.Text>
        <Tag color={coin.priceChange1d > 0 ? "green" : "red"}>
          {coin.priceChange1h}%
        </Tag>
        <Typography.Text strong>1 week: </Typography.Text>
        <Tag color={coin.priceChange1w > 0 ? "green" : "red"}>
          {coin.priceChange1h}%
        </Tag>
      </Typography.Paragraph>
      <Typography.Paragraph>
        <Typography.Text strong>Price: {coin.price.toFixed(2)}</Typography.Text>
      </Typography.Paragraph>
      <Typography.Paragraph>
        <Typography.Text strong>Price BTC: {coin.priceBtc}</Typography.Text>
      </Typography.Paragraph>
      <Typography.Paragraph>
        <Typography.Text strong>Market Cap: {coin.marketCap}</Typography.Text>
      </Typography.Paragraph>
      {coin.contractAddress && (
        <Typography.Paragraph>
          <Typography.Text strong>
            Contract Address: {coin.contractAddress}
          </Typography.Text>
        </Typography.Paragraph>
      )}
    </>
  );
}
