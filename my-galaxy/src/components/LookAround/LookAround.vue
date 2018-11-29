<template>
    <div>
        <div class="screen">
            <div class="screenItemRow" v-for="(row,i) in rows" :key="i">
                <div class="drag screenItemContainer" v-for="(column, j) in columns" :key="j">
                    <draggable v-model="test" class="dragArea" :options="{group:'planet'}">
                        <div v-for="item in test" class="screenItem">
                            <img :src=item.img height="80px" alt="planet">
                        </div>
                    </draggable>
                </div>
            </div>
        </div>   
<!--         <div class="drag testBox">
            <draggable v-model="test" class="dragArea" :options="{group:'planet'}">
                <div v-for="item in test">
                    <img :src=item.img height="80px" alt="planet">
                </div>
            </draggable>
        </div> -->

        <div class="drag remainContainer" data-simplebar>
            <draggable v-model="remainPlanets" class="dragArea" :options="{group:'planet'}">
                <div class="eachRemainPlanet" v-for="remainPlanet in remainPlanets">
                    <img :src=remainPlanet.img alt="planets" height="80px">
                </div>
            </draggable>
        </div>
    </div>
</template>
<script type="text/javascript">
import draggable from 'vuedraggable'
export default {
    components: {
        draggable
    },
    data: () => ({
        rows: 6,
        columns: 10,
        remainPlanets: [],
        test:[]
    }),
    methods: {
        initLookAround(planets) {
            this.remainPlanets = planets;
        }
    }
}
</script>
<style type="text/css" scoped>
.remainContainer {
    position: absolute;
    left: 1020px;
    width: 100px;
    height: 680px;
    border: 1px solid black;
    margin-right: 20px;
    padding: 10px;

}

.screen {
    position: absolute;
    right: 110px;
    display: flex;
    flex-direction: column;
    float: right;
    width: 980px;
    height: 680px;
    margin-right: 30px;
}

.screenItemRow {
    display: flex;
    flex-grow: 1;
}

.screenItemContainer {
    height: 110px;
    flex-grow: 1;
}

.screenItem {
    height: 110px;
    padding:10px;
    border: 1px solid black;
}

.testBox{
    display: block;
    height:100px;
    width:100px;
    border: 1px solid red;
}

.dragArea{
    min-height: 100px;
}
</style>