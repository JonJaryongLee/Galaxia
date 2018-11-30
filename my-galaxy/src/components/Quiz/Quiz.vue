<template>
	<div>
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
				<question ref="questDialog" v-if="qShow"
                          v-on:correct="correct"
                          v-on:nextQuestion="nextQuestion"
				></question>
			</transition>
		</div>

		<!-- 1->2 레벨업 선택창 -->
		<v-dialog v-model="levelUpChoice" persistent max-width="330">
			<v-card>
				<v-card-title class="headline">Level Up!</v-card-title>
				<v-card-text>행성을 선택하세요</v-card-text>
				<v-card-actions>
					<planetChoiceList ref="choiceDialog" v-on:setPlanet="setPlanet"></planetChoiceList>
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
    import axios from 'axios';

    import question from './Question.vue'
    import planetChoiceList from './PlanetChoiceList.vue'

    export default {
        components: {
            'question' : question,
            'planetChoiceList' : planetChoiceList
        },

        data() {
            return {
                qShow: true,
                exp: 0, // 더미입니다. 실제 데이터는 상위컴포넌트에서 보내준 것으로 초기화됩니다.
                level: 1, // 더미입니다. 실제 데이터는 상위컴포넌트에서 보내준 것으로 초기화됩니다.
                levelUpChoice: false,
                levelUpAlertShow: false
            }
        },

        // 문제를 초기화합니다.
        created() {
            this.nextQuestion();
        },

        methods: {
            // 메인으로부터 레벨, 경험치 값을 받아 초기화합니다.
            initQuiz(level, exp) {
                this.level = level;
                this.exp = exp;
            },

            // 정답을 맞춘 경우, 경험치를 증가시키고, 그 결과를 메인에 알립니다.
            correct() {
                const EXP_UP = 34;
                this.expIncrease(EXP_UP);
                this.$emit('updatePlanetState', this.level, this.exp);
            },

            expIncrease(receivedExp) {
                // 만렙이니깐 함수를 진행 안하고 빠져나간다.
                if (this.level === 4)
                    return;

                // 경험치를 올린다.
                this.exp += receivedExp;
                // 경험치 최대값은 100 이라고 가정한다.
                const EXP_MAX = 100;

                // 레벨업
                if (this.exp >= EXP_MAX) {
                    this.exp = this.exp - EXP_MAX;
                    this.levelUpAlertShow = true;

                    // 만렙을 찍었을 경우, 경험치를 0으로 초기화한다.
                    if (++this.level >= 4) {
                        this.exp = 0;
                    }
                    // 레벨이 2로 올라간 경우, 행성을 선택할 수 있는 창을 띄운다.
                    else if (this.level === 2) {
                        this.levelUpAlertShow = false;
                        this.levelUpChoice = true;
                    }
                }
            },
            // 서버로부터 다음 문제를 다운로드합니다.
            nextQuestion() {
                axios.get('/me/quiz/next')
                // 다운로드에 성공한 경우, 해당 문제를 디스플레이합니다.
                    .then( response => {
                        this.$refs["questDialog"].loadQuestion(response.data.question, response.data.choices);
                    });
            },
            // 2레벨에서 사용자가 선택한 행성으로 업데이트합니다.
            setPlanet(name, img) {
                this.$emit('setPlanet', name, img);
                this.levelUpChoice = false;
            },
            // 레벨업 메세지를 끕니다.
            closeLevelupAlert() {
                this.levelUpAlertShow = false;
            },
            // 전달
            pushChoice(planet) {
                this.$refs["choiceDialog"].pushChoice(planet);
            }
        }
    }
</script>

<style type="text/css">
	.lvAndExpBox{
		position: relative;
		top:20px;
		left:800px;
		width: 200px;
		display: block;
	}
	.expBox{
		margin-top:20px;
	}
</style>