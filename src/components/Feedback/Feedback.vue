<template>
    <div>
        <div class="as-card-1 as-padding-space-6 as-xs-padding-space-2">
            <h4 class="as-text-center">{{ question }}</h4>

            <!-- Answers -->
            <div  class="as-display-flex-wrap as-margin-top-space-3">
                <div class="as-margin-auto">
                    <template v-for="answer in answers">
                        <v-btn v-if="answer.text.length > 0"
                            class="v-btn-as-shadow answer-button as-margin-left-space-1 as-margin-right-space-1 as-margin-top-space-1"
                            rounded="large"
                            :append-icon="answer.iconClass"
                            @click="sendAnswer(answer)"
                            :size="isMobile ? 'small' : 'large'">
                            {{ answer.text }}
                        </v-btn>
                        <v-btn v-else
                            class="as-margin-right-space-1 answer-button as-margin-left-space-1 as-margin-top-space-1"
                            :size="isMobile ? 'small' : 'default'"
                            @click="sendAnswer(answer)"
                            icon>
                            <v-icon :size="isMobile ? 27 : 30">{{ answer.iconClass }}</v-icon>
                        </v-btn>

                    </template>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    computed: {
        isMobile() {
            return window.innerWidth < 400; // Adjust the breakpoint as needed
        }
    },
    props: {
        question: {
            type: String,
            required: true
        },
        answers: {
            type: Array<{id : String, text : String, iconClass : String}>,
            required: true,
        },
        campaign: {
            type: Number,
            required: true
        },
        sendAnswerCallback: {
            type: Function,
            required: true
        }
    },
    data() {
        return {
            question : this.question,
            answers : this.answers,
            campaignId : this.campaign,
            sendAnswerCallback : this.sendAnswerCallback,
        };
    },
    methods: {
        sendAnswer(answer : {id : String, text : String, iconClass : String}) {
            this.sendAnswerCallback(answer, this.question, this.campaignId);
        }
    },
});
</script>


<style scoped>
@media (max-width: 576px) {
    .answer-button {
        margin: auto;
        margin-left: calc(var(--initial-space-box)/2);
        margin-right: calc(var(--initial-space-box)/2);
        margin-top: var(--initial-space-box);
    }
}
</style>
