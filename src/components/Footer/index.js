import React from 'react'
import './styles.css'

export default () => {
	const repo = 'https://github.com/Pando0/'
	return (
		<footer id="footer">
			<small>Created by Pando0</small>
			<small>
				<a href={repo} className="fa fa-github symbol"></a>
			</small>
			<div className="icon-credits">Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
		</footer>
	)
}
