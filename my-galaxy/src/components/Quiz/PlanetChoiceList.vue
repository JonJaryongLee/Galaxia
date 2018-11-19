<template>
	<div class="choicePlanets">
		<img src="../../assets/img/planets/watermelon1.png" height="100" alt="행성1" class="choicePlanet1" v-on:click="planetChoice('watermelon')">
		<img src="../../assets/img/planets/fishball1.png" height="100" alt="행성2" class="choicePlanet2" v-on:click="planetChoice('fishball')">

	</div>
</template>

<script type="text/javascript">
	export default{
		methods:{
			planetChoice(choicedPlanet){
				this.$emit('planetChoice',choicedPlanet);
			}
		}
	}
</script>

<style type="text/css">
	.choicePlanets{
		position: relative;
		left:20px;
	}
	.choicePlanet1{
		position: relative;
		margin: 20px;
		transition: all 0.3s;
	}
	.choicePlanet1:hover{
		transform: scale(1.2);
	}
	.choicePlanet2{
		position: relative;
		margin: 20px;
		transition: all 0.3s;
	}
	.choicePlanet2:hover{
		transform: scale(1.2);
	}

</style>