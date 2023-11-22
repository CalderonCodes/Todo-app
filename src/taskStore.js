import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

const useStore = create(persist((set, get) => ({
    tasks: [],
    addTask: (newTask) => set((state) => ({ tasks: [...state.tasks, newTask] })),
    removeTask: (taskID) => set((state) => ({ tasks: state.tasks.filter(task => task.id !== taskID) })),
  }),
  {
    name: 'task-storage',
  }
  ));

  export default useStore;