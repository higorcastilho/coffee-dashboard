<template>
	<div class="input-component-wrapper">
		<font-awesome-icon class="input-icon" :icon="icon"/>
		<input 
			class="input-component" 
			@input="handleChange"
			:placeholder="placeholder"
		>
	</div>
</template>
<script>
export default {
  name: 'Input',
  props: {
		icon: {
			type: String
		},
		placeholder: {
			type: String
		}
	},
	methods: {
		handleChange(e) {
			this.$emit('handleChange', e.target.value)
		}
  }
}
</script>

<style scoped>
.input-component-wrapper {
	position: relative;
	margin: 1rem auto;
	width: 100%;
}
.input-icon {
	position: absolute;
	top: 2rem;
	width: 6rem;
	font-size: 2rem;
}
.input-component {
	text-align: center;
	outline: none;
	border: 0;
	background: #e7e7e7;
	height: 5rem;
	width: 90%;
	border-radius: 2rem;
	margin: .5rem;
}
@media (max-height: 700px) {
	.input-component-wrapper {
		width: 100%;
	}
	.input-component {
		margin: 0rem;
	}
	.input-icon {
		top: 1.5rem;
	}
}
</style>
