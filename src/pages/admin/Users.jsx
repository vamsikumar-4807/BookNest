import AdminNavbar from "../../layouts/AdminNavbar";
import "./users.css";

function Users() {
  return (
    <>
      <AdminNavbar />

      <h1 style={{ textAlign: "center", marginTop: "20px" }}>Users</h1>

      <div className="users-container">
        <table className="users-table">
          <thead>
            <tr>
              <th>sl/no</th>
              <th>UserId</th>
              <th>User name</th>
              <th>Email</th>
              <th>Operation</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>1</td>
              <td>655d9f4c4f4ace5f198b9abf</td>
              <td>arshad</td>
              <td>arshad@gmail.com</td>
              <td>
                <button className="view-btn">view</button>
              </td>
            </tr>

            <tr>
              <td>2</td>
              <td>655e571f62e8144c8a9cb27f</td>
              <td>shivani</td>
              <td>shivani@gmail.com</td>
              <td>
                <button className="view-btn">view</button>
              </td>
            </tr>

            <tr>
              <td>3</td>
              <td>6580442915b2ba8ff503a659</td>
              <td>vamsi</td>   {/* ✅ changed from syed */}
              <td>vamsi@gmail.com</td>
              <td>
                <button className="view-btn">view</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Users;