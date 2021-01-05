<template>
  <c-order-card :order="order">
    <c-left-section>
      <transition name="green-circle">
        <c-circle-green v-if="isPaid"/>
        <c-circle-orange v-else/>
      </transition>
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

<style scoped>
  .green-circle-enter {
    opacity: 0;
    transform: scale(1.1);
  }

  .green-circle-enter-active {
    transition: all .8s;
  }

  .green-circle-enter-to {
    opacity: 1;
    transform: scale(1)
  }
</style>
