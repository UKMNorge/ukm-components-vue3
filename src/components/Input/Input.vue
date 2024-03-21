<template>
    <div>
        <div class="input-delta" :class="{ open: value, 'validation-failed' : !value || !value.length }">
            <div class="overlay">
                <div class="info">
                    <svg class="icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" style="fill: #A0AEC0;transform: ;msFilter:;"><path d="M7.5 6.5C7.5 8.981 9.519 11 12 11s4.5-2.019 4.5-4.5S14.481 2 12 2 7.5 4.019 7.5 6.5zM20 21h1v-1c0-3.859-3.141-7-7-7h-4c-3.86 0-7 3.141-7 7v1h17z"></path></svg>
                    <span class="text">Hvem har koreografert dansen?</span>
                </div>
            </div>
            <h1>Tittel: {{ tittel  }}</h1>
            <input type="text" @change="inputChanged($event)" v-model="inputValue" class="input" name="koreografi_av">
            <!-- <input @blur="onSave()" type="text" class="input" v-model="value" name="koreografi_av"> -->
        </div>     
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import $ from "jquery";

export default defineComponent({
    props: {
        tittel : null,
        onChange : null
    },
    data() {
        return {
            inputValue : '' as String,
            test : 1,
            value : 'aa'
        }
    },
    methods : {
        // Input changed
        inputChanged(event : any) {
            if(this.onChange) {
                this.onChange($(event));
            }
        }
    }
});
</script>