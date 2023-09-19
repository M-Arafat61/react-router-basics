import { useLoaderData } from "react-router-dom";
import User from "../User/User";

const Users = () => {
  const users = useLoaderData();
  // console.log(users);
  return (
    <div>
      <h2>Total users: {users.length}</h2>
      <div className="grid grid-cols-3 gap-5">
        {users.map(user => (
          <User key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
};

export default Users;
