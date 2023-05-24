import { useState } from 'react'
import style from './ListOfUsers.module.css'
import ListOfUsersForm from './ListOfUsersForm'
import ListOfUsersRows from './ListOfUsersRows'

const ListOfUsers = ({ initialUsers }) => {
	const { search, onlyActive, sortBy, ...setFiltersFunctions } = useFilters()
	const { users, toggleUserActive } = useUsers(initialUsers)

	let filteredUsers = filterUsersByName(users, search)
	filteredUsers = filterUsersOnlyActive(filteredUsers, onlyActive)
	filteredUsers = sortUsers(filteredUsers, sortBy)

	return (
		<div className={style.usersList}>
			<h1>Listado de usuarios</h1>
			<ListOfUsersForm
				search={search}
				onlyActive={onlyActive}
				sortBy={sortBy}
				{...setFiltersFunctions}
			/>
			<ListOfUsersRows
				users={filteredUsers}
				toggleUserActive={toggleUserActive}
			/>
		</div>
	)
}

const useFilters = () => {
	const [filters, setFilters] = useState({
		search: '',
		onlyActive: false,
		sortBy: 0
	})

	const setSearch = search => {
		setFilters({
			...filters,
			search
		})
	}

	const setOnlyActive = onlyActive => {
		setFilters({
			...filters,
			onlyActive
		})
	}

	const setSortBy = sortBy => {
		setFilters({
			...filters,
			sortBy
		})
	}

	return {
		...filters,
		setSearch,
		setOnlyActive,
		setSortBy
	}
}

const useUsers = initialUsers => {
	const [users, setUsers] = useState(initialUsers)

	const toggleUserActive = userId => {
		const newUsers = [...users]

		const userIndex = newUsers.findIndex(user => user.id === userId)

		if (userIndex === -1) return

		newUsers[userIndex].active = !newUsers[userIndex].active

		setUsers(newUsers)
	}

	return {
		users,
		toggleUserActive
	}
}

const filterUsersByName = (users, search) => {
	const usersFiltered = [...users]

	if (!search) {
		return usersFiltered
	}

	const lowerCaseSearch = search.toLowerCase()

	return usersFiltered.filter(user =>
		user.name.toLowerCase().startsWith(lowerCaseSearch)
	)
}

const filterUsersOnlyActive = (users, active) => {
	const usersFiltered = [...users]

	if (!active) {
		return usersFiltered
	}

	return usersFiltered.filter(user => user.active)
}

const sortUsers = (users, sortBy) => {
	const usersSorted = [...users]

	switch (sortBy) {
		case 1:
			return usersSorted.sort((a, b) => {
				if (a.name > b.name) {
					return 1
				} else if (a.name < b.name) {
					return -1
				} else {
					return 0
				}
			})
		default:
			return usersSorted
	}
}

export default ListOfUsers
