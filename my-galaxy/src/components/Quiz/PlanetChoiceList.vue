<template>
	<div class="choicePlanets">
		<img :src=choice.img height="100" alt="행성1" class="choicePlanet"
             v-for="choice in choices" :key="choice.img" v-on:click="setPlanet(choice.name, choice.img)">
	</div>
</template>

<script type="text/javascript">
    export default {
        data: () => ({
            choices: []
        }),

        methods:{
            // 상위 컴포넌트로부터 선택지를 하나 받아옵니다.
            pushChoice(planet) {
                this.choices.push(planet);
            },
            // 사용자가 행성을 선택합니다.
            setPlanet(name, img) {
                this.$emit('setPlanet', name, img);
            }
        }
    }
</script>

<style type="text/css">
	.choicePlanets{
		position: relative;
		left:20px;
	}
	.choicePlanet{
		position: relative;
		margin: 20px;
		transition: all 0.3s;
	}
	.choicePlanet:hover{
		transform: scale(1.2);
	}

</style>