<template>
	<span class="planetContainer">
		<img id="planet" src="../assets/img/Cute_earth.png" alt="planet">
		<img id="CCTree" src="../assets/img/StarTree.png" alt="CCTree">
	</span>
</template>

<script type="text/javascript">
	export default{

	}
</script>

<style scoped>
.planetContainer{
	position: absolute;
	top:15%;
	left:30%;
	display:block;
	width:550px;
	height:auto;
	margin: 0 auto;
}
#planet{
	position: relative;
	height: 500px;
}
#CCTree{
	position: absolute;
	height:200px;
	top:-50px;
	left:400px;
}
</style>