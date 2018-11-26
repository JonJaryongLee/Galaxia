<template>
    <div>
        <div id="planetsContainer" ondrop="drop(event)" ondragover="allowDrop(event)" data-simplebar>
            <div id="planet1" draggabble="true" ondragstart="drag(event)"></div>
            <div id="planet2" draggabble="true" ondragstart="drag(event)"></div>
            <div id="planet3" draggabble="true" ondragstart="drag(event)"></div>
            <div id="planet4" draggabble="true" ondragstart="drag(event)"></div>
            <div id="planet5" draggabble="true" ondragstart="drag(event)"></div>
            <div id="planet6" draggabble="true" ondragstart="drag(event)"></div>
            <div id="planet7" draggabble="true" ondragstart="drag(event)"></div>
        </div>
        <div class="screen">
            <div class="screenItemRow" v-for="row in rows">
                <div class="screenItem" v-for="column in columns" ondrop="drop(event)" ondragover="allowDrop(event)"></div>
            </div>
        </div>
    </div>
</template>
<script type="text/javascript">
export default {
    data() {
        return {
            rows: 6,
            columns: 10
        }
    },
    methods: {
        initLookAround(planets) {
            this.planets = planets;
        },
        allowDrop(ev) {
            ev.preventDefault();
        },
        drag(ev) {
            ev.dataTransfer.setData("text", ev.target.id);
        },
        drop(ev) {
            ev.preventDefault();
            let data = ev.dataTransfer.getData("text");
            ev.target.appendChild(document.getElementById(data));
        }
    }
}
</script>
<style scoped>
#planetsContainer {
    float: right;
    width: 100px;
    height: 680px;
    border: 1px solid black;
    cursor: pointer;
    margin-right: 20px;
}

#planet1 {
    height: 100px;
    width: 100px;
    background-color: black;
    border: 1px solid red;
    margin-top: 20px;
    cursor: pointer;
}

#planet2 {
    height: 100px;
    width: 100px;
    background-color: gray;
    border: 1px solid red;
    margin-top: 20px;
    cursor: pointer;
}

#planet3 {
    height: 100px;
    width: 100px;
    background-color: yellow;
    border: 1px solid red;
    margin-top: 20px;
    cursor: pointer;
}

#planet4 {
    height: 100px;
    width: 100px;
    background-color: red;
    border: 1px solid red;
    margin-top: 20px;
    cursor: pointer;
}

#planet5 {
    height: 100px;
    width: 100px;
    background-color: green;
    border: 1px solid red;
    margin-top: 20px;
    cursor: pointer;
}

#planet6 {
    height: 100px;
    width: 100px;
    background-color: blue;
    border: 1px solid red;
    margin-top: 20px;
    cursor: pointer;
}

#planet7 {
    height: 100px;
    width: 100px;
    background-color: pink;
    border: 1px solid red;
    margin-top: 20px;
    cursor: pointer;
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