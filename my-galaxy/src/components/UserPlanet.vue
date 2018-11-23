<template>
	<div>
		<v-carousel
		  :cycle="false"
		  :height=680
		>
			<v-carousel-item>
				<div class="infoBox">
					<div>레벨: {{level}}</div>
					<div>경험치: {{exp}}</div>
					<div>현재 보유하고 있는 행성 갯수: {{num_planets}}</div>
				</div>
				<span class="planetContainer">
					<img class="planet" :src="planets[0].img" alt="planets">
				</span>
			</v-carousel-item>
			<v-carousel-item>
				<div class="infoBox">
					<div>레벨: {{level}}</div>
					<div>경험치: {{exp}}</div>
					<div>현재 보유하고 있는 행성 갯수: {{num_planets}}</div>
				</div>
				<span class="planetContainer">
					<img class="planet" :src="planets[1].img" alt="planets">
				</span>
			</v-carousel-item>
			<v-carousel-item>
				<div class="infoBox">
					<div>레벨: {{level}}</div>
					<div>경험치: {{exp}}</div>
					<div>현재 보유하고 있는 행성 갯수: {{num_planets}}</div>
				</div>
				<span  class="planetContainer">
					<img class="planet" :src="planets[2].img" alt="planets">
				</span>
			</v-carousel-item>

			<v-carousel-item class="lastCarouselContainer">
				<div class="doYouWantToBuy">
					새로운 토지를 구매하시겠습니까?
				</div>
				<div class="moneyInfo">현재 보유금액: {{money}}
					<div class="priceInfo">
						토지는 100원입니다.
					</div>
				</div>
				<v-btn v-on:click="checkMoney" round large class="buyButton" color="blue">Yes</v-btn>
			</v-carousel-item>
			
		</v-carousel>
		
		<!-- <span class="planetContainer">
			<img id="planet">
		</span> -->
	</div>
</template>

<script type="text/javascript">
    export default{
        // 기본값
        data() {
            return {
                level: 0,
                exp: 0,
                money: 0,
                num_planets: 0,
                planets:[],
                idx_view:0,
                planet_url:""
            }
        },

        methods: {
            initPlanet(planets) {
                // 선택된 행성 정보입니다. (기본값 : 0)
                this.idx_view = 0;
                // 상위 컴포넌트로부터 유저의 행성 정보 리스트를 불러옵니다.
                this.planets = planets;
                this.updatePlanetState();
			},
			initMoney(money){
				this.money=money;
			},

			// 현재의 행성 정보를 가져옵니다.
			getCurrentPlanet() {
                return this.planets[this.idx_view];
			},

			// 현재 행성의 레벨과 경험치를 설정합니다.
			// 결과로는, 레벨업의 유무를 리턴합니다.
			setState(level, exp) {
                let planet = this.getCurrentPlanet();
                const levelBefore = planet.level;
				planet.level = level;
                planet.exp = exp;
                this.updatePlanetState();
                return levelBefore !== planet.level;
			},

			// 현재 행성의 이미지를 업데이트합니다.
			setImage(img, name=null) {
                let planet = this.getCurrentPlanet();
                if (name != null)
					planet.name = name;
                planet.img = img;
                this.updatePlanetState();
			},

            // 행성 정보를 업데이트합니다.
			updatePlanetState() {
				let planet = this.getCurrentPlanet();
                this.level = planet.level;
                this.exp = planet.exp;
                this.num_planets = this.planets.length;
				this.planet_url = planet.img;
				// 이미지를 다운로드합니다.
                document.getElementById("planet").src = this.planet_url;
			},

			checkMoney(){
				if(this.money<100)
					alert("돈이 부족합니다!");
				else{
					//구현중
				}
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
	.planet{
		position: relative;
		height: 500px;
	}
	.doYouWantToBuy{
		position: relative;
		top:170px;
		left:140px;
		font-size: 4rem;
	}
	.moneyInfo{
		position: relative;
		top:230px;
		left:450px;
		font-size: 2rem
	}
	.buyButton{
		position: relative;
		top:300px;
		left:500px;
	}
	.priceInfo{
		position: relative;
		top:20px;
		left:30px;
		font-size:1.2rem;
		color: aqua;
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