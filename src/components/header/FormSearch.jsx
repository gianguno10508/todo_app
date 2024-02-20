import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const FormSearch = () => {
  return (
    <div className="relative">
      <input
        type="text"
        className="border border-gray-300 p-2 pl-10 w-full rounded-full"
        placeholder="Search..."
      />
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <FontAwesomeIcon icon={faSearch} className="text-gray-500" />
      </div>
    </div>
  );
};
export default FormSearch;
