import { useState, useEffect } from 'react';
import { Offcanvas, Form, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

function Edit({ handleClose, show, taskCardData, updateTask }) {
  const [editedTask, setEditedTask] = useState({});

  useEffect(() => {
    setEditedTask(taskCardData);
  }, [taskCardData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedTask({
      ...editedTask,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateTask(editedTask);
    handleClose();
  };

  return (
    <Offcanvas show={show} onHide={handleClose}>
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Edit</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formTitle">
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              name="title"
              value={editedTask.title || ''}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group controlId="formGridDetails">
            <Form.Label>Details</Form.Label>
            <Form.Control
              name="details"
              type="text"
              as="textarea"
              rows={3}
              placeholder="Write details of your task here..."
              value={editedTask.details || ''}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group controlId="formGridLocation">
            <Form.Label>Location</Form.Label>
            <Form.Control
              name="location"
              type="text"
              value={editedTask.location || ''}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group controlId="formGridPriority">
            <Form.Label>Priority</Form.Label>
            <Form.Select
              value={editedTask.priority || ''}
              onChange={handleChange}
            >
              <option id="normal" name="priority">Normal</option>
              <option id="high" name="priority">High</option>
              <option id="low" name="priority">Low</option>
            </Form.Select>
          </Form.Group>

          <Form.Group controlId="formGridTime">
            <Form.Label>Set Time</Form.Label>
            <Form.Control
              type="time"
              name="time"
              placeholder="Time"
              value={editedTask.time || ''}
              onChange={handleChange}
            />
          </Form.Group>

          <Button type="submit">Update</Button>
        </Form>
      </Offcanvas.Body>
    </Offcanvas>
  );
}

Edit.propTypes = {
  updateTask: PropTypes.func.isRequired,
  handleClose: PropTypes.func.isRequired,
  taskCardData: PropTypes.object.isRequired,
  show: PropTypes.bool.isRequired,
};

export default Edit;
