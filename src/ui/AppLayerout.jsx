import Header from "./header/Header";
import CartOverview from "./../features/cart/CartOverview";
import { Outlet, useNavigation } from "react-router-dom";
import Loader from "./Loader";

function AppLayerout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";
  console.log(navigation);
  const overfolwScrol = 'false'
  return (
    <div className="grid grid-rows-[auto_1fr_auto] h-screen">
      {/* {isLoading && <Loader />} */}
      {true && <Loader />}
      <Header />
      <div className=" ">
      <main className="max-w-3xl  m-auto  ">
        <h1>Main</h1>
        <Outlet />
      </main>
      </div>

      <CartOverview />
    </div>
  );
}

export default AppLayerout;
