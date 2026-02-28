import AdminNavbar from "../../layouts/AdminNavbar";
import "./admin.css";

function Sellers() {
  return (
    <>
      <AdminNavbar />

      <h2 className="page-title">Vendors</h2>

      <table className="admin-table">
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
            <td>655da3154992a4960bff6489</td>
            <td>elf</td>
            <td>elf@gmail.com</td>
            <td>
              <button className="view-btn">view</button>
            </td>
          </tr>

          <tr>
            <td>2</td>
            <td>655c4b32b451e85b2daade96</td>
            <td>vamsi</td>   {/* ✅ NAME CHANGED */}
            <td>vamsi@gmail.com</td>
            <td>
              <button className="view-btn">view</button>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default Sellers;