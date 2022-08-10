interface ChartProps {
  coinId: string;
}

function Price({coinId}:ChartProps) {
    return (
      <>
        <div>
          <div>Percent Change (1H) : </div>
          <div>Percent Change (1D) : </div>
          <div>Percent Change (1W) : </div>
          <div>Percent Change (1M) : </div>
          <div>Percent Change (1Y) : </div>
          <div>24H Volume : </div>
        </div>
      </>
    )
  }
  
  export default Price;