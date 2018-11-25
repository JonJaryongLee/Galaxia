<template>
    <div>
        <div class="infoBox friendsContainer" data-simplebar>
            <ul>
                <li class="friendElement" v-for="item in friends" :key="item.num">
                    <table border="0">
                        <tr>
                            <td rowspan="2">
                                <v-avatar class="avatar"
                                  :size=4
                                  color="grey lighten-4"
                                >
                                    <img class="friendImage" :src="item.img">
                                </v-avatar>
                          </td>
                            <td class="friendContent">
                                <h1>{{ item.name }}</h1>
                            </td>
                        </tr>
                        <tr>
                            <td class="friendContent">
                                {{ item.comment }}
                            </td>
                        </tr>
                    </table>
                </li>
            </ul>
        </div>
    </div>
</template>


<script type="text/javascript">
    export default{
        // 기본값
        data() {
            return {
                friends: [],
            }
        },

        methods: {
            initFriend(friends) {
                this.friends = friends;
            },
        }
    }
</script>

<style scoped>
    .friendsContainer {
        position: absolute;
        top: 5%;
        left: 5%;
        display: block;
        height: 580px;
        width: 1000px;
        margin: 0 auto;
    }
    .avatar{
        margin:50px 50px 50px 30px;
    }
    .friendImage {
        width: 100px;
        height: 100px;
    }
    .friendContent {
        padding-left: 20px;
    }
    .friendElement {
    }


</style>