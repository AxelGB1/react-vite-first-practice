import style from './UserRole.module.css'

const ROLE_STYLES = {
	profesor: ['Profesor', style.teacher],
	estudiante: ['Estudiante', style.student],
	otro: ['Otro', style.other]
}

const UserRole = ({ role }) => {
	const [roleName, roleClassName] = ROLE_STYLES[role] || ROLE_STYLES.otro

	return <span className={roleClassName}>{roleName}</span>
}

export default UserRole
