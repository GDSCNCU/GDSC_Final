import Header from "./components/Header";
import Chart from "./components/Chart";
import { chartData } from "./constants/index";
function App() {
  return (
    <>
      <Header />
      {chartData.map((item, index) => {
        return (
          <Chart
            title={item.title}
            data={item.data}
            color={item.color}
            key={index}
          />
        );
      })}
    </>
  );
}

export default App;
