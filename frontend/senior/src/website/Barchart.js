import React from "react";

import {
  PieChart,
  Pie,
  Tooltip,
  BarChart,
  XAxis,
  YAxis,
  Legend,
  CartesianGrid,
  Bar,
} from "recharts";
import './Website.css';
const Barchart = () => {
  const data = [
    { year: "2017", passengers: 20000000000 },
    { year: "2018", passengers: 18000000000 },
    { year: "2019", passengers: 15000000000},
    { year: "2020", passengers: 10000000000 },
    { year: "2021", passengers: 5000000000 },
    { year: "2022", passengers: 3500000000 },
  ];

  return (
    <div style={{ textAlign: "center" }}>
        <br></br><br></br><br></br><br></br>
      <h3>Number of passengers over the years.</h3>
      <div className="App">
        <PieChart width={400} height={400}>
          <Pie
            dataKey="passengers"
            isAnimationActive={false}
            data={data}
            cx={200}
            cy={200}
            outerRadius={80}
            fill="rgb(18, 62, 109)"
            label
          />
          <Tooltip />
        </PieChart>
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 80,
            bottom: 5,
          }}
          barSize={20}
        >
          <XAxis
            dataKey="year"
            scale="point"
            padding={{ left: 10, right: 10 }}
          />
          <YAxis />
          <Tooltip />
          <Legend />
          <CartesianGrid strokeDasharray="3 3" />
          <Bar dataKey="passengers" fill="rgb(18, 62, 109)" background={{ fill: "#333" }} />
        </BarChart>
      </div>
    </div>
  );
};

export default Barchart;