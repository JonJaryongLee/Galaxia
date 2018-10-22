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
            <img src="./assets/img/profile.jpg" alt="avatar"> <!-- 테스트용 -->
          </v-avatar>
        </p>
        <p class="userName display-1">
          <!-- 실제 서비스할 땐 다음 이름을 사용합니다. -->
          <!-- {{username}} -->
          jony <!-- 테스트용 -->
        </p>
        <v-list-tile @click="runMyPlanet">
          <v-list-tile-action>
            <v-icon>home</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>내 행성</v-list-tile-title>
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
        <v-list-tile @click="runMarket">
          <v-list-tile-action>
            <v-icon>card_giftcard</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>상점</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile @click="runDeco">
          <v-list-tile-action>
            <v-icon>nature_people</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>꾸미기</v-list-tile-title>
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
        <v-list-tile @click="runWar">
          <v-list-tile-action>
            <v-icon>flag</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>정복하기</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        
        <!-- 설정 창 -->
        <settingDialog></settingDialog>
        
        <!-- 팩맨 게임 -->
        <v-list-tile @click="runPackman">
          <v-list-tile-action>
            <v-icon>games</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>팩맨 게임</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        
        <!-- 로그아웃 -->
        <v-footer app fixed color="red">
                <v-list-tile @click="logoutAlert =! logoutAlert">
                  <v-list-tile-action>
                    <v-icon>undo</v-icon>
                  </v-list-tile-action>
                  <v-list-tile-content>
                    <v-list-tile-title>로그아웃</v-list-tile-title>
                  </v-list-tile-content>
                </v-list-tile>
        </v-footer>


      </v-list>
    </v-navigation-drawer>
    <v-toolbar app fixed clipped-left>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>My Planet</v-toolbar-title>
    </v-toolbar>
    <v-content id="myPlanet" v-if="showMyPlanet">
      <div>
        <userPlanet></userPlanet>
      </div>
    </v-content>
    <v-content id="lookAround" v-if="showLookAround">
      <div>
        
      </div>
    </v-content>
    <v-content id="market" v-if="showMarket">
      <market></market>
    </v-content>
    <v-content id="deco" v-if="showDeco">
      <div>
        Deco
      </div>
    </v-content>
    <v-content id="war" v-if="showWar">
      <div>
        <p id= "introWar">
          준비중입니다.
        </p>
      </div>
    </v-content>
    <v-content id="friends" v-if="showFriends">
      <div>
        friends
      </div>
    </v-content>

   <!--  로그아웃 알람 -->
   <div class="text-xs-center">
      <v-alert 
         type="warning" 
         :value="logoutAlert"
         transition="scale-transition"
      >
        <p class="headline">
          로그아웃 하시겠습니까?
          <v-btn color="#FF4500" v-on:click="logout">확인</v-btn>
        </p>
      </v-alert>
    </div>


    <v-footer app fixed>
      <span>&copy; 2018. All right reserved. Powered by HHR.</span>
    </v-footer>
  </v-app>
</template>

<script>
import userPlanet from './components/UserPlanet.vue'
import settingDialog from './components/SettingDialog.vue'
import market from './components/Market.vue'
export default {
   data: () => ({
    drawer: true,
    logoutAlert: false,
    showMyPlanet:true,
    showLookAround:false,
    showMarket:false,
    showDeco:false,
    showWar:false,
    showFriends:false
   }),
   props: {
     source: String
   },
   components: {
    'userPlanet':userPlanet,
    'settingDialog':settingDialog,
    'market':market
   },
   methods:{
    runPackman(){
      window.open("http://pacman.platzh1rsch.ch/");
    },
    logout(){
      //인트로 주소로 리다이렉트 됩니다.
      //window.location.replace("#");
    },
    shotdown(){
      this.showMyPlanet=false;
      this.showLookAround=false;
      this.showMarket=false;
      this.showDeco=false;
      this.showWar=false;
      this.showFriends=false;
    },
    runMyPlanet(){
      this.shotdown();
      this.showMyPlanet=true;
    },
    runLookAround(){
      this.shotdown();
      this.showLookAround=true;
    },
    runMarket(){
      this.shotdown();
      this.showMarket=true;
    },
    runDeco(){
      this.shotdown();
      this.showDeco=true;
    },
    runWar(){
      this.shotdown();
      this.showWar=true;
    },
    runFriends(){
      this.shotdown();
      this.showFriends=true;
    }
   }
}
</script>

<style type="text/css">
  .userName{
    display: block;
    text-align: center;
  }
  #myPlanet{
      background: url("assets/img/background.png") no-repeat center center fixed; 
      -webkit-background-size: cover;
      -moz-background-size: cover;
      -o-background-size: cover;
      background-size: cover;
  }
  #lookAround{
    background: url("assets/img/ORION.header.jpg") no-repeat center center fixed; 
      -webkit-background-size: cover;
      -moz-background-size: cover;
      -o-background-size: cover;
      background-size: cover;
  }
  #introWar{
    color:gray;
    font-size: 10rem;
    padding:50px;
  }
</style>