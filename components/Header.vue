<template>
  <header>
    <h1 class="title">
      YU-GI-OH! DAMAGE COUNTER
    </h1>
    <slot />
  </header>
</template>

<style>
/* TODO: component! */
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
</style>
