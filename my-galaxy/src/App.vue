<template>
    <v-app id="inspire" dark>
        <v-navigation-drawer v-model="drawer" clipped fixed app>
            <v-list dense>
                <p class="text-xs-center">
                    <v-avatar class="mt-3 " :tile="false" :size="140">
                        <img :src=user_img max-height="auto" width="10px" alt="avatar">
                    </v-avatar>
                </p>
                <p ref="userName" class="userName display-1">{{name}}</p>
                <p ref="userComment" class="userIntroduction">{{comment}}</p>
                <p class="messageBox" v-on:click="runMessageDialog">
                    <v-badge color="blue" v-model="newMessageAlert">
                        <span slot="badge">!</span>
                        <v-icon large color="grey">
                            email
                        </v-icon>
                    </v-badge>
                </p>
                <!-- 메세지박스 컴포넌트 -->
                <v-dialog v-model="showMessageBoxDialog" max-width="500px" transition="dialog-transition">
                    <messageBox ref="messageBox" v-on:closeMessageBox="closeMessageBox"></messageBox>
                </v-dialog>
                
                <v-list-tile @click="runMyPlanet">
                    <v-list-tile-action>
                        <v-icon>home</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                        <v-list-tile-title>내 행성</v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
                <!-- 퀴즈 게임 -->
                <v-list-tile @click="runQuiz">
                    <v-list-tile-action>
                        <v-icon>games</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                        <v-list-tile-title>퀴즈 게임</v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
                <v-list-tile @click="runLookAround">
                    <v-list-tile-action>
                        <v-icon>explore</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                        <v-list-tile-title>둘러보기</v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
                <v-list-tile @click="runFriends">
                    <v-list-tile-action>
                        <v-icon>people</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                        <v-list-tile-title>친구들</v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
                <!-- 설정 창 -->
                <settingDialog v-on:updateProfile="updateProfile"></settingDialog>
                <!-- 피피티 발표섹션 -->
                <v-list-tile color="blue" @click="runPPT">
                    <v-list-tile-action>
                        <v-icon color="blue">record_voice_over</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                        <v-list-tile-title>최종발표 PPT</v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
                <!-- 로그아웃 창 -->
                <logoutDialog></logoutDialog>
            </v-list>
        </v-navigation-drawer>
        <v-toolbar app fixed clipped-left>
            <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
            <v-toolbar-title>Galaxia</v-toolbar-title>
        </v-toolbar>
        <v-content id="myPlanet" v-show="showMyPlanet">
            <div>
                <userPlanet ref="myPlanet"></userPlanet>
            </div>
        </v-content>
        <v-content id="lookAround" v-show="showLookAround">
            <lookAround ref="lookAround"></lookAround>
        </v-content>
        <v-content id="friends" v-show="showFriends">
            <div>
                <friendDialog ref="myFriend"></friendDialog>
            </div>
        </v-content>
        <v-content id="quiz" v-show="showQuiz">
            <quiz ref="myQuiz" v-on:setPlanet="setPlanet" v-on:updatePlanetState="updatePlanetState"></quiz>
        </v-content>
        <v-content id="ppt" v-show="showPPT">
            <div>
                <ppt></ppt>
            </div>
        </v-content>
        <v-footer app fixed>
            <span>&copy; 2018. All right reserved. Powered by HHR.</span>
        </v-footer>
    </v-app>
</template>
<script>
    import axios from 'axios'
    
    //components
    import friendDialog from './components/Friend/FriendDialog.vue'
    import logoutDialog from './components/LogoutDialog.vue'
    import quiz from './components/Quiz/Quiz.vue'
    import lookAround from './components/LookAround/LookAround.vue'
    import settingDialog from './components/SettingDialog.vue'
    import userPlanet from './components/UserPlanet.vue'
    import ppt from './components/PPT/PPT.vue'
    import messageBox from './components/MessageBox.vue'

    export default {
        data: () => ({
            drawer: true,
            logoutAlert: false,
            showMyPlanet: true,
            showLookAround: false,
            showFriends: false,
            showQuiz: false,
            showPPT: false,
            showMessageBoxDialog: false,
            name: '',
            comment: '',
            money: '',
            user_img: '/me/img',
            planets: [],
            newMessageAlert:false
        }),
        created(){
            // 서버로부터 프로필 정보를 불러옵니다.
            // Front-End 편집 모드에서는, public/me/profile 파일의 결과를 수신하는 것으로 간주합니다.
            axios.get('/me/profile')
            // SUCCESS
                .then( response => {
                    // 프로필을 갱신합니다.
                    this.updateProfile(response.data);
                    // 행성 정보 및 친구 정보를 컴포넌트에 제공합니다.
                    this.$refs["myPlanet"].initPlanet(response.data.planets);
                    this.$refs["lookAround"].initLookAround(response.data.planets);
                    this.$refs["myPlanet"].initMoney(response.data.money);
                    this.$refs["myFriend"].initFriend(response.data.friends);

                    let planet = this.$refs["myPlanet"].getCurrentPlanet();
                    this.$refs["myQuiz"].initQuiz(planet.level, planet.exp);

                    //메세지가 있는지 확인합니다.
                    if(response.data.newMessageFlag)
                        this.newMessageAlert = true;
                    //메세지박스로 메세지를 보냅니다.
                    this.$refs["messageBox"].initMessageBox(response.data.messages);
                });

            // 이미지 링크를 한번에 받아옵니다.
            axios.get('/me/planet/list')
                .then( response => {
                    this.planets = response.data;
                    for (let i = 0; i < this.planets.length; i++)
                    {
                        let planet = this.planets[i];
                        // 레벨이 2인 행성들은 선택 가능합니다.
                        if (planet.level === 2) {
                            this.$refs["myQuiz"].pushChoice(planet);
                        }
                    }
                });
        },
        props: {
            source: String
        },
        components: {
            'userPlanet': userPlanet,
            'settingDialog': settingDialog,
            'logoutDialog': logoutDialog,
            'friendDialog': friendDialog,
            'quiz': quiz,
            'ppt' : ppt,
            'lookAround' : lookAround,
            'messageBox' : messageBox
        },
        methods: {
            shutdown() {
                this.showMyPlanet=false;
                this.showLookAround=false;
                this.showFriends=false;
                this.showQuiz=false;
                this.showPPT=false;
            },
            // 사용자의 프로필을 변경합니다.
            updateProfile(data) {
                this.name = data.name;
                this.comment = data.comment;
                this.money = data.money;
                if (data.img != null)
                    this.user_img = data.img;
            },
            // 2레벨에 사용자가 선택한 행성으로 업그레이드합니다.
            setPlanet(name, img) {
                // 행성 이미지를 업데이트합니다.
                this.$refs["myPlanet"].setImage(img, name);

                // 서버로 데이터를 전송합니다.
                // 로컬에서는 404 에러 처리되지만, 무시하시면 됩니다.
                const data = new FormData();
                data.append('num', this.$refs["myPlanet"].getCurrentKey());
                data.append('name', name);

                axios.post('/me/planet/update', data);
            },
            // 퀴즈에 의해 레벨, 경험치 값이 변경된 경우
            updatePlanetState(level, exp) {
                let money = 0;
                // 레벨, 경험치를 업데이트합니다.
                if (this.$refs["myPlanet"].setState(level, exp)) {
                    // 참인 경우 레벨업했으므로, 이미지를 업데이트합니다.
                    const currentPlanet = this.$refs["myPlanet"].getCurrentPlanet();
                    for (let i = 0; i < this.planets.length; i++)
                    {
                        let planet = this.planets[i];
                        if (planet.level === level && planet.name === currentPlanet.name) {
                            this.$refs["myPlanet"].setImage(planet.img);
                            // 돈 제공
                            money = (level - 1) * 50;
                            break;
                        }
                    }
                }

                // 서버로 데이터를 전송합니다.
                // 로컬에서는 404 에러 처리되지만, 무시하시면 됩니다.
                const data = new FormData();
                data.append('num', this.$refs["myPlanet"].getCurrentKey());
                data.append('level', level);
                data.append('exp', exp);
                data.append('money', money.toString());
                axios.post('/me/planet/update', data);
            },

            runMyPlanet() {
                this.shutdown();
                this.showMyPlanet=true;
            },
            runLookAround() {
                this.shutdown();
                this.showLookAround=true;
            },
            runFriends() {
                this.shutdown();
                this.showFriends=true;
            },
            runQuiz() {
                this.shutdown();
                // 현재의 행성 정보를 가져옵니다.
                let planet = this.$refs["myPlanet"].getCurrentPlanet();
                this.$refs["myQuiz"].initQuiz(planet.level, planet.exp);
                this.showQuiz=true;
            },
            runPPT(){
              this.shutdown();
              this.showPPT=true;
            },
            runMessageDialog(){
                this.newMessageAlert=false;
                this.showMessageBoxDialog=true;
                //백엔드에게 요청합니다.
                //이 함수는 메세지 다이알로그를 여는 창입니다. 그러니 이 함수가 실행되면 새 매세지 알림이 사라져야 합니다.
                //public/profile 파일 안의 newMessageFlag를 false로 바꿔주세요.
                //
                //
            },
            closeMessageBox(){
                this.showMessageBoxDialog=false;

                // 서버로 수신확인 플래그를 전송한다.
                axios.post('/me/message/read');
            }
        }
    }
</script>
<style type="text/css">
::-webkit-scrollbar {
    display: none;
}

.userName,
.userIntroduction {
    display: block;
    text-align: center;
}

.messageBox {
    position: absolute;
    left: 230px;
    top: 177px;
    transition: all 0.5s;
}

.messageBox:hover {
    transform: scale(1.2);
    cursor: pointer;
}

#myPlanet,
#quiz,
#friends,
#lookAround {
    background: url("assets/img/background.png") no-repeat center center fixed;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
}
</style>