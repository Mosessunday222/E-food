import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./ui/Home";
import Error from "./ui/Error";
import Menu, { loader as menuLoader } from "./features/menu/Menu";
import Cart from "./features/cart/Cart";
import CreateOrder from "./features/order/CreateOrder";
import Order, { loader as orderLoader } from "./features/order/Order";
import { action as createOrderAction } from "./features/menu/createOrderAction";
import AppLayerout from "./ui/AppLayerout";
const router = createBrowserRouter([
  {
    element: <AppLayerout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },

      // {
      //   path: "/",
      //   element: <CreateOrder />,
      //   action: createOrderAction,
      // },

     

      {
        path: "/menu",
        element: <Menu />,
        loader: menuLoader,
        errorElement: <Error />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },

      // {
      //   path: "/order/new",
      //   element: <CreateOrder />,
      //   action: createOrderAction,
      // },

      {
        path: "/order/:orderId",
        element: <Order />,
        loader: orderLoader,
        errorElement: <Error />,
      },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
