var logo_base64 = `data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMTk4Ljk0IDc4MC45OSI+PGRlZnM+PHN0eWxlPi5jbHMtMXtzdHJva2U6IzAwMDtzdHJva2UtbWl0ZXJsaW1pdDoxMDt9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTE0Ny4yLDU4OS44YzIuMiwxNC4xLDQuNCwyOC4zLDYuNiw0Mi40YTc0NC4xOSw3NDQuMTksMCwwLDAsMTM4LjQsODVjMzkuMiwxOC41LDkxLjYsNDMuNCwxNjMuMiw1NC40LDYzLjgsOS45LDE0My41LDIyLjIsMjIyLjEtMjAuN0M3NTkuOSw3MDYsNzkzLjcsNjI2LjMsODA1LjIsNTk0LjRjLTE2LjgsMzEuMi01OC45LDk3LjctMTM5LjksMTMyLjctNzcuMiwzMy4zLTE0OC44LDIwLjQtMjAzLjksMTAuNS02MS40LTExLTEwNC42LTMxLjQtMTU4LjMtNTYuNkExMDEzLjE4LDEwMTMuMTgsMCwwLDEsMTQ3LjIsNTg5LjhaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNjkuNzIgLTExMi44MSkiLz48Y2lyY2xlIGN4PSI4NjguMTgiIGN5PSI1MjAuOTkiIHI9IjY4LjgiLz48ZWxsaXBzZSBjeD0iNzgzLjIxIiBjeT0iNzk2LjU3IiByeD0iMzEuNiIgcnk9IjMyLjUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xMDEuNTggMTQ0Ny43KSByb3RhdGUoLTg4LjYzKSIvPjxlbGxpcHNlIGN4PSI2OTkuNDYiIGN5PSI4NDAuNDEiIHJ4PSIyOS42IiByeT0iMzAuNSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTIyNy4xNiAxNDA2Ljc2KSByb3RhdGUoLTg4LjYzKSIvPjxlbGxpcHNlIGN4PSI2MTAuMjQiIGN5PSI4NjcuOCIgcng9IjI1IiByeT0iMjUuNyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTM0MS42MyAxMzQ0LjMxKSByb3RhdGUoLTg4LjYzKSIvPjxlbGxpcHNlIGN4PSI0NjEuMiIgY3k9Ijg2NC4yMyIgcng9IjIwIiByeT0iMjAuNiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTQ4My41MyAxMTkxLjgzKSByb3RhdGUoLTg4LjYzKSIvPjxlbGxpcHNlIGN4PSIzOTYuNjciIGN5PSI4NDkuODMiIHJ4PSIxNy45IiByeT0iMTguNSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTUzMi4xMiAxMTEzLjI2KSByb3RhdGUoLTg4LjYzKSIvPjxlbGxpcHNlIGN4PSIyODguMDUiIGN5PSI4MTQuMTgiIHJ4PSIxMy45IiByeT0iMTQuMyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTYwMi41MSA5NjkuODcpIHJvdGF0ZSgtODguNjMpIi8+PGVsbGlwc2UgY3g9IjE1Ni4zNyIgY3k9Ijc0Ny40MSIgcng9IjcuMyIgcnk9IjcuNSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTY2NC4yOSA3NzMuMDYpIHJvdGF0ZSgtODguNjMpIi8+PGNpcmNsZSBjeD0iMTA4MS4zOCIgY3k9IjE1MC42OSIgcj0iMzcuOCIvPjxjaXJjbGUgY3g9IjEwNzEuOTciIGN5PSIyMDQuMDUiIHI9IjM3LjgiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDYyOS4xMSAxMTE2LjY4KSByb3RhdGUoLTgwLjc4KSIvPjxjaXJjbGUgY3g9IjkwMS4xOCIgY3k9IjY4LjE5IiByPSIzNy44Ii8+PGVsbGlwc2UgY3g9IjMzNi43OCIgY3k9IjgzMi4xMiIgcng9IjE0LjMiIHJ5PSIxNC44IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNTcyLjg4IDEwMzYuMSkgcm90YXRlKC04OC42MykiLz48ZWxsaXBzZSBjeD0iMjUwLjcxIiBjeT0iNzk1LjY0IiByeD0iMTEuNCIgcnk9IjExLjciIHRyYW5zZm9ybT0idHJhbnNsYXRlKC02MjAuNDEgOTE0LjQ1KSByb3RhdGUoLTg4LjYzKSIvPjxlbGxpcHNlIGN4PSIxODQuMzIiIGN5PSI3NjUuNDEiIHJ4PSI4LjYiIHJ5PSI4LjgiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC02NTUuMDEgODE4LjU3KSByb3RhdGUoLTg4LjYzKSIvPjxlbGxpcHNlIGN4PSIyMTEuNzMiIGN5PSI3NzkuMTgiIHJ4PSI5LjEiIHJ5PSI5LjQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC02NDIuMDIgODU5LjQyKSByb3RhdGUoLTg4LjYzKSIvPjxwYXRoIGQ9Ik03MDMuNCw0MDAuMWEzNDIuODIsMzQyLjgyLDAsMCwxLDQ3LjgtNzMuMkEzNTEuNTUsMzUxLjU1LDAsMCwxLDkyMywyMTdxLTcuOTUtMzQuNjUtMTUuOS02OS4yYTI3Ni43MSwyNzYuNzEsMCwwLDAtNDcuMywxNC4xLDI5MC43MywyOTAuNzMsMCwwLDAtOTAuNCw1Ny44Yy0yMC4zLDE4LjktNDAuMiwzNy40LTU0LjIsNjguM0M2OTQuMiwzMzMuMyw2OTguOSwzNzcuMiw3MDMuNCw0MDAuMVoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC02OS43MiAtMTEyLjgxKSIvPjxwYXRoIGQ9Ik0xMTcyLjUsMzI2LjFhMS44NiwxLjg2LDAsMCwwLS42LDIuMiw0MzEuNzQsNDMxLjc0LDAsMCwxLDMyLjYsMTU1LjRjMS4yLDU5LjItMi41LDE1My41LTYyLDIyNy41LTE0LjIsMTcuNy02Ny41LDgyLjktMTYwLjQsOTkuNkEyNTIuNjksMjUyLjY5LDAsMCwxLDg4MCw4MDcuOWEyNDYuMjYsMjQ2LjI2LDAsMCwwLDc1LjIsMjUuMmMyMC40LDMuMyw3MC4zLDgsMTI3LTEyLjQsODQuNC0zMC40LDEyNS43LTEwMy44LDE0MS40LTEzMS43LDMxLjItNTUuMywzOS4yLTEwMC41LDQ0LjItMTg3LjRhNTY3LjYsNTY3LjYsMCwwLDAtMzEuMy0yMTkuNywxLjc4LDEuNzgsMCwwLDAtMi40LTEuMSwxLjMzLDEuMzMsMCwwLDAtLjUuM1oiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC02OS43MiAtMTEyLjgxKSIvPjxjaXJjbGUgY3g9IjExNC4xMiIgY3k9IjU0Ni45OSIgcj0iNDQuNCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTQyMy4wOCAxMjguMSkgcm90YXRlKC00NSkiLz48Y2lyY2xlIGN4PSI0NDkuNzIiIGN5PSIxNTcuMDEiIHI9IjQ0LjIiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC00OS4wMyAyNTEuMTgpIHJvdGF0ZSgtNDUpIi8+PGNpcmNsZSBjeD0iNzkzLjQ4IiBjeT0iNjE4Ljc5IiByPSI0Mi44Ii8+PGVsbGlwc2UgY3g9IjUyNy41NSIgY3k9Ijg3MC41IiByeD0iMjMuMyIgcnk9IjI0IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNDI1LjAzIDEyNjQuMjgpIHJvdGF0ZSgtODguNjMpIi8+PGNpcmNsZSBjeD0iMjUxLjU4IiBjeT0iMTYwLjk5IiByPSI0NC40Ii8+PGNpcmNsZSBjeD0iMTMwLjU4IiBjeT0iMjc1LjI5IiByPSI0NC4yIi8+PHBhdGggZD0iTTQzMS42LTIxMC4zIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNjkuNzIgLTExMi44MSkiLz48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik0xMTA1LjIsMjk0LjhjLTI1LTIwLTU1LjEtMzEuNS01NS4xLTMxLjUtMjEuNS04LjEtNTguMy0yMC44LTEwMS4xLTExLjJhMjc5LjA5LDI3OS4wOSwwLDAsMC04Ny44LDM1LjdjLTI3LjIsMTctNDcuNCwzNy41LTg2LjgsNzcuNi00NC44LDQ1LjUtNDcuMyw1My44LTYxLjMsNTUuOC0zNS44LDUuMS02Ni42LTQyLjEtMTE0LjQtMTAyLjFBMTY2NSwxNjY1LDAsMCwwLDQ1MC4zLDE1Ni43bDguNCwxNjQuN0wzMTcuNSwyNzIuNlEzMzcsMzQ0LDM1Ni42LDQxNS4zTDIwMC45LDM4OC40bDQ3LjUsMTM2LjFMMTEyLjYsNTQ1QTExMTUuNDYsMTExNS40NiwwLDAsMCwzMDcuMiw2NTkuMWM2LjMsMi45LDYxLDMxLDEzMy44LDQ3LDQ1LDkuOSw3OC4zLDE3LjIsMTIxLjUsMTIuMywxOC45LTIuMSwxMTUuNC0xMy4xLDE3NC42LTg1LjMsMzkuMi00Ny43LDQ1LjItNjQuNiw1OC43LTc1LjYsMy4yLTIuNywxMS4yLTcuNCwyMS41LTExLjcsNjIuOS0yNi4yLDEwNy4yLDI1LDE2Ny41LDQuMywzNC44LTExLjksNDIuNS0zNi42LDYwLjMtMzAuNiwyMy43LDgsMzAsNTYsMjguNiw4NS44LTMsNjAuNC00MC42LDEwMi42LTU3LjcsMTIxLjktNDEsNDYtODguOSw2Ny0xMTcuNCw3Ni42QTIyNi42MywyMjYuNjMsMCwwLDAsMTAwNy40LDc4NnM2MC4yLTI0LjQsMTA0LjUtNzEuM0MxMjIxLDU5OSwxMTg3LjUsMzYwLjcsMTEwNS4yLDI5NC44Wk03MDguOSw1NjEuN2MtMzIuNiwzMy45LTcyLDQyLjItMTAwLjQsNDcuOC0xNi4zLDMuMi0xMDIuMywyMC4yLTE1My45LTIyLjktMi4yLTEuOC0zMC45LTI5LjktMjAuNC0yNy43czEzLjItMS40LDI1LjEtMi42YzI1LjYtMi42LDM3LjktMjQuOCw1My4xLTM5LjgsMzEtMzAuNiw3NS45LTMzLjIsOTIuNi0zNC4yLDY0LjgtMy44LDEwNy4zLDM4LDEzMiwzNy45QzcyOS40LDUyNy43LDcyMy4zLDU0Ni42LDcwOC45LDU2MS43Wk0xMDQ4LjMsMzU4Yy03LjksNjYuNy04Mi4yLDExMy4zLTk2LjMsMTIyLjItMjQuNSwxNS40LTU4LjksMzYuNC0xMDUuOCwzNC0yMS0xLTM4LjMtMTAuNy00OS0xMC45LDE4LTE2LjksMjAuMy03Ni41LDcwLjEtMTE4LjEsMTIuOC0xMC44LDQ3LjItMzkuNiw5MC44LTM4LjYsMjEuNC41LDQ1LjUsOC4yLDY2LTcuNCw5LjUtNy4zLDEzLjktNi41LDIwLjEtMTUuM0MxMDUwLjIsMzE1LDEwNDguNiwzNTUuMSwxMDQ4LjMsMzU4WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTY5LjcyIC0xMTIuODEpIi8+PHBhdGggZD0iTTE1Ni40LDY1MC42bDQuMSw1NC40czgwLjYsNTIuMSwxNDMuNCw3Ni4xYzQxLjIsMTUuOCw5Ni4yLDM2LjksMTY5LjgsNDIuNiw2NS41LDUuMSwxNDcuMywxMS41LDIyMy44LTM3LjgsODAuMi01MS43LDEwOC40LTEzNC43LDExNy42LTE2Ny44LTE0LjcsMzIuOC01Mi4zLDEwMy4yLTEzMS44LDE0NC43LTc1LjEsMzkuMi0xNDcuOCwzMS45LTIwNiwyNi03MC40LTcuMS0xMjEuOS0yNy44LTE1Ny45LTQyLjZBNjY4Ljc3LDY2OC43NywwLDAsMSwxNTYuNCw2NTAuNloiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC02OS43MiAtMTEyLjgxKSIvPjwvc3ZnPg==`; 


createLogo('kab-logo', logo_base64);