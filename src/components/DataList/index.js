import React from 'react'
import './styles.css'

import Todo from '../Todo'

export default (props) => {
	const arr = props.data
	const items = arr.map(item => 
		<Todo value={item} />
	)
		
	return (
		<ul className="list">{ items }</ul>
	)
}
