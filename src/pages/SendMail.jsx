import axios from "axios";
import React, { useState } from "react";
import Header from "../components/common/Header";

const SendMail = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    if (selectedFile) {
      const formData = new FormData();
      formData.append("image", selectedFile);

      try {
        const response = await axios.post(
          "http://localhost:3000/portfolio/add-portfolio",
          formData,
        );
        console.log("File upload successful:", response.data);
      } catch (error) {
        console.error("Error uploading file:", error);
      }
    } else {
      console.log("No file selected");
    }
  };

  return (
    <div className="m-5 w-full overflow-hidden rounded-lg border bg-white p-3">
      <Header title="Mailbox" />
      <main className="h-[calc(100%-61px)] overflow-auto p-3">
        <h2>File upload</h2>
        <form onSubmit={handleFormSubmit}>
          <input type="file" onChange={handleFileChange} />
          <button type="submit">Upload</button>
        </form>
      </main>
    </div>
  );
};

export default SendMail;
