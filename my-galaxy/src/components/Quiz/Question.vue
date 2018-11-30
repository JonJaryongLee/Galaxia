<template>
	<div class="quizbox">
		<div class="quizQuestion display-1">{{question}}</div>
		<v-btn class="quizAnswers" v-bind:disabled="answerBtnDisabled" v-for="choice in choices" :key="choice.num"
               v-on:click="answerCheck(choice.is_answer)" block color="indigo">{{choice.num}}. {{choice.text}}</v-btn>

		<v-alert class="answerAlert"
                 :value="correctAlertShow"
                 type="success"
                 transition="scale-transition">정답입니다!
			<v-btn class="nextQuestion" color="teal accent-4" v-on:click="nextQuestion">다음 문제</v-btn>
		</v-alert>

		<v-alert class="answerAlert"
                 :value="wrongAlertShow"
                 type="error"
                 transition="scale-transition">틀렸습니다!
        </v-alert>
	</div>
</template>

<script type="text/javascript">
    export default {
        data(){
            return{
                correctAlertShow: false,
                wrongAlertShow: false,
                answerBtnDisabled: false,

                question: '',
                choices: [],
            }
        },

        methods:{
            // 서버로부터 전송받은 문제를 디스플레이합니다.
            loadQuestion(question, choices) {
                this.question = question;
                this.choices = choices;
            },

            // 선택지를 골랐을 경우
            answerCheck(answer) {
                if (answer === 'true') {
                    this.wrongAlertShow = false;
                    this.correctAlertShow = true;
                    this.answerBtnDisabled = true;
                    setTimeout(() => this.$emit('correct'), 50);
                }
                else
                    this.wrongAlertShow = true;
            },

            // '다음 문제' 버튼을 클릭했을 경우,
            // 상위 컴포넌트에게 다음 문제를 요구한다.
            nextQuestion() {
                this.initQuestion();
                this.$emit('nextQuestion');
            },

            // 초기화한다.
            initQuestion() {
                this.wrongAlertShow = false;
                this.correctAlertShow = false;
                this.answerBtnDisabled = false;

                this.question = '';
                this.choices = [];
            }
        }
    }
</script>

<style type="text/css" scoped>
	.quizbox{
		position: relative;
		margin-top: 40px;
		bottom:90px;
		padding:40px;
		width: 1040px;
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
		left:295px;
	}
</style>