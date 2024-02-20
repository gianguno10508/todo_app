import Calendar from "./components/Calendar";
import Header from "./components/Header";

export default function App() {
  return (
    <div className="container mx-auto max-w-screen-xl p-4 ">
      <div className="header">
        <Header />
      </div>
      <div className="content pt-4">
        <Calendar />
      </div>
    </div>
  );
}
