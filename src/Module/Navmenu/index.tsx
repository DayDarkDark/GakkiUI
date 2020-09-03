import React from 'react'
import { useSetRecoilState } from 'recoil'
import { operateDirect } from '../../Store'

import './navmenu.scss'

function Navmenu() {

	const setDirect = useSetRecoilState(operateDirect)


	const create = () => {
		setDirect(1)
	}
  return(
		<div className="navmenu">
			<div className="create-btn" onClick={create}>置入</div>
		</div>
	)
}

export default Navmenu
