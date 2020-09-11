import Konva from 'konva'
import { throttle } from '../utils'


export default class CanvasRenderer {

  private readonly stage: Konva.Stage
  private readonly layer: Konva.Layer

  private readonly triggerPushSet: Array<any> = []
  private readonly triggerIngSet: Array<any> = []
  private readonly triggerPullSet: Array<any> = []

  constructor(container: HTMLElement) {
    const { width, height } = container.getBoundingClientRect()
    this.stage = new Konva.Stage({
      container: container.id,
      width,
      height
    })
    this.layer = new Konva.Layer()
    this.stage.add(this.layer)
    this.monitor()
  }

  customCreate() {
    const rect = new Konva.Rect({
      fill: 'rgba(144, 157, 153, 0.5)'
    })
    this.layer.add(rect)
    let x1:any, y1:any, x2:any, y2:any
    this.triggerPushSet.push(function () {
      const target = document.querySelector('.board') as HTMLElement
      target.style.cursor = 'crosshair'
      const position = this.stage.getPointerPosition()
      x1 = position?.x
      x2 = position?.x
      y1 = position?.y
      y2 = position?.y
      rect.visible(true)
      rect.width(0)
      rect.height(0)
      this.layer.draw()
    }.bind(this))

    this.triggerIngSet.push(function(){
        const position = this.stage.getPointerPosition()
        x2 = position?.x
        y2 = position?.y
        rect.setAttrs({
          x: Math.min(x1, x2),
          y: Math.min(y1, y2),
          width: Math.abs(x2 - x1),
          height: Math.abs(y2 - y1),
        })
        this.layer.batchDraw()
    }.bind(this))

    this.triggerPullSet.push(function() {
      this.triggerPushSet.length = 0
      this.triggerIngSet.length = 0
      const target = document.querySelector('.board') as HTMLElement
      target.style.cursor = 'normal'
      this.triggerPullSet.length = 0
    }.bind(this))
  }



  monitor () {
    this.stage.on('mousedown', this.triggerPush.bind(this))
    this.stage.on('mousemove', throttle(this.triggerIng).bind(this))
    this.stage.on('mouseup', this.triggerPull.bind(this))
  }
  triggerPush () {
    console.info('推进')
    this.triggerPushSet.forEach(e => e())
  }
  triggerIng(e:any) {
    console.info(e)
    this.triggerIngSet.forEach(e => e())
  }

  triggerPull() {
    console.info('弹出', this)
    this.triggerPullSet.forEach(e => e())
  }

  
  render() {
    this.layer.draw()
  }


}
