
const tempColor = 'rgb(0, 198, 87)'
const tempColorRgb = {
  b:87,
  g:198,
  r:0
}

export const useButtonStyle = () => {
  let style = 'background:'+tempColor+';color:#ffffff;';

  style += "box-shadow: 0px " + uni.upx2px(8)+"px "+uni.upx2px(32)+"px -"+uni.upx2px(8)+"px rgba("+tempColorRgb.r+", "+tempColorRgb.g+", "+tempColorRgb.b+", 0.3);";
  return style;
}