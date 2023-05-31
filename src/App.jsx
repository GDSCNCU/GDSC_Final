import Header from "./components/Header";
import Chart from "./components/Chart";
import { chartData } from "./constants/index";
import Footer from "./components/footer";
function App() {
  return (
    <>
      <Header />
      <div className="h-[92vh] placeholder:pt-[8vh] w-full flex flex-wrap justify-center items-center">
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
      </div>
      <Footer />
    </>
  );
}

export default App;
