<script lang="ts">
    import { Component, Vue } from "vue-property-decorator";

    import WocQuestion from "@/components/Question.component.vue";

    const questions = [
        {
            question: "Kann ich die Aktion auch durch Kaufen von Merch unterstützen?",
            answer: "Klar! Alle Gewinne aus dem Merchverkauf zählen automatisch zu den Spenden dazu!",
        },
        {
            question: "Warum kann ich die Aktion nicht mit Abos unterstützen?",
            answer: "Twitch zahlt Einnahmen aus Abos erst ab einer bestimmten Summe aus. Da wir nur kleine Streamer sind, ist es nicht abschätzbar, ob und wann jemand diese Summe erreicht und leider ist es nicht allen von uns möglich den Gegenwert auszulegen. Daher bewerben wir Subs während unserer Streams auch nicht.",
        },
        {
            question: "Warum habt ihr keinen gemeinsamen Twitch-Account für das Projekt?",
            answer: "Da wir eine Gruppe aus kleinen Streamern sind, ist es schwer mit einem ganz neuen Account Leute zu erreichen! Wir haben die Hoffnung, dass wir ein paar Leute mehr abholen, wenn jede:r bei sich selbst streamt!",
        },
        {
            question: "Wird ab Sonntag 17 Uhr wirklich 24 Stunden lang nur Schach gespielt?",
            answer: "Jap, der Stream dreht sich wirklich 24 Stunden nur um Schach. ZACK!",
        },
        {
            question: "Kann ich die Streams, die ich verpasst habe, irgendwo nachschauen?",
            answer: 'Die gebündelte Ladung Action steht euch auf unserem <a class="font-semibold hover:opacity-70" href="https://www.youtube.com/channel/UCtDccnVlCVBNBo-icr13dfQ">Youtube-Kanal</a> (nach den Streams jeweils) zur Verfügung.',
        },
        {
            question: "Wer hat die Webseite programmiert?",
            answer: 'Die Webseite wurde von <a class="font-semibold hover:opacity-70" href="https://twitter.com/vainamov">einem hilfsbereiten Freund</a> gemacht!',
        },
        {
            question: "Von wem stammen die Designs?",
            answer: 'Die Designs stammen von Ananasatom! Checkt gerne <a class="font-semibold hover:opacity-70" href="https://twitter.com/AnanasArtworks">weiteres von ihm</a> aus!',
        },
        {
            question: "Wer hat die Alert-Sounds erstellt?",
            answer: 'Die Alerts hat kleeder angefertigt! <a class="font-semibold hover:opacity-70" href="https://kleeder.bandcamp.com/">Hier könnt ihr euch mehr anhören</a>!',
        },
        {
            question: "Ist das Projekt eine einmalige Sache?",
            answer: "Hoffentlich nicht! Wir sind motiviert dieses Projekt zu wiederholen!",
        },
    ];

    @Component({
        components: {
            WocQuestion,
        },
    })
    export default class FaqFragment extends Vue {
        get allQuestions(): typeof questions {
            return questions;
        }
    }
</script>

<template>
    <section class="woc--faq px-8 py-16 lg:px-16 xl:px-0">
        <div class="gap-4 grid grid-cols-1 max-w-7xl mx-auto lg:gap-8 lg:grid-cols-2 xl:gap-12 xl:grid-cols-3">
            <woc-question v-for="(question, index) in allQuestions" v-bind="question" :index="index" :key="question.question" />
        </div>
    </section>
</template>

<style lang="scss" scoped>

</style>