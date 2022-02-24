<script lang="ts">
    import { Component, Vue } from "vue-property-decorator";

    import {
        Streamer,
        streamers,
    } from "@/script";

    import WocStreamer from "@/components/Streamer.component.vue";

    @Component({
        components: {
            WocStreamer,
        },
    })
    export default class StreamersFragment extends Vue {
        get allStreamers(): Streamer[] {
            return streamers;
        }
    }
</script>

<template>
    <section id="streamers" class="woc--streamers mx-8 py-16">
        <div class="woc--heading font-heading pb-4 text-center text-4xl xl:pb-6">Die Streamer</div>

        <div class="leading-relaxed max-w-5xl mx-auto my-8 text-center xl:my-12">Diese Streamer werden während der Week of Charity für eure Unterhaltung sorgen.<br />Klickt auf die Profilbilder, um zu einer Kurzvorstellung auf Twitter zu gelangen.</div>

        <div class="gap-2 grid grid-cols-2 mt-8 md:grid-cols-3 lg:grid-cols-6 xl:grid-cols-9 xl:mt-12">
            <woc-streamer v-for="streamer in allStreamers" :streamer="streamer" :key="streamer.handle" />
        </div>
    </section>
</template>

<style lang="scss" scoped>

</style>