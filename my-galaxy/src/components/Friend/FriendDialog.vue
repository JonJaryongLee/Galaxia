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
                    <v-btn color="white" class="friendBtn" v-on:click="message(item.name)">Message</v-btn>
                </li>
            </ul>
        </div>
        <v-dialog
          v-model="messageShow"
          max-width="500px"
          transition="dialog-transition"
        >
          <message 
            v-bind:selectedFriend = "selectedFriend"
            v-on:messageClose="messageClose"
          ></message>
        </v-dialog>
        
    </div>
</template>


<script type="text/javascript">
    import message from './Message.vue'
    export default{
        // 기본값
        data() {
            return {
                friends: [],
                messageShow: false,
                selectedFriend:""
            }
        },
        components:{
            'message': message
        },
        methods: {
            initFriend(friends) {
                this.friends = friends;
            },
            message(name){
                this.selectedFriend = name;
                this.messageShow = true;
            },
            messageClose(){
                this.messageShow = false;
            }
        }
    }
</script>

<style scoped>
    ul{
        list-style: none;
    }
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
        margin-top:10px;
        height: 130px;
        width: 900px;
        border-bottom: 1px dashed ;
    }
    .friendBtn{
        position: relative;
        bottom:70px;
        left:800px;
        color: #1A237E;
    }


</style>