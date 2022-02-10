<template>
	<v-container
		class="mx-12"
	>
		<h1 class="blue darken-2 text-center mb-4">ToDo List - {{ tasks }}</h1>
		<v-row>
			<v-col cols="12">
				<v-input>
					<v-text-field
						type="text"
						label="Nova tarefa"
						v-model="novaTask"
						@keypress.enter="enviarTask(novaTask)"
					></v-text-field>
				</v-input>
				<v-btn
					light
					color="primary"
					@click="enviarTask(novaTask)"
				>
					Adicionar
				</v-btn>
			</v-col>
		</v-row>
		<v-row>
			<v-col>
				<Task
					v-for="(task, index) in tasks"
					:key="index"
					:task="task"
				/>
			</v-col>
		</v-row>
	</v-container>
</template>

<script>
	import { mapState } from "vuex"

	export default {
		name: 'IndexPage',
		computed: {
			...mapState(["tasks"]),
			novaTask: {
				get(){
					return this.$store.state.newTask
				},
				set(value){
					this.$store.commit('READ_TASK', value)
				}
			}
		},
		methods: {
			enviarTask(value){
				this.$store.dispatch('setTask', value)
			}
		}
	}
</script>