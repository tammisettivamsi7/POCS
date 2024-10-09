import React, { useState } from 'react';
import FileUpload from './FileUpload';

const DragAndDrop = () => {
    const [files, setFiles] = useState([]);

    const handleFilesAdded = (newFiles) => {
        setFiles([...files, ...newFiles]);
    };

    const handleViewFile = (file) => {
        const fileURL = URL.createObjectURL(file);
        window.open(fileURL, '_blank');
    };

    return (
        <div className="drag-and-drop-container">
            <div className="drag-and-drop">
                <h2>File Upload with Drag and Drop</h2>
                <FileUpload onFilesAdded={handleFilesAdded} />
            </div>
            <div className="file-list">
                <h3>Uploaded Files:</h3>
                <ol>
                    {files.map((file, index) => (
                        <li key={index}>
                            {file.name}
                            <button onClick={() => handleViewFile(file)}>View</button>
                        </li>
                    ))}
                </ol>
            </div>
        </div>
    );
};

export default DragAndDrop;