import { useState, useEffect } from "react";
import DropZone from "../components/dropzone";
import { uploadNFT } from "../lib/apiCalls";

export default function Home() {
  const [file, setFile] = useState({});
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [wallet, setWallet] = useState("");
  const [preview, setPreview] = useState({});

  useEffect(() => {
    uploadNFT(
      "bob",
      "text",
      "0x1928a49e355229281762e10511A3138a68E77fE8",
      file
    );
  });

  // upload file and add it to state
  const onFileChange = (e) => {
    setFile(e.target.files[0]);
    //set the preview
    setPreview(URL.createObjectURL(e.target.files[0]));
  };

  // change handlers for input fields
  const onNameChange = (e) => setName(e.target.value);
  const onDescriptionChange = (e) => setDescription(e.target.value);
  const onWalletChange = (e) => setWallet(e.target.value);

  return (
    <div>
      <form
        method="POST"
        onSubmit={() => uploadNFT(name, description, wallet, file)}
      >
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
        <button type="submit">Upload</button>
      </form>
    </div>
  );
}
