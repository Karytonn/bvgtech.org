<template>
  <footer class="w-full pb-4">
    <div class="h-px bg-gray-600 opacity-70"></div>
    <p class="text-gray-700 text-xs text-center m-4">Copyright &copy; {{ currentYear }} | Todos os direitos reservados à <strong>bvgtech.org</strong></p>
  </footer>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  computed: {
    currentYear() {
      return new Date().getFullYear()
    },
  },
})
</script>
