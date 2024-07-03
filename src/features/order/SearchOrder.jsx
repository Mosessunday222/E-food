import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchOrder() {
  const [query, setQuery] = useState();
  const navigation = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (!query) return;
    navigation(`/order/${query}`);
    setQuery("");
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
      
        placeholder="search order"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="rounded-full px-4 py-3 text-sm bg-yellow-600 sm:64  placeholder:text-stone-400  sm:focus:w-72 transition-all duration-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-opacity-20"
      />
    </form>
  );
}

export default SearchOrder;
