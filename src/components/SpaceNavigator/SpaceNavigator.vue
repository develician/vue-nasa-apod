
<template>
    <div class="space-navigator">
        <div class="left end">
            <div class="circle" @click="onPrev">
                <font-awesome-icon icon="arrow-left" />
            </div>
        </div>
        <div class="right end">
            <div class="circle" @click="onNext">
                <font-awesome-icon icon="arrow-right"  />
            </div>
        </div>
    </div>
</template>

<script>
export default {
  props: ["onNext", "onPrev"]
};
</script>

<style lang="scss" scoped>
@import "./SpaceNavigator.scss";
</style>
