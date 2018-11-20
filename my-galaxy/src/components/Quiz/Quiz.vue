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

		<!-- 1->2 레벨업 선택창 -->
		<v-dialog v-model="levelUpChoice" persistent max-width="330">
	      <v-card>
	        <v-card-title class="headline">Level Up!</v-card-title>
	        <v-card-text>행성을 선택하세요</v-card-text>
	        <v-card-actions>
				<planetChoiceList v-on:planetChoice="planetChoice"></planetChoiceList>
	        </v-card-actions>
	      </v-card>
	    </v-dialog>

	    <!-- 2->3 이상 레벨업 알람 -->
		<v-dialog v-model="levelUpAlertShow" persistent max-width="330">
	      <v-card>
	        <v-card-title class="headline">Level Up!</v-card-title>
	        <v-card-text>행성이 업그레이드 되었습니다</v-card-text>
	        <v-card-actions>
	        	<v-spacer></v-spacer>
				<v-btn color="success" v-on:click="closeLevelupAlert">확인</v-btn>
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
		props:['propsdata'],

		//상위컴포넌트에서 받아온 데이터로 레벨과 경험치를 초기화합니다.
		created(){
			this.level=this.propsdata[0];
			this.exp=this.propsdata[1];
    		// console.log("quizvue의 레벨: "+this.level);
    		// console.log("quizvue의 경험치: "+this.exp);
		},
		data(){
			return{
				q1show: true,
				q2show: false,
				q3show: false,
				exp: 0, // 더미입니다. 실제 데이터는 상위컴포넌트에서 보내준 것으로 초기화됩니다.
				level: 1, // 더미입니다. 실제 데이터는 상위컴포넌트에서 보내준 것으로 초기화됩니다.
				levelUpChoice: false,
				levelUpAlertShow: false
			}
		},
		methods:{
			expIncrease(receivedExp){
				let levelTmp=this.level;
				if(this.level==4)
						return; // 만렙이니깐 함수를 진행 안하고 빠져나간다.
				this.exp += receivedExp;
				if(this.exp>100){
					this.level++;
					this.exp = this.exp-100;
				}

				//레벨 1->2일 경우, 행성선택창 나타남.
				if(this.level==2)
					if(this.level!=levelTmp){
						this.levelUpChoice=true;
						return;
					}

				if(this.level!=levelTmp){
					this.$emit('expIncrease',this.level,this.exp);
					this.levelUpAlertShow=true;
				}
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
			},
			planetChoice(choicedPlanet){
				this.$emit('planetChoice',choicedPlanet);
				this.levelUpChoice=false;
			},
			closeLevelupAlert(){
				this.levelUpAlertShow=false;
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