import { Link } from "react-router-dom";

function Home() {
  const users = [
    { id: 1, name: "Lekha" },
    { id: 2, name: "Sarthak" },
    { id: 3, name: "Aarav" }
  ];

  return (
    <>
      <h2>User List</h2>
      {users.map((u) => (
        <p key={u.id}>
          <Link to={`/user/${u.id}`}>{u.name}</Link>
        </p>
      ))}
    </>
  );
}

export default Home;
