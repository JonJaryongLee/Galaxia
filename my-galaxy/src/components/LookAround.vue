<template>
    <div>
        <div class="planetContainer" data-simplebar>
            <ul>
                <li class="planetElement" v-for="item in planets" :key="item.num">
                    <img :src=item.img height="80px" alt="planet">
                </li>
            </ul>
        </div>
    </div>
</template>
<script type="text/javascript">
export default {
    data() {
        return {
            planets: [],
        }
    },
    methods: {
        initLookAround(planets) {
            this.planets = planets;
        },
    }
}
</script>
<style scoped>
ul {
    list-style: none;
}

.planetContainer {
    position: relative;
    top: 5%;
    display: block;
    height: 650px;
    width: 11%;
    margin-top: 20px;
    margin-left: auto;
    border: 2px dashed red;
}

.planetElement {
    margin-top: 20px;
    transition: all 0.2s;
}

.planetElement:hover {
    transform: scale(1.2);
}
</style>