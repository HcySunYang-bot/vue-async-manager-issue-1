<template>
  <div id="app">
    <Suspense>
      <p class="fallback" slot="fallback">loading</p>
      <router-view/>
    </Suspense>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>
