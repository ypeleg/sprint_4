

export function AppHeader() {
	// const user = useSelector(storeState => storeState.userModule.user)
	// const navigate = useNavigate()

	// async function onLogout() {
	// 	try {
	// 		await logout()
	// 		navigate('/')
	// 		showSuccessMsg(`Bye now`)
	// 	} catch (err) {
	// 		showErrorMsg('Cannot logout')
	// 	}
	// }

	return (
		<header>
			<nav className="flex-space-between center-vertical">

				<div className="just-flex just-flex-more center-vertical">
					{/* <button className="hamburger nav-highlight-hint">☰</button> */}
					<div className="logo nav-highlight-hint">
						<img className="dots" src="dots.svg" />
					</div>
					<div className="logo nav-highlight-hint">
						<img className="main-logo" src="logo-not-moving.gif" />
					</div>

					<div className="dropdown-menu nav-highlight-hint">
						<span>Workspace</span>
						<i className="fa-regular fa-chevron-down"></i>
					</div>

					<div className="dropdown-menu nav-highlight-hint">
						<span>Recent</span>
						<i className="fa-regular fa-chevron-down"></i>
					</div>

					<div className="dropdown-menu nav-highlight-hint">
						<span>Starred</span>
						<i className="fa-regular fa-chevron-down"></i>
					</div>

					<div className="dropdown-menu nav-highlight-hint">
						<span>More</span>
						<i className="fa-regular fa-chevron-down"></i>
					</div>

					<div className="dropdown-menu nav-highlight-hint">
						<i className="fa-regular fa-plus"></i>
					</div>


				</div>

				<div className="just-flex">
					<button>5 days left</button>
					<input placeholder="     Search" />
					<i className="bell">bellicon</i>
					<i className="info">?</i>
					<div className="user"></div>
				</div>

			</nav>
		</header>
	)
}
