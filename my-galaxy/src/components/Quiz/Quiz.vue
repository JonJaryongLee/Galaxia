<template>
	<div>
		<div class="quizSectionTitle display-3">우주 퀴즈</div>

		<div class="lvAndExpBox">
			<div class="lvBox">
				레벨 {{level}}
			</div>
			<div class="expBox">
				경험치
  				<v-progress-linear v-model="exp"></v-progress-linear>
  			</div>
  		</div>

		<div class="quizbox">
			<transition>
				<question1 v-if="q1show" v-on:answerCheck="expIncrease"
				v-on:nextQ="nextQ"
				></question1>
			</transition>
			<transition name="q2appear">
				<question2 v-if="q2show"
				v-on:answerCheck="expIncrease"
				v-on:nextQ="nextQ"
				></question2>
			</transition>
			<transition name="q3appear">
				<question3 v-if="q3show"
				v-on:answerCheck="expIncrease"
				v-on:nextQ="nextQ"
				></question3>
			</transition>
		</div>
		<v-dialog v-model="levelUpChoice" persistent max-width="290">
	      <v-card>
	        <v-card-title class="headline">Level Up!</v-card-title>
	        <v-card-text>행성을 업그레이드 하세요</v-card-text>
	        <v-card-actions>
				<planetChoiceList></planetChoiceList>
	        </v-card-actions>
	      </v-card>
	    </v-dialog>
	</div>
</template>

<script>
	import question1 from './Questions/Question1.vue'
	import question2 from './Questions/Question2.vue'
	import question3 from './Questions/Question3.vue'
	import planetChoiceList from './PlanetChoiceList.vue'
	export default{
		components:{
			'question1' : question1,
			'question2' : question2,
			'question3' : question3,
			'planetChoiceList' : planetChoiceList
		},
		data(){
			return{
				q1show: true,
				q2show: false,
				q3show: false,
				exp: 0,
				level: 1,
				levelUpChoice: false
			}
		},
		methods:{
			expIncrease(receivedExp){
				if(this.level==4)
					return;
				let levelTmp = this.level;
				this.exp += receivedExp;
				if(this.exp>100){
					this.level++;
					this.exp = this.exp-100;
				}
				if(levelTmp!=this.level)
					this.levelUpChoice=true;
			},
			nextQ(nextQuestionNum){
				if(nextQuestionNum==1){
					this.q2show = false;
					this.q3show = false;
					setTimeout(() => this.q1show = true, 50);
				}
				else if(nextQuestionNum==2){
					this.q1show = false;
					this.q3show = false;
					setTimeout(() => this.q2show = true, 50);
				}
				else{
					this.q1show = false;
					this.q2show = false;
					setTimeout(() => this.q3show = true, 50);
				}
			}
		}
	}
</script>

<style type="text/css">
	.quizSectionTitle{
		display:block;
		margin: 40px;
	}
	.lvAndExpBox{
		position: relative;
		bottom:110px;
		left:700px;
		width: 200px;
		display: blick;
	}
	.expBox{
		margin-top:20px;
	}
</style>