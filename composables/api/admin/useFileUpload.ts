export default function useFileUpload() {

  //上传图片
  const fetchImage = () => useFetch('/api/admin/uploadToken', {
    method: 'get'
  })

  // 获取上传 token
  const fetchToken = () => {
  }

  //文件上传
  const fetchUploadImage = () => {

  }
  return {
    fetchImage
  }
}
