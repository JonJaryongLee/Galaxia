<template>
    <div>
        <div id="remainContainer" data-simplebar>
            <img id="remain0" src="" alt="planet">
            <img id="remain1" src="" alt="planet">
            <img id="remain2" src="" alt="planet">
            <img id="remain3" src="" alt="planet">
            <img id="remain4" src="" alt="planet">
            <img id="remain5" src="" alt="planet">
            <img id="remain6" src="" alt="planet">
            <img id="remain7" src="" alt="planet">
            <img id="remain8" src="" alt="planet">
            <img id="remain9" src="" alt="planet">
        </div>
            <div class="screen">
                <div class="screenItemRow" v-for="(row,i) in rows" :key="i">
                    <div class="screenItem" v-for="(column, j) in columns" :key="j"></div>
                </div>
            </div>
        </div>
</template>
<script type="text/javascript">
import { Drag, Drop } from 'vue-drag-drop'
export default {
    data() {
        return {
            rows: 6,
            columns: 10,
            receivedImg:[]
        }
    },
    components: { Drag, Drop },
    methods: {
        initLookAround(planets) {
            this.receivedPlanets = planets;
            for (let i = 0; i < this.receivedPlanets.length; i++) {
                this.receivedImg[i]=this.receivedPlanets[i].img
            }
            document.getElementById('remain0').src = this.receivedImg[0];
            document.getElementById('remain1').src = this.receivedImg[1];
            document.getElementById('remain2').src = this.receivedImg[2];
            document.getElementById('remain3').src = this.receivedImg[3];
            document.getElementById('remain4').src = this.receivedImg[4];
            document.getElementById('remain5').src = this.receivedImg[5];
            document.getElementById('remain6').src = this.receivedImg[6];
            document.getElementById('remain7').src = this.receivedImg[7];
            document.getElementById('remain8').src = this.receivedImg[8];
            document.getElementById('remain9').src = this.receivedImg[9];
        }
    }
}
</script>
<style scoped>
#remainContainer {
    float: right;
    width: 100px;
    height: 680px;
    border: 1px solid black;
    margin-right: 20px;
    padding: 10px;
}

#remain0,
#remain1,
#remain2,
#remain3,
#remain4,
#remain5,
#remain6,
#remain7,
#remain8,
#remain9 {
    height: 80px;
}

.screen {
    display: flex;
    flex-direction: column;
    float: right;
    width: 980px;
    height: 680px;
    margin-right: 30px;
    border: 1px solid black;
}

.screenItemRow {
    display: flex;
    flex-grow: 1;
}

.screenItem {
    height: 110px;
    flex-grow: 1;
    border: 1px solid black;
}
</style>