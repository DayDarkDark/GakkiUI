import React, { useEffect } from 'react'
import Konva from 'konva'
import { operateDirect } from '../../Store'
import './board.scss'
/**
 * 主画板
 * 创建Scence
 */

 interface Stage {
  on: Function,
  add: Function,
  getPointerPosition: Function
 }

const Board= () => {

  // const TouchStart = () => {

  // }

  useEffect(() => {
    // eslint-disable-next-line react-hooks/rules-of-hooks

    const stage: Stage = new Konva.Stage({
      container: '.board',
      width: 375,
      height: 667,
    })
  
    const layer = new Konva.Layer()
    stage.add(layer)

    const selectionRectangle = new Konva.Rect({
      fill: 'rgba(0, 0, 255, 0.5)'
    })

    layer.add(selectionRectangle)

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
    layer.add(btn)
    layer.draw()

    let x1:any, y1:any, x2, y2
    stage.on('mousedown', (e: Object) => {
      x1 = stage.getPointerPosition().x;
      y1 = stage.getPointerPosition().y;
      x2 = stage.getPointerPosition().x;
      y2 = stage.getPointerPosition().y;

      selectionRectangle.visible(true);
      selectionRectangle.width(0);
      selectionRectangle.height(0);
      layer.draw();
    })

    stage.on('mousemove', () => {
      x2 = stage.getPointerPosition().x;
      y2 = stage.getPointerPosition().y;

      selectionRectangle.setAttrs({
        x: Math.min(x1, x2),
        y: Math.min(y1, y2),
        width: Math.abs(x2 - x1),
        height: Math.abs(y2 - y1),
      });
      layer.batchDraw();
    })



  }, [])

  // function createButton() {
    
  // }
  return (
		<div className="board"></div>
	)
}

export default Board
