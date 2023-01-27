import AddCategories from "../pages/addCategories/AddCategories";
import AddServices from "../pages/addServices/AddServices";
import AvailableCoupon from "../pages/coupon/availableCoupon/AvailableCoupon";
import AddCoupon from "../pages/coupon/AddCoupon";
import Dashboard from "../pages/dashboard/Dashboard";
import Booking from "../pages/appointment/Booking";
import Login from "../pages/login/Login";
import { Route, Routes } from "react-router-dom";
import AddSalon from "../pages/admin/AddSalon";
import ListofSalon from "../pages/admin/ListofSalon";
import AllCategories from "../pages/addCategories/AllCategories";
import AllServices from "../pages/addServices/AllServices";
import SalonRegistration from "../pages/admin/SalonRegistration";
import IsLoggedIn from "./IsLoggedIn";
import IsBP from "./IsBP";
import IsAlreadyLoggedIn from "./IsAlreadyLoggedIn";
import PageNotFound from "./../pages/PageNotFound/PageNotFound";

const Routers = () => {
	return (
		<Routes>
			<Route
				path="/"
				element={
					<IsLoggedIn>
						<Dashboard />
					</IsLoggedIn>
				}
			/>
			<Route
				path="/login"
				element={
					<IsAlreadyLoggedIn>
						<Login />
					</IsAlreadyLoggedIn>
				}
			/>
			<Route
				path="/booking"
				element={
					<IsLoggedIn>
						<Booking />
					</IsLoggedIn>
				}
			/>
			<Route
				path="/available-coupons"
				element={
					<IsLoggedIn>
						<AvailableCoupon />
					</IsLoggedIn>
				}
			/>
			<Route
				path="/available-services"
				element={
					<IsLoggedIn>
						<AllServices />
					</IsLoggedIn>
				}
			/>
			<Route
				path="/categories"
				element={
					<IsLoggedIn>
						<AllCategories />
					</IsLoggedIn>
				}
			/>
			<Route
				path="/add-category"
				element={
					<IsLoggedIn>
						<AddCategories />
					</IsLoggedIn>
				}
			/>
			<Route
				path="/add-service"
				element={
					<IsLoggedIn>
						<AddServices />
					</IsLoggedIn>
				}
			/>
			<Route
				path="/add-coupon"
				element={
					<IsLoggedIn>
						<AddCoupon />
					</IsLoggedIn>
				}
			/>
			<Route
				path="/register-owner"
				element={
					<IsLoggedIn>
						<IsBP>
							<SalonRegistration />
						</IsBP>
					</IsLoggedIn>
				}
			/>
			<Route
				path="/addsalon"
				element={
					<IsLoggedIn>
						<IsBP>
							<AddSalon />
						</IsBP>
					</IsLoggedIn>
				}
			/>
			<Route
				path="/listofsalon"
				element={
					<IsLoggedIn>
						<IsBP>
							<ListofSalon />
						</IsBP>
					</IsLoggedIn>
				}
			/>
			<Route path="*" element={<PageNotFound />} />
		</Routes>
	);
};
export default Routers;
