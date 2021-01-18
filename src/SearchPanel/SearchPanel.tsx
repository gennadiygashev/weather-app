import React, { useState } from 'react'
import './SearchPanel.css'
import BlurContainer from '../BlurContainer/BlurContainer'

type Props = {
	handleSubmit: (e: React.FormEvent<HTMLFormElement>, q: string) => void
	error: boolean
}

const SearchPanel: React.FC<Props> = ({ handleSubmit, error }) => {
	const [state, setState] = useState('')

	return (
		<BlurContainer h={250} w={950}>
			<div className={'container'}>
				<div className={'searchForm'}>
					<h1>Weather in...</h1>
					<form onSubmit={(e) => handleSubmit(e, state)}>
						<input type={'text'} onChange={(e) => setState(e.target.value)} />
						<button type={'submit'}>
							<img
								alt=''
								width='50'
								height='50'
								src='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE4LjEuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgMzM3LjE3MyAzMzcuMTczIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAzMzcuMTczIDMzNy4xNzM7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxnPg0KCTxnPg0KCQk8cGF0aCBzdHlsZT0iZmlsbDojMDEwMDAyOyIgZD0iTTI1LjkyMiwzMzcuMTczVjBsMjg1LjMyOSwxNjguNTk1TDI1LjkyMiwzMzcuMTczeiBNNDIuMTc5LDI4LjQ5MXYyODAuMkwyNzkuMjksMTY4LjU5NQ0KCQkJTDQyLjE3OSwyOC40OTF6Ii8+DQoJPC9nPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPC9zdmc+DQo='
							/>
						</button>
					</form>
				</div>
				{error ? (
					<div className={'errorMessage'}>
						<p>Error, we cannot find this city!</p>
					</div>
				) : null}
			</div>
		</BlurContainer>
	)
}

export default SearchPanel
