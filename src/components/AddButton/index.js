import React from 'react'
import './styles.css'

export default (props) => {
	function addNewTodo() {
		props.click(prompt('Add a new todo:'))
	}
	return (
		<button id="addBtn" onClick={addNewTodo}>+</button>
	)
}
