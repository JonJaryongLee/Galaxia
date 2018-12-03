<template>
    <div>
        <v-carousel :cycle='false' :height=560 ref="carousel">
            <v-carousel-item v-for="planet in planets" :key="planet.num">
                <div class="speech-bubble">
                    <div class="levelAndExpBox">
                        <div class="lvBox">
                            레벨 {{planet.level}}
                        </div>
                        <div class="expBox">
                            경험치
                            <v-progress-linear v-model="planet.exp"></v-progress-linear>
                        </div>
                    </div>
                </div>
                <span class="planetContainer">
                    <img class="planet" :src="planet.img" alt="planets">
                </span>
            </v-carousel-item>
            <v-carousel-item class="lastCarouselContainer">
                <div class="doYouWantToBuy">
                    새로운 토지를 구매하시겠습니까?
                </div>
                <div class="moneyInfo">현재 보유금액: {{money}}원
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
        
        <!-- 구매 성공 알람 -->
        <v-dialog v-model="purchaseAlertShow" max-width="200px" transition="dialog-transition">
            <v-card>
                <v-card-text>
                    행성이 추가되었습니다.
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="primary" flat @click="purchaseAlertShow = false">
                        확인
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>

        <!-- 돈 부족하다는 알람 -->
        <v-dialog v-model="cannotPurchaseAlertShow" max-width="200px" transition="dialog-transition">
            <v-card>
                <v-card-text>
                    돈이 부족합니다!
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="primary" flat @click="cannotPurchaseAlertShow = false">
                        확인
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </div>
</template>
<script type="text/javascript">
export default {
    // 기본값
    data() {
        return {
            level: 0,
            exp: 0,
            money: 0,
            num_planets: 0,
            planets: [],
            idx_view: 0,
            planet_url: "",
            cannotPurchaseAlertShow: false,
            purchaseAlertShow: false
        }
    },

    methods: {
        initPlanet(planets) {
            // 선택된 행성 정보입니다. (기본값 : 0)
            this.idx_view = 0;

            // 상위 컴포넌트로부터 유저의 행성 정보 리스트를 불러옵니다.
            this.planets = planets;
            this.showDoYouWantToBuy = true;
            this.updatePlanetState();
        },
        initMoney(money) {
            this.money = money;
        },

        initDefaultPlanet(default_planet) {
            this.default_planet = default_planet;
        },
        
        getCurrentKey() {
            return this.$refs["carousel"].internalIndex;
        },

        // 현재의 행성 정보를 가져옵니다.
        getCurrentPlanet() {
            let key = this.getCurrentKey();
            // 현재 key 는 1부터 시작합니다.
            if (key-- <= 0) key = 0;
            return this.planets[key];
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
        setImage(img, name = null) {
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
            //해당 아이디를 가진 요소가 없어졌으므로 변경이 필요합니다/
            // document.getElementById("planet").src = this.planet_url;
        },

        //클릭 시 새로운 행성을 추가합니다.
        addPlanet(){
            const PRICE = 100;
            const default_planet = this.default_planet;

            this.planets.push(
                    {
                        "num": this.planets.length,
                        "name": default_planet.name,
                        "img": default_planet.img,
                        "level": default_planet.level,
                        "exp": 0
                    }
                );
            this.money -= PRICE;
            this.purchaseAlertShow = true;

            // 서버에 새로운 행성을 구매했음을 알립니다.
            axios.post('/me/planet/new');
        }, 

        checkMoney() {
            const PRICE = 100;
            if (this.money < PRICE)
                this.cannotPurchaseAlertShow = true;
            else {
                this.addPlanet();

            }
        },   
    }
}
</script>
<style scoped>
.planetContainer {
    position: absolute;
    top: 5%;
    left: 30%;
    display: block;
    width: 550px;
    height: auto;
    margin: 0 auto;
}

.planet {
    position: relative;
    height: 450px;
}

.doYouWantToBuy {
    position: relative;
    top: 130px;
    left: 110px;
    font-size: 4rem;
}

.moneyInfo {
    position: relative;
    text-align: center;
    top: 180px;
    left: 30px;
    font-size: 2rem
}

.buyButton {
    position: relative;
    top: 250px;
    left: 500px;
}

.priceInfo {
    position: relative;
    text-align: center;
    top: 20px;
    font-size: 1.2rem;
    color: aqua;
}

#planet {
    position: relative;
    height: 500px;
}

#CCTree {
    position: absolute;
    height: 100px;
    top: 20px;
    left: 400px;
}

.speech-bubble {
    display: inline-block;
    position: relative;
    height: 120px;
    width: 180px;
    top: 80px;
    left: 780px;
    border: 4px solid white;
    border-radius: 10px;
}

.speech-bubble:before {
    content: "";
    width: 0px;
    height: 0px;
    position: absolute;
    border-left: 10px solid transparent;
    border-right: 10px solid white;
    border-top: 10px solid transparent;
    border-bottom: 10px solid transparent;
    top: 80px;
    left: -23px;
}

.levelAndExpBox {
    padding: 10px;
}

.expBox {
    margin-top: 20px;
}
</style>