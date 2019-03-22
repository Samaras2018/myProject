<template>
  <a-layout id="components-layout-demo-side" style="min-height: 100vh">

   <a-layout-header>
    <h1>All todos</h1>
   </a-layout-header>

   <a-layout-content>
      <a-row type="flex" justify="center">
        
        <a-col :span="12">
          <addTodo/>
          <todos/>
        </a-col>
        
      </a-row>
   </a-layout-content>


   <a-layout-footer style="text-align: center">
        Ant Design ©2018 Created by Ant UED
    </a-layout-footer>
  </a-layout>
</template>

<script>
import Todos from './components/Todos.vue';
import addTodo from './components/addTodo.vue';

export default {
  name: 'app',
  components: {
    Todos,
    addTodo
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

  #components-layout-demo-side .logo {
  height: 32px;
  background: rgba(255,255,255,.2);
  margin: 16px;
}
</style>
