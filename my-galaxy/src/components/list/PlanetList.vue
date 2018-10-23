<template>
	<div class="planetContainer">
      <div class="itemRow">
        <div class="itemColume">
          <img class="planets" src="../../assets/img/planets/planet1.png" alt="planet1" v-on:click="showPlanetInfo('planet1')">
        </div>
        <div class="itemColume">
          <img class="planets" src="../../assets/img/planets/planet2.png" alt="planet2" v-on:click="showPlanetInfo('planet2')">
        </div>
        <div class="itemColume">
          <img class="planets" src="../../assets/img/planets/planet3.png" alt="planet3" v-on:click="showPlanetInfo('planet3')">
        </div>
        <div class="itemColume">
          <img class="planets" src="../../assets/img/planets/planet4.png" alt="planet4" v-on:click="showPlanetInfo('planet4')">
        </div>
      </div>
      <div class="itemRow">
        <div class="itemColume">
          <img class="planets" src="../../assets/img/planets/planet5.png" alt="planet5" v-on:click="showPlanetInfo('planet5')">
        </div>
        <div class="itemColume">
          <img class="planets" src="../../assets/img/planets/planet6.png" alt="planet6" v-on:click="showPlanetInfo('planet6')">
        </div>
        <div class="itemColume">
          <img class="planets" src="../../assets/img/planets/commingSoon.png" alt="commingSoon" v-on:click="showPlanetInfo('commingSoon')">
        </div>
        <div class="itemColume">
          <img class="planets" src="../../assets/img/planets/commingSoon.png" alt="commingSoon" v-on:click="showPlanetInfo('commingSoon')">
        </div>
      </div>
      <div class="itemRow">
        <div class="itemColume">
          <img class="planets" src="../../assets/img/planets/commingSoon.png" alt="commingSoon" v-on:click="showPlanetInfo('commingSoon')">
        </div>
        <div class="itemColume">
          <img class="planets" src="../../assets/img/planets/commingSoon.png" alt="commingSoon" v-on:click="showPlanetInfo('commingSoon')">
        </div>
        <div class="itemColume">
          <img class="planets" src="../../assets/img/planets/commingSoon.png" alt="commingSoon" v-on:click="showPlanetInfo('commingSoon')">
        </div>
        <div class="itemColume">
          <img class="planets" src="../../assets/img/planets/commingSoon.png" alt="commingSoon" v-on:click="showPlanetInfo('commingSoon')">
        </div>
      </div>


    </div>
</template>

<script type="text/javascript">
	export default{
		data: () => ({
		    planetData:''
		}),
		methods:{
			showPlanetInfo(reseivedPlanet){
				this.planetData = reseivedPlanet;
				this.$emit('showPlanetInfo',this.planetData);
			}
		}
	}
</script>

<style type="text/css" scoped>
  .planetContainer{
    position: absolute;
    display: flex;
    top: 70px;
    left:25%;
    flex-direction: column;
    border: 5px solid #4f5b66;
  }
  .itemRow{
    display: flex;
    flex-direction:row;
  }
  .itemColume{
    border:3px solid #4f5b66;
  }
  .planets{
    padding:40px;
    width: 210px;
    height: auto;
  }

</style>