import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Edit from './Edit';
import PropTypes from 'prop-types';

const TaskCard = ({ taskCard, toggleCompletion, deleteTask, setTaskCards, taskCards }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const editButton = () => handleShow();

  const handleDelete = () => {
    deleteTask(taskCard.id);
  };

  const updateTask = (updatedTask) => {
    const updatedTaskArray = Array.isArray(updatedTask) ? updatedTask : [updatedTask];

    const updatedTaskCards = taskCards
      ? taskCards.map((task) => updatedTaskArray.find((updated) => updated.id === task.id) || task)
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
      <Card className={`card ${taskCard.priority} ${taskCard.done} ${cardBorderStyle} mb-3`}>
        <Card.Header as="h3" className='fs-2'>{taskCard.title}</Card.Header>
      <Card.Body className='fs-5 d-sm-flex justify-content-between align-items-center'>
        <Form>
          <Form.Group className="m-1 p-2" controlId="formBasicCheckbox">
          <Form.Check
          type="checkbox"
          id={`taskCard_${taskCard.id}`}
          name={taskCard.title}
          value={taskCard.title}
          checked={taskCard.done} 
          onChange={()=> toggleCompletion(taskCard.id)}
          />
        </Form.Group>
        </Form>
        <Card.Text className='m-1  text-wrap' style={{minWidth: '20rem'}}>
          {taskCard.details}
        </Card.Text>
        
        <Card.Text className='m-1'>
          ⏰ {taskCard.time}
        </Card.Text>
        <Card.Text className='m-1'>
          📌 {taskCard.location}
        </Card.Text>
        
        <Button onClick={editButton} variant="primary"className='  m-1'>
        Edit</Button>
      
        <Button onClick={handleDelete} variant="danger" className=' m-1'>Delete</Button>
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
}
TaskCard.propTypes = {
  taskCard: PropTypes.object.isRequired,
  taskCards: PropTypes.array.isRequired,
  toggleCompletion: PropTypes.func.isRequired,
  deleteTask: PropTypes.func.isRequired,
  setTaskCards: PropTypes.func.isRequired,
};
export default TaskCard;
