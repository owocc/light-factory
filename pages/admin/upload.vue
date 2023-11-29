<script setup lang="ts">
import * as qiniu from 'qiniu-js'

const imgUrl = ref('')

const file = ref<HTMLInputElement>()
const {fetchImage} = useFileUpload()
const handlerUpload = async () => {
  const tokenData = await fetchImage()
  const token = tokenData.data.value!.token
  if (file.value?.files && file.value.files.length <= 0) {
    return
  }
  const uploadFile = file.value.files[0]
  const observable = qiniu.upload(uploadFile, uploadFile.name, token, {}, {})
  const subscription = observable.subscribe({
    next(res) {
      console.log(res)
    },
    complete(res) {
      console.log('success', res)
      imgUrl.value = `http://s4rqo3ym1.hn-bkt.clouddn.com/${res.key}`
    }
  })
}

</script>
<template>
  <div>
    <input type="file" ref="file">
    <button @click="handlerUpload">Upload</button>
    <img :src="imgUrl" alt="image">
  </div>
</template>
