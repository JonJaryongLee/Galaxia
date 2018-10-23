<template>
	<div>
		<v-tabs fixed-tabs>
		  <v-tab v-on:click="runPlanetList">행성</v-tab>
			<v-tab v-on:click="runItemList">아이템</v-tab>
		</v-tabs>
    <div class="payBox">
      <div class="curruntMoneyInfo">
        <div class="curruntMoney headline">현재 금액</div>
        <v-icon>attach_money</v-icon>
        <div class="curruntMoney headline">{{curruntMoney}}</div>
      </div>
      <div class="sellectedProductInfoBox">

        <!-- 아래 src를 선택된 이미지로 수정해주세요 -->
        <img id="sellectedImg" src="#" alt="planet"></img>
        <article class="itemOrPlanetDescription subheading">
          {{itemOrPlanetDescription}}
        </article>
      </div>
      <div class="payFooterBox">
        <div class="itemOrPlanetPrice headline">가격 ${{itemOrPlanetPrice}}</div>
        <v-btn class="payBtn" color="success" v-on:click="purchase">구매하기</v-btn>
      </div>
    </div>
    <!-- 행성 영역 -->
    <planetList v-if="showPlanetList" v-on:showPlanetInfo="showInfo"></planetList>
    <itemList v-if="showItemList" v-on:showItemInfo="showInfo"></itemList>


  </div>

</template>

<script type="text/javascript">
  import planetList from './list/PlanetList.vue'
  import itemList from './list/ItemList.vue'
  export default {
    data () {
      return {

        //itemList 및 planetList로부터 클릭이벤트로 받아온 데이터입니다.
        itemOrPlanetData:'cute_earth',

        //현재 금액입니다. 사용자로부터 받아 온 변수가 들어갑니다.
        curruntMoney:1000,

        //사용자의 인벤토리입니다.구매하면 이 안에 담겨 사용자의 인벤토리를 업데이트합니다. 꾸미기에서 해당 인벤토리를 확인할 수 있습니다.
        inventory:[],

        //아이템 및 행성에 대한 가격입니다. 클릭할때마다 바뀝니다.
        itemOrPlanetPrice:100,

        //행성 또는 아이템에 대한 설명입니다. 클릭할때마다 바뀝니다.
        itemOrPlanetDescription:'이 별은 매우 귀여운 기본 행성입니다. 위성을 가지고 있지 않으며 물이 존재합니다!',

        showPlanetList:true,
        showItemList:false
      }
    },
    components:{
      'planetList':planetList,
      'itemList':itemList
    },
    methods:{
      showInfo(reseivedData){
        this.itemOrPlanetData=reseivedData;
        console.log(this.itemOrPlanetData);
        // itemOrPlanetData는 사용자가 선택한 영역의 행성 또는 아이템정보입니다. 이미지를 클릭할 때마다 왼쪽에 이미지와 설명, 가격을 출력해주세요.
        //document.getElementById("sellectedImg").src = "#";
      },
      purchase(){
        if(this.curruntMoney<this.itemOrPlanetPrice)
          alert("돈이 부족합니다!");
        else{
          this.curruntMoney-=this.itemOrPlanetPrice;
          this.inventory.push(this.itemOrPlanetData);
          //console.log(this.inventory);
        }
      },
      runPlanetList(){
        this.showItemList=false;
        this.showPlanetList=true;
      },
      runItemList(){
        this.showPlanetList=false;
        this.showItemList=true;
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
    left:2%;
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
    border: 5px solid #4f5b66; 
  }
  .curruntMoneyInfo{
    padding:15px;
  }
  #sellectedImg{
    position: relative;
    left:5%;
    height:220px;
  }
  .itemOrPlanetPrice{
    position: relative;
    top:5px;
    padding:20px;
    display: inline;
  }
  .itemOrPlanetDescription{
    padding:70px 20px 20px ;
  }
</style>