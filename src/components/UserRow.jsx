import UserRole from './UserRole'
import style from './UserRow.module.css'
import UserStatus from './UserStatus'

const UserRow = ({ id, name, role, active, toggleUserActive }) => {
	return (
		<div className={style.user}>
			<div className={style.name}>
				<span>{name}</span>
			</div>
			<div className={style.status}>
				<UserStatus active={active} />
			</div>
			<div className={style.role}>
				<UserRole role={role} />
			</div>
			<div className={style.btnAction}>
				<button
					onClick={() => {
						toggleUserActive(id)
					}}
				>
					{active ? 'Desactivar' : 'Activar'}
				</button>
			</div>
		</div>
	)
}

export default UserRow
