import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
function Linechart({ chartdata }) {
  const options = {
    responsive: true,
  };
  return (
    <div>
      <Line data={chartdata} options={options} />
    </div>
  );
}
export default Linechart;
