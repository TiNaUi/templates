import { Plugin } from 'vite'

export const templateInset = (components: string[] = []):Plugin => {
  let string = ''
  components.forEach(str => {
    string += str
  })
  return {
    name: 'vite-plugin-template-inset',
    transform: (code, fileName) => {
      if (/UserCenter\//g.test(fileName) && /\.vue/.test(fileName)) {
        return code.replace(/(\<template\>\s*\<.+?\>)/,"$1"+string)
      }
      if(/\.vue/.test(fileName)&&/^\<template/.test(code)) {
        return code.replace(/(\<template\>\s*\<.+?\>)/,"$1"+string)
      }
    }
  }
}