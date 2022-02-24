<script lang="ts">
    import { Component, Vue } from "vue-property-decorator";

    @Component
    export default class AboutFragment extends Vue {

    }
</script>

<template>
    <section id="about" class="woc--about px-8 py-16 lg:px-16 xl:px-0">
        <div class="max-w-7xl mx-auto">
            <div class="woc--heading font-heading pb-4 text-center text-4xl xl:pb-6">Über die Aktion</div>

            <div class="leading-relaxed max-w-5xl mx-auto my-8 text-center xl:my-12">Die Week of Charity entsprang aus dem 24 Stunden Schach-Stream und besteht aus diversen Streamer*innen, die eine Woche am Stück, 24 Stunden jeden Tag für einen guten Zweck streamen! Mit euren Spenden unterstützen wir das Covid-Afrika-Projekt des LSVD.</div>

            <a href="https://www.lsvd.de/de/ct/4086-Covid-19-Community-in-Afrika-bittet-um-Hilfe"><img class="h-16 mx-auto" src="https://www.lsvd.de/media/doc/87/lsvd_logo.png" /></a>
        </div>
    </section>
</template>

<style lang="scss" scoped>

</style>