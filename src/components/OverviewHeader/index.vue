<template>
	<header id="overview-header">
		<c-overview-header-title>Transações</c-overview-header-title>
		<c-overview-header-button>Ver todas</c-overview-header-button>
	</header>
</template>
<script>
import { COverviewHeaderTitle, COverviewHeaderButton } from './styles'
export default {
	name: 'OverviewHeader',
	components: {
		COverviewHeaderTitle,
		COverviewHeaderButton
	}
}
</script>
<style scoped>
	#overview-header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 0rem 1.5rem;
		min-width: 29rem;
		width: 100%; 
	}
</style>