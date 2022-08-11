import { useQuery } from "@tanstack/react-query";
import styled from "styled-components";
import { fetchCoinPrice } from "../api";

interface ChartProps {
  coinId: string;
}

interface PriceData {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  circulating_supply: number;
  total_supply: number;
  max_supply: number;
  beta_value: number;
  first_data_at: string;
  last_updated: string;
  quotes: {
    USD: {
      ath_date: string;
      ath_price: number;
      market_cap: number;
      market_cap_change_24h: number;
      percent_change_1h: number;
      percent_change_1y: number;
      percent_change_6h: number;
      percent_change_7d: number;
      percent_change_12h: number;
      percent_change_15m: number;
      percent_change_24h: number;
      percent_change_30d: number;
      percent_change_30m: number;
      percent_from_price_ath: number;
      price: number;
      volume_24h: number;
      volume_24h_change_24h: number;
    };
  };
}

function Price({ coinId }: ChartProps) {
  const { isLoading: priceLoading, data: priceData } = useQuery<PriceData>(
    ["price", coinId],
    () => fetchCoinPrice(coinId)
  );

  return (
    <>
      {priceLoading ? (
        <span>Loading...</span>
      ) : (
        <Container>
          <PriceBox>
            <span>Percent Change</span>
            <span>1HOUR</span>
            <span>{priceData?.quotes.USD.percent_change_1h}%</span>
          </PriceBox>
          <PriceBox>
          <span>Percent Change</span>
            <span>1DAY</span>
            <span>{priceData?.quotes.USD.percent_change_24h}%</span>
          </PriceBox>
          <PriceBox>
          <span>Percent Change</span>
            <span>1WEEK</span>
            <span>{priceData?.quotes.USD.percent_change_7d}%</span>
          </PriceBox>
          <PriceBox>
          <span>Percent Change</span>
            <span>1MONTH</span>
            <span>{priceData?.quotes.USD.percent_change_30d}%</span>
          </PriceBox>
          <PriceBox>
          <span>Percent Change</span>
            <span>1YEAR</span>
            <span>{priceData?.quotes.USD.percent_change_1y}%</span>
          </PriceBox>
          <PriceBox>
            <span>Volume</span>
            <span>24H</span>
            <span>{priceData?.quotes.USD.volume_24h.toFixed(2)}</span>
          </PriceBox>
        </Container>
      )}
    </>
  );
}

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
`;

const PriceBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${(props) => props.theme.accentColor};
  padding: 30px 20px;
  border-radius: 5px;
  color: ${(props) => props.theme.textColor};
  span {
    &:first-child {
      font-size: 24px;
      font-weight: 300;
    }
    &:nth-child(2) {
      font-size: 20px;
      font-weight: 500;
    }
    &:last-child {
      font-size: 20px;
      font-weight: 600;
    }
  }
`;

export default Price;
