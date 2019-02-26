<template>
  <div class="stats">
    <h1> New component </h1>
    {{ countLinks }}
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Stats',
  computed: {
    ...mapGetters([
      'countLinks'
    ])
  }
}
</script>
