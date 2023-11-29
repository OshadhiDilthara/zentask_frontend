<template>
    <div id="page-wrap">
        <TasksGrid :tasks="tasks"/>
    </div>
</template>

<script>
import axios from 'axios';
import TasksGrid from '../components/tasksGrid.vue';

export default {
  name: 'TasksPage',
  components: {
    TasksGrid,
  },
  data() {
    return {
      tasks: [],
    };
  },
  async created() {
    try {
      const result = await axios.get('/tasks');
      const tasks = result.data;
      this.tasks = tasks;
    } catch (error) {
      console.error('Error fetching tasks:', error);
    }
  },
};
</script>


