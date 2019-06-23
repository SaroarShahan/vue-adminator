<template>
  <div id="app">
    <Sidebar/>
    <Main>
      <router-view/>
    </Main>
  </div>
</template>

<script>
import Sidebar from '@/components/Sidebar'
import Main from '@/components/Main'

export default {
  name: 'app',
  components: {
    Sidebar,
    Main
  }
}
</script>

<style>
</style>
