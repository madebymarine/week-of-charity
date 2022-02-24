<script lang="ts">
    import { Component, Vue } from "vue-property-decorator";
    import { DateTime } from "luxon";

    import {
        streams,
    } from "@/script";

    import WocStream from "@/components/Stream.component.vue";

    @Component({
        components: {
            WocStream,
        },
    })
    export default class StreamplanFragment extends Vue {
        currentDay: DateTime = DateTime.now();

        get allStreams() {
            return streams;
        }

        isNextEnabled(): boolean {
            return Object.keys(streams).includes(this.currentDay.plus({ days: 1 }).toISODate());
        }

        isPreviousEnabled(): boolean {
            return Object.keys(streams).includes(this.currentDay.minus({ days: 1 }).toISODate());
        }

        mounted(): void {
            if (!Object.keys(streams).includes(this.currentDay.toISODate())) {
                // Show the first day of the event, even if it hasn't started yet
                this.currentDay = DateTime.fromISO(Object.keys(streams).sort((a, b) => a.localeCompare(b))[0]);
            }
        }

        showNextDay(): void {
            this.currentDay = this.currentDay.plus({ days: 1 });
        }

        showPreviousDay(): void {
            this.currentDay = this.currentDay.minus({ days: 1 });
        }
    }
</script>

<template>
    <section id="streamplan" class="woc--streamplan mx-8 py-16">
        <div class="woc--heading font-heading pb-4 text-center text-4xl xl:pb-6">Streamplan</div>

        <div class="leading-relaxed max-w-5xl mx-auto my-8 text-center xl:my-12">Das <span class="woc--highlight" />-Symbol markiert einen Special-Stream, den ihr nicht verpassen solltet!</div>

        <div class="mt-8 xl:mt-12">
            <div class="woc--calendar xl:max-w-7xl xl:mx-auto">
                <div class="woc--controls bg-white flex items-center justify-between max-w-md rounded-lg rounded-t-none shadow-2xl">
                    <div @click="isPreviousEnabled() && showPreviousDay()" class="cursor-pointer font-semibold p-4 rounded-bl-lg text-lg hover:bg-gray-200" style="font-family: 'Inter'">⟵</div>
                    <div class="font-heading text-lg" v-text="currentDay.setLocale('de-DE').toFormat('EEEE, d. LLLL')" />
                    <div @click="isNextEnabled() && showNextDay()" class="cursor-pointer font-semibold p-4 rounded-br-lg text-lg hover:bg-gray-200" style="font-family: 'Inter'">⟶</div>
                </div>

                <div class="flex mt-4">
                    <div class="divide-y-2 mr-4 space-y-4">
                        <div v-for="i in 24" class="flex font-sans-alt font-bold h-16 items-center text-right text-gray-600" :key="i">{{ (i - 1).toString().padStart(2, "0") }}</div>
                    </div>
                    <div class="space-y-4 w-full">
                        <woc-stream v-for="(stream, index) in allStreams[currentDay.toISODate()]" :is-first="index === 0" :stream="stream" :key="stream.start" />
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>

    .woc--controls {
        margin: 0 -32px;
        position: sticky;
        top: 0;
        user-select: none;
        z-index: 999999;
    }

    .woc--highlight::after {
        background-color: #ffd700;
        border-radius: 6px;
        bottom: 1px;
        color: #000;
        content: "✱";
        display: inline-block;
        font-family: "Quicksand";
        font-size: 12px;
        padding: 0 4px;
        position: relative;
    }

    @media (min-width: 448px) {
        .woc--controls {
            margin: 0 auto;
        }
    }

</style>