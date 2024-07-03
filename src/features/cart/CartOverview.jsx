import { Link } from "react-router-dom";

function CartOverview() {
  return (
    <div className="uppercase text-center bg-stone-800 text-stone-200 py-4 px-4 sm:py-6 text-sm md:text-base sm:flex items-center justify-between ">
      <p className='space-x-2 font-semibold text-stone-300 sm:space-x-6 '>
        <span>23 pizzas</span>
        <span>$23.45</span>
      </p>
      <Link to='/cart'>Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
