import { ExportCSV } from "./ExportCSV";
import { ExportReactCSV } from "./ExportReactCSV";
import ImportCSV from "./ImportCSV";
import CustomizedTables from "./Table";

const Schedule = () => {

  return (
    <div className="schedule">
      <h1 className="text-center text-6xl mb-3">Schedule</h1>
      {/* <ExportCSV csvData={rows} fileName="Foods" /> */}
      <ImportCSV />
    </div>
  );
};
export default Schedule;
