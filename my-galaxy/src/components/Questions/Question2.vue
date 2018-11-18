<template>
	<div class="quizbox">
			<div class="quizQuestion display-1">웜홀의 출구로 알려져 있으나 아직 증명되지 않은 것은?</div>
			<v-btn class="quizAnswers" v-bind:disabled="answerBtnDisabled" v-on:click="answerCheck('true')" block color="indigo">1. 화이트홀</v-btn>
			<v-btn class="quizAnswers" v-bind:disabled="answerBtnDisabled" v-on:click="answerCheck('false')" block color="indigo">2. 블랙홀</v-btn>
			<v-btn class="quizAnswers" v-bind:disabled="answerBtnDisabled" v-on:click="answerCheck('false')" block color="indigo">3. 블루홀</v-btn>
			<v-btn class="quizAnswers" v-bind:disabled="answerBtnDisabled" v-on:click="answerCheck('false')" block color="indigo">4. 엑시드홀</v-btn>

			
			<v-alert class="answerAlert"
		      :value="collectAlertShow"
		      type="success"
		      transition="scale-transition"
		    >
		      정답입니다!
		      <v-btn class="nextQuestion" color="teal accent-4"  v-on:click="nextQ">다음 문제</v-btn>
		    </v-alert>

		    <v-alert class="answerAlert"
		      :value="wrongAlertShow"
		      type="error"
		      transition="scale-transition"
		    >
		      틀렸습니다!
		    </v-alert>
	</div>
</template>

<script type="text/javascript">
	export default{
		data(){
			return{
				collectAlertShow: false,
				wrongAlertShow: false,
				answerBtnDisabled: false
			}
		},
		methods:{
			answerCheck(answer){
				if(answer=="true"){
					this.wrongAlertShow=false;
					this.collectAlertShow=true;
					this.answerBtnDisabled=true;
					this.$emit('answerCheck',34);
				}
				else
					this.wrongAlertShow=true;
			},
			//3번 문제로 넘어가기 위해, 버튼을 클릭하면 매개변수 3을 상위 컴포넌트로 보낸다.
			nextQ(){
				this.$emit('nextQ',3);
			}
		}
	}
</script>

<style type="text/css" scoped>
	.quizbox{
		position: relative;
		margin-top: 40px;
		bottom:70px;
		padding:40px;
		width: 950px;
	}
	.quizQuestion{
		padding-bottom:20px;
	}
	.quizAnswers{
		height:50px;
		margin-top:20px;
	}
	.answerAlert{
		margin-top: 40px;
	}
	.nextQuestion{
		position: relative;
		left:250px;
	}
</style>