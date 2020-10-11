import React from 'react'
import './styles.css'

import DataList from '../DataList'
import AddButton from '../AddButton'

export default () => {
	var [arr, setArr] = React.useState(['oi', 'Hello world!'])
	function isValidTodo(todo) {
		if (!todo) return false
		if (todo === ' ') return false
		return true
	}

	function addTodo(newTodo) {
		if (!isValidTodo(newTodo)) return
		setArr(oldArr => [...oldArr, newTodo])
	}

	return (
		<div className="container">
			<h2>Todos:</h2>
			<DataList data={arr} />
			<AddButton click={addTodo} />
		</div>
	)
}
