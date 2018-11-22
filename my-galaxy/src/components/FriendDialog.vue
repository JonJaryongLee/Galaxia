<template>
	<div class="infoBox friendsContainer">
		<ul>
            <li class="friendElement" v-for="item in friends" :key="item.num">
                <table border="0">
                    <tr>
                        <td rowspan="2">
                            <img class="friendImage" :src="item.img">
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
        top: 15%;
        left: 10%;
        display: block;
        width: 750px;
        height: 550px;
        margin: 0 auto;
        overflow: scroll;
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