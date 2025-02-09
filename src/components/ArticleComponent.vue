<template>
  <v-container>
    <v-card title="Card title" subtitle="Subtitle" text="..."></v-card>
  </v-container>
</template>

<script>
export default {
  name: 'ArticleComponent',
  data() {
    return {
      articleTitle: 'The Impact of Technology on Society',
      articleContent: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent interdum velit eu orci faucibus, sit amet malesuada neque auctor. Nam pharetra, neque id posuere lacinia, erat nunc vehicula ipsum, non tempor risus justo ac felis.',
      articleDate: 'February 9, 2025',
      author: 'John Doe',
      articleImage: '/path/to/image.jpg',
    };
  }
};
</script>

<style>

</style>
