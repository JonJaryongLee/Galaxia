<template>
	<div>
		<div class="infoBox">
			<div>레벨: {{level}}</div>
			<div>경험치: {{exp}}</div>
			<div>현재 보유금액: {{money}}</div>
			<div>현재 보유하고 있는 행성 갯수: {{planetQuantity}}</div>
		</div>
		<span class="planetContainer">
			<!-- 아래는 샘플코드입니다. 실제 파일은 유저가 현재 보유하고 있는 행성을 넣어주세요. -->
			<img id="planet" src="../assets/img/planets/basicPlanet.png" alt="planet">
		</span>
	</div>
</template>

<script type="text/javascript">
	export default{
		data(){
			return{

				// 아래 데이터들은 더미입니다. 실제 데이터는 상위컴포넌트에서 보내준 것으로 초기화됩니다.
				choicedPlanet:"", 
				level:1,
				exp: 0,
				money: 0,
				planetQuantity:0
			}
		},
		props:['propsdata'], //상위 컴포넌트로부터 받아온 행성이름과 레벨입니다.

		//상위컴포넌트에서 받아온 데이터로 레벨과 경험치를 초기화합니다.
		created(){
			this.choicedPlanet=this.propsdata[0];
			this.level=this.propsdata[1];
			this.exp=this.propsdata[2];
			this.money=this.propsdata[3];
			this.planetQuantity=this.propsdata[4];
			// console.log("userPlanetvue의 행성이름"+this.choicedPlanet);
			// console.log("userPlanetvue의 레벨"+this.level);
			// console.log("userPlanetvue의 경험치"+this.exp);
		},

		//행성타입과 레벨에 따라 화면요소를 변경합니다. 로컬에선 사진을 수정할 수 없습니다. 추후 서버에 올려진 사진을 받아와 테스트할 예정.
		mounted(){
			if(this.choicedPlanet=="watermelon"&&this.level==2)
			{
				//document.getElementById("planet").src="#";
			}
			else if(this.choicedPlanet=="watermelon"&&this.level==3)
			{
				//document.getElementById("planet").src="#";
			}
			else if(this.choicedPlanet=="watermelon"&&this.level==4)
			{
				//document.getElementById("planet").src="#";
			}
			else if(this.choicedPlanet=="fishball"&&this.level==2)
			{
				//document.getElementById("planet").src="#";
			}
			else if(this.choicedPlanet=="fishball"&&this.level==3)
			{
				//document.getElementById("planet").src="#";
			}
			else if(this.choicedPlanet=="fishball"&&this.level==4)
			{
				//document.getElementById("planet").src="#";
			}
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