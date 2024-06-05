<template>
    <div class="modal fade" ref="mainModalDialog" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
     
    </div>
</template>


<script lang="ts">

import { defineComponent } from 'vue'


export default defineComponent({ 
    delimiters: ['#{', '}'], // For å bruke det på Twig
    props: {
        alleInnslag : [],
        onCloseCallback : null as any
    },
    data : function() {
        return {
            melding : '',
            title : '',
            buttons : [], // [{name : 'Accept', class : "confirm-btn", callback : ()=> { ... }]
            onCloseCallback : this.onCloseCallback
        }
    },
    async mounted() {
        this._events();
    },
    methods : {
        openDialog : function(title : any, melding : any, buttons = [], onCloseCallback = null) {
        
        },
        buttonClick : function(button : any) {
           
        },
        closeClicked : function() {
            if(this.onCloseCallback) {
                this.onCloseCallback();
            }
        },
        _events : function() {
            // event når dialogen lukkes
        }
    },
});

</script>