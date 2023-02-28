<template>
  <div>
    <TypeNav></TypeNav>
    <ListContainer></ListContainer>
    <TodayRecommend></TodayRecommend>
    <Rank></Rank>
    <Like></Like>
    <Floor v-for="floor in floorList" :key="floor.id" :list="floor"></Floor>
    <Brand></Brand>
  </div>
</template>

<script>
  import ListContainer from './ListContainer'
  import TodayRecommend from './TodayRecommend'
  import Rank from './Rank'
  import Floor from './Floor'
  import Like from './Like'
  import Brand from './Brand'
  import {mapState} from 'vuex'
  export default {
      name: 'Home',
      components: {
        ListContainer,
        TodayRecommend,
        Rank,
        Floor,
        Like,
        Brand
      },
      computed: {
        ...mapState({
          floorList: (state) => state.home.floorList
        })
      },
      mounted() {
        this.$store.dispatch('getFloorList')
      },
  }
</script>

<style>

</style>