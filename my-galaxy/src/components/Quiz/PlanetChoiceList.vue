<template>
	<div>
		<div class="choicePlanet1" v-on:click="planetChoice(1)">행성1</div>
		<div class="choicePlanet2" v-on:click="planetChoice(2)">행성2</div>
		<div class="choicePlanet3" v-on:click="planetChoice(3)">행성3</div>
		<div class="choicePlanet4" v-on:click="planetChoice(4)">행성4</div>
		<div class="choicePlanet5" v-on:click="planetChoice(5)">행성5</div>
	</div>
</template>

<script type="text/javascript">
	export default{
		methods:{
			planetChoice(choicedPlanetNum){
				console.log(choicedPlanetNum);
			}
		}
	}
</script>

<style type="text/css">
	.choicePlanet1{
		position: relative;
		left:300%;
	}
	.choicePlanet2{
		position: relative;
	}
	.choicePlanet3{
		position: relative;
		bottom:20px;
		left:650%;
	}
	.choicePlanet4{
		position: relative;
	}
	.choicePlanet5{
		position: relative;
		bottom:20px;
		left:650%;
	}
</style>