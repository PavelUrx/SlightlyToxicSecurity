<template>
  <v-app>
    <NavigationBarComponent></NavigationBarComponent>
    <v-main>
      <ArticleComponent/>
    </v-main>
  </v-app>
</template>

<script>
import ArticleComponent from './components/ArticleComponent.vue';
import NavigationBarComponent from './components/NavigationBarComponent.vue';

export default {
  name: 'App',
  components: {
    NavigationBarComponent,
    ArticleComponent
  }
}
</script>

<style>
@font-face {
  font-family: 'RubikGlitch';
  src: url('/public/fonts/RubikGlitch-Regular.ttf') format('truetype');
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: 'Kanit';
  src: url('/public/fonts/Kanit-Light.ttf') format('truetype');
  font-weight: normal;
  font-style: normal;
}

body {
  font-family: 'Kanit', sans-serif;
}

h1, h2, h3, h4, h5, h6 {
  font-family: 'RubikGlitch', sans-serif;
}

.v-app-bar-title, .v-btn__content, .v-dialog__title {
  font-family: 'RubikGlitch', sans-serif;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
