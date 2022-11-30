import { defineConfig, Plugin } from 'vite'
import path from 'path';
import fs from 'fs-extra';
import uni from '@dcloudio/vite-plugin-uni'
import { resolve } from 'path'
import DefineOptions from 'unplugin-vue-define-options/vite'
import { templateInset } from "./plugins/viteInjectComponents"

function copyFile(): Plugin {
	return {
    name: 'uni-static',
		enforce: 'post',
		async writeBundle() {
			await fs.copy(
				path.resolve(__dirname, 'static'),
				path.join(
					__dirname,
					'dist',
					process.env.NODE_ENV === 'production' ? 'build' : 'dev',
					process.env.UNI_PLATFORM!,
					'static'
				)
			);
		},
	};
}

// https://vitejs.dev/config/
export default defineConfig({
  envDir: resolve(__dirname, 'env'),
  plugins: [templateInset(["<LoginModel ref='loginModel'></LoginModel>"]), uni(), DefineOptions(), copyFile()],
  resolve: {
      // 配置别名
      alias: {
          '@': resolve(__dirname, 'src')
      }
  },
  css: {
    // css预处理器
    preprocessorOptions: {
      scss: {
        // 因为uni.scss可以全局使用，这里根据自己的需求调整
        additionalData: '@import "./src/styles/global.scss";'
      }
    }
  },
  // 开发服务器配置
  server: {
      host: '0.0.0.0',
      port: 8080,
      // 请求代理
      proxy: {
        // 个人习惯，这里就用/dev作为前缀了
        '/api': {
          target: 'https://www.zukmb.cn/mini-cms',
          changeOrigin: true,
          // 路径重写，去掉/dev
          // rewrite: (path) => path.replace(/^\/dev/, '')
        }
      }
  },
  build: {
      // 禁用 gzip 压缩大小报告，以提升构建性能
      // brotliSize: false,
      /** 配置h5打包js,css,img分别在不同文件夹start */
      assetsDir: 'static/',
      minify: 'terser',
      rollupOptions: {
          output: {
              chunkFileNames: 'static/js/[name]-[hash].js',
              entryFileNames: 'static/js/[name]-[hash].js',
              assetFileNames: 'static/[ext]/[name]-[hash].[ext]'
          }
      }
      /** 配置h5打包js,css,img分别在不同文件夹end */
  }
})
