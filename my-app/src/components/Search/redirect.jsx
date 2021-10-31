import React from "react";
import { useHistory } from "react-router-dom";


export function ReturnResults() {

	const Results = () => {
		let history = useHistory();
		const redir = () => {
			let path = 'test';
			history.push(path);
		}
	}

	return (
		<button onClick = {Results} id="searchBut" type="submit"> Search </button>
	)
}