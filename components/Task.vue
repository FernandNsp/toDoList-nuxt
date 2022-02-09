<template>
	<v-card 
		class="my-2 mb-4"
		elevation="2"
    	outlined
	>
		<v-list-item one-line class="py-2">
			<v-list-item-content>
				<v-list-item-title class="text-h6">
					{{ task.content }}
				</v-list-item-title>
			</v-list-item-content>

			<v-card-actions class="buttons">
				<v-btn
					outlined
					color="success"
					@click="hasCompleted"
				>{{ task.completed ? 'Concluído' : 'Concluir' }}
				</v-btn>

				<v-btn
					dark
					color="error"
					@click="removeTask"
				>Deletar
				</v-btn>
			</v-card-actions>
		</v-list-item>
	</v-card>
</template>

<script>
	export default {
		props: ['task'],
		methods: {
			hasCompleted() {
				this.$store.commit('HAS_COMPLETED', this.task);
			},
			removeTask() {
				this.$store.commit('REMOVE_TASK', this.task);
			}
		}
	}
</script>