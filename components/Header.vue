<script lang="ts">
export default {

}
</script>

<template lang="pug">
  header
    h1.title
      a(href="https://github.com/karszawa/yugioh-damage-counter-web")
        | YU-GI-OH! DAMAGE COUNTER
    slot
</template>

<style scoped lang="postcss">
header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 24px;
}

.title {
  color: white;
  font-size: 24px;
  font-weight: normal;
}

a {
  color: white;
  text-decoration: none;

  &:visited {
    color: white;
  }
}
</style>
