<template>
	<div>
		<v-tabs fixed-tabs>
		  <v-tab>행성</v-tab>
			<v-tab>아이템</v-tab>
		</v-tabs>
    <div class="payBox">
      <div class="curruntMoneyInfo">
        <div class="curruntMoney headline">현재 금액</div>
        <v-icon>attach_money</v-icon>
        <div class="curruntMoney headline">10,000</div>
      </div>
      <div class="sellectedProductInfoBox">
        <img id="sellectedPlanetImg" src="./planet1.png" alt="planet"></img>
      </div>
      <div class="payFooterBox">
        <v-btn class="payBtn" color="success">구매하기</v-btn>
      </div>
    </div>
    <!-- 행성 영역 -->
    <planetList v-on:showPlanetInfo="showPlanetInfo"></planetList>


  </div>

</template>

<script type="text/javascript">
  import planetList from './list/PlanetList.vue'
  import itemList from './list/ItemList.vue'
  export default {
    data () {
      return {
        planetData:''
      }
    },
    components:{
      'planetList':planetList,
      'itemList':itemList
    },
    methods:{
      showPlanetInfo(reseivedPlanet){
        this.planetData=reseivedPlanet;
        console.log("현재 행성은 "+this.planetData);
        document.getElementById("sellectedPlanetImg").src = "#";
      }
    }
  }
</script>

<style type="text/css" scoped>
  .curruntMoney{
    display: inline;
  }
  .payBtn{
    display: inline;
    position:relative;
    left:150px;
  }
  .sellectedProductInfoBox{
    height: 500px;
    margin-top:20px;
    margin-bottom: 20px;
  }
  .payBox{
    margin:20px;
    height: 680px;
    width:280px;
    border: 5px solid gray; 
  }
  .curruntMoneyInfo{
    padding:15px;
  }
  #sellectedPlanetImg{
    position: relative;
    left:5%;
    height:220px;
  }
</style>