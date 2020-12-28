<template>
  <c-order-card :order="order">
    <c-left-section>
      <c-circle />
      <c-id-title>#{{order.customerId.slice(0, 8)}}</c-id-title>
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
  CCircle,
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
    CCircle,
    CIdTitle,
    CPrice,
    CParagraph
  },
  props: {
    order: {
      type: Object,
      required: true
    }
  }
}
</script>

<style>
</style>
