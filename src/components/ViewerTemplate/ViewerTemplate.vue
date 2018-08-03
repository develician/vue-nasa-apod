<template>
    <div class="viewer-template">
        <header>
            Astronomy Picture of the Day
        </header>
        <div class="viewer-wrapper">
            <viewer 
                :url="url"
                :mediaType="mediaType"
                :loading="loading"
                 />
            <div class="space-navigator-wrapper">
                <space-navigator
                    :onNext="handleNext"
                    :onPrev="handlePrev" />
            </div>
        </div>
    </div>
</template>

<script>
import SpaceNavigator from "../SpaceNavigator/SpaceNavigator.vue";
import Viewer from "../Viewer/Viewer.vue";
import * as api from "../../lib/api";
import moment from "moment";

export default {
  components: {
    SpaceNavigator,
    Viewer
  },
  data() {
    return {
      loading: false,
      maxDate: null,
      date: null,
      urL: null,
      mediaType: null
    };
  },
  mounted() {
    this.getApod();
  },
  methods: {
    async getApod(date) {
      if (this.loading) return;

      this.loading = true;

      try {
        const response = await api.getAPOD(date);
        const {
          date: retrievedDate,
          url,
          media_type: mediaType
        } = response.data;
        if (!this.maxDate) {
          // 만약에 maxDate 가 없으면 지금 받은 date 로 지정
          this.maxDate = retrievedDate;
        }

        this.date = retrievedDate;
        this.mediaType = mediaType;
        this.url = url;
      } catch (e) {
        // 오류가 났을 경우
        console.log(e);
      }

      this.loading = false;
    },
    handlePrev() {
      const { date } = this;
      const prevDate = moment(date)
        .subtract(1, "days")
        .format("YYYY-MM-DD");
      console.log(prevDate);
      this.getApod(prevDate);
    },
    handleNext() {
      const { date, maxDate } = this;
      if (date === maxDate) return;

      const nextDate = moment(date)
        .add(1, "days")
        .format("YYYY-MM-DD");
      this.getApod(nextDate);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "./ViewerTemplate.scss";
</style>
