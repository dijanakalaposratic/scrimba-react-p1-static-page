import favicon from '../img/favicon.svg';

const Navbar = () => {
	return (
		<nav>
			<img src={favicon} alt='React Logo' />
			<h1>ReactFacts</h1>
			<h2>React Course - Project 1</h2>
		</nav>
	);
};

export default Navbar;
