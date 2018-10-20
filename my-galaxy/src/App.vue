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
            <img src="./assets/img/profile.jpg" alt="avatar">
          </v-avatar>
        </p>
        <p class="userName display-1">
          jony
        </p>
        <v-list-tile @click="">
          <v-list-tile-action>
            <v-icon>home</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>내 행성</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile @click="">
          <v-list-tile-action>
            <v-icon>explore</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>둘러보기</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile @click="">
          <v-list-tile-action>
            <v-icon>card_giftcard</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>상점</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile @click="">
          <v-list-tile-action>
            <v-icon>nature_people</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>꾸미기</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile @click="">
          <v-list-tile-action>
            <v-icon>flag</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>정복하기</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile @click="">
          <v-list-tile-action>
            <v-icon>people</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>친구들</v-list-tile-title>
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
    <v-content id="background">
      <div>
        <userPlanet></userPlanet>
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
export default {
   data: () => ({
    drawer: true,
    logoutAlert: false
   }),
   props: {
     source: String
   },
   components: {
    'userPlanet':userPlanet,
    'settingDialog':settingDialog
   },
   methods:{
    runPackman(){
      window.open("http://pacman.platzh1rsch.ch/");
    },
    logout(){
      //인트로 주소로 리다이렉트 됩니다.
      //window.location.replace("#");
    }
   }
}
</script>

<style type="text/css">
  .userName{
    display: block;
    text-align: center;
  }
  #background{
      background: url("assets/img/background.png") no-repeat center center fixed; 
      -webkit-background-size: cover;
      -moz-background-size: cover;
      -o-background-size: cover;
      background-size: cover;
  }
</style>