import qiniu from "qiniu";

// 获取七牛云 token
export default defineEventHandler(async (event) => {
  const { qiniuAccessKey, qiniuSecretKey, qiniuBucket } = useRuntimeConfig();
  const mac = new qiniu.auth.digest.Mac(qiniuAccessKey, qiniuSecretKey);
  const options = {
    scope: qiniuBucket,
  };

  const putPolicy = new qiniu.rs.PutPolicy(options);
  const token = putPolicy.uploadToken(mac);
  return {
    token,
  };
});
