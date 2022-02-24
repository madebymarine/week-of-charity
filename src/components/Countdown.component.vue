<script lang="ts">
    import { Component, Prop, Vue } from "vue-property-decorator";
    import { DateTime, Interval } from "luxon";

    @Component
    export default class WocCountdown extends Vue {
        @Prop({ type: String, required: true })
        readonly target!: string;

        countdown: string = "";
        interval: number = 0;

        mounted(): void {
            if (DateTime.fromISO(this.target) > DateTime.now()) {
                this.$emit("started");

                this.interval = setInterval(() => {
                    const { days, hours, minutes, seconds } = Interval.fromDateTimes(DateTime.now(), DateTime.fromISO(this.target)).toDuration(["days", "hours", "minutes", "seconds"]);
                    this.countdown = `${days.toFixed(0).padStart(2, "0")}:${hours.toFixed(0).padStart(2, "0")}:${minutes.toFixed(0).padStart(2, "0")}:${seconds.toFixed(0).padStart(2, "0")}`;

                    if (DateTime.fromISO(this.target) <= DateTime.now()) {
                        // This could be removed, since the countdown get's replaced with an embedded Twitch player anyways
                        this.countdown = "Los gehts!";
                        this.$emit("stopped");
                        clearInterval(this.interval);
                    }
                }, 1000);
            }
        }
    }
</script>

<template>
    <span class="woc--countdown" v-text="countdown" />
</template>

<style lang="scss" scoped>

</style>