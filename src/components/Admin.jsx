import { DataGrid } from "@mui/x-data-grid";
import axios from "axios";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

const Admin = () => {
  const [dataRows, setDataRows] = useState();
  const [shouldRefresh, setShouldRefresh] = useState(false);
  const handleDelete = async (email) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      try {
        // Send delete request to your backend API
        await axios.post(`http://localhost:3001/auth/delete/`, {
          email: email,
        });
        // Refresh data after deletion
        setShouldRefresh(!shouldRefresh);
      } catch (error) {
        console.log(error);
      }
    }
  };
  const columns = [
    { field: "id", headerName: "ID" },
    { field: "name", headerName: "Name", flex: 1 },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
    },
    { field: "password", headerName: "Password", flex: 1 },
    {
      field: "actions",
      headerName: "Actions",
      flex: 1,
      renderCell: (params) => (
        <div className="pointer">
          <button>
            <FontAwesomeIcon
              icon={faTrashAlt}
              onClick={() => handleDelete(params.row.email)}
            />
          </button>
        </div>
      ),
    },
  ];
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3001/action/user/all"
        );
        const rowsWithIds = response.data.map((row, index) => ({
          ...row,
          id: index + 1,
        }));
        setDataRows(rowsWithIds);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [shouldRefresh]);
  return (
    <main className="p-4">
      {/* Page content */}
      <div className="p-4">
        <div style={{ width: "100%" }}>
          {dataRows && (
            <DataGrid
              rows={dataRows}
              columns={columns}
              initialState={{
                pagination: {
                  paginationModel: { page: 0, pageSize: 20 },
                },
              }}
              pageSizeOptions={[20, 50, 100]}
              disableRowSelectionOnClick
            />
          )}
        </div>
      </div>
    </main>
  );
};
export default Admin;
