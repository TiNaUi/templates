export function h5DownLoadImage(src: string) {
  let filename: string; //图片名称
  let filetype: string; //图片类型
  let path = src
  if (path.indexOf("/") > 0) {
    var file = path.substring(path.lastIndexOf("/") + 1, path.length);
    var fileArr = file.toLowerCase().split(".");
    filename = fileArr[0];
    filetype = fileArr[1];
  }
  let image = new Image();
  image.setAttribute("crossOrigin", "anonymous");
  image.crossOrigin = '*';  // 解决跨域
  image.onload = function () {
    let canvas = document.createElement("canvas");
    canvas.width = image.width;
    canvas.height = image.height;
    let context = canvas.getContext("2d")!;
    context.drawImage(image, 0, 0, image.width, image.height);
    let img = canvas.toDataURL(`image/${filetype}`);    //得到图片的base64编码数据
    let a = document.createElement("a");  // 生成一个a元素
    let event = new MouseEvent("click");            // 创建一个单击事件
    a.download = filename;                                            // 设置图片名称，-------------你传递的图片名称
    a.href = img                                                      // 将生成的URL设置为a.href属性
    a.dispatchEvent(event);                                           // 触发a的单击事件
  };
  image.src = path + '?v=' + Math.random();                           // 防止缓存
}