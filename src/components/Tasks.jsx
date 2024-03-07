import {observer} from 'mobx-react-lite';
import {useStore} from '../store/store';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';

const TaskList = observer(() => {
  const {taskStore} = useStore();
  const {tasks, deleteTask} = taskStore;

  const onDelete = item => {
    deleteTask(item);
  }

  return (
    <ListGroup>
      {tasks.map((item, i) => (
        <ListGroup.Item key={i}>
          <div 
            className='row' 
            style={{ 
              display: 'flex', 
              alignItems: 'center', 
              margin: 10 
            }}
          >
            <h4>{item.name}</h4>
            <Button onClick={() => onDelete(item)}>Delete</Button>
          </div>
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
})

export default TaskList;
