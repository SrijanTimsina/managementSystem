import { Avatar } from "@chakra-ui/react";
import { CiSquarePlus } from "react-icons/ci";
import { FaBox } from "react-icons/fa";
import { useQuery } from "@tanstack/react-query";
import { getFastMovingProducts } from "../api";

export default function RightSideBar() {
	const { data: fastMovingProducts } = useQuery({
		queryKey: ["fastMovingProducts"],
		queryFn: getFastMovingProducts,
	});
	console.log(fastMovingProducts);

	return (
		<div className="flex flex-col  w-80 bg-white border-l-2">
			<div className="flex p-10 gap-4 border-b">
				<Avatar
					name="Dan Abrahmov"
					src="https://bit.ly/dan-abramov"
				/>
				<div>
					<p>Bryan Doe</p>
					<p>Admin</p>
				</div>
			</div>
			<div className="flex flex-col gap-8 p-10 border-b">
				<p className="font-semibold text-md">Quick Actions</p>
				<div className="flex justify-between gap-4">
					<p className="flex items-center gap-4 text-gray-600">
						<CiSquarePlus />
						Create Order
					</p>
					<p className="text-gray-600">ctrl + n</p>
				</div>
				<div className="flex justify-between gap-4">
					<p className="flex items-center gap-4 text-gray-600">
						<FaBox />
						Add Product
					</p>
					<p className="text-gray-600">ctrl + p</p>
				</div>
			</div>
			<div className="flex flex-col gap-8 p-10 pb-20">
				<p className="font-semibold text-md">Fast Moving Products</p>

				<div>
					{fastMovingProducts &&
						fastMovingProducts?.result.map((item, index) => (
							<div
								key={index}
								className="flex items-center gap-2 text-gray-600"
							>
								<Avatar
									name={item.name}
									src={item.image}
									size={"sm"}
								/>
								{item.name}
							</div>
						))}
				</div>
			</div>
		</div>
	);
}
