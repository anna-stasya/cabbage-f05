import s from './Charts.module.css';
import Chart from 'chart.js/auto';
import { Bar, horizontalBar } from 'react-chartjs-2';

export default function Charts({ descriptionList }) {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
        position: 'top',
      },
      title: {
        display: false,
        text: '',
      },
    },
    maintainAspectRatio: false,
    scales: {
      x: {
        beginAtZero: true,
        grid: {
          offset: true,
        },
      },
      y: {
        grid: {
          //   offset: true,
          drawTicks: false,
        },
        ticks: {
          display: false,
        },
      },
    },
  };

  const data = {
    labels: descriptionList.map(el => el.description),
    datasets: [
      {
        label: '',
        data: [12, 19, 3, 5, 0, 3, 12, 19, 3, 5, 0, 3],
        showLine: false,
        backgroundColor: ['rgb(255, 117, 29)'],
        barThickness: 38,
        // barPercentage: 0.1,
        borderRadius: 10,
      },
    ],
  };

  const categoriesList = [];
  return (
    <div className={s.bar}>
      <Bar data={data} options={options} />
    </div>
  );
}
