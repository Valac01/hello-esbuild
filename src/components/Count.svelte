<script>
  let count = 0
  function increment() {
    count++
  }
</script>

<div>
  <h1 class="svelte">Button pressed {count}! times </h1>
  <button on:click={increment}>Increment</button>
</div>

<style>
.svelte {
  font-family: Arial, Helvetica, sans-serif;
  color: orangered;
} 
</style>