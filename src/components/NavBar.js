import React from 'react'
import { NavLink } from 'react-router-dom'

export const Navbar = () => (
	<nav className="navbar navbar-dark bg-primary navbar-expand-lg">
		<div className="navbar-brand">
			Github Поиск
		</div>
		<div className="collapse navbar-collapse" id="navbarTogglerDemo01">
			<ul className="navbar-nav mr-auto mt-2 mt-lg-0">
				<li className="nav-item active">
				<NavLink exact to="/" className="nav-link">Главная</NavLink>
			</li>
				<li className="nav-item">
				<NavLink to="/about" className="nav-link">Информация</NavLink>
			</li>
		</ul>
		</div>
	</nav>
)
