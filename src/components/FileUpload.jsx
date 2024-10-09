import React from 'react';
import { useDropzone } from 'react-dropzone';
import "../assests/style/FileUpload.css";

const FileUpload = ({ onFilesAdded }) => {
    const onDrop = (acceptedFiles) => {
        onFilesAdded(acceptedFiles);
    };

    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

    return (
        <div {...getRootProps()} className={`dropzone ${isDragActive ? 'active' : ''}`}>
            <input {...getInputProps()} />
            {isDragActive ? (
                <p>Drop the files here ...</p>
            ) : (
                <p>Drag 'n' drop some files here, or click to select files</p>
            )}
        </div>
    );
};

export default FileUpload;