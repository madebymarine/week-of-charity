<script lang="ts">
    import { Component, Prop, Vue } from "vue-property-decorator";

    import {
        Streamer,
    } from "@/script";

    @Component
    export default class WocStreamer extends Vue {
        @Prop({ type: Object, required: true })
        readonly streamer!: Streamer;
    }
</script>

<template>
    <a class="woc--streamer" :href="streamer.introductionUrl" target="blank">
        <img class="w-full" :src="streamer.imageUrl" style="aspect-ratio: 1 / 1" />

        <div class="woc--streamer-details flex flex-col items-center text-white">
            <div v-if="streamer.pronouns" class="font-medium mb-2 text-sm" v-text="streamer.pronouns"></div>
            <div class="font-script -rotate-2 text-4xl transform-gpu" v-text="streamer.name || streamer.handle"></div>
        </div>
    </a>
</template>

<style lang="scss" scoped>

    .woc--streamer {
        display: block;
        position: relative;
        user-select: none;

        &:hover .woc--streamer-details {
            opacity: 1;
        }
    }

    .woc--streamer-details {
        background: linear-gradient(to bottom, #00000000, #000000);
        height: 100%;
        justify-content: flex-end;
        left: 0;
        padding-bottom: 1em;
        position: absolute;
        top: 0;
        width: 100%;
    }

    @media (min-width: 1024px) {
        .woc--streamer-details {
            backdrop-filter: blur(4px);
            background: #000000A0;
            justify-content: center;
            opacity: 0;
            padding-bottom: 0;
            transition: all .2s ease;
        }
    }

</style>