import { NavLink } from "react-router-dom";
import "./sidebar.css";
import { Button } from "@chakra-ui/react";
import {
	MdDashboard,
	MdInventory,
	MdOutlineShoppingCart,
} from "react-icons/md";
import { FaBox } from "react-icons/fa";
import { CiBoxes } from "react-icons/ci";

export default function Sidebar() {
	return (
		<div className="flex flex-col pl-6 pr-14 py-8">
			<h3 className="text-sm">GENERAL</h3>
			<div className="links flex flex-col gap-4 mt-8">
				<NavLink to="/">
					<Button variant="unStyled" leftIcon={<MdDashboard />}>
						Dashboard
					</Button>
				</NavLink>
				<NavLink to="/inventory">
					<Button variant="unStyled" leftIcon={<FaBox />}>
						Inventory
					</Button>
				</NavLink>
				<NavLink to="/salesOrders">
					<Button
						variant="unStyled"
						leftIcon={<MdOutlineShoppingCart />}
					>
						Sales Orders
					</Button>
				</NavLink>
				<NavLink to="/category">
					<Button variant="unStyled" leftIcon={<CiBoxes />}>
						Category
					</Button>
				</NavLink>
				<NavLink to="/product">
					<Button variant="unStyled" leftIcon={<MdInventory />}>
						Product
					</Button>
				</NavLink>
			</div>
		</div>
	);
}
