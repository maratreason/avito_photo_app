<template>
  <button class="btn">
      <slot></slot>
  </button>
</template>

<script>
export default {
    name: "v-button"
}
</script>

<style scoped>
.btn {
    padding: 10px 15px;
    background: #4997D0;
    border: none;
    color: #fff;
    transition: 0.2s ease-in;
    cursor: pointer;
}

.btn:hover {
    background: #3c82b4;
    color: #fff;
}
</style>