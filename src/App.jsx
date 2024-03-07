import './App.css'
import AddButton from './components/AddButton'
import TaskList from './components/Tasks'

function App() {
  return (
    <>
      <h1>To Do App</h1>
      <AddButton />
      <div>
        <TaskList />
      </div>
    </>
  )
}

export default App
