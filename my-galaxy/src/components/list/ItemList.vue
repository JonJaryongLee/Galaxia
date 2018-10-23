<template>
	<div class="itemContainer">
      <div class="itemRow">
        <div class="itemColume">
          <img class="items" src="../../assets/img/items/CCTPink.png" alt="CCTPink" v-on:click="showItemInfo('CCTPink')">
        </div>
        <div class="itemColume">
          <img class="items" src="../../assets/img/items/CCTYellow.png" alt="CCTYellow" v-on:click="showItemInfo('CCTYellow')">
        </div>
        <div class="itemColume">
          <img class="items" src="../../assets/img/items/MintTree.png" alt="MintTree" v-on:click="showItemInfo('MintTree')">
        </div>
        <div class="itemColume">
          <img class="items" src="../../assets/img/items/PurpleTree.png" alt="PurpleTree" v-on:click="showItemInfo('PurpleTree')">
        </div>
      </div>
      <div class="itemRow">
        <div class="itemColume">
          <img class="items" src="../../assets/img/items/StarTree.png" alt="StarTree" v-on:click="showItemInfo('StarTree')">
        </div>
        <div class="itemColume">
          <img class="items" src="../../assets/img/items/commingSoon.png" alt="commingSoon" v-on:click="showItemInfo('commingSoon')">
        </div>
        <div class="itemColume">
          <img class="items" src="../../assets/img/items/commingSoon.png" alt="commingSoon" v-on:click="showItemInfo('commingSoon')">
        </div>
        <div class="itemColume">
          <img class="items" src="../../assets/img/items/commingSoon.png" alt="commingSoon" v-on:click="showItemInfo('commingSoon')">
        </div>
      </div>
      <div class="itemRow">
        <div class="itemColume">
          <img class="items" src="../../assets/img/items/commingSoon.png" alt="commingSoon" v-on:click="showItemInfo('commingSoon')">
        </div>
        <div class="itemColume">
          <img class="items" src="../../assets/img/items/commingSoon.png" alt="commingSoon" v-on:click="showItemInfo('commingSoon')">
        </div>
        <div class="itemColume">
          <img class="items" src="../../assets/img/items/commingSoon.png" alt="commingSoon" v-on:click="showItemInfo('commingSoon')">
        </div>
        <div class="itemColume">
          <img class="items" src="../../assets/img/items/commingSoon.png" alt="commingSoon" v-on:click="showItemInfo('commingSoon')">
        </div>
      </div>


    </div>
</template>

<script type="text/javascript">
	export default{
		data: () => ({
		    itemData:''
		}),
		methods:{
			showItemInfo(reseivedItem){
				this.itemData = reseivedItem;
				this.$emit('showItemInfo',this.itemData);
			}
		}
	}
</script>

<style type="text/css" scoped>
  .itemContainer{
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
  .items{
    padding:40px;
    width: 210px;
    height: 210px;
  }

</style>