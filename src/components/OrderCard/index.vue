<template>
  <c-order-card :order="order">
    <c-left-section>
      <c-circle-green v-if="isPaid"/>
      <c-circle-orange v-else/>
      <c-id-title>#{{order._id.slice(0, 8)}}</c-id-title>
      <c-paragraph>{{order.customer[0].email}}</c-paragraph>
    </c-left-section>

    <c-right-section>
      <c-price>R${{(order.price * order.quantity).toFixed(2)}}</c-price>
      <c-paragraph>Pago: {{order.orderStatus}}</c-paragraph>
    </c-right-section>  
  </c-order-card>
</template>

<script>

import { 
  COrderCard,
  CLeftSection,
  CRightSection,
  CCircleGreen,
  CCircleOrange,
  CIdTitle,
  CPrice,
  CParagraph
} from './styles'

export default {
  name: 'OrderCard',
  components: {
    COrderCard,
    CLeftSection,
    CRightSection,
    CCircleGreen,
    CCircleOrange,
    CIdTitle,
    CPrice,
    CParagraph
  },
  props: {
    order: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      isPaid: false
    }
  },
  methods: {
    handleLeftCircleColor () {
      const status = this.order.orderStatus
      if (status === 'sim') {
        console.log('passou aqui')
        this.isPaid = true
      } else if (status === 'não') {
        this.isPaid = false
      }
    }
  },
  updated() {
    this.handleLeftCircleColor()
  },

  mounted() {
    this.handleLeftCircleColor()
  }
}
</script>

<style>
</style>
