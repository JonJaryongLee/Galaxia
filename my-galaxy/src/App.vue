<template>
  <v-app id="inspire" dark>
    <v-navigation-drawer
      v-model="drawer"
      clipped
      fixed
      app
    >
      <v-list dense>
        <p class="text-xs-center">
          <v-avatar class="mt-3 " :tile="false" :size="140">
            <!-- 실제 서비스할 땐 다음 사진을 사용합니다. -->
            <!-- <img src=" {{user_img}} " alt="avatar"> -->
            <img src="./assets/img/profiles/jony.jpg" alt="avatar"> <!-- 테스트용 -->
          </v-avatar>
        </p>
        <p class="userName display-1">
          <!-- 실제 서비스할 땐 다음 이름을 사용합니다. -->
          <!-- {{username}} -->
          jony <!-- 테스트용 -->
        </p>
        <p class="userIntroduction">
          <!-- 실제 서비스할 땐 다음 이름을 사용합니다. -->
          <!-- {{user_introduction}} -->
          나의 인생은 정말 멋져 <!-- 테스트용 -->
        </p>
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
        <settingDialog></settingDialog>

        <!-- 피피티 발표섹션 -->
        <v-list-tile color="blue" @click="runQuiz">
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
      <v-toolbar-title>My Planet</v-toolbar-title>
    </v-toolbar>
    <v-content id="myPlanet" v-if="showMyPlanet">
      <div>
        <userPlanet v-bind:propsdata="toUserPlanet"></userPlanet>
      </div>
    </v-content>
    <v-content id="lookAround" v-if="showLookAround">
      <div>
        
      </div>
    </v-content>
    <v-content id="friends" v-if="showFriends">
      <div>
        friends
      </div>
    </v-content>
    <v-content id="quiz" v-if="showQuiz">
      <quiz 
      v-on:planetChoice="planetChoice"
      v-on:expIncrease="expIncrease"
      v-bind:propsdata="levelAndExp"
      ></quiz>
    </v-content>


    <v-footer app fixed>
      <span>&copy; 2018. All right reserved. Powered by HHR.</span>
    </v-footer>
  </v-app>
</template>

<script>
import userPlanet from './components/UserPlanet.vue'
import settingDialog from './components/SettingDialog.vue'
import logoutDialog from './components/LogoutDialog.vue'
import quiz from './components/Quiz/Quiz.vue'

export default {
   data: () => ({
    drawer: true,
    logoutAlert: false,
    showMyPlanet:true,
    showLookAround:false,
    showFriends:false,
    showQuiz:false,
    showPPT: false,
    choicedPlanet: "default", // 실제 선택된 행성을 넣어주세요
    level:1, // 실제 유저 레벨을 넣어주세요
    exp:0, // 실제 유저 경험치를 넣어주세요
    money:0, // 실제 유저 보유금액을 넣어주세요
    planetQuantity: 1, // 실제 유저 보유행성갯수를 넣어주세요
    
    toUserPlanet:[], //하위인 userPlanet컴포넌트로 보냅니다. 아래의 데이터를 포함합니다.
    // 0: choicedPlanet
    // 1: level
    // 2: exp 
    // 3: money
    // 4: planetQuantity


    levelAndExp:[] // 하위인 quiz컴포넌트로 보냅니다.
   }),
   created(){
    this.levelAndExp[0]=this.level;
    this.levelAndExp[1]=this.exp;
    this.toUserPlanet[0]=this.choicedPlanet;
    this.toUserPlanet[1]=this.level;
    this.toUserPlanet[2]=this.exp;
    this.toUserPlanet[3]=this.money;
    this.toUserPlanet[4]=this.planetQuantity;
    // console.log("AppVue의 행성: "+this.choicedPlanet);
    // console.log("AppVue의 레벨: "+this.level);
    // console.log("AppVue의 경험치: "+this.exp);
   },
   props: {
     source: String
   },
   components: {
    'userPlanet':userPlanet,
    'settingDialog':settingDialog,
    'logoutDialog':logoutDialog,
    'quiz':quiz
   },
   methods:{
    logout(){
      //인트로 주소로 리다이렉트 됩니다.
      //window.location.replace("#");
    },
    shutdown(){
      this.showMyPlanet=false;
      this.showLookAround=false;
      this.showFriends=false;
      this.showQuiz=false;
      this.showPPT=false;
    },
    runMyPlanet(){
      this.shutdown();
      this.showMyPlanet=true;
    },
    runLookAround(){
      this.shutdown();
      this.showLookAround=true;
    },
    runFriends(){
      this.shutdown();
      this.showFriends=true;
    },
    runQuiz(){
      this.shutdown();
      this.showQuiz=true;
    },
    planetChoice(choicedPlanet){
      this.choicedPlanet=choicedPlanet;
      this.level = 2;
      this.toUserPlanet[0] = this.choicedPlanet;
      this.toUserPlanet[1] = 2;
    },
    expIncrease(level,exp){
      this.level=level;
      this.exp=exp;
      this.toUserPlanet[1] = this.level;
      this.toUserPlanet[2] = this.exp;
    }
   }
}
</script>

<style type="text/css">
  .userName, .userIntroduction{
    display: block;
    text-align: center;
  }
  #myPlanet, #lookAround, #quiz, #friends{
      background: url("assets/img/background.png") no-repeat center center fixed; 
      -webkit-background-size: cover;
      -moz-background-size: cover;
      -o-background-size: cover;
      background-size: cover;
  }

</style>