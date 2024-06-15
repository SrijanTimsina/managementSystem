import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import RightSideBar from "./RightSideBar";

const Layout = () => {
	return (
		<div className="page-layout min-h-screen">
			<div className="flex bg-gray-100 h-full justify-between">
				<Sidebar />

				<Outlet />
				<RightSideBar />
			</div>
			<ReactQueryDevtools initialIsOpen={true} />
		</div>
	);
};

export default Layout;
