<template>
  <div id="page-wrap">
    <div id="img-wrap"></div>
    
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'TaskDetailsPage',
  data() {
    return {
      task: {},
    };
  },
  async created() {
    try {
    const response = await axios.get(`/tasks/${this.$route.params.id}`);
    const task = response.data;
    this.task = task;
  } catch (error) {
    console.error('Error fetching tasks:', error);
  }
    
  },
};
</script>

<style scoped>
#page-wrap {
  margin-top: 16px;
  padding: 16px;
  max-width: 600px;
}

#img-wrap {
  text-align: center;
}

img {
  width: 400px;
}

#task-details {
  padding: 16px;
  position: relative;
}

#delete {
  width: 100%;
}
</style>
