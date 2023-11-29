<template>
    <div class = "grid-wrap">
        <TasksGridItem
            v-for="task in tasks"
            :key="task.id"
            :task="task"/>
    </div>
</template>

<script>
    import TasksGridItem from './TasksGridItem.vue';

    export default {
        name: 'TasksGrid',
        props: ['tasks'],
        components: {
            TasksGridItem
        }
    }
</script>

<style scoped>
  .grid-wrap {
    display:grid;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-top: 16px;
  }
</style>