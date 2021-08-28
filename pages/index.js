import { useState } from "react";
import DropZone from "../components/dropzone";
import { uploadNFT } from "../lib/apiCalls";

export default function Home() {
  const [file, setFile] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [wallet, setWallet] = useState("");
  const [preview, setPreview] = useState({});

  // upload file and add it to state
  const onFileChange = (e) => {
    const newFile = e.target.files[0];
    console.log(`file: ${newFile}`);
    // BUG: not working
    setFile(newFile);
    console.log(file);
    setPreview(URL.createObjectURL(newFile));
  };

  // change handlers for input fields
  const onNameChange = (e) => setName(e.target.value);
  const onDescriptionChange = (e) => setDescription(e.target.value);
  const onWalletChange = (e) => setWallet(e.target.value);

  return (
    <div>
      <form method="POST">
        {/* Inputs */}
        <input
          type="text"
          name="name"
          placeholder="NFT Name"
          onChange={onNameChange}
          required
        />
        <input
          type="text"
          name="description"
          placeholder="NFT Description"
          onChange={onDescriptionChange}
          required
        />
        <input
          type="text"
          name="wallet"
          placeholder="ETH Wallet Address"
          onChange={onWalletChange}
          required
        />
        <input type="file" name="file" onChange={onFileChange} required />

        {/* Image and upload button */}
        <img src={preview} />
        <button
          type="submit"
          onClick={() => uploadNFT(name, description, wallet, file)}
        >
          Upload
        </button>
      </form>
    </div>
  );
}
