import TaskCard from "./TaskCard";
import PropTypes from 'prop-types';

const DisplayTaskCards = ({taskCards, setTaskCards}) => {
 
  const toggleCompletion = (id) => {
    setTaskCards((prev) =>
      prev.map((t) => (t.id === id ? { ...t, done: !t.done } : t))
    );
  };
  const deleteTask = (id) => {
    const updatedTasks = taskCards.filter((task) => task.id !== id);
    setTaskCards(updatedTasks);
  };

  return (
    <div className="block mb-5 pb-5">
      <div className="list-group mb-5 pb-5">
        {taskCards
          .sort((a) => (a.done ? 1 : -1))
          .map((taskCard) => (
            <TaskCard
              key={taskCard.id}
              taskCard={taskCard}
              setTaskCards={setTaskCards}
              toggleCompletion={toggleCompletion}
              deleteTask={deleteTask}
              taskCards={taskCards}
            />
          ))}
      </div>
    </div>
  );
};

DisplayTaskCards.propTypes = {
  taskCards: PropTypes.array.isRequired,
  setTaskCards: PropTypes.func.isRequired,
};

export default DisplayTaskCards;