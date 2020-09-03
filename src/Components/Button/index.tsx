import Konva from 'konva'

const Button = () => {
  const btn = new Konva.Rect({
    x: 100,
    y: 0,
    width: 80,  // 宽度80            
    height: 40, // 高度40            
    fill: 'skyblue',   // 填充颜色            
    stroke: 'skyblue', // 边框颜色            
    strokeWidth: 1,    // 边框厚度            
    cornerRadius: 5,   // 圆角            
    draggable: true    // 是否可拖动   
  })

  return  btn
}

export default Button
