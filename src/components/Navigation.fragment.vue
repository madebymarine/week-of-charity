<script lang="ts">
    import { Component, Vue } from "vue-property-decorator";

    @Component
    export default class NavigationFragment extends Vue {

    }
</script>

<template>
    <nav class="woc--nav font-sans-alt font-bold px-4 py-4 xl:px-0" role="navigation">
        <div class="flex items-center max-w-7xl mx-auto space-x-4">
            <img class="h-12 mr-auto" src="@/assets/icon-pride.png" />

            <a class="cursor-pointer hidden md:block" v-scroll-to="'#chesster'">Chesster</a>
            <a class="cursor-pointer hidden md:block" v-scroll-to="'#about'">Über die Aktion</a>
            <a class="cursor-pointer hidden md:block" v-scroll-to="'#streamers'">Die Streamer</a>
            <a class="cursor-pointer hidden md:block" v-scroll-to="'#streamplan'">Streamplan</a>
            <a class="cursor-pointer hidden md:block" v-scroll-to="'#faq'">FAQ</a>
            <a class="" href="https://www.teepublic.com/de/user/weekofcharity">Merch</a>
            <a class="" href="https://www.tipeeestream.com/week-of-charity/donation">Spenden</a>
        </div>
    </nav>
</template>

<style lang="scss" scoped>

    .woc--nav {
        transition: all .2s ease;
    }

</style>