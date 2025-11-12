import { useParams } from "react-router-dom";

function UserDetails() {
  const { id } = useParams();

  return (
    <>
      <h2>User Details</h2>
      <p>User ID from URL is: {id}</p>
    </>
  );
}

export default UserDetails;
