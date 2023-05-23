import { useState } from 'react'
import UserRole from './UserRole'
import style from './UserRow.module.css'
import UserStatus from './UserStatus'

const UserRow = ({ name, role, active = true, ...restProps }) => {
	const [activeState, setActiveState] = useState(active)

	return (
		<div className={style.user}>
			<div className={style.name}>
				<span>{name}</span>
			</div>
			<div className={style.status}>
				<UserStatus active={activeState} />
			</div>
			<div className={style.role}>
				<UserRole role={role} />
			</div>
			<div className={style.btnAction}>
				<button
					onClick={() => {
						setActiveState(!activeState)
					}}
				>
					{activeState ? 'Desactivar' : 'Activar'}
				</button>
			</div>
		</div>
	)
}

export default UserRow