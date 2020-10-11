import React from 'react'
import './styles.css'

export default (props) => {
	const [isChecked, setCheck] = React.useState(false)
	function changeCheckState() {
		setCheck(!isChecked)
	}
	return (
		<li 
			className={isChecked?'checked':'noChecked'}
			onClick={changeCheckState}
		>{props.value}</li>
	)
}
