<template>
	<div id="overview-wrapper">
		<overview-header />
		<main id="overview-main">
			<order-card 
				v-for="order in orders" 
				:key="order._id" 
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

  sockets: {
		connect: function () {
			console.log('socket connected')
		},
		notification: function (data) {
			const updatedOrderId = data.data.orderId

			const updatedOrderList = this.orders.map( order => {
				if (order._id === updatedOrderId) {
					order.orderStatus = "sim"
					return order
				} else {
					return order
				}
			})
			this.orders = [...updatedOrderList]
		},
		newOrder: function (data) {
			const { _id, email, orderStatus, price, quantity } = data.data
			const newOrder = {
				_id,
				customer: [{ email }],
				orderStatus,
				price,
				quantity
			}
			console.log(newOrder)
			const updatedOrderList = [ newOrder, ...this.orders ]
			this.orders = [ ...updatedOrderList ]
		}
  },

  methods: {
		async getOrders () {
			const response = await Orders.index(30, 1)
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