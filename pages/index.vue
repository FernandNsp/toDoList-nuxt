<template>
	<v-container
		class="mx-12"
	>
		<h1 class="blue darken-2 text-center mb-4">ToDo List</h1>
		<v-row>
			<v-col cols="12">
				<v-textarea
					v-model.trim="novaTask"
					filled
					auto-grow
					label="Insira aqui a tarefa"
				>
					<v-text-field
						type="text"
						@keypress.enter="enviarTask"
					></v-text-field>
				</v-textarea>
				<v-btn
					light
					color="primary"
					@click="enviarTask"
				>
					Adicionar
				</v-btn>
			</v-col>
		</v-row>
		<v-row>
			<v-col>
					<Task />
			</v-col>
		</v-row>
	</v-container>
</template>

<script>
	export default {
		name: 'IndexPage',
		computed: {
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
			enviarTask(){
				if(this.novaTask){
					this.$store.dispatch('setTask', this.novaTask)
					this.novaTask = ''
				}
			}
		},
	}
</script>