import { Container } from './styles'
import { NavHashLink, HashLink } from 'react-router-hash-link'
import { useState } from 'react'

export function Header() {
	const [isActive, setActive] = useState(false)
	const [isLight, setIsLight] = useState(() =>
		typeof document !== 'undefined'
			? document.documentElement.classList.contains('light')
			: false
	)

	function toggleTheme() {
		let html = document.getElementsByTagName('html')[0]
		html.classList.toggle('light')
		setIsLight(html.classList.contains('light'))
	}

	function closeMenu() {
		setActive(false)
	}

	return (
		<Container className="header-fixed">
			<HashLink smooth to="#home" className="logo">
				<span>{"<Aneesh "}</span>
				<span>{" Ajithkumar/>"}</span>
			</HashLink>

			<div className="theme-toggle">
				<span className="theme-icon" aria-hidden="true">
					{isLight ? '☀️' : '🌙'}
				</span>
				<input
					onChange={toggleTheme}
					checked={isLight}
					className="container_toggle"
					type="checkbox"
					id="switch"
					name="mode"
					aria-label={isLight ? 'Switch to dark mode' : 'Switch to light mode'}
				/>
				<label
					htmlFor="switch"
					aria-label={isLight ? 'Switch to dark mode' : 'Switch to light mode'}
					title={isLight ? 'Switch to dark mode' : 'Switch to light mode'}
				/>
			</div>

			<nav className={isActive ? 'active' : ''}>
				<NavHashLink smooth to="#home" onClick={closeMenu}>
					Home
				</NavHashLink>
				<NavHashLink smooth to="#aboutme" onClick={closeMenu}>
					About me
				</NavHashLink>
				<NavHashLink smooth to="#expertise" onClick={closeMenu}>
					Expertise
				</NavHashLink>
				<NavHashLink smooth to="#projects" onClick={closeMenu}>
					Projects
				</NavHashLink>
				<NavHashLink smooth to="#experience" onClick={closeMenu}>
					Experience
				</NavHashLink>
				<NavHashLink smooth to="#contact" onClick={closeMenu}>
					Contact
				</NavHashLink>
			</nav>
			<div
				aria-expanded={isActive ? 'true' : 'false'}
				aria-haspopup="true"
				aria-label={isActive ? 'Close menu' : 'Open menu'}
				className={isActive ? 'menu active' : 'menu'}
				onClick={() => {
					setActive(!isActive)
				}}
			></div>
		</Container>
	)
}
