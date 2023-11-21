import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Edit from './Edit';
import PropTypes from 'prop-types';

const TaskCard = ({
	taskCard,
	toggleCompletion,
	deleteTask,
	setTaskCards,
	taskCards,
}) => {
	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	const editButton = () => handleShow();

	const handleDelete = () => {
		deleteTask(taskCard.id);
	};

	const updateTask = (updatedTask) => {
		const updatedTaskArray = Array.isArray(updatedTask)
			? updatedTask
			: [updatedTask];

		const updatedTaskCards = taskCards
			? taskCards.map(
					(task) =>
						updatedTaskArray.find((updated) => updated.id === task.id) || task
			  )
			: [];

		setTaskCards(updatedTaskCards);
	};

	const getBorderColor = (priority) => {
		switch (priority) {
			case 'Normal':
				return 'border border-primary'; // Bootstrap primary color for border
			case 'Low':
				return 'border border-success'; // Bootstrap success color for border
			case 'High':
				return 'border border-danger'; // Bootstrap danger color for border
			default:
				return 'border border-primary'; // Default to primary color for border
		}
	};
	const cardBorderStyle = getBorderColor(taskCard.priority);

	return (
		<>
			<Card
				className={`card ${taskCard.priority} ${taskCard.done} ${cardBorderStyle} my-4 mx-5 d-flex flex-row`}
			>
				<Card.Header
					as='h3'
					className='fs-2 text-center p-3 text-wrap'
				>
					{taskCard.title}
				</Card.Header>
				<Card.Body className='fs-5'>
					<Form>
						<Form.Group
							className=' p-5 position-absolute top-0 start-100 translate-middle'
							controlId='formBasicCheckbox'
						>
							<Form.Check
								type='checkbox'
								id={`taskCard_${taskCard.id}`}
								name={taskCard.title}
								value={taskCard.title}
								checked={taskCard.done}
								onChange={() => toggleCompletion(taskCard.id)}
							/>
						</Form.Group>
					</Form>
					<Card.Text className='py-5 m- text-wrap text-baseline'>
						{taskCard.details}
					</Card.Text>

					<Card.Text className='m-1 p-2 position-absolute bottom-0 start-0 translate-x'>
						⏰ {taskCard.time}
					</Card.Text>
					<Card.Text className='m-1 p-2 position-absolute bottom-0 end-0 translate-x'>
						📌 {taskCard.location}
					</Card.Text>
					<div
						className='btn-group position-absolute top-0 end-0 translate p-2'
						role='group'
						aria-label='Basic mixed styles example'
					>
						<Button
							onClick={editButton}
							variant='primary'
							className='  m-1'
						>
							Edit
						</Button>

						<Button
							onClick={handleDelete}
							variant='danger'
							className=' m-1'
						>
							Delete
						</Button>
					</div>
				</Card.Body>
			</Card>
			<Edit
				handleClose={handleClose}
				show={show}
				taskCardData={taskCard}
				updateTask={updateTask}
			/>
		</>
	);
};
TaskCard.propTypes = {
	taskCard: PropTypes.object.isRequired,
	taskCards: PropTypes.array.isRequired,
	toggleCompletion: PropTypes.func.isRequired,
	deleteTask: PropTypes.func.isRequired,
	setTaskCards: PropTypes.func.isRequired,
};
export default TaskCard;
