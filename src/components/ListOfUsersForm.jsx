import style from './ListOfUsersForm.module.css'

const ListOfUsersForm = ({
	search,
	setSearch,
	onlyActive,
	setOnlyActive,
	sortBy,
	setSortBy
}) => {
	return (
		<form className={style.searchForm}>
			<input
				className={style.search}
				type='text'
				value={search}
				onChange={ev => setSearch(ev.target.value)}
			/>
			<div className={style.checkboxContainer}>
				<input
					className={style.checkboxInput}
					type='checkbox'
					checked={onlyActive}
					onChange={ev => setOnlyActive(ev.target.checked)}
				/>
				<span>Solo activos</span>
			</div>
			<select
				className={style.selectInput}
				value={sortBy}
				onChange={ev => setSortBy(Number(ev.target.value))}
			>
				<option value={0}>Por defecto</option>
				<option value={1}>Por nombre</option>
			</select>
		</form>
	)
}

export default ListOfUsersForm
