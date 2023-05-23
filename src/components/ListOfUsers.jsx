import style from './ListOfUsers.module.css'
import UserRow from './UserRow'

const ListOfUsers = ({ users, children }) => {
	const usersRendered =
		users.length > 0 ? (
			users.map(user => <UserRow key={user.name} {...user} />)
		) : (
			<p>No existen usuarios registrados</p>
		)

	return (
		<div className={style.usersList}>
			{children}
			{usersRendered}
		</div>
	)
}

export default ListOfUsers
