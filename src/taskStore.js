import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

const useStore = create(persist((set, get) => ({
    tasks: [],
    addTask: (newTask) => set((state) => ({ tasks: [...state.tasks, newTask] })),
    removeTask: (index) => set((state) => ({ tasks: state.tasks.filter((_, i) => i !== index) })),
  }),
  {
    name: 'task-storage',
  }
  ));

  export default useStore;