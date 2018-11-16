<template>
	<div>
		<div class="quizSectionTitle display-3">우주 퀴즈</div>
		<div class="expBox">경험치
		
  			<v-progress-linear v-model="exp"></v-progress-linear>
  		</div>

		<div class="quizbox">
			<question3 v-on:answerCheck="expIncrease"></question3>
		</div>
	</div>
</template>

<script>
	import question1 from './Questions/Question1.vue'
	import question2 from './Questions/Question2.vue'
	import question3 from './Questions/Question3.vue'
	export default{
		components:{
			'question1' : question1,
			'question2' : question2,
			'question3' : question3
		},
		data(){
			return{
				exp: 0
			}
		},
		methods:{
			expIncrease(receivedExp){
				this.exp += receivedExp;
			}
		}
	}
</script>

<style type="text/css">
	.quizSectionTitle{
		display:block;
		margin: 40px;
	}
	.expBox{
		position: relative;
		bottom:110px;
		left:700px;
		width: 200px;
		display: blick;
	}
</style>