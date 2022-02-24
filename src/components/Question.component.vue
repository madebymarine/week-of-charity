<script lang="ts">
    import { Component, Prop, Vue } from "vue-property-decorator";

    const themes = [
        "bg-gradient-to-br from-red-200 to-orange-200 ring-red-400 text-red-600",
        "bg-gradient-to-br from-orange-200 to-yellow-200 ring-orange-400 text-orange-600",
        "bg-gradient-to-br from-yellow-200 to-lime-200 ring-yellow-400 text-yellow-600",
        "bg-gradient-to-br from-lime-200 to-emerald-200 ring-lime-400 text-lime-600",
        "bg-gradient-to-br from-emerald-200 to-teal-200 ring-emerald-400 text-emerald-600",
        "bg-gradient-to-br from-teal-200 to-sky-200 ring-teal-400 text-teal-600",
        "bg-gradient-to-br from-sky-200 to-violet-200 ring-sky-400 text-sky-600",
        "bg-gradient-to-br from-violet-200 to-pink-200 ring-violet-400 text-violet-600",
        "bg-gradient-to-br from-pink-200 to-red-200 ring-pink-400 text-pink-600",
    ];

    @Component
    export default class WocQuestion extends Vue {
        @Prop({ type: String, required: true })
        readonly answer!: string;

        @Prop({ type: Number, required: true })
        readonly index!: number;

        @Prop({ type: String, required: true })
        readonly question!: string;

        get themeClass(): string {
            return themes[this.index % themes.length];
        }
    }
</script>

<template>
    <div :class="`woc--question p-4 ring-2 ring-offset-2 rounded-lg shadow-inner ${themeClass}`">
        <div class="woc--fat font-heading leading-none mb-2 -skew-x-6 text-lg transform-gpu lg:mb-4 lg:-ml-8 lg:-mt-8 lg:-rotate-2 lg:skew-x-0 lg:text-2xl xl:-ml-10 xl:-mt-10" v-text="question" />
        <div v-html="answer" />
    </div>
</template>

<style lang="scss">

    .woc--fat {
        text-shadow: #FFF 0 0 2px, #FFF 0 0 2px, #FFF 0 0 2px, #FFF 0 0 2px, #FFF 0 0 2px, #FFF 0 0 2px;
    }

    .woc--question {
        position: relative;

        &::after {
            background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMiIgaGVpZ2h0PSIxMiIgdmVyc2lvbj0iMS4xIj4NCiAgIDxjaXJjbGUgY3g9IjYiIGN5PSI2IiByPSIyIiBmaWxsPSIjRkZGRkZGODAiLz4NCjwvc3ZnPg0K");
            bottom: 2px;
            content: "";
            display: block;
            height: 100%;
            mask-image: linear-gradient(to bottom right, transparent 25%, black);
            position: absolute;
            right: 6px;
            width: 100%;
        }

        div {
            position: relative;
            z-index: 99;
        }
    }

</style>