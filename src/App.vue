<template>
  <main class="container">
      <div class="row">
        <div class="col">
          <!-- NOTE Search gets defined with prevent to stop reload -->
          <form @submit.prevent="search">
            <!-- NOTE The search bar is separate from components, by default it is on the front page -->
            <!-- NOTE v-model allows us access to search the api with query (what the user typed in the search) -->
            <input class="mx-1" type="text" placeholder="yyyy-mm-dd" v-model="state.query">
            <button type="submit" class="btn btn-outline-success">Search</button>
          </form>
          <div v-if="state.pictures.media_type == 'image'">
          <img :src="state.pictures.url" alt="">
          </div>
          <div v-else><iframe :src="state.pictures.url" frameborder="0"></iframe></div>
        </div>
      </div>
      <!-- NOTE This is calling in the templates for Results and Details -->
      <div class="row">
        <div class="col-6">
          <ApodResults />
        </div>
      </div>
    </main>
</template>

<script>
import { computed, reactive } from 'vue'
import { apodService } from './Services/ApodService'
import { AppState } from './AppState'
import ApodResults from "./components/ApodResults";

export default {
  name: 'App',
  setup() {
    
    const state = reactive({
      query: '',
      pictures: computed(() => AppState.pictures)
    })
    return {
      state,
      async search() {
        try {
          // NOTE call to service and await the results
          await apodService.searchApod(state.query)
          // NOTE due to two way data binding we reset the form by resetting the value of query
          state.query = ''
        } catch (error) {
          console.error(error)
        }
      }
    }
  },
  components: {
    ApodResults
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

iframe {
  width: 80%;
  height: 80%
}
</style>
