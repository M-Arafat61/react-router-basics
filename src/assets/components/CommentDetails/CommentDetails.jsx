import { useLoaderData } from "react-router-dom";

const CommentDetails = () => {
  const commentDetails = useLoaderData();
  const { id, body } = commentDetails;
  // console.log(commentDetails);
  return (
    <div className="p-5 m-5 border-2 border-pink-200 bg-sky-300 rounded-lg">
      <h2>Comment info of ID: {id}</h2>
      <p>Comment body: {body}</p>
    </div>
  );
};

export default CommentDetails;
