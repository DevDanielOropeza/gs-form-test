import { useState, useRef } from "react";

function App() {

  const [users, setUsers] = useState([]);

  const emailRef = useRef(null);
  const nombreRef = useRef(null);
  const countryRef = useRef(null);

  const onSubmit = (e) => {
    e.preventDefault();
    if (emailRef.current.value === "" || nombreRef.current.value === "") return;
    setUsers(prevUsers => [...prevUsers, {
      email: emailRef.current.value,
      name: nombreRef.current.value,
      country: countryRef.current.value,
    }]);

  }
  return (
    <main className="container mt-5">
      <form onSubmit={onSubmit}>
        <div className="mb-3">
          <label htmlFor="emailInput" className="form-label">Correo electrónico</label>
          <input type="email" className="form-control" id="emailInput" ref={emailRef} />
        </div>
        <div className="mb-3">
          <label htmlFor="nameInput" className="form-label">Nombre</label>
          <input type="text" className="form-control" id="nameInput" ref={nombreRef} />
        </div>
        <div className="mb-3">
          <label htmlFor="country" className="form-label">País</label>
          <select id="country" className="form-select" aria-label="País" ref={countryRef}>
            <option value={"México"}>México</option>
            <option value={"USA"}>USA</option>
            <option value={"Canada"}>Canada</option>
          </select>
        </div>

        <button type="submit" className="btn btn-primary">Guardar</button>
      </form>
      <hr />
      {/* Table.... */}
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Correo electrónico</th>
            <th scope="col">Nombre</th>
            <th scope="col">País</th>
          </tr>
        </thead>
        <tbody>
          {users && users.map((user, idx) => (
            <tr key={idx}>
              <th scope="row">{idx + 1}</th>
              <td>{user.email}</td>
              <td>{user.name}</td>
              <td>{user.country}</td>
              <td>{user.subscribed}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}

export default App;
