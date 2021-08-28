import axios from "axios";

const uploadNFT = async (name, description, address, file) => {
  const formData = new FormData();

  formData.append("File", file);

  // Make API call
  await axios({
    method: "post",
    url: `https://api.nftport.xyz/easy_mint?chain=polygon&name=${name}%20NFT&description=${description}&mint_to_address=${address}`,
    headers: {
      Authorization: process.env.API_KEY,
    },
    data: {
      file: file,
    },
  })
    .then((res) => console.log(res.data))
    .catch((err) => console.error(err));
};

export { uploadNFT };
