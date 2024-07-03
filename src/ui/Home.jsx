import CreateUser from './../features/user/CreateUser';
function Home() {
  return (
    <div className='my-10  text-center sm:my-16 bg-black sm:bg-red-950 leading-3 sm:leading-6'>
      <h1 className="mb-8 uppercase text-xl text-stone-700 font-semibold md:text-3xl  p-4">
        The best pizza.
        <br />
        <span className="text-yellow-500">

        Straight out of the oven, straight to you.
        </span>
      </h1>
      <CreateUser/>
    </div>
  );
}

export default Home;
