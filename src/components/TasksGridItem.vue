<template>
  <div class="task-item">
    <div id="task-details">
      <h1>Title: {{ task.title }}</h1>
      <h3 id="description">Description: {{ task.description }}</h3>
      <h3 id="date">Date: {{ task.date }}</h3>
      <h3>Priority: {{ task.priority }}</h3>
      <div class="task-ongoing" v-if="task.status === 0">
        <h3>Ongoing Task</h3>
      </div>
      <div class="task-completed" v-if="task.status === 1">
        <h3>Task Completed</h3>
      </div>
      <h3>Comments: {{ task.comments }}</h3>
    </div>

    <div class="button-container">
      <router-link v-bind:to="'/tasks/' + task.id ">
        <button class="edit-btn">Edit</button>
      </router-link>

      <router-link v-bind:to="'/tasks/' + task.id ">
        <button class="dlt-btn">Delete</button>
      </router-link>

      <router-link v-bind:to="'/tasks/' + task.id ">
        <button class="comment-btn" v-on:click="$emit('remove-from-list',task.id)">Add Comment</button>
      </router-link>
    </div>

    
  </div>
</template>

<script>
export default {
  name: 'TasksGridItem',
  props: ['task'],
};
</script>

<style scoped>
.task-item {
  align-items: center;
  border-radius: 8px;
  box-shadow: 0px 2px 5px #888;
  display: flex;
  flex-direction: column;
  margin-bottom: 2%;
  margin-right: 2%;
  padding: 20px;
  position: relative;
  width: 100%;
}

.task-name {
  margin-bottom: 0;
}

img {
  height: 200px;
  width: 200px;
}

a {
  width: 100%;
}

button {
  width: 100%;
}

.button-container {
  display: flex;
  gap: 10px;
  justify-content: flex-end; 

}
.comment-btn {
  
  padding: 10px;
  cursor: pointer;
}

.comment-btn {
  
  background-color: red; 
  color: white; 
  border: none; 
  border-radius: 5px; 
}

.task-ongoing{
  color:red;
}

.task-completed{
  color: green;
}
</style>
