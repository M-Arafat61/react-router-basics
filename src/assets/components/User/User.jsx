import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const User = ({ user }) => {
  //   console.log(user);
  const { name, address, phone, website, username, id } = user;

  return (
    <>
      <div className="border bg-blue-300 rounded-lg border-cyan-500 p-2">
        <h2 className="font-semibold">{name}</h2>
        <span>
          Username: <i>{username}</i>
        </span>
        <p>
          Address:
          {address.city},{address.street},{address.suite}
        </p>
        <p>Phone: {phone}</p>
        <p>Website: {website}</p>
        <div className="flex items-center mt-2 justify-center">
          <Link to={`/user/${id}`}>
            <button className="text-white px-4 py-1 font-semibold bg-blue-500 rounded-lg">
              Details
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

User.propTypes = {
  user: PropTypes.object.isRequired,
};

export default User;
