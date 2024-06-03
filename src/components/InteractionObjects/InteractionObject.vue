<template>
    <div id="interactionObject">
        <DialogModal ref="modalDialog" />
        <LoadingComponent ref="mainLoading" />
        <MessageModal ref="messageModal" />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import DialogModal from './DialogModal.vue'
import LoadingComponent from './LoadingComponent.vue'
import MessageModal from './MessageModal.vue'

export default defineComponent({
    data() {
        return {
            test: 'test'
        }
    },
    mounted() {
        console.log('mounted on InteractionObject');
        // this.showLoading();
    },
    methods: {
        openDialog(title: any, msg: any, buttons = null, onCloseCallback: any) {
            console.log('openDialog');
            (this.$refs.modalDialog as any).openDialog(title, msg, buttons, onCloseCallback);
        },
        showMessage(title: any, msg: any, type : string = 'primary') {
            (this.$refs.messageModal as any).showMessage(title, msg, type);
        },
        showLoading() {
            console.log('showLoading');
            (this.$refs.mainLoading as any).showLoading();
        },
        hideLoading() {
            console.log('hideLoading');
            (this.$refs.mainLoading as any).hideLoading();
        }
    },
    components: { 
        DialogModal,
        LoadingComponent,
        MessageModal
    }
})
</script>
