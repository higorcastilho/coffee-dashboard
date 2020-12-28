<template>
	<div id="switch-button">
		<input 
			type="checkbox"
			:checked="checked"
			v-on:change="$emit('buttonswitch', $event.target.checked)"
		/>		
	</div>
</template>
<script>
export default {
	name: 'SwitchButton',
	model: {
		prop: 'checked',
		event: 'buttonswitch'
	},
	props: {
		checked: Boolean
	}
}
</script>
<style scoped>
	#switch-button {
		display: flex;
		align-items: center;
		justify-content: flex-end
	}

	input[type="checkbox"] {
		margin: 4rem 2rem;
	}

	input[type="checkbox"] {
		position: relative;
		width: 6.5rem;
		height: 2.5rem;
		border-radius: 7rem;
		-webkit-appearance: none;
		background: #d9d8dd;
		transition: .5s;
	}

	input:checked[type="checkbox"] {
		background: #38364c;
	}

	input[type="checkbox"]:before {
		content: '';
		position: absolute;
		width: 3.5rem;
		height: 3.5rem;
		border-radius: 50%;
		background: #ccc;
		top: -.5rem;
		left: -.1rem;
		transition: .5s;
	}

	input:checked[type="checkbox"]:before {
		left: 3.2rem;
		background: var(--color-primary-button);
	}

</style>