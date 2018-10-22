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
        <img id="sellectedPlanetImg" v-if="showPlanet" src=""></img>
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
        planetData:'',
        showPlanet:false
      }
    },
    components:{
      'planetList':planetList,
      'itemList':itemList
    },
    methods:{
      showPlanetInfo(reseivedPlanet){
        this.planetData=reseivedPlanet;
        console.log(this.planetData);
        this.showPlanet=true;
        console.log('플래닛이 돔에 부착되었군');
        document.getElementById("sellectedPlanetImg").src="../assets/img/planets/planet1.png";
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