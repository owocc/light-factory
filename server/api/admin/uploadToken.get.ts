import qiniu from 'qiniu'

export default defineEventHandler(async (event) => {
  const {qiniuAccessKey, qiniuSecretKey, qiniuBucket} = useRuntimeConfig()
  const mac = new qiniu.auth.digest.Mac(qiniuAccessKey, qiniuSecretKey)

  const options: qiniu.rs.PutPolicyOptions = {
    scope: qiniuBucket
  }

  const putPolicy = new qiniu.rs.PutPolicy(options)
  const token = putPolicy.uploadToken(mac)
  return {
    token
  }
})
