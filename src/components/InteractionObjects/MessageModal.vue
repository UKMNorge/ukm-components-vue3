<template>
    <v-snackbar v-model="snackbar" :timeout="timeout" :top="true" :color="getTypeColor()">
        <h4 class="mr-2 msg-snackbar-color">{{ title }}</h4>
        <span class="msg-snackbar-color">{{ message }}</span>

        <template v-slot:actions>
            <v-btn
                style="color: var(--color-primary-black) !important;"
                variant="text"
                @click="snackbar = false"
                >
                Close
            </v-btn>
      </template>
    </v-snackbar>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    data() {
        return {
            snackbar: false,
            title : '',
            message: '',
            timeout: 1000*3000, // Duration the snackbar will be visible (in milliseconds)
            type : 'primary' as 'primary' | 'success' | 'error' | 'warning' | 'info',

        };
    },
    methods: {
        showMessage(title : string, message: string, type : 'primary' | 'success' | 'error' | 'warning' | 'info' = 'primary') {
            this.message = message;
            this.title = title;
            this.type = type;
            this.snackbar = true;
        },
        hideMessage() {
            this.snackbar = false;
        },
        getTypeColor() {
            if(this.type == 'primary') {
                return ('var(--as-color-primary-primary-light)')
            } else if(this.type == 'success') {
                return ('var(--as-color-primary-success-light)')
            } else if(this.type == 'error') {
                return ('var(--as-color-primary-danger-light)')
            } else if(this.type == 'warning') {
                return ('var(--as-color-primary-warning-light)')
            } else if(this.type == 'info') {
                return ('var(--as-color-primary-info-light)')
            }
            
            return this.type ;
        }
    },
});
</script>

<style scoped>
.msg-snackbar-color {
    color: var(--color-primary-black) !important;
}
</style>
