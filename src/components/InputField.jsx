import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import PropTypes from 'prop-types';

const InputField = ({ setTaskCards }) => {
	const [taskCardInput, setTaskCardInput] = useState({
		title: '',
		details: '',
		location: '',
		priority: 'Normal',
		time: '',
	});
	//
	const handleChange = (e) => {
		const { name, value } = e.target;
		if (name === 'priority') {
			setTaskCardInput((prevInput) => ({
				...prevInput,
				[name]: value,
			}));
		} else {
			setTaskCardInput((prevInput) => ({
				...prevInput,
				[name]: value,
			}));
		}
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		console.log();
		const { title, details, location, priority, time } = taskCardInput;
		if (!title || !details) {
			alert('Please give at least Title and Details');
			return;
		}
		const newTaskCard = {
			id: Math.floor(Math.random() * 1000) + 1,
			title,
			details,
			location,
			priority,
			time,
			done: false,
		};
		setTaskCards((prevTaskCards) => [...prevTaskCards, newTaskCard]);
		setTaskCardInput({
			title: '',
			details: '',
			location: '',
			priority: '',
			time: '',
		});
	};
	return (
		<Form
			onSubmit={handleSubmit}
			className='mb-2'
		>
			<Form.Group
				className='mb-3 px-1'
				as={Col}
				xs={{ span: 12, offset: 0 }}
				md={{ span: 6, offset: 3 }}
				xl={{ span: 4, offset: 4 }}
				controlId='formGridTitle'
			>
				<Form.Label>Title</Form.Label>
				<Form.Control
					name='title'
					type='text'
					// as="textarea"
					// rows={1}
					placeholder='Write your task title here...'
					value={taskCardInput.title}
					onChange={handleChange}
				/>
			</Form.Group>

			<Form.Group
				className='my-3 px-1'
				as={Col}
				xs={{ span: 12, offset: 0 }}
				md={{ span: 6, offset: 3 }}
				xl={{ span: 4, offset: 4 }}
				controlId='formGridDetails'
			>
				<Form.Label>Details</Form.Label>
				<Form.Control
					className='text-start'
					name='details'
					type='text'
					as='textarea'
					rows={3}
					placeholder='Write details of your task here...'
					value={taskCardInput.details}
					onChange={handleChange}
				/>
			</Form.Group>

			<Form.Group
				className='my-3 px-1'
				as={Col}
				xs={{ span: 12, offset: 0 }}
				md={{ span: 6, offset: 3 }}
				xl={{ span: 4, offset: 4 }}
				controlId='formGridLocation'
			>
				<Form.Label>Location</Form.Label>
				<Form.Control
					name='location'
					type='text'
					value={taskCardInput.location}
					onChange={handleChange}
				/>
			</Form.Group>

			<Form.Group
				className='my-3 px-1'
				as={Col}
				xs={{ span: 12, offset: 0 }}
				md={{ span: 6, offset: 3 }}
				xl={{ span: 4, offset: 4 }}
				controlId='formGridPriority'
			>
				<Form.Label>Priority</Form.Label>
				<Form.Select
					name='priority'
					value={taskCardInput.priority}
					onChange={handleChange}
				>
					<option
						id='normal'
						name='priority'
						value='Normal'
					>
						Normal
					</option>
					<option
						id='high'
						name='priority'
						value='High'
					>
						High
					</option>
					<option
						id='low'
						name='priority'
						value='Low'
					>
						Low
					</option>
				</Form.Select>
			</Form.Group>

			<Form.Group
				className='my-3 px-1'
				as={Col}
				xs={{ span: 12, offset: 0 }}
				md={{ span: 6, offset: 3 }}
				xl={{ span: 4, offset: 4 }}
				controlId='formGridTime'
			>
				<Form.Label>Set Time</Form.Label>
				<Form.Control
					type='time'
					name='time'
					placeholder='Time'
					value={taskCardInput.time}
					onChange={handleChange}
				/>
			</Form.Group>

			<Button
				onClick={handleSubmit}
				as={Col}
				xs={{ span: 10, offset: 1 }}
				md={{ span: 6, offset: 3 }}
				xl={{ span: 4, offset: 4 }}
				variant='warning'
				className=' my-5 px-5 py-2'
			>
				Submit
			</Button>
		</Form>
	);
};

InputField.propTypes = {
	setTaskCards: PropTypes.func.isRequired,
};
export default InputField;
