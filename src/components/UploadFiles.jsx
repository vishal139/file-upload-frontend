import React from "react";

const UploadFiles = ({ fileData }) => {

    const handleView = (path) => {
        if (!path)
        {
            alert('no file present');
            return;
        }
        const pathUrl = `http://localhost:8000/${path}`;
        window.open(pathUrl, "_blank");
    }
  return (
      <div className="fileContainer">
          
          {
              fileData.map((data) => {
                  return (
                    <div className="fileItem" key={data.name}>
                          <div className="userName">{ data.name}</div>
                          <div className="fileName" onClick={()=>handleView(data.resume)}>view file</div>
                    </div>
                  );
              })
        }
    </div>
  );
};

export default UploadFiles;
