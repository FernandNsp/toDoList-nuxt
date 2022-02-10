<template>
	<div>
		<v-card
			v-for="(task, index) in tasks" :key="index"
			class="my-2 mb-4"
			elevation="2"
			outlined
		>
			<v-list-item one-line class="py-0">
				<v-list-item-content>
					<v-card-text class="text-h6">
						{{ task.content }}
					</v-card-text>
				</v-list-item-content>
				<v-card-actions class="buttons">
					<v-btn
						outlined
						color="success"
						@click="hasCompleted(task)"
					>{{ task.completed ? 'Concluído' : 'Concluir' }}
					</v-btn>
					<v-btn
						dark
						color="error"
						@click="removeTask(task)"
					>Deletar
					</v-btn>
				</v-card-actions>
			</v-list-item>
		</v-card>
	</div>
</template>

<script>
	export default {
		computed: {
			tasks(){
				return this.$store.getters.taskList
			}
		},
		methods: {
			hasCompleted(task) {
				this.$store.commit('HAS_COMPLETED', task);
			},
			removeTask(task) {
				this.$store.dispatch('removeTask', task);
			},
		}
	}
</script>