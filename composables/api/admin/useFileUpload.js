import * as qiniu from "qiniu-js";

export default function useFileUpload() {
  const addImage = (data) =>
    $fetch("/api/admin/image", {
      method: "POST",
      body: data,
    });

  // 获取上传 token
  const fetchToken = () =>
    $fetch("/api/admin/upload", {
      method: "get",
    });

  const fileUpload = async (file, callback) => {
    const { token } = await fetchToken();
    const observable = qiniu.upload(file, file.name, token, {}, {});

    observable.subscribe({
      async complete(res) {
        const data = {
          url: res.key,
        };
        console.log(callback);
        await addImage(data);
        if (typeof callback === "function") {
          callback();
        }
      },
    });
  };
  return {
    fileUpload,
  };
}
