import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <div>
      <div className="text-center">
        <h2>Oops!</h2>
        <p>{error.statusText || error.message}</p>
      </div>
      {error.status === 404 && (
        <div className="flex flex-col justify-center items-center">
          <h3>Page not found</h3>
          <p>Go back to home page</p>
          <Link to="/">
            <button className="bg-amber-500 hover:bg-amber-700 hover:text-white px-3 py-1 ml-5 rounded-lg text-xl font-semibold ">
              Home
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default ErrorPage;
