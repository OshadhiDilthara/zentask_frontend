<template>
    <div id="nav-bar">
        <router-link to="/tasks" id="tasks-link">
            <h1>ZenTask - Task Manager Application</h1>
        </router-link>
        <router-link to="/tasks" id="task-link">
            <h1>Tasks</h1>
        </router-link>
        
    </div>
</template>

<script>
export default{
    name:'NavBar',
}
</script>

<style scoped>
  #nav-bar {
    border-bottom: 1px solid #ddd;
    height: 75px;
    width: 100%;
    
  }

  #tasks-link {
    text-align: center;
    display: block;
    color: red;
    font-size: 22px;
    left: 32px;
    position: absolute;
    top: 7px;
    text-decoration: none;
  }

  #task-link h1 {
      margin: 0;
  }

  #task-link {
    position: absolute;
    right: 16px;
    top: 16px;
  }
</style>