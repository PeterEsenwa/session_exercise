<template>
	<div class="user-card">
		<img :src="user.picture" class="user-picture" alt="">
		<span class="user-name">{{ user.name }}</span>
		<img v-if="user.isHandRaised" src="../assets/hand.png" alt="" @click="$emit('tryLowerHand', user)">
	</div>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import {User} from "@/types/user";

export default defineComponent({
	name: "UserCard",
	props: {
		user: {
			type: User,
			required: true,
		}
	},
	emits: ['tryLowerHand']
})
</script>

<style scoped lang="scss">
	.user-card {
		display: grid;
		grid-template-areas: "picture name hand";
		grid-template-columns: min-content 1fr 2em;
		width: 100%;
		align-items: center;
		gap: 0.5em;

		.user-name {
			display: flex;
			align-items: center;
			white-space: nowrap;
			font-size: 1.5em;
		}

		.user-picture {
			border-radius: 0.25em;
		}
	}
</style>
