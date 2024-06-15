import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Dashboard from "./pages/Dashboard";
import Inventory from "./pages/Inventory";
import SalesOrders from "./pages/SalesOrders";

function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Layout />}>
						<Route index element={<Dashboard />} />
						<Route path="inventory" element={<Inventory />} />
						<Route path="salesOrders" element={<SalesOrders />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
