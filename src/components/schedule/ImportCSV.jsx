import React, { useState } from "react";
import * as XLSX from "xlsx";
import Input from "@material-ui/core/Input";
import CustomizedTables from "./Table";

function ImportCSV() {
  const [items, setItems] = useState([]);

  const readExcel = (file) => {
    const promise = new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsArrayBuffer(file);

      fileReader.onload = (e) => {
        const bufferArray = e.target.result;
        const wb = XLSX.read(bufferArray, { type: "buffer" });
        const wsname = wb.SheetNames[0];
        const ws = wb.Sheets[wsname];
        const data = XLSX.utils.sheet_to_json(ws);
        resolve(data);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    });

    promise.then((data) => {
      setItems(data);
    });
  };

  return (
    <div>
      <Input
        type="file"
        className="input"
        onChange={(e) => {
          const file = e.target.files[0];
          readExcel(file);
        }}
      />
      {items.length > 0 && <CustomizedTables data={items} />}
    </div>
  );
}

export default ImportCSV;
