<template>
    <div>
        <div :class="[typeNotification + '-type']" class="vue-componment-notification-message nosh-impt as-card-2 as-padding-space-2">
            <h5 class="title as-padding-bottom-space-1">{{ tittel }}</h5>
            <span class="description nop">{{ description }}</span>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    props: {
        tittel : {
            type: String,
            default: null
        },
        description : {
            type: String,
            default: null
        },
        typeNotification: {
            type: String,
            default: 'primary',
            validator: (value: string) => {
                const allowedValues = ['primary', 'danger', 'warning', 'info'];
                if (!allowedValues.includes(value)) {
                    console.warn(`Invalid value "${value}" provided for prop "type". Defaulting to "primary".`);
                    return false;
                }
                return true;
            }
        }
    },
});
</script>

<style scoped>
.vue-componment-notification-message.primary-type {
    background: var(--as-color-primary-primary-lightest);
    border: solid 2px var(--as-color-primary-primary-light);
}
.vue-componment-notification-message.danger-type {
    background: var(--as-color-primary-danger-lightest);
    border: solid 2px var(--as-color-primary-danger-light);
}
.vue-componment-notification-message.warning-type {
    background: var(--as-color-primary-warning-lightest);
    border: solid 2px var(--as-color-primary-warning-light);
}
.vue-componment-notification-message.info-type {
    background: var(--as-color-primary-info-lightest);
    border: solid 2px var(--as-color-primary-info-light);
}

.title {
    margin-bottom: calc(var(--initial-space-box)/2);
}
.description {
    font-size: 13px;
    font-weight: 300;
}

</style>