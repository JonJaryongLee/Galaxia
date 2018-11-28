<template>
    <v-card>
        <v-card-title class="headline" primary-title>
            받은 메세지함
        </v-card-title>
        <v-card-text>
            <!-- 여기에 메세지 리스트가 들어갑니다. -->
            <div v-if="flag"></div>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary" flat v-on:click="closeMessageBox">
                닫기
            </v-btn>
        </v-card-actions>
    </v-card>
</template>
<script type="text/javascript">
export default {
    data() {
        return {
            sender: [],
            messages: [],
            flag:false
        }
    },
    methods: {
        closeMessageBox() {
            this.$emit('closeMessageBox');
        },
        initMessageBox(messages) {
            for (let i = 0; i < messages.length; i++) {
                this.sender[i] = messages[i].from;
                this.messages[i] = messages[i].message;
            }
            this.flag = true;
        }
    }
}
</script>
<style type="text/css">
</style>