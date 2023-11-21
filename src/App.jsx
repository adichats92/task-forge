// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import './index.css';
import Footer from './components/Footer';
import CookieBanner from './components/CookieBanner';
import InputField from './components/InputField';
import 'bootstrap/dist/css/bootstrap.min.css';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import DisplayTaskCards from './components/DisplayTaskCards';
import About from './components/About';

const App = () => {
	const storedTaskCards = JSON.parse(localStorage.getItem('taskCards')) || [];

	const [taskCards, setTaskCards] = useState(storedTaskCards);

	useEffect(() => {
		localStorage.setItem('taskCards', JSON.stringify(taskCards));
	}, [taskCards]);

	return (
		<>
			<Tabs
				defaultActiveKey='home'
				id='fill-tab-example'
				className='mb-1'
				fill
			>
				<Tab
					eventKey='home'
					title='Home'
				>
					<h1
						className='d-flex justify-content-center align-items-center wrap py-4 my-4 neon-text fs-2'
						id='taskForge'
					>
						Task <strong className='text-warning fs-1'>F</strong>orge
					</h1>

					<InputField
						taskCards={taskCards}
						setTaskCards={setTaskCards}
					/>
				</Tab>

				<Tab
					eventKey='task-cards'
					title='My Tasks'
				>
					<DisplayTaskCards
						taskCards={taskCards}
						setTaskCards={setTaskCards}
					/>
				</Tab>

				<Tab
					eventKey='about'
					title='About'
				>
					<About />
				</Tab>
			</Tabs>

			<CookieBanner />

			<Footer />
		</>
	);
};

export default App;
