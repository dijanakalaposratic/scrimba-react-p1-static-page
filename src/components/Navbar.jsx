import favicon from '../img/favicon.svg';

const Navbar = () => {
	return (
		<nav>
			<div className='logo'>
				<img src={favicon} alt='React Logo' />
				<h1>ReactFacts</h1>
			</div>
			<div className='title'>
				<h2>React Course - Project 1</h2>
			</div>
		</nav>
	);
};

export default Navbar;
