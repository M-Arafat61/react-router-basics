import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const Comment = ({ comment }) => {
  //   console.log(comment);
  const { id, name, email } = comment;
  return (
    <div className="border bg-blue-300 rounded-lg border-cyan-500 p-2">
      <p>Commenter ID: {id}</p>
      <p>
        <span>Comment: {name}</span>
      </p>
      <p>
        <i>Email: {email}</i>
      </p>
      <div className="mt-2 flex justify-center">
        <Link
          to={`/comments/${id}`}
          className="text-white px-4 py-1 font-semibold bg-blue-500 rounded-lg"
        >
          <button>Comment Details</button>
        </Link>
      </div>
    </div>
  );
};

Comment.propTypes = {
  comment: PropTypes.object.isRequired,
};

export default Comment;
