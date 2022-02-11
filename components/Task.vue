<template>
	<div>
		<v-card
			v-for="(task, index) in tasks" :key="index"
			class="d-flex flex-wrap my-2 mb-4"
			:class="`task ${task.completed ? 'hasCompleted' : ''}`"
			elevation="2"
			outlined
		>
			<v-list-item class="py-0 flex-wrap justify-end px-1">
				<v-col class="pa-0">
					<v-list-item-content class="py-0">
						<v-card-text class="body-1 font-weight-bold text-wrap" :class="`task ${task.completed ? 'text-decoration-line-through text--disabled' : ''}`">
							{{ task.content }}
						</v-card-text>
					</v-list-item-content>
				</v-col>

					<v-card-actions class="buttons">
						<v-btn
							icon
							outlined
							color="indigo"
							@click="hasCompleted(task)"
						>
							<v-icon>
								{{ task.completed ? 'mdi-minus-circle' : 'mdi-checkbox-marked-circle' }}
							</v-icon>
						</v-btn>

						<v-btn
							icon
							outlined
							color="error"
							@click="removeTask(task)"
						>
							<v-icon>
								mdi-delete
							</v-icon>
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