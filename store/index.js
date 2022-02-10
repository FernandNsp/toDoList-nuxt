export const state = () => ({
	tasks: [],
	newTask: '',
})

export const mutations = {
	READ_TASK(state, payload){
		state.newTask = payload
	},
	SET_TASK(state, payload){
		state.tasks = [{ content: payload, completed: false }, ...state.tasks]
		// state.tasks.push(payload)
	},
	REMOVE_TASK(state, payload){
		const indexTask = state.tasks.findIndex((task) => task.content === payload.content)
		state.tasks.splice(indexTask, 1)
	},
	HAS_COMPLETED(state, payload){
		payload.completed = !payload.completed
	},
}

export const actions = {
	setTask(context, payload){
		context.commit('SET_TASK', payload)
	},
	removeTask(context, payload){
		context.commit('REMOVE_TASK', payload)
	},
}

export const getters = {
	taskList: (state) => state.tasks
}