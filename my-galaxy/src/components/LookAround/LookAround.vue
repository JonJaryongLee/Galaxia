<template>
    <div class="lookAroundArea">
        <div class="screen">
            <div class="screenRow">
                <div class="drag screenBox">
                    <draggable v-model="screen00" class="dragArea eachScreen" :options="{group:'planet'}">
                        <div v-for="item in screen00">
                            <img :src=item.img height="80px" alt="planet">
                    </div>
                    </draggable>
                </div>
                <div class="drag screenBox">
                    <draggable v-model="screen01" class="dragArea eachScreen" :options="{group:'planet'}">
                        <div v-for="item in screen01">
                            <img :src=item.img height="80px" alt="planet">
                    </div>
                    </draggable>
                </div>
                <div class="drag screenBox">
                    <draggable v-model="screen02" class="dragArea eachScreen" :options="{group:'planet'}">
                        <div v-for="item in screen02">
                            <img :src=item.img height="80px" alt="planet">
                    </div>
                    </draggable>
                </div>
                <div class="drag screenBox">
                    <draggable v-model="screen03" class="dragArea eachScreen" :options="{group:'planet'}">
                        <div v-for="item in screen03">
                            <img :src=item.img height="80px" alt="planet">
                    </div>
                    </draggable>
                </div>
                <div class="drag screenBox">
                    <draggable v-model="screen04" class="dragArea eachScreen" :options="{group:'planet'}">
                        <div v-for="item in screen04">
                            <img :src=item.img height="80px" alt="planet">
                    </div>
                    </draggable>
                </div>
                <div class="drag screenBox">
                    <draggable v-model="screen05" class="dragArea eachScreen" :options="{group:'planet'}">
                        <div v-for="item in screen05">
                            <img :src=item.img height="80px" alt="planet">
                    </div>
                    </draggable>
                </div>
                <div class="drag screenBox">
                    <draggable v-model="screen06" class="dragArea eachScreen" :options="{group:'planet'}">
                        <div v-for="item in screen06">
                            <img :src=item.img height="80px" alt="planet">
                    </div>
                    </draggable>
                </div>
                <div class="drag screenBox">
                    <draggable v-model="screen07" class="dragArea eachScreen" :options="{group:'planet'}">
                        <div v-for="item in screen07">
                            <img :src=item.img height="80px" alt="planet">
                    </div>
                    </draggable>
                </div>
                <div class="drag screenBox">
                    <draggable v-model="screen08" class="dragArea eachScreen" :options="{group:'planet'}">
                        <div v-for="item in screen08">
                            <img :src=item.img height="80px" alt="planet">
                    </div>
                    </draggable>
                </div>
                <div class="drag screenBox">
                    <draggable v-model="screen09" class="dragArea eachScreen" :options="{group:'planet'}">
                        <div v-for="item in screen09">
                            <img :src=item.img height="80px" alt="planet">
                    </div>
                    </draggable>
                </div>
            </div>
            <div class="screenRow">
                <div class="drag screenBox">
                    <draggable v-model="screen10" class="dragArea eachScreen" :options="{group:'planet'}">
                        <div v-for="item in screen10">
                            <img :src=item.img height="80px" alt="planet">
                    </div>
                    </draggable>
                </div>
                <div class="drag screenBox">
                    <draggable v-model="screen11" class="dragArea eachScreen" :options="{group:'planet'}">
                        <div v-for="item in screen11">
                            <img :src=item.img height="80px" alt="planet">
                    </div>
                    </draggable>
                </div>
                <div class="drag screenBox">
                    <draggable v-model="screen12" class="dragArea eachScreen" :options="{group:'planet'}">
                        <div v-for="item in screen12">
                            <img :src=item.img height="80px" alt="planet">
                    </div>
                    </draggable>
                </div>
                <div class="drag screenBox">
                    <draggable v-model="screen13" class="dragArea eachScreen" :options="{group:'planet'}">
                        <div v-for="item in screen13">
                            <img :src=item.img height="80px" alt="planet">
                    </div>
                    </draggable>
                </div>
                <div class="drag screenBox">
                    <draggable v-model="screen14" class="dragArea eachScreen" :options="{group:'planet'}">
                        <div v-for="item in screen14">
                            <img :src=item.img height="80px" alt="planet">
                    </div>
                    </draggable>
                </div>
                <div class="drag screenBox">
                    <draggable v-model="screen15" class="dragArea eachScreen" :options="{group:'planet'}">
                        <div v-for="item in screen15">
                            <img :src=item.img height="80px" alt="planet">
                    </div>
                    </draggable>
                </div>
                <div class="drag screenBox">
                    <draggable v-model="screen16" class="dragArea eachScreen" :options="{group:'planet'}">
                        <div v-for="item in screen16">
                            <img :src=item.img height="80px" alt="planet">
                    </div>
                    </draggable>
                </div>
                <div class="drag screenBox">
                    <draggable v-model="screen17" class="dragArea eachScreen" :options="{group:'planet'}">
                        <div v-for="item in screen17">
                            <img :src=item.img height="80px" alt="planet">
                    </div>
                    </draggable>
                </div>
                <div class="drag screenBox">
                    <draggable v-model="screen18" class="dragArea eachScreen" :options="{group:'planet'}">
                        <div v-for="item in screen18">
                            <img :src=item.img height="80px" alt="planet">
                    </div>
                    </draggable>
                </div>
                <div class="drag screenBox">
                    <draggable v-model="screen19" class="dragArea eachScreen" :options="{group:'planet'}">
                        <div v-for="item in screen19">
                            <img :src=item.img height="80px" alt="planet">
                    </div>
                    </draggable>
                </div>
            </div>
            <div class="screenRow">
                <div class="drag screenBox">
                    <draggable v-model="screen20" class="dragArea eachScreen" :options="{group:'planet'}">
                        <div v-for="item in screen20">
                            <img :src=item.img height="80px" alt="planet">
                    </div>
                    </draggable>
                </div>
                <div class="drag screenBox">
                    <draggable v-model="screen21" class="dragArea eachScreen" :options="{group:'planet'}">
                        <div v-for="item in screen21">
                            <img :src=item.img height="80px" alt="planet">
                    </div>
                    </draggable>
                </div>
                <div class="drag screenBox">
                    <draggable v-model="screen22" class="dragArea eachScreen" :options="{group:'planet'}">
                        <div v-for="item in screen22">
                            <img :src=item.img height="80px" alt="planet">
                    </div>
                    </draggable>
                </div>
                <div class="drag screenBox">
                    <draggable v-model="screen23" class="dragArea eachScreen" :options="{group:'planet'}">
                        <div v-for="item in screen23">
                            <img :src=item.img height="80px" alt="planet">
                    </div>
                    </draggable>
                </div>
                <div class="drag screenBox">
                    <draggable v-model="screen24" class="dragArea eachScreen" :options="{group:'planet'}">
                        <div v-for="item in screen24">
                            <img :src=item.img height="80px" alt="planet">
                    </div>
                    </draggable>
                </div>
                <div class="drag screenBox">
                    <draggable v-model="screen25" class="dragArea eachScreen" :options="{group:'planet'}">
                        <div v-for="item in screen25">
                            <img :src=item.img height="80px" alt="planet">
                    </div>
                    </draggable>
                </div>
                <div class="drag screenBox">
                    <draggable v-model="screen26" class="dragArea eachScreen" :options="{group:'planet'}">
                        <div v-for="item in screen26">
                            <img :src=item.img height="80px" alt="planet">
                    </div>
                    </draggable>
                </div>
                <div class="drag screenBox">
                    <draggable v-model="screen27" class="dragArea eachScreen" :options="{group:'planet'}">
                        <div v-for="item in screen27">
                            <img :src=item.img height="80px" alt="planet">
                    </div>
                    </draggable>
                </div>
                <div class="drag screenBox">
                    <draggable v-model="screen28" class="dragArea eachScreen" :options="{group:'planet'}">
                        <div v-for="item in screen28">
                            <img :src=item.img height="80px" alt="planet">
                    </div>
                    </draggable>
                </div>
                <div class="drag screenBox">
                    <draggable v-model="screen29" class="dragArea eachScreen" :options="{group:'planet'}">
                        <div v-for="item in screen29">
                            <img :src=item.img height="80px" alt="planet">
                    </div>
                    </draggable>
                </div>
            </div>
            <div class="screenRow">
                <div class="drag screenBox">
                    <draggable v-model="screen30" class="dragArea eachScreen" :options="{group:'planet'}">
                        <div v-for="item in screen30">
                            <img :src=item.img height="80px" alt="planet">
                    </div>
                    </draggable>
                </div>
                <div class="drag screenBox">
                    <draggable v-model="screen31" class="dragArea eachScreen" :options="{group:'planet'}">
                        <div v-for="item in screen31">
                            <img :src=item.img height="80px" alt="planet">
                    </div>
                    </draggable>
                </div>
                <div class="drag screenBox">
                    <draggable v-model="screen32" class="dragArea eachScreen" :options="{group:'planet'}">
                        <div v-for="item in screen32">
                            <img :src=item.img height="80px" alt="planet">
                    </div>
                    </draggable>
                </div>
                <div class="drag screenBox">
                    <draggable v-model="screen33" class="dragArea eachScreen" :options="{group:'planet'}">
                        <div v-for="item in screen33">
                            <img :src=item.img height="80px" alt="planet">
                    </div>
                    </draggable>
                </div>
                <div class="drag screenBox">
                    <draggable v-model="screen34" class="dragArea eachScreen" :options="{group:'planet'}">
                        <div v-for="item in screen34">
                            <img :src=item.img height="80px" alt="planet">
                    </div>
                    </draggable>
                </div>
                <div class="drag screenBox">
                    <draggable v-model="screen35" class="dragArea eachScreen" :options="{group:'planet'}">
                        <div v-for="item in screen35">
                            <img :src=item.img height="80px" alt="planet">
                    </div>
                    </draggable>
                </div>
                <div class="drag screenBox">
                    <draggable v-model="screen36" class="dragArea eachScreen" :options="{group:'planet'}">
                        <div v-for="item in screen36">
                            <img :src=item.img height="80px" alt="planet">
                    </div>
                    </draggable>
                </div>
                <div class="drag screenBox">
                    <draggable v-model="screen37" class="dragArea eachScreen" :options="{group:'planet'}">
                        <div v-for="item in screen37">
                            <img :src=item.img height="80px" alt="planet">
                    </div>
                    </draggable>
                </div>
                <div class="drag screenBox">
                    <draggable v-model="screen38" class="dragArea eachScreen" :options="{group:'planet'}">
                        <div v-for="item in screen38">
                            <img :src=item.img height="80px" alt="planet">
                    </div>
                    </draggable>
                </div>
                <div class="drag screenBox">
                    <draggable v-model="screen39" class="dragArea eachScreen" :options="{group:'planet'}">
                        <div v-for="item in screen39">
                            <img :src=item.img height="80px" alt="planet">
                    </div>
                    </draggable>
                </div>
            </div>
            <div class="screenRow">
                <div class="drag screenBox">
                    <draggable v-model="screen40" class="dragArea eachScreen" :options="{group:'planet'}">
                        <div v-for="item in screen40">
                            <img :src=item.img height="80px" alt="planet">
                    </div>
                    </draggable>
                </div>
                <div class="drag screenBox">
                    <draggable v-model="screen41" class="dragArea eachScreen" :options="{group:'planet'}">
                        <div v-for="item in screen41">
                            <img :src=item.img height="80px" alt="planet">
                    </div>
                    </draggable>
                </div>
                <div class="drag screenBox">
                    <draggable v-model="screen42" class="dragArea eachScreen" :options="{group:'planet'}">
                        <div v-for="item in screen42">
                            <img :src=item.img height="80px" alt="planet">
                    </div>
                    </draggable>
                </div>
                <div class="drag screenBox">
                    <draggable v-model="screen43" class="dragArea eachScreen" :options="{group:'planet'}">
                        <div v-for="item in screen43">
                            <img :src=item.img height="80px" alt="planet">
                    </div>
                    </draggable>
                </div>
                <div class="drag screenBox">
                    <draggable v-model="screen44" class="dragArea eachScreen" :options="{group:'planet'}">
                        <div v-for="item in screen44">
                            <img :src=item.img height="80px" alt="planet">
                    </div>
                    </draggable>
                </div>
                <div class="drag screenBox">
                    <draggable v-model="screen45" class="dragArea eachScreen" :options="{group:'planet'}">
                        <div v-for="item in screen45">
                            <img :src=item.img height="80px" alt="planet">
                    </div>
                    </draggable>
                </div>
                <div class="drag screenBox">
                    <draggable v-model="screen46" class="dragArea eachScreen" :options="{group:'planet'}">
                        <div v-for="item in screen46">
                            <img :src=item.img height="80px" alt="planet">
                    </div>
                    </draggable>
                </div>
                <div class="drag screenBox">
                    <draggable v-model="screen47" class="dragArea eachScreen" :options="{group:'planet'}">
                        <div v-for="item in screen47">
                            <img :src=item.img height="80px" alt="planet">
                    </div>
                    </draggable>
                </div>
                <div class="drag screenBox">
                    <draggable v-model="screen48" class="dragArea eachScreen" :options="{group:'planet'}">
                        <div v-for="item in screen48">
                            <img :src=item.img height="80px" alt="planet">
                    </div>
                    </draggable>
                </div>
                <div class="drag screenBox">
                    <draggable v-model="screen49" class="dragArea eachScreen" :options="{group:'planet'}">
                        <div v-for="item in screen49">
                            <img :src=item.img height="80px" alt="planet">
                    </div>
                    </draggable>
                </div>
            </div>
            <div class="screenRow">
                <div class="drag screenBox">
                    <draggable v-model="screen50" class="dragArea eachScreen" :options="{group:'planet'}">
                        <div v-for="item in screen50">
                            <img :src=item.img height="80px" alt="planet">
                    </div>
                    </draggable>
                </div>
                <div class="drag screenBox">
                    <draggable v-model="screen51" class="dragArea eachScreen" :options="{group:'planet'}">
                        <div v-for="item in screen51">
                            <img :src=item.img height="80px" alt="planet">
                    </div>
                    </draggable>
                </div>
                <div class="drag screenBox">
                    <draggable v-model="screen52" class="dragArea eachScreen" :options="{group:'planet'}">
                        <div v-for="item in screen52">
                            <img :src=item.img height="80px" alt="planet">
                    </div>
                    </draggable>
                </div>
                <div class="drag screenBox">
                    <draggable v-model="screen53" class="dragArea eachScreen" :options="{group:'planet'}">
                        <div v-for="item in screen53">
                            <img :src=item.img height="80px" alt="planet">
                    </div>
                    </draggable>
                </div>
                <div class="drag screenBox">
                    <draggable v-model="screen54" class="dragArea eachScreen" :options="{group:'planet'}">
                        <div v-for="item in screen54">
                            <img :src=item.img height="80px" alt="planet">
                    </div>
                    </draggable>
                </div>
                <div class="drag screenBox">
                    <draggable v-model="screen55" class="dragArea eachScreen" :options="{group:'planet'}">
                        <div v-for="item in screen55">
                            <img :src=item.img height="80px" alt="planet">
                    </div>
                    </draggable>
                </div>
                <div class="drag screenBox">
                    <draggable v-model="screen56" class="dragArea eachScreen" :options="{group:'planet'}">
                        <div v-for="item in screen56">
                            <img :src=item.img height="80px" alt="planet">
                    </div>
                    </draggable>
                </div>
                <div class="drag screenBox">
                    <draggable v-model="screen57" class="dragArea eachScreen" :options="{group:'planet'}">
                        <div v-for="item in screen57">
                            <img :src=item.img height="80px" alt="planet">
                    </div>
                    </draggable>
                </div>
                <div class="drag screenBox">
                    <draggable v-model="screen58" class="dragArea eachScreen" :options="{group:'planet'}">
                        <div v-for="item in screen58">
                            <img :src=item.img height="80px" alt="planet">
                    </div>
                    </draggable>
                </div>
                <div class="drag screenBox">
                    <draggable v-model="screen59" class="dragArea eachScreen" :options="{group:'planet'}">
                        <div v-for="item in screen59">
                            <img :src=item.img height="80px" alt="planet">
                    </div>
                    </draggable>
                </div>
            </div>
        </div>
        <!--  보유했지만 쓰지 않은 행성 목록입니다. -->
        <div class="drag remainContainer" data-simplebar>
            <draggable v-model="remainPlanets" class="dragArea emptyRemainBox" :options="{group:'planet'}">
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
        remainPlanets: [],
        screen00:[],
        screen01:[],
        screen02:[],
        screen03:[],
        screen04:[],
        screen05:[],
        screen06:[],
        screen07:[],
        screen08:[],
        screen09:[],
        screen10:[],
        screen11:[],
        screen12:[],
        screen13:[],
        screen14:[],
        screen15:[],
        screen16:[],
        screen17:[],
        screen18:[],
        screen19:[],
        screen20:[],
        screen21:[],
        screen22:[],
        screen23:[],
        screen24:[],
        screen25:[],
        screen26:[],
        screen27:[],
        screen28:[],
        screen29:[],
        screen30:[],
        screen31:[],
        screen32:[],
        screen33:[],
        screen34:[],
        screen35:[],
        screen36:[],
        screen37:[],
        screen38:[],
        screen39:[],
        screen40:[],
        screen41:[],
        screen42:[],
        screen43:[],
        screen44:[],
        screen45:[],
        screen46:[],
        screen47:[],
        screen48:[],
        screen49:[],
        screen50:[],
        screen51:[],
        screen52:[],
        screen53:[],
        screen54:[],
        screen55:[],
        screen56:[],
        screen57:[],
        screen58:[],
        screen59:[]
    }),
    methods: {
        initLookAround(planets) {
            this.remainPlanets = planets;
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