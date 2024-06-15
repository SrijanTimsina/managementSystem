import { Line } from "react-chartjs-2";
import "chart.js/auto";
import {
	Input,
	InputGroup,
	InputLeftElement,
	Table,
	Thead,
	Tbody,
	Tr,
	Th,
	Td,
	TableContainer,
	Select,
} from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";
import { getSalesRecords, getSalesReport } from "../api";
import { useQuery } from "@tanstack/react-query";

export default function SalesOrders() {
	const { data: salesOrdersReport } = useQuery({
		queryKey: ["SalesReport"],
		queryFn: getSalesReport,
	});

	const { data: salesRecords } = useQuery({
		queryKey: ["SalesRecords"],
		queryFn: getSalesRecords,
	});

	return (
		<div className="border-2 border-solid border-gray-200  ">
			<div className="w-full flex justify-between items-center p-8 border-b-4">
				<p>Sales Orders</p>
				<div>
					<InputGroup>
						<InputLeftElement pointerEvents="none">
							<FaSearch />
						</InputLeftElement>
						<Input
							placeholder="Search"
							variant="outline"
							width="200px"
							border={"1px solid gray"}
						/>
					</InputGroup>
				</div>
			</div>
			<div className="bg-white px-4">
				<TableContainer marginBottom={"20px"}>
					<Table variant="simple">
						<Thead>
							<Tr>
								<Th>Product Name</Th>
								<Th>Order Code</Th>
								<Th>Category</Th>
								<Th>Quantity</Th>
								<Th>Total Price</Th>
								<Th>
									<Select
										variant="flushed"
										colorScheme="teal"
										color={"teal.500"}
										width={"100px"}
										fontSize="14px"
									>
										<option value="7">7 days</option>
										<option value="15">15 days</option>
										<option value="30">Last Month</option>
										<option value="all">All Time</option>
									</Select>
								</Th>
							</Tr>
						</Thead>
						<Tbody>
							{salesRecords &&
								salesRecords?.result.map((item, index) => (
									<Tr key={index}>
										<Td>{item.name}</Td>
										<Td>{item.orderCode}</Td>
										<Td>{item.category}</Td>
										<Td>{item.quantity}</Td>
										<Td>{item.totalPrice}</Td>
										<Td>View invoice</Td>
									</Tr>
								))}
						</Tbody>
					</Table>
				</TableContainer>
				<div className="w-full justify-between flex items-center mt-10">
					<p className="font-semibold text-md">Sales Report</p>
					<Select
						variant="flushed"
						colorScheme="black"
						width={"100px"}
						fontSize="14px"
					>
						<option value="7">7 days</option>
						<option value="15">15 days</option>
						<option value="30">Last Month</option>
						<option value="all">All Time</option>
					</Select>
				</div>
				{salesOrdersReport && (
					<Line data={salesOrdersReport?.result} />
				)}
			</div>
		</div>
	);
}
