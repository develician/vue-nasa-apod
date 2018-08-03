<template>
    <div class="viewer">
        <pulse-loader :loading="loading" :color="color" :size="size"></pulse-loader>
        <img 
            v-if="mediaType === 'image' && loading === false" 
            :src="url"
            @click="imgClick(url)" />
        <iframe
            title="space-video" 
            v-if="mediaType === 'video'  && loading === false" 
            :src="url"
            frameBorder="0" gesture="media" allow="encrypted-media" allowFullScreen
            />
    </div>
</template>

<script>
import PulseLoader from "vue-spinner/src/PulseLoader.vue";

export default {
  components: {
    PulseLoader
  },
  props: ["url", "mediaType", "loading"],
  methods: {
    imgClick(url) {
      window.open(url);
    }
  },
  data() {
    return {
      color: "#e9ecef",
      size: "50px"
    };
  }
};
</script>

<style lang="scss" scoped>
@import "./Viewer.scss";
</style>
