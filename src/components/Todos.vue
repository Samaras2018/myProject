<template>
    <div>
    <a-layout>
      
        <a-card title="Card Title">
            <a-list
                :grid="{ gutter: 16, xs: 1, sm: 2, md: 4, lg: 4, xl: 6, xxl: 3}"
                :dataSource="allTodos"
            >
                <a-list-item slot="renderItem" slot-scope="item, index" >
                    <a-card :title="item.id" :class="[item.completed ? green : coral, coral]">{{ item.title }}
                        <template class="ant-card-actions" slot="actions" >
                            <a-icon type="setting" @click="deleteTodo(index)"/>
                        </template>
                    </a-card>
                </a-list-item>
            </a-list>
        </a-card>
     
      
    </a-layout>
  </div>
</template>

<script>
import { mapGetters,mapActions } from 'vuex';

export default {
    data() {
        return {
            collapsed: false,
            green : green,
            coral : coral
        }
    },
    methods: {
        ...mapActions(['fetchTodos', 'deleteTodo']),
    },
    created() {
        this.fetchTodos()
    },
    computed: {
        ...mapGetters(['allTodos'])
    },
    
}
</script>

<style>
  .green{
      background: green;
  }
  .coral{
      background: coral;
  }
</style>
