import './App.css'
import ListOfUsers from './components/ListOfUsers'

const Users = [
	{
		id: 0,
		name: 'Axel Bernard',
		role: 'estudiante',
		active: true
	},
	{
		id: 1,
		name: 'Ericka De La Cruz',
		role: 'estudiante',
		active: true
	},
	{
		id: 2,
		name: 'Alberto Abreu',
		role: 'profesor',
		active: false
	}
]

const App = () => {
	return <ListOfUsers initialUsers={Users}></ListOfUsers>
}

export default App
