import './App.css'
import ListOfUsers from './components/ListOfUsers'

const Users = [
	{
		name: 'Axel Bernard',
		role: 'estudiante',
		active: true
	},
	{
		name: 'Ericka De La Cruz',
		role: 'estudiante',
		active: true
	},
	{
		name: 'Alberto Abreu',
		role: 'profesor',
		active: false
	}
]

function App() {
	return (
		<ListOfUsers users={Users}>
			<h1>Listado de usuarios</h1>
		</ListOfUsers>
	)
}

export default App
