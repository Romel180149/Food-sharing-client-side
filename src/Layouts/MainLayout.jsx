import { createBrowserRouter } from "react-router-dom";
import Root from "../Root";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Registration from "../Pages/Registration";
import AvailableFoods from "../Pages/AvailableFoods";
import AddFood from "../Pages/AddFood";
import ManageMyFoods from "../Pages/ManageMyFoods";
import MyFoodRequest from "../Pages/MyFoodRequest";
import PrivateRoutes from "../Routes/PrivateRoute";
import FoodDetails from "../Pages/FoodDetails";
import UpdateFood from "../Pages/UpdateFood";
import Profile from "../Pages/Profile";
import Dashboard from "../Pages/Dashboard";
import Error from "../Pages/ErrorPage";
import FoodManagement from "../Pages/FoodManagement";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/availableFoods",
        element: <AvailableFoods />,
      },
      {
        path: "/food/:id",
        element: (
          <PrivateRoutes>
            <FoodDetails />
          </PrivateRoutes>
        ),
        loader: ({ params }) =>
          fetch(
            `https://food-sharing-server-side.vercel.app/food/${params.id}`
          ),
      },
      {
        path: "/addFood",
        element: (
          <PrivateRoutes>
            <AddFood />
          </PrivateRoutes>
        ),
      },
      {
        path: "/updateFood/:id",
        element: (
          <PrivateRoutes>
            <UpdateFood />
          </PrivateRoutes>
        ),
        loader: ({ params }) =>
          fetch(
            `https://food-sharing-server-side.vercel.app/food/${params.id}`
          ),
      },
      {
        path: "/manageMyFoods",
        element: (
          <PrivateRoutes>
            <ManageMyFoods />
          </PrivateRoutes>
        ),
      },
      {
        path: "/manageFood",
        element: (
          <PrivateRoutes>
            <FoodManagement />
          </PrivateRoutes>
        ),
      },
      {
        path: "/myFoodRequest",
        element: (
          <PrivateRoutes>
            <MyFoodRequest />
          </PrivateRoutes>
        ),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/registration",
        element: <Registration />,
      },
      {
        path: "/profile",
        element: (
          <PrivateRoutes>
            <Profile />
          </PrivateRoutes>
        ),
      },
      {
        path: "/dashboard",
        element: (
          <PrivateRoutes>
            <Dashboard />
          </PrivateRoutes>
        ),
      },
    ],
  },
]);

export default router;
