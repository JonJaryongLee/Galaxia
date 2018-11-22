<template>
    <v-footer app fixed color="red">
        <v-dialog v-model="dialog" persistent max-width="400px">
            <v-list-tile slot="activator">
                <v-list-tile-action>
                    <v-icon>undo</v-icon>
                </v-list-tile-action>
                <v-list-tile-content>
                    <v-list-tile-title>로그아웃</v-list-tile-title>
                </v-list-tile-content>
            </v-list-tile>
            <v-card>
                <v-card-title>
                    <span class="headline">정말 로그아웃 하시겠습니까?</span>
                </v-card-title>

                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="red" flat @click.native="onLogout">예</v-btn>
                    <v-btn color="blue darken-1" flat @click.native="dialog = false">아니오</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </v-footer>
</template>

<script type="text/javascript" scoped>
    export default {
        data: () => ({
            dialog: false
        }),

        methods: {
            // 로그아웃합니다.
            onLogout() {
                window.location.href = "me/logout";
            }
        }
    }
</script>

<style type="text/css" scoped>

</style>