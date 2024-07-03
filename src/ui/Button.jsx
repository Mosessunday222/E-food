import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Button({children, disabled, to}) {

    if(to) return
    <Link to={to}>{children}</Link>
    return (
        <button 
        disabled={disabled}
     className= " inline-block bg-yellow-400 px-4 py-3 font-semibold text-stone-800 tracking-widest rounded-full  hover:bg-yellow-300 uppercase transition-colors duration-1000 focus-outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2  active:bg-red-700 sm:py-4 sm:px-6"> 
       {children}
        </button>
    )
}


Button.propTypes ={
    disabled: PropTypes.bool.isRequired,
    children: PropTypes.string,
    to: PropTypes.string
}
export default Button  