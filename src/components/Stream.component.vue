<script lang="ts">
    import { Component, Prop, Vue } from "vue-property-decorator";
    import { DateTime, Interval } from "luxon";

    import {
        Stream,
        streamers,
    } from "@/script";

    @Component
    export default class WocStream extends Vue {
        @Prop({ type: Boolean, required: false, default: false })
        readonly isFirst!: boolean;

        @Prop({ type: Object, required: true })
        readonly stream!: Stream;

        /**
         * Estimated progression of the stream in % using it's planned duration
         */
        progress: number = 0;
        progressInterval: number | undefined = undefined;

        get channelUrl(): string {
            return streamers.find(_ => _.handle === this.stream.streamer)?.channelUrl ?? "";
        }

        get formattedDuration(): string {
            const { hours, minutes} = Interval.fromDateTimes(DateTime.fromISO(this.stream.start), DateTime.fromISO(this.stream.end)).toDuration(["hours", "minutes"]);

            if (hours > 0 && hours < 2) return `${hours} Stunde${minutes > 1 ? ` ${minutes} Minuten` : ''}`;
            if (hours >= 2) return `${hours} Stunden${minutes > 1 ? ` ${minutes} Minuten` : ''}`;
            return `${minutes} Minuten`;
        }

        get formattedStart(): string {
            return DateTime.fromISO(this.stream.start).toFormat("HH:mm");
        }

        /**
         * The height in px that the stream's item should take up.
         *
         * Every started hour corresponds to 64 pixels of height with an added 16px
         * for each full hour after the first one to fill the gap between hour blocks.
         */
        get height(): number {
            // Use the optional renderStart and renderEnd values (if given) for streams that start at e.g. XX:30
            const start = DateTime.fromISO(this.stream.renderStart || this.stream.start);
            const end = DateTime.fromISO(this.stream.renderEnd || this.stream.end);

            let hours = end.hour - start.hour;

            /*
                Streams might span across midnight resulting in them beeing shown on two pages of the stream plan.
                In that case, the height should obviously only be calculated from the duration on the current day.
            */
            if (end.day > start.day) {
                hours = 24 - start.hour;
            }

            return (hours * 64 + (Math.ceil(hours) - 1) * 16);
        }

        /**
         * The top margin in px that the stream is inset by from the start of the plan.
         *
         * There might be gaps between streams, so the ensure the stream is layed out on
         * the correct position in the plan, each stream block is positioned absolutely.
         */
        get marginTop(): string | undefined {
            const start = DateTime.fromISO(this.stream.start);
            if (!this.isFirst || start.hour === 0) return undefined;

            const hours = Interval.fromDateTimes(DateTime.fromISO(this.stream.start.split("T")[0] + "T00:00:00.000"), start).toDuration(["hours"]).hours;

            return `${((hours) * 64 + (Math.ceil(hours) ) * 16) }px`;
        }

        get streamerName(): string {
            return streamers.find(_ => _.handle === this.stream.streamer)?.name || this.stream.streamer;
        }

        beforeDestroy(): void {
            if (this.progressInterval) clearInterval(this.progressInterval);
        }

        mounted(): void {
            const duration = Interval.fromDateTimes(DateTime.fromISO(this.stream.start), DateTime.fromISO(this.stream.end));

            if (duration.isBefore(DateTime.now())) {
                // The stream is already over, we don't need the interval
                this.progress = 100;
            } else {
                // Update the passed duration of the active stream each second to fill the progress indicator
                this.progressInterval = setInterval(() => {
                    const passed = Interval.fromDateTimes(DateTime.fromISO(this.stream.start), DateTime.now()).toDuration(["seconds"]).seconds;
                    this.progress = (passed / duration.toDuration(["seconds"]).seconds) * 100;

                    if (this.progress >= 100 && this.progressInterval) clearInterval(this.progressInterval);
                }, 1000);
            }
        }
    }
</script>

<template>
    <a :class="['woc--stream bg-gray-800 p-4 relative rounded-md text-white', { 'is-active': progress > 0 && progress < 100, 'is-highlight': stream.highlight, 'is-passed': progress >= 100 }]" :href="channelUrl" :style="{ '--progress-height': `${progress}%`, 'height': `${height}px`, 'margin-top': `${marginTop}` }" target="blank">
        <div class="woc--time font-heading leading-none" v-text="formattedStart" />

        <div class="mr-4">
            <div class="woc--topic font-sans-alt font-bold leading-none" v-text="stream.topic" />
            <div class="woc--details items-center mt-1 space-x-1"><img class="h-3" src="@/assets/twitch.png" /><span class="font-script mt-0.5 text-base" v-text="streamerName" /><span>&ndash;</span><span class="font-sans-alt font-semibold text-sm" v-text="formattedDuration" /></div>
        </div>

        <span class="woc--external font-semibold leading-none ml-auto mr-2 text-opacity-50 text-white">⟶</span>
    </a>
</template>

<style lang="scss" scoped>

    .woc--details {
        display: none;
    }

    .woc--external {
        font-family: "Inter";
        opacity: 0;
    }

    .woc--stream {
        align-items: flex-start;
        display: flex;
        transition: all .367s cubic-bezier(.1, .9, .2, 1);
        user-select: none;
    }

    .woc--stream:hover {
        .woc--details {
            display: flex;
        }

        .woc--external {
            opacity: 1;
        }

        .woc--time {
            font-size: 1.25rem;
            left: 1rem;
            position: absolute;
            text-shadow: #000 0 0 2px, #000 0 0 2px, #000 0 0 2px, #000 0 0 2px, #000 0 0 2px, #000 0 0 2px;
            top: 0;
            transform: translate3d(0, -50%, 0);
        }

        .woc--topic {
            margin-left: 0px;
        }
    }

    .woc--stream.is-active {
        * {
            z-index: 9999;
        }

        &::before {
            animation: rainbow 30s ease infinite;
            background: linear-gradient(124deg, #ff2400, #e81d1d, #e8b71d, #e3e81d, #1de840, #1ddde8, #2b1de8, #dd00f3, #dd00f3);
            background-size: 1800% 1800%;
            border-radius: 6px;
            content: "";
            height: var(--progress-height);
            left: 0;
            position: absolute;
            top: 0;
            width: 100%;
        }
    }

    .woc--stream.is-highlight {
        &::after {
            background-color: #ffd700;
            border-radius: 6px;
            border-bottom-right-radius: 0;
            border-top-left-radius: 0;
            color: #000;
            content: "✱";
            font-family: "Quicksand";
            font-size: 12px;
            padding: 0 4px;
            position: absolute;
            right: 0;
            text-align: right;
            top: 0;
        }
    }

    .woc--stream.is-passed {
        opacity: 0.2;
    }

    .woc--time {
        position: relative;
        top: .5px;
        transition: all .367s cubic-bezier(.1, .9, .2, 1);
    }

    .woc--topic {
        margin-left: 16px;
        transition: font-size .367s cubic-bezier(.1, .9, .2, 1) .1835s, margin-left .367s cubic-bezier(.1, .9, .2, 1);
    }

</style>