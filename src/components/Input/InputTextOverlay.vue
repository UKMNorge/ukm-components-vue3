<template>
    <div class="input-delta" :class="{ open: isOpen || inputValue.length > 0 }">
        <div class="overlay as-padding-space-1" @click="clickOpen">
            <div class="info">
                <!-- <svg class="icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" style="fill: #A0AEC0;transform: ;msFilter:;"><path d="M7.5 6.5C7.5 8.981 9.519 11 12 11s4.5-2.019 4.5-4.5S14.481 2 12 2 7.5 4.019 7.5 6.5zM20 21h1v-1c0-3.859-3.141-7-7-7h-4c-3.86 0-7 3.141-7 7v1h17z"></path></svg> -->
                <span class="text as-margin-left-space-1">{{ placeholder }}</span>
            </div>
        </div>
          <!-- <input  :value="inputValue" @input="onInputChange" /> -->
        <input ref="inputRef" @click="clickInput" @blur="saveChangesCallback" @input="onInputChange" :type="type" :value="inputValue" class="input as-padding-left-space-1" :name="name">
    </div> 
</template>



<script lang="ts">
import { defineComponent } from 'vue'
import { PropType } from 'vue';

export default defineComponent({
    props: {
        callbackChange: {
            type: Function as PropType<(input: string) => void>,
            default: () => {},
            required: false
        },
        placeholder: {
            type: String,
            required: true
        },
        name: {
            type: String,
            required: false
        },
        modelValue: {
            type: String as PropType<string>,
            required: true
        },
        type: {
            type: String,
            required: false,
            default: 'text'
        }
    },
    emits: ['update:modelValue'],
    watch: {
      modelValue(newValue) {
        this.inputValue = newValue;
      }
    },
    data() {
        return {
            isOpen: false as boolean,
            inputValue: this.modelValue
        }
    },
    methods: {
        clickOpen() {
            (this.$refs.inputRef as HTMLInputElement).focus();
            this.isOpen = true;
        },
        clickInput() {
            this.isOpen = true;
        },
        saveChangesCallback() {
            this.isOpen = false;
            console.log('saveChangesCallback');
        },
        onInputChange(event: Event) {
            const target = event.target as HTMLInputElement;
            this.$emit('update:modelValue', target.value);
        }
    }
});
</script>

<style scoped>
.input-delta {
    border: 1px solid transparent;
    border-radius: 5px;
    cursor: text;
    overflow: hidden;
    position: relative;
    transition: border .3s;
    position: relative;
    border-radius: var(--radius-normal) !important;
    overflow: hidden;
    height: 60px;
    background: var(--color-primary-grey-lightest);
}
.input-delta .overlay {
    position: absolute;
    width: 100%;
    height: 100%;
    background: var(--color-primary-grey-lightest);
    display: flex;
    transition: .2s all;
    z-index: 1;
}
.input-delta .overlay .info {
    margin: auto;
    margin-left: 0;
}
.input-delta .overlay .info .text {
    color: #656f7c;
    transition: .2s font-size;
}
.input-delta.open .overlay .info .text {
    font-size: 10px;
}
.input-delta .overlay .info .icon {
    transition: .2s;
}
.input-delta.open .overlay .info .icon {
    width: 12px;
    height: 12px;
}
.input-delta.open .overlay {
    height: 24px;
}
.input-delta .button-right {
    position: absolute;
    border: none;
    background: #718096;
    border-radius: 50%;
    right: 15px;
    width: 25px;
    height: 25px;
    top: 16px;
    padding: 0;
    z-index: 1;
}
.input-delta .button-right.with-hide {
    right: -30px;
    width: 2px;
    height: 2px;
    transition: .4s cubic-bezier(0.89, 0.21, 0.21, 1.54);
}
.input-delta.open .button-right.with-hide {
    right: 15px;
    width: 25px;
    height: 25px;
}
.input-delta .button-right svg {
    margin-top: -2px;
    margin-left: -3px;
}
.input-delta .input {
    padding-left: calc(var(--initial-space-box)*2) !important;
    background: var(--color-primary-grey-lightest);
    border: none;
    color: #1a202c;
    font: normal normal 300 16px / 19px Roboto;
    height: 30px;
    margin-top: 20px;
    outline: none;
    resize: none !important;
    transition: all .2s;
    width: 100%;
    box-shadow: none !important;
    border-radius: 0 !important;
    border-bottom-left-radius: 10px !important;
    border-bottom-right-radius: 10px !important;
}
.input-delta.open .input {
    height: 38px;
}
</style>