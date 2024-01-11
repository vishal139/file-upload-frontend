import { useEffect, useState } from "react";
import "./App.css";
import UserForm from "./pages/UserForm";
import axios from "axios";
import UploadFiles from "./components/UploadFiles";
const REACT_APP_BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
function App() { 
  const [fileData, setFileData] = useState([]);

   const getAllFiles = async() => {
    const data = await axios.get(`${REACT_APP_BACKEND_URL}/user`);
    if (data?.data) {
      setFileData(data?.data);
    }
  };

  useEffect(() => {
    getAllFiles();
    return () => {};
  }, []);
  return (
    <div className="App">
      <UserForm getAllFiles={ getAllFiles} />
      {fileData.length > 0 && <UploadFiles fileData={ fileData} />}
    </div>
  );
}

export default App;
