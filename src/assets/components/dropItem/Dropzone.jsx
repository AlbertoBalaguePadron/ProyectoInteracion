import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";

function Dropzone({ onFileSelected }) {
  const onDrop = useCallback(
    (acceptedFiles) => {
      onFileSelected(acceptedFiles[0]);
    },
    [onFileSelected]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: ".pdf",
    maxSize: 1024 * 1024 * 10,
    onDrop,
  });

  return (
    <div {...getRootProps()} className="dropzone">
      <input {...getInputProps()} />
      {isDragActive ? (
        <p>Suelta el archivo aquí...</p>
      ) : (
        <div>
          <h2>Arrastra y suelta imágenes</h2>
          <h4>O</h4>
          <p>Suelta el archivo aquí...</p>
        </div>
      )}
    </div>
  );
}

export default Dropzone;
