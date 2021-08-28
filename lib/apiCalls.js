import axios from "axios";

const uploadNFT = async (name, description, address, file) => {
  const formData = new FormData();
  formData.append("file", file);

  // Make API call
  await axios({
    method: "post",
    url: "https://api.nftport.xyz/easy_mint",
    params: {
      chain: "polygon",
      name: name,
      description: description,
      mint_to_address: address,
    },
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: process.env.API_KEY,
      "content-type":
        "multipart/form-data; boundary=---011000010111000001101001",
    },
    data: formData,
  });

  axios
    .request(options)
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.error(error);
    });
};

export { uploadNFT };
