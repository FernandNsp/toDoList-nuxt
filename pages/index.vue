<template>
	<v-container
		class="mx-12"
	>
		<h1 class="blue darken-2 text-center mb-4">ToDo List {{ newTask }}</h1>
		<v-row>
			<v-col cols="12">
				<v-input>
					<v-text-field
						type="text"
						label="Nova tarefa"
						v-model="novaTask"
						@keypress.enter="setTask"
					></v-text-field>
				</v-input>
				<v-btn
					light
					color="primary"
					@click="setTask"
				>
					Adicionar
				</v-btn>
			</v-col>
		</v-row>
		<v-row>
			<v-col>
				<Task
					v-for="(task, index) in $store.state.tasks"
					:key="index"
					:task="task"
				/>
			</v-col>
		</v-row>
	</v-container>
</template>

<script>
	export default {
		name: 'IndexPage',
		setup(){
			const novaTask = ''
			return {
				novaTask
			}
		},
		computed: {
			newTask(){
				return this.$store.state.newTask
			}
		},
		methods: {
			setTask(){
				if(this.novaTask){
					this.$store.commit('SET_TASK', this.novaTask);
					this.novaTask = '';
				}
			},
			handleClick(){
				this.$store.commit("VIEW_TASK", this.novaTask)
				this.novaTask = '';
			}
		}
	}
</script>