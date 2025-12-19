const Detail = ({ onLogout }) => {
  const [active, setActive] = useState("dashboard");

  return (
    <>
      <div className="flex gap-4 mb-6">
        <button onClick={() => setActive("dashboard")}>Dashboard</button>
        <button onClick={() => setActive("dash")}>Dash</button>
      </div>

      {active === "dashboard" && <Dashboard onLogout={onLogout} />}
      {active === "dash" && <Dash onLogout={onLogout} />}
    </>
  );
};

export default Detail;
