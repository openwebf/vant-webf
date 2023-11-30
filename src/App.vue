<template>
  <div id="app">
    <router-view v-slot="{ Component }">
      <keep-alive>
        <demo-section>
          <component :is="Component"/>
        </demo-section>
      </keep-alive>
    </router-view>
  </div>
</template>

<style>
body {
  font-size: 16px;
  background-color: #f8f8f8;
  -webkit-font-smoothing: antialiased;
  min-width: 100vw;
}
</style>
