<template>
    <v-carousel height="690px" :cycle='false'>
        <v-carousel-item>
            <page1 class="pptPages"></page1>
        </v-carousel-item>
        <v-carousel-item>
            <page2 class="pptPages"></page2>
        </v-carousel-item>
        <v-carousel-item>
            <page3 class="pptPages"></page3>
        </v-carousel-item>
        <v-carousel-item>
            <page4 class="pptPages"></page4>
        </v-carousel-item>
        <v-carousel-item>
            <page5 class="pptPages"></page5>
        </v-carousel-item>
        <v-carousel-item>
            <page6 class="pptPages"></page6>
        </v-carousel-item>
        <v-carousel-item>
            <page7 class="pptPages"></page7>
        </v-carousel-item>
        <v-carousel-item>
            <page8 class="pptPages"></page8>
        </v-carousel-item>
        <v-carousel-item>
            <page9 class="pptPages"></page9>
        </v-carousel-item>
        <v-carousel-item>
            <page10 class="pptPages"></page10>
        </v-carousel-item>
        <v-carousel-item>
            <page11 class="pptPages"></page11>
        </v-carousel-item>
        <v-carousel-item>
            <page12 class="pptPages"></page12>
        </v-carousel-item>
        <v-carousel-item>
            <page13 class="pptPages"></page13>
        </v-carousel-item>
    </v-carousel>
</template>
<script type="text/javascript">
import page1 from "./Pages/Page1.vue"
import page2 from "./Pages/Page2.vue"
import page3 from "./Pages/Page3.vue"
import page4 from "./Pages/Page4.vue"
import page5 from "./Pages/Page5.vue"
import page6 from "./Pages/Page6.vue"
import page7 from "./Pages/Page7.vue"
import page8 from "./Pages/Page8.vue"
import page9 from "./Pages/Page9.vue"
import page10 from "./Pages/Page10.vue"
import page11 from "./Pages/Page11.vue"
import page12 from "./Pages/Page12.vue"
import page13 from "./Pages/Page13.vue"
export default {
    components: {
        'page1': page1,
        'page2': page2,
        'page3': page3,
        'page4': page4,
        'page5': page5,
        'page6': page6,
        'page7': page7,
        'page8': page8,
        'page9': page9,
        'page10': page10,
        'page11': page11,
        'page12': page12,
        'page13': page13
    },
    data() {
        return {

        }
    }
}
</script>
<style type="text/css" scoped>
.pptPages{
    padding:150px;
    font-size:1.6rem;
}
</style>