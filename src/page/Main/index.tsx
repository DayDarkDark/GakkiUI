import React from 'react'
import Scenes from '../../Module/Scenes'
import Navmenu from "../../Module/Navmenu";
import Board from "../../Module/Board";

import './main.scss'

function Main() {
    return (
      <section>
        <Navmenu />
        <Board />
      </section>
    )
}

export default Main
