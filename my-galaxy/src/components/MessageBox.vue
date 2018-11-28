<template>
    <v-card>
        <v-card-title class="headline" primary-title>
            받은 메세지함
        </v-card-title>
        <v-card-text>
            <!-- 여기에 메세지 리스트가 들어갑니다. -->
            <div v-if="flag">
                <v-data-table :headers="headers" :items="messages">
                    <template slot="items" slot-scope="props">
                        <td>{{ props.item.from }}</td>
                        <td>{{ props.item.message }}</td>
                    </template>
                    <template slot="no-data">
                        <v-alert :value="true" color="error" icon="warning">
                            받은 메세지가 없습니다.
                        </v-alert>
                    </template>
                </v-data-table>
            </div>
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
            flag: false,
            headers: [{
                    text: '보낸사람',
                    sortable: false
                },
                {
                    text: '메세지',
                    sortable: false
                }
            ],
            messages: []
        }
    },
    methods: {
        closeMessageBox() {
            this.$emit('closeMessageBox');
        },
        initMessageBox(messages) {
            this.messages = messages;
            this.flag = true;
        }
    }
}
</script>
<style type="text/css" scoped>

</style>