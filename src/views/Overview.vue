<template>
	<div id="overview-wrapper">
		<overview-header />
		<main id="overview-main">
			<transition-group name="list">
				<order-card 
					v-for="order in orders" 
					:key="order._id" 
					:order="order"
				/>
			</transition-group>
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
		updateStatus: function (data) {
			const updatedOrderId = data

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
		popUpOrder: function (data) {
			
			const { _id, email, orderStatus, price, quantity } = data
			const newOrder = {
				_id,
				customer: [{ email }],
				orderStatus,
				price,
				quantity
			}
			const updatedOrderList = [ ...this.orders ]
			updatedOrderList.unshift(newOrder)
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

	.list-enter-active, .list-leave-active {
		transition: all .5s;
	}

	.list-enter, .list-leave-to {
		opacity: 0;
		transform: translateX(30px);
	}

</style>