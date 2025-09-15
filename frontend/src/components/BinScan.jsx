import { useState } from "react";

export default function BinScan() {
  const [image, setImage] = useState(null);
  const [result, setResult] = useState(null);

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append("file", image);

    const res = await fetch("http://localhost:3000/scan", {
      method: "POST",
      body: formData,
    });
    const data = await res.json();
    setResult(data);
  };

  return (
    <div className="mt-6">
      <h2 className="text-lg font-semibold">AI Bin Scan</h2>
      <input type="file" onChange={(e) => setImage(e.target.files[0])} />
      <button onClick={handleUpload} className="p-2 bg-green-600 text-white rounded ml-2">
        Upload
      </button>
      {result && (
        <div className="mt-2">
          <p>Segregation Score: {result.score}</p>
          <p>Tokens Earned: {result.tokens}</p>
        </div>
      )}
    </div>
  );
}
