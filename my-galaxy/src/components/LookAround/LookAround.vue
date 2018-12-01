<template>
    <div class="lookAroundArea">
        <div class="screen">
            <div class="screenRow" v-for="h in grid_heigth" :key="h">
                <div class="drag screenBox" v-for="w in grid_width" :key="w">
                    <draggable class="dragArea eachScreen" v-bind:id="'grid_in_'+w+'_'+h"
                               :options="{group:'planet'}" @end=onGridMove>
                        <img v-if="hasGridImage(w, h)" :src="getGridImage(w, h)" height="80px" alt="planet">
                    </draggable>
                </div>
            </div>
        </div>
        <!--  보유했지만 쓰지 않은 행성 목록입니다. -->
        <div class="drag remainContainer" data-simplebar>
            <draggable class="dragArea emptyRemainBox" id="grid_out"
                       :options="{group:'planet'}" @end=onGridMove>
                <div class="eachRemainPlanet" v-for="planet in planets" :key="planet.num"
                     v-bind:id="'grid_out_'+planet.num">
                    <img v-if="!hasPlanetLocation(planet)" :src="getPlanetImage(planet)" alt="planets" height="80px">
                </div>
            </draggable>
        </div>
    </div>
</template>
<script type="text/javascript">
import axios from 'axios'
import draggable from 'vuedraggable'
export default {
    components: {
        draggable
    },
    data: () => ({
        planets: [],
        grid_width: 10,
        grid_heigth: 6,
    }),
    methods: {
        initLookAround(planets) {
            this.planets = planets;
        },

        findPlanet(x, y, must_in=true) {
            for (let i = 0; i < this.planets.length; i++)
            {
                let planet = this.planets[i];
                if (planet.grid_flag || !must_in)
                    if (parseInt(planet.grid_x) === parseInt(x) &&
                        parseInt(planet.grid_y) === parseInt(y))
                        return i;
            }
            return null;
        },

        hasGridImage(x, y) {
            const idx = this.findPlanet(x, y);
            return idx != null;
        },

        getGridImage(x, y) {
            const planet = this.planets[this.findPlanet(x, y)];
            return planet != null ? planet.img : null;
        },

        hasPlanetLocation(planet) {
            return planet.grid_flag;
        },

        getPlanetImage(planet) {
            return planet.img;
        },

        onGridMove(e) {
            const p_from = this.getPosition(e.from);
            const p_to = this.getPosition(e.to);
            // 변경사항이 없는 경우 : 고유키가 같은 경우
            if (p_from[3] === p_to[3]) return;
            this.planets[p_from[4]].grid_x = p_to[1];
            this.planets[p_from[4]].grid_y = p_to[2];

            // 서버를 통해, 친구에게 메세지를 전송합니다.
            const data = new FormData();
            data.append('num', p_from[4]);
            data.append('flag', p_to[0]);
            data.append('x', p_to[1]);
            data.append('y', p_to[2]);
            axios.post('/me/planet/grid', data);

            this.$emit('messageClose'); //메세지 창을 종료하기 위해 상위컴포넌트로 신호를 보냅니다.
        },

        getPosition(target) {
            let id = target.id;
            let args = id.split('_');
            if (args[1] === 'out'){
                console.log(target.childNodes[0]);
                let id = target.childNodes[0].id;
                let args = id.split('_');
                console.log(args);
                return [false, -1, -1, -1, 0];
            }
            const x = parseInt(args[2]);
            const y = parseInt(args[3]);
            // 그리드에 있는 행성인가 | x좌표 | y좌표 | 고유키 | 행성 번호
            return [true, x, y, (x-1) + (y-1) * 10, this.findPlanet(x, y)];
        }
    }
}
</script>
<style type="text/css" scoped>
.lookAroundArea{
    position: relative;
}
.drag{
    display: inline;
}
.screen{
    position: relative;
    left:30px;
    top:20px;
}
.screenRow{
    display: block;
}

.eachScreen{
    display: inline-block;
    min-height:82px;
    min-width: 82px;
}
.remainContainer {
    position: absolute;
    top:20px;
    left:900px;
    width: 110px;
    height: 520px;
    border: 5px solid #37474F;
    border-radius: 25px;
    padding: 10px;
}
.emptyRemainBox{
    min-height: 510px;
}
</style>