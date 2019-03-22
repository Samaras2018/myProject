<template>
  <a-layout>
    <a-card title="Add Section">
      <a-form
   
    @submit.prevent="handleSubmit"
  >
    <a-form-item
      label="Note"
      :label-col="{ span: 5 }"
      :wrapper-col="{ span: 12 }"
    >
      <a-input v-model="title"/>
    </a-form-item>

    
    <a-form-item
      :wrapper-col="{ span: 12, offset: 5 }"
    >
      <a-button
        type="primary"
        html-type="submit"
      >
        Submit
      </a-button>
    </a-form-item>
    <a-form-item>
      <a-select defaultValue="200" style="width: 120px" @change="handleChange">
        <a-select-option value="200">200</a-select-option>
        <a-select-option value="100">100</a-select-option>
        <a-select-option value="50">50</a-select-option>
        <a-select-option value="20">20</a-select-option>
        <a-select-option value="10">10</a-select-option>
        <a-select-option value="5">5</a-select-option>
      </a-select>
    </a-form-item>
  </a-form>

    </a-card>
  </a-layout>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  data() {
    return {
      title : ''
    }
  },
  methods: {
    ...mapActions(['addTodo','limit','fetchTodos']),
    handleSubmit() {
      this.addTodo(this.title)
    },
    async handleChange(value) {
      await this.fetchTodos()
      await this.limit(value)
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
