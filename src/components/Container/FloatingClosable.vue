<template>
  <div>
    <div v-if="isOpen" @click="closeEvent($event)" class="node-floating-selector as-padding-space-2 close-selector">
        <div class="box selector as-card-1 as-padding-space-5 as-xs-padding-space-3">
                <button class="close-selector close-btn as-btn-hover-default">
                    <div class="icon close-selector">
                        <svg class="remove-icon close-selector" width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path class="close-selector" d="M11.5 4.24264L10.0858 2.82843L7.25736 5.65685L4.42893 2.82843L3.01472 4.24264L5.84315 7.07107L3.01472 9.89949L4.42893 11.3137L7.25736 8.48528L10.0858 11.3137L11.5 9.89949L8.67157 7.07107L11.5 4.24264Z" fill="#9B9B9B"/>
                        </svg>
                    </div>
                </button>
                <slot />
        </div>
    </div>
  </div>
</template>
  
<script lang="ts">
import { defineComponent } from 'vue'
import $ from "jquery";


export default defineComponent ({
  props: {
    title: String,
    // Function open
  },
  data() {
    return {
      isOpen: false,
    };
  },
  methods: {
    open() {
      this.isOpen = true;
      this.$emit('open'); // Emit the 'open' event
    },
    close() {
      this.isOpen = false;
    },
    closeEvent(event : any) {
        if($(event.target).hasClass('close-selector')) {
            this.isOpen = false;
        }
    },
  },
});
</script>
  
<style scoped>
.node-floating-selector {
    position: fixed;
    z-index: 99999;
    background: #65656527;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    display: flex;
}
.node-floating-selector .box {
    margin: auto;
    min-width: 400px;
    position: relative;
    max-height: 80vh;
    overflow: auto;
}
.node-floating-selector .box button.close-btn {
    position: absolute;
    right: 10px;
    top: 10px;
    border: none;
    border-radius: 50%;
    height: 35px;
    width: 35px;
    display: flex;
    background: transparent;
    z-index: 9;
}
.node-floating-selector .box button.close-btn:hover {
    background: var(--color-primary-grey-light) !important;
}
.node-floating-selector .box button.close-btn:hover .icon svg path {
    fill: var(--color-primary-grey-dark) !important;
}
.node-floating-selector .box button.close-btn .icon {
    margin: auto
}
.node-floating-selector .box button.close-btn .icon svg {
    display: flex;
}
@media(max-width: 576px) {
  .node-floating-selector .box {
      max-width: 100%;
      width: 100%;
      min-width: auto;
  }
}
</style>
  