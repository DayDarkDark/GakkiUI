import React, { useEffect, useRef } from 'react'
import { useRecoilState } from 'recoil'
import { operateDirect } from '../../Store'
import CanvasRenderer from '../../Core/render'
import './board.scss'
/**
 * 主画板
 * 创建Scence
 */

const Board = () => {
  const ref = useRef(null)
  const board = useRef({})

  const [ direct, setDirect ] = useRecoilState(operateDirect)
 
  // 初次加载时渲染
  useEffect(() => {
    const container = ref.current as unknown as HTMLElement
    board.current = new CanvasRenderer(container)
  }, [])

  // 操作指令改变
  useEffect(() => {
    const DRIECT_COLLECTION_CREATE = 1
    switch(direct) {
      case DRIECT_COLLECTION_CREATE:
        const renderer = board.current as CanvasRenderer
        renderer.customCreate()
        // 调用自定义配置方法 render callback
        break;
      default: 
        console.info('out')
    }
  }, [direct, setDirect])
  return (
		<div id="view" className="board" ref={ref} ></div>
	)
}

export default Board
