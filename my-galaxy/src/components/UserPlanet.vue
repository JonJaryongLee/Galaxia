<template>
	<span class="planetContainer">

		<!-- 아래는 샘플코드입니다. 실제 파일은 유저가 현재 보유하고 있는 행성을 넣어주세요. -->
		<img id="planet" src="../assets/img/planets/basicPlanet.png" alt="planet">

	</span>
</template>

<script type="text/javascript">
	export default{
		props:['propsdata'], //상위 컴포넌트로부터 받아온 행성이름입니다.
		mounted(){
			console.log(this.propsdata);
			//아래는 작동하지 않는 코드입니다. 아래 src주소를 서버에 저장된 사진으로 바꿔주세요.

			// if(this.propsdata=="fishball")
			// 	document.getElementById("planet").src="";
			// else if(this.propsdata=="watermelon")
			// 	document.getElementById("planet").src=""
		}
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
	height:100px;
	top:20px;
	left:400px;
}
</style>