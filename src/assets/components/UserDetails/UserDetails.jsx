import { useLoaderData } from "react-router-dom";

const UserDetails = () => {
  const user = useLoaderData();
  const { company, id } = user;
  console.log(user);
  return (
    <>
      <div>
        <p>Id: {id}</p>
        <p>Company Information:</p>
        <p>{company.name}</p>
        <p> {company.bs}</p>
        <p> {company.catchPhrase}</p>
      </div>
    </>
  );
};

export default UserDetails;
