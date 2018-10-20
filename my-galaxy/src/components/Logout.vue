<template>
	<v-footer app fixed color="red">
			
	          <v-list-tile @click="alert =! alert">
	            <v-list-tile-action>
	              <v-icon>undo</v-icon>
	            </v-list-tile-action>
	            <v-list-tile-content>
	              <v-list-tile-title>로그아웃</v-list-tile-title>
	            </v-list-tile-content>
	          </v-list-tile>
	          <v-alert 
	          	type="warning" 
	          	:value="alert"
				transition="scale-transition"
	          >
	          	<v-btn color="#FF4500">확인</v-btn>
	          </v-alert>
    </v-footer>
</template>

<script type="text/javascript">
	export default{
		data(){
			return{
				
			}
		}
	}
</script>

<style type="text/css" scoped>
	
</style>