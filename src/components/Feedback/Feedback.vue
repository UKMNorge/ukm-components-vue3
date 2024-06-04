<template>
    <div>
        <div class="as-card-1 as-padding-space-6">
            <h4 class="as-text-center">{{ question }}</h4>

            <!-- Answers -->
            <div  class="as-display-flex-wrap as-margin-top-space-4">
                <div class="as-margin-auto">
                    <template v-for="answer in answers">
                        <v-btn v-if="answer.text.length > 0"
                            class="v-btn-as-shadow as-margin-left-space-1 as-margin-right-space-1"
                            rounded="large"
                            :append-icon="answer.iconClass"
                            @click="sendAnswer(answer)"
                            size="large">
                            {{ answer.text }}
                        </v-btn>
                        <v-btn v-else
                            class="as-margin-right-space-1 as-margin-left-space-1"
                            @click="sendAnswer(answer)"
                            icon>
                            <v-icon :size="30">{{ answer.iconClass }}</v-icon>
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

</style>
