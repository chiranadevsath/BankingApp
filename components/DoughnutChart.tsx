"use client";

import { ArcElement, Chart as ChartJS, Tooltip, Legend } from "chart.js";

import { Doughnut } from "react-chartjs-2";
import React from "react";

ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart = () => {
	const data = {
		datasets: [
			{
				label: "Banks",
				data: [1250, 2500, 3700],
				backgroundColor: ["#0747b6", "#2265d8", "#2f91fa"],
			},
		],
		labels: ["Bank1", "Bank2", "Bank3"],
	};

	return (
		<Doughnut
			data={data}
			options={{
				cutout: "60%",
				plugins: {
					legend: {
						display: false,
					},
				},
			}}
		/>
	);
};

export default DoughnutChart;
