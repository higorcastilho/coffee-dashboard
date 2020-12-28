<template>
	<div id="overview-wrapper">
		<overview-header />
		<main id="overview-main">
			<order-card 
				v-for="order in orders" 
				:key="order.customerId" 
				:order="order"
			/>
		</main>
	</div>
</template>
<script>

import OrderCard from '../components/OrderCard/index'
import OverviewHeader from '../components/OverviewHeader/index'

import Orders from '../services/api/orders'

export default {
  name: 'Overview',
  components: {
		OrderCard,
		OverviewHeader
  },

  data() {
		return {
			orders: []
		}
  },

  methods: {
		async getOrders () {
			const response = await Orders.index(10, 1)
			return response
		}
	},

	async mounted () {
		const response = await this.getOrders()
		this.orders = [...response.orders]
	}
}
</script>

<style scoped>

	#overview-main {
		padding: 1rem 1.5rem;
	}
</style>