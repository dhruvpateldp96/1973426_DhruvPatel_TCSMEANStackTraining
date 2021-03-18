export const imageHandlerProps = {
  onStart(file) {
    console.log("onStart", file, file.name);
  },

  onSuccess(ret, file) {
    console.log("onSuccess", ret, file.name);
  },

  onProgress({ percent }, file) {
    console.log("onProgress", `${percent}%`, file.name);
  },

  onChange(info) {
    // console.log("onChange", info);
  },

  customRequest({
    action,
    data,
    file,
    filename,
    headers,
    onError,
    onProgress,
    onSuccess,
    withCredentials,
  }) {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "tcsproj");

    fetch("https://api.cloudinary.com/v1_1/dhruvdp96/image/upload", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.secure_url !== "") {
          const uploadedFileUrl = data.secure_url;
          // This appends the value of url in the FORM
          file.url = uploadedFileUrl;
        }
      })
      .catch((err) => console.error(err));
  },
};
