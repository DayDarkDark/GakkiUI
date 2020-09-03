import React from 'react'
import { Stage, Layer, Star, Shape, Rect } from 'react-konva'

function Main() {
    return (
      <Stage width={window.innerWidth} height={window.innerHeight}>
        <Layer>
					<Rect
						x={100}
						y={100}
						width={80}
						height={40}
						fill={'skyblue'}
						stroke={'skyblue'}
						strokeWidth={1}
						cornerRadius={5}
						draggable={true}
					/>
        </Layer>
      </Stage>
    )
}

export default Main
