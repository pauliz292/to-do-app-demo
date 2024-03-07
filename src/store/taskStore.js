import {makeAutoObservable, runInAction} from 'mobx';

const _tasks = [
  {name: "Item 1", isDeleted: false},
]

export default class TaskStore {
  tasks = _tasks;

  constructor() {
    makeAutoObservable(this);
  }

  addTask = task => {
    runInAction(()=>{
      this.tasks.push({...task, isDeleted:false});
    })
  };

  deleteTask = task => {
    const foundIndex = this.tasks.findIndex(t => t === task);
    if (foundIndex !== -1) {
      runInAction(()=>{
        this.tasks.splice(foundIndex, 1);
      })
    }
  }
}