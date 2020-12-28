<template>
  <theme-provider
    :theme="{
      dark: dark
  }">
    <c-main-container>
      <!-- If admin is logged -->
      <div v-if="isLogged">
          <switch-button
            @buttonswitch="dark=!dark"
          />
          <router-view></router-view>
      </div>
      
      <!-- If admin isn't logged -->
      <div v-if="!isLogged">
        <router-view></router-view>
      </div>
    
    </c-main-container>
  </theme-provider>
</template>

<script>
import { ThemeProvider } from 'vue-styled-components'
import { isLoggedIn } from './utils/helpers/auth'

import SwitchButton from './components/SwitchButton/index'

import styled from 'vue-styled-components'

const CMainContainer = styled.div`
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  transition: .7s;
  min-height: 100vh;
  background: ${props => props.theme.dark ? '#242132' : '#fff'}
`
export default {
  name: 'App',
  components: {
    ThemeProvider,
    CMainContainer,
    SwitchButton
  },
  data() {
    return {
      isLogged: isLoggedIn(),
      dark: false
    }
  }
}
</script>

<style>
</style>
