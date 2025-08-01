import React, { useState } from "react";
import Papa from "papaparse";

import s from "./FileUploader.module.scss";

const FileUploader = ({ onDataParsed }) => {
  const [isFile, setIsFile] = useState(false);
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      const text = e.target.result;

      Papa.parse(text, {
        header: true,
        skipEmptyLines: true,
        complete: (results) => {
          onDataParsed(results.data);
        },
        error: (error) => {
          console.error("Ошибка парсинга:", error);
        },
      });
    };

    reader.readAsText(file);
    setIsFile(true);
  };

  return (
    <div className={s.container}>
      <input
        id="file-upload"
        className={s.input}
        type="file"
        accept=".csv"
        onChange={handleFileChange}
      />
      <label htmlFor="file-upload" className={s.customInput}>
        <p className={s.text}>
          {!isFile ? "Choose CSV file" : "Choose another file"}
        </p>
      </label>
    </div>
  );
};

export default FileUploader;
