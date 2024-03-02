import { connect } from "react-redux";
import { ExportCSV } from "./ExportCSV";
import { ExportReactCSV } from "./ExportReactCSV";
import ImportCSV from "./ImportCSV";
import CustomizedTables from "./Table";
import { useEffect, useState } from "react";

const Schedule = (props) => {
  const [bg, setBg] = useState("bg-white");
  const [color, setColor] = useState("text-black");
  useEffect(() => {
    if (props.darkmode === "active dark mode") {
      setColor("text-white");
      setBg("bg-black");
    } else {
      setColor("text-black");
      setBg("bg-white");
    }
  }, [props.darkmode]);
  return (
    <div className="schedule">
      <h1 className={`text-center text-6xl my-5 ${color}`}>Schedule</h1>
      {/* <ExportCSV csvData={rows} fileName="Foods" /> */}
      <ImportCSV bg={bg} color={color} />
    </div>
  );
};
const mapDispatchToProps = () => {
  return {};
};
const mapStateToProps = (state) => {
  return {
    darkmode: state.darkmode,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Schedule);
