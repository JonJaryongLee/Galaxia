<template>
	<div class="quizbox">
			<div class="quizQuestion display-1">질량을 가진 물질은 무엇이든 간에 서로 끌어당기는 힘을 가지고 있다고 한다. 이 법칙의 이름은?</div>
			<v-btn class="quizAnswers" v-bind:disabled="answerBtnDisabled" v-on:click="answerCheck('false')" block color="indigo">1. 허블의 법칙</v-btn>
			<v-btn class="quizAnswers" v-bind:disabled="answerBtnDisabled" v-on:click="answerCheck('true')" block color="indigo">2. 만류인력의 법칙</v-btn>
			<v-btn class="quizAnswers" v-bind:disabled="answerBtnDisabled" v-on:click="answerCheck('false')" block color="indigo">3. 관성의 법칙</v-btn>
			<v-btn class="quizAnswers" v-bind:disabled="answerBtnDisabled" v-on:click="answerCheck('false')" block color="indigo">4. 상대성 이론</v-btn>

			
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
					setTimeout(() => this.$emit('answerCheck',34), 50);
				}
				else
					this.wrongAlertShow=true;
			},
			//1번 문제로 돌아가기 위해, 버튼을 클릭하면 매개변수 1를 상위 컴포넌트로 보낸다.
			nextQ(){
				this.$emit('nextQ',1);
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