import NavBar from './components/NavBar.vue';

<template>
  <NavBar/>
  <div class="locale-changer">
    <select v-model="$i18n.locale">
      <option v-for="locale in $i18n.availableLocales" :key="`locale-${locale}`" :value="locale">{{ locale }}</option>
    </select>
  </div>

  <p class="message">{{ $t('message') }}</p>
  <router-view/>
  
</template>


<script>
import NavBar from './components/NavBar.vue';
export default {
  name:'App',
  components: {
    NavBar,
  }
}
</script>
<style>
  * {
    box-sizing: border-box;
    font-family: Arial;
  }

  #page-wrap {
    margin: auto;
    max-width: 800px;
    min-height: 100vh;
  }

  button {
    background-color: black;
    border: none;
    border-radius: 8px;
    color: white;
    cursor: pointer;
    font-size: 16px;
    font-weight: bold;
    outline: 0;
    padding: 16px;
  }

  select {
      padding: 10px;
      font-size: 16px;
      width: 20%;
      box-sizing: border-box;
      border: 2px solid #3498db; /* Border color */
      border-radius: 5px; /* Rounded corners */
      appearance: none; /* Remove default arrow in some browsers */
    }

    /* Style the options */
    option {
      padding: 10px;
      font-size: 16px;
      background-color: #f8f8f8; /* Background color */
      color: #333; /* Text color */
    }
</style>