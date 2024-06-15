import React, { useState } from 'react';

const Upload = () => {
  const [file, setFile] = useState(null);
  const [transactionId, setTransactionId] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState('');

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);
  };

  const uploadFile = async () => {
    if (!file) {
      setError('Please select a file to upload.');
      return;
    }

    setUploading(true);

    try {
      const formData = new FormData();
      formData.append('file', file);

      const response = await fetch('https://arweave.net/graphql', {
        method: 'POST',
        body: formData,
      });

      const result = await response.json();
      console.log(result);

      if (response.ok) {
        setTransactionId(result.data.transaction.id);
        setUploading(false);
        setError('');
        // Show success popup
        window.alert('File uploaded successfully!');
      } else {
        setError('Error uploading file. Please try again.');
        setUploading(false);
      }
    } catch (error) {
      console.error('Error uploading file:', error);
      setError('Error uploading file. Please try again.');
      setUploading(false);
    }
  };

  return (
    <div>
      <h2>Upload File to Arweave</h2>
      <input type="file" onChange={handleFileChange} />
      <button onClick={uploadFile} disabled={uploading}>
        {uploading ? 'Uploading...' : 'Upload File'}
      </button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {transactionId && (
        <p>
          File uploaded successfully! Transaction ID:{' '}
          <a href={`https://viewblock.io/arweave/tx/${transactionId}`} target="_blank" rel="noopener noreferrer">
            {transactionId}
          </a>
        </p>
      )}
    </div>
  );
};

export default Upload;
