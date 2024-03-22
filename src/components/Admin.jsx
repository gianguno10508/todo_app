import { DataGrid } from "@mui/x-data-grid";
import axios from "axios";
import { useEffect, useState } from "react";

const Admin = () => {
  const [dataRows, setDataRows] = useState();
  const [shouldRefresh, setShouldRefresh] = useState(false);
  const columns = [
    { field: "id", headerName: "ID" },
    { field: "name", headerName: "Name", flex: 1 },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
    },
    { field: "password", headerName: "Password", flex: 1 },
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
