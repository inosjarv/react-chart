import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import { raw_data } from "../Data";

const rand = () => Math.floor(Math.random() * 255);

const preprocess_data = (raw_data, region) => {
  let arr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  console.log(raw_data.data);
  Object.entries(raw_data.data).forEach(([key, value]) => {
    console.log(key, value);
    arr[key-1] = value;
  });
  return arr;
};

const genData = () => ({
  labels: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ],
  datasets: [
    {
      type: "bar",
      label: "Dataset 1",
      borderColor: `rgb(${rand()}, ${rand()}, ${rand()})`,
      borderWidth: 2,
      fill: false,
      data: preprocess_data(raw_data, "North"),
    },
    // {
    //   type: "bar",
    //   label: "Dataset 2",
    //   backgroundColor: `rgb(${rand()}, ${rand()}, ${rand()})`,
    //   data: [rand(), rand(), rand(), rand(), rand(), rand(), rand(), rand(), rand(), rand(), rand(), rand(), rand()],
    //   borderColor: "white",
    //   borderWidth: 2,
    // },
    // {
    //   type: "bar",
    //   label: "Dataset 3",
    //   backgroundColor: `rgb(${rand()}, ${rand()}, ${rand()})`,
    //   data: [rand(), rand(), rand(), rand(), rand(), rand(), rand(), rand(), rand(), rand(), rand(), rand(), rand()],
    // },
  ],
});

const options = {
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
};

const Crazy = () => {
  const [data, setData] = useState(genData());

  useEffect(() => {
    const interval = setInterval(() => setData(genData()), 1000000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="header">
        <h1 className="title">Crazy Chart</h1>
        <div className="links">
          <a
            className="btn btn-gh"
            href="https://github.com/reactchartjs/react-chartjs-2/blob/react16/example/src/charts/Crazy.js"
          >
            Github Source
          </a>
        </div>
      </div>
      <Bar data={data} options={options} />
    </>
  );
};

export default Crazy;
