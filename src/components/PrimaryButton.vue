<template>
	<div>
			<button id="primary-button">Ver todas</button>
	</div>
</template>
<script>

export default {
  name: 'PrimaryButton',
}
</script>

<style scoped>
	#primary-button {
		background: #FFF;
		outline: none;
		border: .2rem solid var(--color-primary-border-button);
		color: var(--color-primary-button);
		border-radius: 1.5rem;
		padding: .5rem 1.2rem;
		font-weight: bold;
		cursor: pointer;
	}
</style>