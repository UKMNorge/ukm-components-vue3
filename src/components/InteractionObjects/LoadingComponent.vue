<template>
    <div class="loading">
        <div v-show="show" id="headerMainLoader">
            <v-progress-circular indeterminate :size="91" :width="9"></v-progress-circular>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({ 
    delimiters: ['#{', '}'], // For å bruke det på Twig
    data : function() {
        return {
            show : false
        }
    },
    methods : {
        showLoading : function() {
            console.log('show2126');
            this.show = true;
        },
        hideLoading : function() {
            console.log('hide2126');
            this.show = false;
        }
    },
})

</script>

<style scoped>
#headerMainLoader {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: #bebebe80;
    width: 100%;
    height: 100%;
    display: flex !important;
    z-index: 99999999 !important;
}
#headerMainLoader .v-progress-circular {
    margin: auto;
}
</style>