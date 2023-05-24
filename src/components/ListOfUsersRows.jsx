import UserRow from './UserRow'

const ListOfUsersRows = ({ users, toggleUserActive }) => {
	if (users.length === 0) {
		return <p>No existen usuarios registrados</p>
	}

	return users.map(user => (
		<UserRow key={user.id} {...user} toggleUserActive={toggleUserActive} />
	))
}

export default ListOfUsersRows
