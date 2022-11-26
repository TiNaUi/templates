/**
 * 上传hook
 */

import { request } from "@/apis/request"
import { useFileStore } from "@/store"
import { computed } from "vue"

export const useUpload = async (files: UniApp.ChooseFileSuccessCallbackResultFile[] = [], params: Partial<{ prefix: string }> = {}): Promise<Array<{ hash: string; key: string }>> => {
  const fileStore = useFileStore()
  fileStore.updateToken()
  const token = computed(() => fileStore.token)
  const { prefix } = params
  const _prefix = prefix || ''
  const getKey = (): string => {
    const randmKey = new Date().getTime() + Math.ceil(Math.random() * 30)
    return fileStore.uploadPath ? String(fileStore.uploadPath.wallpaper + _prefix + String(randmKey)) : String(randmKey)
  }
  const upload = (file: UniApp.ChooseFileSuccessCallbackResultFile) => {
   return request.upload<{ hash: string; key: string }>(fileStore.uploadUrl, {
      formData: {
        token: token.value,
        key: getKey()
      },
      filePath: file.path,
      name: 'file',
    })
  }

  const uploadRes = await Promise.allSettled(files.map(file => upload(file)))

  return uploadRes.filter(item => item.status === 'fulfilled').map(item => {
    if (item.status === 'fulfilled')
      return item.value.data;
  }) as unknown as Promise<Array<{ hash: string; key: string }>>
}