<script lang="ts">
    import { Component, Vue } from "vue-property-decorator";

    @Component
    export default class ChessterFragment extends Vue {

    }
</script>

<template>
    <section id="chesster" class="woc--chesster px-8 py-16 lg:px-16 xl:px-0">
        <div class="flex items-center justify-center max-w-7xl mx-auto">
            <img class="h-72 xl:h-96" src="@/assets/chesster-pride.png" />

            <div class="ml-8 lg:ml-16 xl:ml-32">
                <div class="font-script -rotate-1 text-4xl xl:text-6xl transform-gpu">&bdquo;Hey, ich bin Chesster!&ldquo;</div>
                <div class="leading-relaxed max-w-2xl mt-4 xl:mt-8">Und ich bin das Maskottchen der Week of Charity. Ich werde euch und die Streamer die ganze Woche begleiten. Der Start ist am 18.09. um 17 Uhr und ab da sind die Streamer eine Woche am Stück live für euch. Mehr Informationen und den Streamplan findet ihr auf dieser Seite, Twitter und live in den Streams!</div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
</style>