<template>
    <div>
        <div class="containerLookAround" data-simplebar>
            <div class="itemLookAround">
                <div class="dropdrop">1</div>
            </div>
            <div class="itemLookAround">
                <div class="dropdrop">2</div>
            </div>
            <div class="itemLookAround">
                <div class="dropdrop">3</div>
            </div>
            <div class="itemLookAround">
                <div class="dropdrop">4</div>
            </div>
            <div class="itemLookAround">
                <div class="dropdrop">5</div>
            </div>
            <div class="itemLookAround">
                <div class="dropdrop">6</div>
            </div>
            <div class="itemLookAround">
                <div class="dropdrop">7</div>
            </div>
        </div>
    </div>
</template>
<script type="text/javascript">
export default {
    data() {
        return {

        }
    },
    methods: {
        initLookAround(planets) {
            this.planets = planets;
        }
    }
}
</script>
<style scoped>
.containerLookAround {
    border:1px solid red;
    position: relative;
    display: block;
    height: 650px;
    width: 11%;
    margin-top: 20px;
    margin-left: auto;
}

.itemLookAround {
    position: relative;
    height: 100px;
    font-color: white;
    border: 1px solid yellow;
    margin-top: 20px;
}

.dropdrop {
    position: absolute;
    border: 1px solid green;
    height: 50px;
    width: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
}
</style>