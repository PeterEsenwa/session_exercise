<template>
	<div class="list-container">
		<ul class="user-list">
			<user-card v-for="user of sortedUsers" :key="user.name"
				:user="user" @try-lower-hand="handleLowerHandAction" />
		</ul>
		<div class="actions">
			<button :disabled="!showRaiseHandAction" class="action" @click="handleHandAction">
				<img alt="hand" src="../assets/hand.png">
				Raise Hand
			</button>
		</div>
	</div>
</template>

<script lang="ts">
import {computed, defineComponent, onMounted, reactive, ref} from "vue";
import {User as UserType, Moderator} from "@/types/user"
import UserCard from "@/components/User.vue";

export default defineComponent({
	name: "UserList",
	components: {UserCard},
	setup() {
		const currentUser = ref<UserType>()

		const users = reactive([
			new Moderator({name: "Alice Wunder"}),
			new UserType({name: "Badri", isHandRaised: true}),
			new UserType({name: "Camilla"}),
			new UserType({name: "Peter"}),
			new UserType({name: "Veronica"}),
		])

		const sortedUsers = computed(() => {
			const copyUsers = [...users]
			return copyUsers.sort(({name: name1}, {name: name2}) => name1.localeCompare(name2))
		})

		const isModerator = computed(() => currentUser.value instanceof Moderator)

		const showRaiseHandAction = computed(() => {
			if (!currentUser.value) return false

			return !isModerator.value && !currentUser.value.isHandRaised
		})

		const handleHandAction = () => {
			if (!currentUser.value) return
			currentUser.value?.toggleHand(true)
		}

		const handleLowerHandAction = (user: UserType) => {
			if (isModerator.value) {
				user.toggleHand(false)
			}
		}

		onMounted(() => {
			currentUser.value = users[0]
		})

		return {
			sortedUsers,
			currentUser,
			showRaiseHandAction,
			handleHandAction,
			handleLowerHandAction
		}
	}
})
</script>

<style lang="scss" scoped>
.list-container {
	display: flex;
	flex-direction: column;
	width: min-content;
	margin: 0;
	padding: 1em;
	border: 1px solid #2c3e50;
	row-gap: 1em;

	.user-list {
		display: flex;
		flex-direction: column;
		width: min-content;
		margin: 0;
		padding: 0;
		row-gap: 0.5em;
	}

	.action {
		font: inherit;
		font-size: 1.5em;
		font-weight: 400;
		width: 100%;
		padding: 0.5em 1em;
		border: 0.5px solid darkgray;
		border-radius: 0.25em;
		background-color: aquamarine;

		img {
			width: 24px;
			height: 24px;
		}
	}
}
</style>
