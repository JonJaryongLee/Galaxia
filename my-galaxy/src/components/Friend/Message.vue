<template>
    <v-card>
        <v-card-title class="headline" primary-title>
            {{selectedFriend}}에게 글 남기기
        </v-card-title>
        <v-card-text>
            <v-form v-model="valid">
                <v-text-field v-model="Message" :rules="MessageRules" :counter="40" label="Message" required></v-text-field>
            </v-form>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary" flat v-on:click="sendMessage">
                보내기
            </v-btn>
            <v-btn color="error" flat v-on:click="closeMessage">
                닫기
            </v-btn>
        </v-card-actions>
    </v-card>
</template>
<script type="text/javascript">
export default {
    props: ['selectedFriend'], //상위 컴포넌트에서 선택된 이름입니다.
    data() {
        return {
            valid: false,
            Message: '',
            MessageRules: [
                v => !!v || '메세지를 입력하세요',
                v => v.length <= 40 || '메세지는 40자 이하여야 합니다.'
            ]
        }
    },

    // 아래 주석을 해제하면 사용자가 메세지를 입력하면서 Message가 변하는 과정이 log로 찍힙니다. 즉, 사용자의 입력에 따라 실시간으로 Message가 바뀝니다.
    // watch:{
    // 	Message: function() {
    // 		console.log("Message: ",this.Message);
    // 	}
    // },

    methods: {
        sendMessage() {
            //조건을 만족하지 않으면 보내기는 작동하지 않습니다.
            if (this.valid == false)
                return;

            //메세지를 전송하는 로직을 구현해주세요
            //선택된 친구이름은 this.selectedFriend입니다.
            //메세지는 this.Message입니다.
            //

            this.$emit('messageClose'); //메세지 창을 종료하기 위해 상위컴포넌트로 신호를 보냅니다.
        },
        closeMessage() {
            this.$emit('messageClose'); //메세지 창을 종료하기 위해 상위컴포넌트로 신호를 보냅니다.
        }
    }
}
</script>
<style type="text/css">
</style>