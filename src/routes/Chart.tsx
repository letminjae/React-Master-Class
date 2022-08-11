import { useQuery } from "@tanstack/react-query";
import { fetchCoinHistory } from "../api";
import ApexChart from "react-apexcharts";

interface ChartProps {
  coinId: string;
}

interface IHistorical {
  time_open: number;
  time_close: number;
  open: string;
  high: string;
  low: string;
  close: string;
  volume: string;
  market_cap: string;
}

interface ICandleChartXY {
  x: Date;
  y: number[];
}

function Chart({ coinId }: ChartProps) {
  const { isLoading, data } = useQuery<IHistorical[]>(
    ["ohlcv", coinId],
    () => fetchCoinHistory(coinId),
  );

  return (
    <div>
      {isLoading ? (
        "Loading chart..."
      ) : (
        <ApexChart
          type="candlestick"
          series={[
            {
              name: "Price",
              data: data?.map((price) => {
                return {
                  x: new Date(price.time_open * 1000),
                  y: [
                    parseFloat(price.open),
                    parseFloat(price.high),
                    parseFloat(price.low),
                    parseFloat(price.close),
                  ],
                };
              }) as ICandleChartXY[],
            },
          ]}
          options={{
            theme: {
              mode: "dark",
            },
            chart: {
              height: 350,
              width: 500,
              animations: {
                enabled: false,
              },
              background: "transparent",
            },
            grid: { show: false },
            stroke: {
              curve: "smooth",
              width: 4,
            },
            yaxis: {
              show: false,
            },
            xaxis: {
              axisBorder: { show: false },
              axisTicks: { show: false },
              labels: { show: false },
              type: "datetime",
              categories: data?.map(
                (price) => price.time_close * 1000
              ),
            },
            // fill: {
            //   type: "gradient",
            //   gradient: { gradientToColors: ["#0be881"], stops: [0, 100] },
            // },
            // colors: ["#0fbcf9"],
            tooltip: {
              y: {
                formatter: (value) => `$${value.toFixed(2)}`,
              },
            },
            plotOptions: {
              candlestick: {
                colors: {
                  upward: '#DF7D46',
                  downward: '#3C90EB',
                }
              }
            },
          }}
        />
      )}
    </div>
  );
}

export default Chart;
