import axios from "axios";

export const getSummaryData = async () => {
	// const res = await axios.get(
	// 	"https://api.fakestoreapi.com/products"
	// );
	// return res.data;
	return {
		todays: "81.90",
		yearly: "81.90",
		netIncome: "81.90",
		products: "23",
	};
};

export const getRevenueData = async () => {
	// const res = await axios.get(
	// 	"https://api.fakestoreapi.com/products"
	// );
	// return res.data;
	return {
		result: [
			{ name: "Jan", netProfit: 4000, grossProfit: 2400 },
			{ name: "Feb", netProfit: 3000, grossProfit: 1398 },
			{ name: "Mar", netProfit: 2000, grossProfit: 9800 },
			{ name: "Apr", netProfit: 2780, grossProfit: 3908 },
			{ name: "May", netProfit: 1890, grossProfit: 4800 },
			{ name: "Jun", netProfit: 2390, grossProfit: 3800 },
			{ name: "Jul", netProfit: 3490, grossProfit: 4300 },
			{ name: "Aug", netProfit: 3490, grossProfit: 4300 },
			{ name: "Sep", netProfit: 3490, grossProfit: 4300 },
			{ name: "Oct", netProfit: 3490, grossProfit: 4300 },
			{ name: "Nov", netProfit: 3490, grossProfit: 4300 },
			{ name: "Dec", netProfit: 3490, grossProfit: 4300 },
		],
	};
};

export const getSalesOrdersSummary = async () => {
	// const res = await axios.get(
	// 	"https://api.fakestoreapi.com/products"
	// );
	// return res.data;
	return {
		result: [
			{
				channel: "Direct Sales",
				draft: 2,
				confirmed: 32,
				packed: 42,
				shipped: 23,
				invoiced: 7,
			},
		],
	};
};

export const getFastMovingProducts = async () => {
	// const res = await axios.get(
	// 	"https://api.fakestoreapi.com/products"
	// );
	// return res.data;
	return {
		result: [
			{
				name: "Macbook Pro",
				image: "https://bit.ly/dan-abramov",
			},
		],
	};
};

export const getSalesRecords = async () => {
	// const res = await axios.get(
	// 	"https://api.fakestoreapi.com/products"
	// );
	// return res.data;
	return {
		result: [
			{
				name: "Macbook Pro",
				orderCode: "0001",
				category: "Laptop",
				quantity: 2,
				totalPrice: 1200,
			},
		],
	};
};

export const getSalesReport = async () => {
	// const res = await axios.get(
	// 	"https://api.fakestoreapi.com/products"
	// );
	// return res.data;
	return {
		result: {
			labels: [
				"Jan",
				"Feb",
				"Mar",
				"Apr",
				"May",
				"Jun",
				"Jul",
				"Aug",
				"Sep",
				"Oct",
				"Nov",
				"Dec",
			],
			datasets: [
				{
					label: "Sales Report",
					backgroundColor: "#fff",
					borderColor: "rgba(75,192,192,1)",
					data: [65, 59, 80, 81, 56, 55, 40, 67, 89, 56, 32, 12],
				},
			],
		},
	};
};
