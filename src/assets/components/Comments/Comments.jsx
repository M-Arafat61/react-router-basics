import { useLoaderData } from "react-router-dom";
import Comment from "../Comment/Comment";

const Comments = () => {
  const comments = useLoaderData();
  return (
    <div>
      <h3>Total comments: {comments.length}</h3>
      <div className="grid grid-cols-3 gap-5">
        {comments.slice(0, 50).map(comment => (
          <Comment key={comment.id} comment={comment} />
        ))}
      </div>
    </div>
  );
};

export default Comments;
