<template>
  <div class="apod-results">
      Results</div>
</template>

<script>
import { computed } from 'vue'
import { reactive } from '@vue/reactivity'
import { AppState } from '../AppState'
// import 
export default {
    name: 'ApodResults',
    setup() {
        const state = reactive({
            pictures: computed(()=> AppState.pictures)
        })
        return {
            state
        }
    },
    components: {
        // Apod 
    }

}
</script>

<style>

</style>