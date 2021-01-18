import React from 'react'
import BlurContainer from '../BlurContainer/BlurContainer'
import './WeatherPanel.css'

const clouds = (
	<img
		alt=''
		width={100}
		height={100}
		src='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgNDUwLjQgNDUwLjQiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQ1MC40IDQ1MC40OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8Zz4NCgk8Zz4NCgkJPHBhdGggZD0iTTM3NC40LDIxOWMwLTIwLjgtOC40LTQwLTIyLjQtNTMuNmMtMTMuNi0xMy42LTMyLjgtMjIuNC01My42LTIyLjRjLTE0LDAtMjcuNiw0LTM5LjIsMTAuOGMtOC40LDUuMi0xNiwxMi0yMiwyMA0KCQkJYy0xLjYtMS4yLTMuNi0yLjgtNS4yLTRjLTE3LjYtMTIuNC0zOC44LTE5LjItNjEuMi0xOS4yYy0yNi40LDAtNTEuMiw5LjYtNzAsMjZDODQsMTkxLDcxLjYsMjExLDY2LDIzMy44DQoJCQljLTE3LjIsMi0zMi40LDkuNi00NCwyMS4yQzguNCwyNjguNiwwLDI4NywwLDMwNy44YzAsMjAuNCw4LjQsMzkuMiwyMiw1Mi44YzEzLjYsMTMuNiwzMiwyMiw1Mi44LDIySDI3Ng0KCQkJYzI0LTAuNCw0NS4yLTkuNiw2MC40LTI1LjJjMTUuMi0xNS4yLDI0LjgtMzYuNCwyNC44LTYwYzAtMTAtMS42LTIwLTUuMi0yOC44YzUuMi02LDkuNi0xMi44LDEyLjQtMjANCgkJCUMzNzIuNCwyMzkuNCwzNzQuNCwyMjksMzc0LjQsMjE5eiBNMzIwLjgsMzQ0LjZjLTExLjYsMTEuNi0yNy42LDE4LjgtNDUuNiwxOC44SDc1LjZjLTE1LjItMS42LTI4LjQtNy42LTM4LjQtMTcuNg0KCQkJYy05LjYtOS42LTE2LTIzLjItMTYtMzhzNi0yOC40LDE2LTM4YzkuNi05LjYsMjMuMi0xNiwzOC0xNmMxLjYsMCwzLjYtMC40LDQuOC0xLjJjMi40LTEuNiw0LTQsNC40LTYuOA0KCQkJYzMuMi0yMS4yLDE0LTM5LjYsMjkuMi01Mi44YzE1LjItMTMuMiwzNS4yLTIwLjgsNTYuOC0yMC44YzE4LDAsMzUuMiw1LjYsNDkuNiwxNS42YzExLjIsNy42LDIwLjgsMTguNCwyNy4yLDMwLjgNCgkJCWMtMi40LDAuOC00LjQsMS42LTYuNCwyLjhjLTEwLjgsNC44LTIwLjgsMTItMjguOCwyMS4yYy0zLjYsNC40LTMuMiwxMC44LDAuOCwxNC40YzQuNCwzLjYsMTAuOCwzLjIsMTQuNC0wLjgNCgkJCWM2LTYuOCwxMy42LTEyLjQsMjEuNi0xNmM4LTMuNiwxNy4yLTUuNiwyNi40LTUuNmMxNy42LDAsMzQsNy4yLDQ1LjYsMTguOGMxMS42LDExLjYsMTguOCwyNy42LDE4LjgsNDUuNlMzMzIuNCwzMzMsMzIwLjgsMzQ0LjZ6DQoJCQkgTTM1MCwyNDAuMmMtMS4yLDIuOC0yLjQsNS4yLTQsOGMtMi44LTQtNi03LjYtOS4yLTEwLjhjLTE1LjItMTUuMi0zNi40LTI0LjgtNjAtMjQuOGMtMi40LDAtNS4yLDAtNy42LDAuNA0KCQkJYy00LTkuMi05LjYtMTcuMi0xNi0yNC44YzQuNC02LjgsMTAuNC0xMi40LDE3LjItMTYuOGM4LjQtNS4yLDE4LjQtOCwyOC44LThjMTUuMiwwLDI5LjIsNiwzOS4yLDE2czE2LDI0LDE2LDM5LjINCgkJCUMzNTQuNCwyMjYuMiwzNTIuOCwyMzMuNCwzNTAsMjQwLjJ6Ii8+DQoJPC9nPg0KPC9nPg0KPGc+DQoJPGc+DQoJCTxwYXRoIGQ9Ik00MDYsMTExLjhjLTQtNC0xMC40LTQtMTQuNCwwbC0yMiwyMmMtNCw0LTQsMTAuNCwwLDE0LjRzMTAuNCw0LDE0LjQsMGwyMi0yMkM0MTAsMTIyLjIsNDEwLDExNS44LDQwNiwxMTEuOHoiLz4NCgk8L2c+DQo8L2c+DQo8Zz4NCgk8Zz4NCgkJPHBhdGggZD0iTTI5OS4yLDY3LjhjLTUuNiwwLTEwLjQsNC40LTEwLjQsMTBWMTA5YzAsNS42LDQuOCwxMC40LDEwLjQsMTAuNGM1LjYsMCwxMC40LTQuOCwxMC40LTEwLjRWNzguMg0KCQkJQzMwOS42LDcyLjYsMzA0LjgsNjcuOCwyOTkuMiw2Ny44eiIvPg0KCTwvZz4NCjwvZz4NCjxnPg0KCTxnPg0KCQk8cGF0aCBkPSJNMjI4LjQsMTMzLjhsLTIyLTIyYy0zLjYtNC0xMC40LTQtMTQuNCwwcy00LDEwLjQsMCwxNC40bDIyLDIyYzQsNCwxMC40LDQsMTQuNCwwUzIzMi40LDEzNy44LDIyOC40LDEzMy44eiIvPg0KCTwvZz4NCjwvZz4NCjxnPg0KCTxnPg0KCQk8cGF0aCBkPSJNNDQwLDIwOC42aC0zMC44Yy01LjYsMC0xMC40LDQuOC0xMC40LDEwLjRzNC44LDEwLjQsMTAuNCwxMC40SDQ0MGM1LjYsMCwxMC40LTQuOCwxMC40LTEwLjQNCgkJCUM0NTAuNCwyMTMsNDQ1LjYsMjA4LjYsNDQwLDIwOC42eiIvPg0KCTwvZz4NCjwvZz4NCjxnPg0KCTxnPg0KCQk8cGF0aCBkPSJNNDA2LDMxMS40bC0yMi0yMmMtNC00LTEwLjQtNC0xNC40LDBzLTQsMTAuNCwwLDE0LjRsMjIsMjJjNCw0LDEwLjQsNCwxNC40LDBTNDEwLDMxNS40LDQwNiwzMTEuNHoiLz4NCgk8L2c+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8L3N2Zz4NCg=='
	/>
)
const rain = (
	<img
		alt=''
		width={100}
		height={100}
		src='data:image/png;base64,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'
	/>
)
const sun = (
	<img
		alt=''
		width={100}
		height={100}
		src='data:image/png;base64,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'
	/>
)
const snow = (
	<img
		alt=''
		width={100}
		height={100}
		src='data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgNTEzIDUxMyIgaGVpZ2h0PSI1MTIiIHZpZXdCb3g9IjAgMCA1MTMgNTEzIiB3aWR0aD0iNTEyIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxnPjxwYXRoIGQ9Im00MjQuNSAzMzdoLTMxMmMtNjEuNzU3IDAtMTEyLTUwLjI0My0xMTItMTEyIDAtNTMuODggMzcuOTQzLTk4LjUzMyA4OC4wODEtMTA5LjQzNiAyLjM0My02NC4xMiA1NS4yMzctMTE1LjU2NCAxMTkuOTE5LTExNS41NjQgNDguNTQxIDAgODkuNTE1IDI4LjU0NiAxMDguNjE5IDY4Ljk5OSA2MS45MTgtMTguNDA4IDEyNC4yODUgMjguNTI5IDEyMy4zNyA5My40NTcgNDAuOTE3IDcuNTQgNzIuMDExIDQzLjQ3OSA3Mi4wMTEgODYuNTQ0IDAgNDguNTIzLTM5LjQ3NyA4OC04OCA4OHptLTIxNi0zMDVjLTUxLjQzNyAwLTkyLjIyOCA0NC4xNzgtODcuNjQ0IDk1Ljg4NS43ODQgOC44NTEtNS44MDYgMTYuNjctMTQuNjkxIDE3LjM2My00MS4zMDggMy4yMjgtNzMuNjY1IDM4LjI1OS03My42NjUgNzkuNzUyIDAgNDQuMTEyIDM1Ljg4OCA4MCA4MCA4MGgzMTJjMzAuODc5IDAgNTYtMjUuMTIyIDU2LTU2IDAtMjkuMDg3LTIyLjc3My01Ni01Ny42MDQtNTYtMTAuMDk2IDAtMTcuNjk1LTkuMjYzLTE1LjY4LTE5LjE4NCAxMC42NzgtNTIuNTk1LTQ0LjQxMS05NC4xMzctOTEuODcyLTY5Ljc4Mi04Ljg4NiA0LjU1OS0xOS43MjctLjA1Ni0yMi42MTctOS41OTUtMTEuMTM5LTM2Ljc2My00NS43NzUtNjIuNDM5LTg0LjIyNy02Mi40Mzl6Ii8+PGNpcmNsZSBjeD0iMjU2LjUiIGN5PSIzODUiIHI9IjE2Ii8+PGNpcmNsZSBjeD0iMTkyLjUiIGN5PSI0NDEiIHI9IjE2Ii8+PGNpcmNsZSBjeD0iNjQuNSIgY3k9IjQ0MSIgcj0iMTYiLz48Y2lyY2xlIGN4PSIzMjAuNSIgY3k9IjQ0MSIgcj0iMTYiLz48Y2lyY2xlIGN4PSI0NDguNSIgY3k9IjQ0MSIgcj0iMTYiLz48Y2lyY2xlIGN4PSIzODQuNSIgY3k9IjM4NSIgcj0iMTYiLz48Y2lyY2xlIGN4PSIxMjguNSIgY3k9IjM4NSIgcj0iMTYiLz48Y2lyY2xlIGN4PSIyNTYuNSIgY3k9IjQ5NyIgcj0iMTYiLz48Y2lyY2xlIGN4PSIzODQuNSIgY3k9IjQ5NyIgcj0iMTYiLz48Y2lyY2xlIGN4PSIxMjguNSIgY3k9IjQ5NyIgcj0iMTYiLz48L2c+PC9zdmc+'
	/>
)
const mist = (
	<img
		alt=''
		width={100}
		height={100}
		src='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgNDQ4LjAwNSA0NDguMDA1IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA0NDguMDA1IDQ0OC4wMDU7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxnPg0KCTxnPg0KCQk8cGF0aCBkPSJNNDM2Ljg3NCw2OC41NTlMMzk0LjU3LDU1LjA1NWMtMzguMTc2LTEyLjI4OC04MC4zMi04LjI1Ni0xMTUuNDI0LDEwLjk3NmMtMzMuOTg0LDE4LjY1Ni03Ni4yNTYsMTguNjg4LTExMC4yNzIsMA0KCQkJYy0zNS4wNC0xOS4yMzItNzcuMTItMjMuMjY0LTExNS40NTYtMTAuOTc2TDExLjE0Niw2OC41NTlDMi42OTgsNzEuMjQ3LTEuOTQyLDgwLjIzOSwwLjc3OCw4OC42ODcNCgkJCWMyLjY4OCw4LjM4NCwxMS42NDgsMTMuMDI0LDIwLjA5NiwxMC4zMzZsNDIuMjcyLTEzLjUzNmMzMC4wNDgtOS41MzYsNjIuOTQ0LTYuNDY0LDkwLjMzNiw4LjU3Ng0KCQkJYzIxLjc2LDExLjkzNiw0Ni4xNDQsMTcuODg4LDcwLjUyOCwxNy44ODhjMjQuMzg0LDAsNDguNzM2LTUuOTUyLDcwLjQ5Ni0xNy44NTZjMjcuNDI0LTE1LjA3Miw2MC4zMi0xOC4xNzYsOTAuMzA0LTguNTc2DQoJCQlsNDIuMzA0LDEzLjUwNGM4LjU3NiwyLjc1MiwxNy40NC0xLjk4NCwyMC4xMjgtMTAuMzY4QzQ0OS45Myw4MC4yMzksNDQ1LjI5LDcxLjI0Nyw0MzYuODc0LDY4LjU1OXoiLz4NCgk8L2c+DQo8L2c+DQo8Zz4NCgk8Zz4NCgkJPHBhdGggZD0iTTQzNi44NzQsMTY0LjU1OWwtNDIuMzA0LTEzLjUwNGMtMzguMTc2LTEyLjIyNC04MC4zMi04LjI1Ni0xMTUuNDI0LDEwLjk3NmMtMzMuOTg0LDE4LjY1Ni03Ni4yNTYsMTguNjg4LTExMC4yNzIsMA0KCQkJYy0zNS4wNzItMTkuMjY0LTc3LjE1Mi0yMy4yOTYtMTE1LjQ1Ni0xMC45NzZsLTQyLjI3MiwxMy41MDRjLTguNDQ4LDIuNjg4LTEzLjA4OCwxMS42OC0xMC4zNjgsMjAuMTI4DQoJCQljMi42ODgsOC4zODQsMTEuNjQ4LDEyLjk5MiwyMC4wOTYsMTAuMzM2bDQyLjI3Mi0xMy41MzZjMzAuMDQ4LTkuNTM2LDYyLjk0NC02LjQ2NCw5MC4zMzYsOC41NzYNCgkJCWMyMS43NiwxMS45MzYsNDYuMTQ0LDE3Ljg4OCw3MC41MjgsMTcuODg4YzI0LjM4NCwwLDQ4LjczNi01Ljk1Miw3MC40OTYtMTcuODU2YzI3LjQyNC0xNS4wNzIsNjAuMzItMTguMTc2LDkwLjMwNC04LjU3Ng0KCQkJbDQyLjMwNCwxMy41MDRjOC41NzYsMi43NTIsMTcuNDQtMS45NTIsMjAuMTI4LTEwLjM2OFM0NDUuMjksMTY3LjI0Nyw0MzYuODc0LDE2NC41NTl6Ii8+DQoJPC9nPg0KPC9nPg0KPGc+DQoJPGc+DQoJCTxwYXRoIGQ9Ik00MzYuODQyLDI2MC41NTlsLTQyLjI0LTEzLjQ3MmMtMzguMzA0LTEyLjM4NC04MC4yODgtOC4zMi0xMTUuNDU2LDEwLjk0NGMtMzMuOTg0LDE4LjYyNC03Ni4yNTYsMTguNjI0LTExMC4yNzIsMA0KCQkJYy0zNS4xMDQtMTkuMjY0LTc3LjE1Mi0yMy4yNjQtMTE1LjQyNC0xMC45NzZsLTQyLjI3MiwxMy41MDRjLTguNDE2LDIuNjg4LTEzLjA1NiwxMS42OC0xMC4zNjgsMjAuMTI4DQoJCQljMi42ODgsOC4zODQsMTEuNjQ4LDEyLjk2LDIwLjA5NiwxMC4zNjhsNDIuMjcyLTEzLjUwNGMyOS45NTItOS42NjQsNjIuODgtNi40OTYsOTAuMzA0LDguNTEyDQoJCQljMjEuNzYsMTEuOTM2LDQ2LjE0NCwxNy44ODgsNzAuNTI4LDE3Ljg4OGMyNC4zODQsMCw0OC43MzYtNS45NTIsNzAuNDk2LTE3Ljg1NmMyNy40MjQtMTUuMDQsNjAuMzItMTguMjQsOTAuMzA0LTguNTQ0DQoJCQlsNDIuMjcyLDEzLjUwNGM4LjUxMiwyLjYyNCwxNy40MDgtMS45ODQsMjAuMTI4LTEwLjM2OEM0NDkuODk4LDI3Mi4yMzksNDQ1LjI1OCwyNjMuMjQ3LDQzNi44NDIsMjYwLjU1OXoiLz4NCgk8L2c+DQo8L2c+DQo8Zz4NCgk8Zz4NCgkJPHBhdGggZD0iTTQzNi44NDIsMzU2LjUyN2wtNDIuMjQtMTMuNDcyYy0zOC4zMDQtMTIuMzUyLTgwLjI4OC04LjMyLTExNS40NTYsMTAuOTQ0Yy0zMy45NTIsMTguNjI0LTc2LjI1NiwxOC42NTYtMTEwLjI3MiwwDQoJCQljLTM1LjA3Mi0xOS4yMzItNzcuMTg0LTIzLjE2OC0xMTUuNDU2LTEwLjk3NmwtNDIuMjcyLDEzLjUwNGMtOC40MTYsMi42ODgtMTMuMDU2LDExLjY4LTEwLjM2OCwyMC4xMjgNCgkJCWMyLjY4OCw4LjM4NCwxMS42NDgsMTIuOTI4LDIwLjA5NiwxMC4zNjhsNDIuMjcyLTEzLjUwNGMyOS45ODQtOS42LDYyLjg4LTYuNDk2LDkwLjMzNiw4LjU0NA0KCQkJYzIxLjc2LDExLjkzNiw0Ni4xNDQsMTcuODg4LDcwLjUyOCwxNy44ODhjMjQuMzg0LDAsNDguNzM2LTUuOTUyLDcwLjQ5Ni0xNy44ODhjMjcuNDI0LTE1LjA0LDYwLjMyLTE4LjIwOCw5MC4zMDQtOC41NDQNCgkJCWw0Mi4yNzIsMTMuNTA0YzguNTEyLDIuNjI0LDE3LjQwOC0xLjk4NCwyMC4xMjgtMTAuMzY4QzQ0OS44OTgsMzY4LjIwNyw0NDUuMjU4LDM1OS4yMTUsNDM2Ljg0MiwzNTYuNTI3eiIvPg0KCTwvZz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjwvc3ZnPg0K'
	/>
)
const wind = (
	<img
		alt=''
		width={100}
		height={100}
		src='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgMjk2IDI5NiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMjk2IDI5NjsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPGc+DQoJPGc+DQoJCTxwYXRoIGQ9Ik0yMDguNCwxODcuMmMtMTAuNC0xMC40LTI0LjQtMTYuNC00MC0xNi40Yy0wLjQsMC0wLjgsMC0wLjgsMEgxMC40Yy01LjYsMC0xMC40LDQuNC0xMC40LDEwLjRjMCw1LjIsNC44LDEwLDEwLjQsMTANCgkJCWgxNTcuMmMwLjQsMCwwLjQsMCwwLjgsMGMxMCwwLDE4LjgsNCwyNS42LDEwLjRjNi40LDYuNCwxMC40LDE1LjYsMTAuNCwyNS42cy00LDE4LjgtMTAuNCwyNS42Yy02LjQsNi40LTE1LjYsMTAuNC0yNS42LDEwLjQNCgkJCXMtMTguOC00LTI1LjYtMTAuNGMtNi40LTYuNC0xMC40LTE1LjYtMTAuNC0yNS42YzAtNS42LTQuOC0xMC40LTEwLjQtMTAuNHMtMTAsNC44LTEwLDEwLjRjMCwxNS42LDYuNCwyOS42LDE2LjQsNDANCgkJCWMxMC40LDEwLjQsMjQuNCwxNi40LDQwLDE2LjRjMTUuNiwwLDI5LjYtNi40LDQwLTE2LjRjMTAuNC0xMC40LDE2LjQtMjQuNCwxNi40LTQwQzIyNC44LDIxMS42LDIxOC40LDE5Ny42LDIwOC40LDE4Ny4yeiIvPg0KCTwvZz4NCjwvZz4NCjxnPg0KCTxnPg0KCQk8cGF0aCBkPSJNMjc1LjYsMzIuOGMtMTIuOC0xMi44LTMwLTIwLjQtNDkuMi0yMC40cy0zNi44LDgtNDkuMiwyMC40Yy0xMi44LDEyLjgtMjAuNCwzMC0yMC40LDQ5LjJjMCw1LjYsNC44LDEwLjQsMTAuNCwxMC40DQoJCQljNS42LDAsMTAuNC00LjgsMTAuNC0xMC40YzAtMTMuNiw1LjYtMjYsMTQuNC0zNC44czIxLjItMTQuNCwzNC44LTE0LjRjMTMuNiwwLDI2LDUuNiwzNC44LDE0LjRTMjc2LDY4LjQsMjc2LDgyDQoJCQljMCwxMy42LTUuNiwyNi0xNC40LDM0LjhjLTguOCw4LjgtMjEuMiwxNC40LTM0LjgsMTQuNGMtMC40LDAtMC44LDAtMC44LDBIMjMuNmMtNS42LDAtMTAuNCw0LjQtMTAuNCwxMC40czQsMTAsMTAsMTBoMjAyLjQNCgkJCWMwLjQsMCwwLjQsMCwwLjgsMGMxOS4yLDAsMzYuOC04LDQ5LjItMjAuNGMxMi44LTEyLjgsMjAuNC0zMCwyMC40LTQ5LjJTMjg4LDQ1LjIsMjc1LjYsMzIuOHoiLz4NCgk8L2c+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8L3N2Zz4NCg=='
	/>
)

type Props = {
	weather: any
}

const WeatherPanel: React.FC<Props> = ({ weather }) => {
	const icon = () => {
		switch (weather.weather[0].main) {
			case 'Rain':
				return rain
			case 'Mist':
				return mist
			case 'Snow':
				return snow
			case 'Clouds':
				return clouds
			case 'Clear':
				return sun
		}
	}

	return (
		<BlurContainer w={600} h={600}>
			<div className={'WeatherPanel'}>
				<div>
					<h1>
						{weather.name}, {weather.sys.country}
					</h1>
					<h2>{weather.weather[0].main}</h2>
				</div>
				<div className={'temp'}>
					{icon()}
					<h2>{weather.main.temp}&deg;C</h2>
				</div>
				<div className={'temp'}>
					{wind}
					<h2>{weather.wind.speed} m/s</h2>
				</div>
				<div>
					<h3>Humidity:{weather.main.humidity} %</h3>
					<h3>Pressure:{weather.main.pressure} hPa</h3>
				</div>
			</div>
		</BlurContainer>
	)
}

export default WeatherPanel
