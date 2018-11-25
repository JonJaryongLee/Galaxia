<template>
    <div>
        <div class="element" v-drag>
            <div>Hi</div>
        </div>
    </div>
</template>
<script type="text/javascript">
import drag from '@branu-jp/v-drag'
export default {
    directives: {
        drag
    }
}
</script>
<style type="text/css" scoped>
.element {
    position: absolute;
}
</style>