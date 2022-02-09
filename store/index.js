export const state = () => ({
	tasks: [],
	newTask: '',
})

export const mutations = {
	VIEW_TASK(state, payload){
		state.newTask = payload
	},
	SET_TASK(state, task){
		state.tasks = [{ content: task, completed: false }, ...state.tasks]
	},
	REMOVE_TASK(state, task){
		state.tasks.splice(state.tasks.indexOf(task), 1)
	},
	HAS_COMPLETED(state, task){
		task.completed = !task.completed
	}
}