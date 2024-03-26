import axios from "axios";
import { useEffect, useState } from "react";
import * as XLSX from "xlsx";
import { getInforUser } from "../../untils/functions";

function Schedule2() {
  const [dataRes, setDataRes] = useState([]);
  const user = getInforUser();
  useEffect(() => {
    if (user && user !== null) {
      if (user.file !== "") {
        const fetchData = async () => {
          try {
            const response = await axios.post(
              "http://localhost:3001/action/download",
              { id: user._id }
            );
            setDataRes(response.data);
          } catch (error) {
            console.log(error);
          }
        };
        fetchData();
      }
    }
  }, []);
  const handleFileUpload = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    const fileName = e.target.files[0];
    formData.append("id", user._id);
    formData.append("file", fileName);
    const reader = new FileReader();
    reader.readAsBinaryString(e.target.files[0]);
    reader.onload = (e) => {
      const data = e.target.result;
      const workbook = XLSX.read(data, { type: "binary" });
      const sheetName = workbook.SheetNames[0];
      const sheet = workbook.Sheets[sheetName];
      const parsedData = XLSX.utils.sheet_to_json(sheet);
      setDataRes(parsedData);
    };
    try {
      const response = await axios.post(
        "http://localhost:3001/action/upload",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="schedule mt-5 ml-5">
      <input type="file" accept=".xlsx, .xls" onChange={handleFileUpload} />

      {dataRes.length > 0 && (
        <table className="table">
          <thead>
            <tr>
              {Object.keys(dataRes[0]).map((key) => (
                <th key={key}>{key}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {dataRes.map((row, index) => (
              <tr key={index}>
                {Object.values(row).map((value, index) => (
                  <td key={index}>{value}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default Schedule2;
