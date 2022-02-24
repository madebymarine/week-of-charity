<script lang="ts">
    import { Component, Vue } from "vue-property-decorator";
    import { DateTime } from "luxon";

    import {
        streams,
    } from "@/script";

    import AboutFragment from "@/components/About.fragment.vue";
    import ChessterFragment from "@/components/Chesster.fragment.vue";
    import WocCountdown from "@/components/Countdown.component.vue";
    import FaqFragment from "@/components/FAQ.fragment.vue";
    import NavigationFragment from "@/components/Navigation.fragment.vue";
    import StreamersFragment from "@/components/Streamers.fragment.vue";
    import StreamplanFragment from "@/components/Streamplan.fragment.vue";

    @Component({
        components: {
            AboutFragment,
            ChessterFragment,
            FaqFragment,
            NavigationFragment,
            StreamersFragment,
            StreamplanFragment,
            WocCountdown,
        },
    })
    export default class Home extends Vue {
        currentChannel: string = "";
        interval: number = 0;
        player: any = null;
        showCountdown: boolean = false;

        mounted(): void {
            this.updateChannel();
            this.interval = setInterval(() => this.updateChannel(), 1000);

            if (!this.currentChannel) {
                this.player = new (window as any).Twitch.Player("twitch-player", { channel: this.currentChannel, height: window.innerHeight - 80, width: "100%" });
            }
        }

        updateChannel(): void {
            const day = DateTime.now().toISODate();
            const planned = streams[day];

            if (planned === undefined || planned.length === 0) {
                this.currentChannel = "";
                clearInterval(this.interval);
                return;
            }

            const newChannel = planned.find((stream) => {
                return DateTime.fromISO(stream.start) < DateTime.now() && DateTime.now() < DateTime.fromISO(stream.end);
            })?.streamer || "";

            if (this.currentChannel !== newChannel) {
                this.currentChannel = newChannel;

                if (!this.player) {
                    // If, for any reason, the player is disposed, create a new one
                    this.player = new (window as any).Twitch.Player("twitch-player", { channel: this.currentChannel, height: window.innerHeight - 80, muted: true, width: "100%" });
                } else {
                    // Otherwise just change to the new Twitch channel
                    this.player.setChannel(this.currentChannel);
                }
            }
        }
    }
</script>

<template>
    <div id="home-view">
        <navigation-fragment />

        <section v-show="showCountdown" class="woc--rainbow h-48 lg:h-96 relative">
            <div class="absolute text-center text-white top-1/2 transform-gpu -translate-y-1/2 w-full">
                <div class="font-sans-alt font-bold mb-4 text-xl lg:text-2xl">Countdown bis zur Week of Charity</div>
                <woc-countdown @started="showCountdown = true" @stopped="showCountdown = false" class="text-3xl lg:text-4xl" target="2021-09-18T17:00:00.000" style="font-family: 'Press Start 2P'" />
            </div>
        </section>

        <!-- The display style value is changed by the Twitch player itself once it's initialized -->
        <div v-show="currentChannel" id="twitch-player" style="display: none" />

        <chesster-fragment />

        <about-fragment />

        <section class="woc--twitter text-white">
            <div class="bg-gradient-to-br from-sky-300 to-blue-500 max-w-7xl mx-auto px-8 py-8 lg:px-16 lg:py-16 xl:px-0 xl:rounded-lg">
                <div class="font-medium mb-6 text-center text-lg">Folgt uns auf Twitter für die neuesten Informationen zum Event</div>

                <a class="flex items-center justify-center" href="https://twitter.com/WeekOfCharity/">
                    <img class="h-6 lg:h-8" src="@/assets/twitter.png" />
                    <div class="font-sans-alt font-medium text-2xl tracking-wide lg:text-4xl">/WeekOfCharity</div>
                </a>
            </div>
        </section>

        <streamers-fragment />

        <streamplan-fragment />

        <section id="faq" class="woc--faq px-8 py-16 lg:px-16 xl:px-0">
            <div class="flex flex-col items-center justify-center max-w-7xl mx-auto">
                <img class="h-48" src="@/assets/chesster-wave.gif" />
                <div class="font-script mt-8 -rotate-1 text-center text-4xl xl:text-6xl transform-gpu">&bdquo;ZACK! Noch Fragen?&ldquo;</div>
                <div class="leading-relaxed max-w-2xl mt-4 text-center xl:mt-8">Wir versuchen den Zeitplan stets zu verfolgen! Falls sich spontan etwas ändert halten wir euch auf Twitter up-to-date! Wenn ihr sonst noch etwas wissen wollt, vielleicht findet ihr hier ja die Antwort?</div>
            </div>
        </section>

        <faq-fragment />

        <section class="bg-gray-800 font-sans-alt font-medium px-8 py-4 text-center text-white">
            <img class="h-10 mx-auto" src="@/assets/icon-pride.png" />

            <div class="flex items-center justify-center mb-3 mt-6 space-x-4">
                <a class="hover:text-gray-400" href="https://twitter.com/WeekOfCharity/">Twitter</a>
                <a class="hover:text-gray-400" href="https://www.teepublic.com/de/user/weekofcharity">Merch</a>
                <a class="hover:text-gray-400" href="https://www.tipeeestream.com/week-of-charity/donation">Spenden</a>
                <a class="hover:text-gray-400" href="https://kleeder.de/contact.php">Impressum</a>
            </div>

            <p class="text-sm">&copy; 2021 Week of Charity</p>
        </section>
    </div>
</template>

<style lang="scss">

    .woc--rainbow {
        animation: rainbow 30s ease infinite;
        background: linear-gradient(124deg, #ff2400, #e81d1d, #e8b71d, #e3e81d, #1de840, #1ddde8, #2b1de8, #dd00f3, #dd00f3);
        background-size: 1800% 1800%;
    }

    @keyframes rainbow {
        0% {
            background-position: 0% 82%;
        }
        50% {
            background-position: 100% 19%;
        }
        100% {
            background-position: 0% 82%;
        }
    }

</style>