type Streamplan = {
    [day: string]: Stream[];
};

export interface Stream {
    streamer: string;
    highlight?: boolean;
    topic: string;
    start: string;
    end: string;
    renderStart?: string;
    renderEnd?: string;
}

export const streams: Streamplan = {
    "2021-09-18": [
        {
            streamer: "Theescarboom",
            highlight: true,
            topic: "Eröffnungs-Stream",
            start: "2021-09-18T17:00:00.000",
            end: "2021-09-18T17:30:00.000",
            renderEnd: "2021-09-18T18:00:00.000",
        },
        {
            streamer: "Theescarboom",
            highlight: true,
            topic: "Pokémon SwSh: Dynamax-Abenteuer",
            start: "2021-09-18T17:30:00.000",
            end: "2021-09-18T20:00:00.000",
            renderStart: "2021-09-18T18:00:00.000",
        },
        {
            streamer: "Theescarboom",
            highlight: true,
            topic: "Just Chatting",
            start: "2021-09-18T20:00:00.000",
            end: "2021-09-18T22:00:00.000",
        },
        {
            streamer: "1amtrain",
            topic: "Horrorgames",
            start: "2021-09-18T22:00:00.000",
            end: "2021-09-19T01:00:00.000",
        },
    ],
    "2021-09-19": [
        {
            streamer: "1amtrain",
            topic: "Horrorgames",
            start: "2021-09-19T00:00:00.000",
            end: "2021-09-19T01:00:00.000",
        },
        {
            streamer: "Badingoregrill",
            topic: "Zelda BotW Speedrun Bingo",
            start: "2021-09-19T01:00:00.000",
            end: "2021-09-19T05:00:00.000",
        },
        {
            streamer: "Deraltan",
            topic: "Yu-Gi-Oh Opening",
            start: "2021-09-19T05:00:00.000",
            end: "2021-09-19T07:00:00.000",
        },
        {
            streamer: "Kleeder",
            topic: "Donkey Kong Country Returns",
            start: "2021-09-19T07:00:00.000",
            end: "2021-09-19T10:00:00.000",
        },
        {
            streamer: "Emtes",
            topic: "Super Castlevania 4",
            start: "2021-09-19T10:00:00.000",
            end: "2021-09-19T12:00:00.000",
        },
        {
            streamer: "Binakleinerals3",
            topic: "Genshin Impact",
            start: "2021-09-19T12:00:00.000",
            end: "2021-09-19T13:00:00.000",
        },
        {
            streamer: "Binakleinerals3",
            topic: "Ultimate Chicken Horse",
            start: "2021-09-19T13:00:00.000",
            end: "2021-09-19T15:00:00.000",
        },
        {
            streamer: "Kurisuvanedge",
            topic: "Spiele Shuffle mit Glücksrad",
            start: "2021-09-19T15:00:00.000",
            end: "2021-09-19T17:00:00.000",
        },
        {
            streamer: "Theescarboom",
            highlight: true,
            topic: "24 Stunden Schachstream",
            start: "2021-09-19T17:00:00.000",
            end: "2021-09-20T17:00:00.000",
        },
    ],
    "2021-09-20": [
        {
            streamer: "Theescarboom",
            highlight: true,
            topic: "24 Stunden Schachstream",
            start: "2021-09-20T00:00:00.000",
            end: "2021-09-20T17:00:00.000",
        },
        {
            streamer: "Fiesabella",
            topic: "Zeichnen",
            start: "2021-09-20T17:00:00.000",
            end: "2021-09-20T20:00:00.000",
        },
        {
            streamer: "Badingoregrill",
            highlight: true,
            topic: "Mario Kart 8",
            start: "2021-09-20T20:00:00.000",
            end: "2021-09-20T22:00:00.000",
        },
        {
            streamer: "Kurisuvanedge",
            highlight: true,
            topic: "Splatoon 2",
            start: "2021-09-20T22:00:00.000",
            end: "2021-09-20T24:00:00.000",
        },
    ],
    "2021-09-21": [
        {
            streamer: "Kurisuvanedge",
            topic: "Spiele Shuffle mit Glücksrad",
            start: "2021-09-21T00:00:00.000",
            end: "2021-09-21T03:00:00.000",
        },
        {
            streamer: "piatralisch",
            topic: "INSIDE",
            start: "2021-09-21T03:00:00.000",
            end: "2021-09-21T05:00:00.000",
        },
        {
            streamer: "piatralisch",
            topic: "Just Chatting",
            start: "2021-09-21T05:00:00.000",
            end: "2021-09-21T06:00:00.000",
        },
        {
            streamer: "Kleeder",
            topic: "Super Mario World",
            start: "2021-09-21T06:00:00.000",
            end: "2021-09-21T09:00:00.000",
        },
        {
            streamer: "Deraltan",
            topic: "Dark Souls 3 No Hit",
            start: "2021-09-21T09:00:00.000",
            end: "2021-09-21T12:00:00.000",
        },
        {
            streamer: "Binakleinerals3",
            topic: "Sims 4",
            start: "2021-09-21T12:00:00.000",
            end: "2021-09-21T14:00:00.000",
        },
        {
            streamer: "Binakleinerals3",
            topic: "Personality Tests + Buzzfeed Quizzes",
            start: "2021-09-21T14:00:00.000",
            end: "2021-09-21T16:00:00.000",
        },
        {
            streamer: "Ananasatom",
            topic: "Love Live School Idol Festival / Bandori",
            start: "2021-09-21T16:00:00.000",
            end: "2021-09-21T19:00:00.000",
        },
        {
            streamer: "Emtes",
            highlight: true,
            topic: "Among Us",
            start: "2021-09-21T19:00:00.000",
            end: "2021-09-21T22:00:00.000",
        },
        {
            streamer: "Kurisuvanedge",
            highlight: true,
            topic: "Mario Party",
            start: "2021-09-21T22:00:00.000",
            end: "2021-09-21T24:00:00.000",
        },
    ],
    "2021-09-22": [
        {
            streamer: "GumLong",
            topic: "Everhood",
            start: "2021-09-22T00:00:00.000",
            end: "2021-09-22T03:00:00.000",
        },
        {
            streamer: "Badingoregrill",
            topic: "Minish Cap Randomizer",
            start: "2021-09-22T03:00:00.000",
            end: "2021-09-22T07:00:00.000",
        },
        {
            streamer: "Sir_nightmare94",
            topic: "PnP NPC erstellen",
            start: "2021-09-22T07:00:00.000",
            end: "2021-09-22T08:00:00.000",
        },
        {
            streamer: "Sir_nightmare94",
            topic: "Daily Game Routine",
            start: "2021-09-22T08:00:00.000",
            end: "2021-09-22T09:00:00.000",
        },
        {
            streamer: "Nislregen",
            topic: "Mario Maker",
            start: "2021-09-22T09:00:00.000",
            end: "2021-09-22T13:00:00.000",
        },
        {
            streamer: "Binakleinerals3",
            topic: "Minecraft",
            start: "2021-09-22T13:00:00.000",
            end: "2021-09-22T15:00:00.000",
        },
        {
            streamer: "Dosenpfirsiche",
            topic: "Fire Emblem Three Houses",
            start: "2021-09-22T15:00:00.000",
            end: "2021-09-22T17:00:00.000",
        },
        {
            streamer: "Dosenpfirsiche",
            topic: "Untitled Goose Game",
            start: "2021-09-22T17:00:00.000",
            end: "2021-09-22T19:00:00.000",
        },
        {
            streamer: "Sir_nightmare94",
            highlight: true,
            topic: "PnP",
            start: "2021-09-22T19:00:00.000",
            end: "2021-09-22T22:00:00.000",
        },
        {
            streamer: "Badingoregrill",
            highlight: true,
            topic: "Smash",
            start: "2021-09-22T22:00:00.000",
            end: "2021-09-23T01:00:00.000",
        },
    ],
    "2021-09-23": [
        {
            streamer: "Badingoregrill",
            highlight: true,
            topic: "Smash",
            start: "2021-09-23T00:00:00.000",
            end: "2021-09-23T01:00:00.000",
        },
        {
            streamer: "piatralisch",
            topic: "Phasmophobia",
            start: "2021-09-23T01:00:00.000",
            end: "2021-09-23T03:00:00.000",
        },
        {
            streamer: "piatralisch",
            topic: "INSIDE",
            start: "2021-09-23T03:00:00.000",
            end: "2021-09-23T04:00:00.000",
        },
        {
            streamer: "Deraltan",
            topic: "Dark Souls 1 No Hit",
            start: "2021-09-23T04:00:00.000",
            end: "2021-09-23T08:00:00.000",
        },
        {
            streamer: "Sir_nightmare94",
            topic: "Daily Game Routine",
            start: "2021-09-23T08:00:00.000",
            end: "2021-09-23T09:00:00.000",
        },
        {
            streamer: "Sir_nightmare94",
            topic: "Magic DnD Set Opening",
            start: "2021-09-23T09:00:00.000",
            end: "2021-09-23T10:00:00.000",
        },
        {
            streamer: "Kleeder",
            topic: "Super Hexagon",
            start: "2021-09-23T10:00:00.000",
            end: "2021-09-23T11:00:00.000",
        },
        {
            streamer: "Kleeder",
            topic: "Music Making",
            start: "2021-09-23T11:00:00.000",
            end: "2021-09-23T12:00:00.000",
        },
        {
            streamer: "GumLong",
            topic: "Everhood",
            start: "2021-09-23T12:00:00.000",
            end: "2021-09-23T14:00:00.000",
        },
        {
            streamer: "Grandtriskel",
            topic: "Minecraft Hardcore",
            start: "2021-09-23T14:00:00.000",
            end: "2021-09-23T16:00:00.000",
        },
        {
            streamer: "Ananasatom",
            topic: "Minecraft Hardcore",
            start: "2021-09-23T16:00:00.000",
            end: "2021-09-23T19:00:00.000",
        },
        {
            streamer: "Kurisuvanedge",
            highlight: true,
            topic: "Stardew Valley",
            start: "2021-09-23T19:00:00.000",
            end: "2021-09-23T22:00:00.000",
        },
        {
            streamer: "Binakleinerals3",
            highlight: true,
            topic: "Gartic Phone",
            start: "2021-09-23T22:00:00.000",
            end: "2021-09-24T01:00:00.000",
        },
    ],
    "2021-09-24": [
        {
            streamer: "Binakleinerals3",
            highlight: true,
            topic: "Gartic Phone",
            start: "2021-09-24T00:00:00.000",
            end: "2021-09-24T01:00:00.000",
        },
        {
            streamer: "Grandtriskel",
            topic: "Black Stories",
            start: "2021-09-24T01:00:00.000",
            end: "2021-09-24T03:00:00.000",
        },
        {
            streamer: "piatralisch",
            topic: "Creepypastas",
            start: "2021-09-24T03:00:00.000",
            end: "2021-09-24T05:00:00.000",
        },
        {
            streamer: "piatralisch",
            topic: "Genshin Bücher lesen",
            start: "2021-09-24T05:00:00.000",
            end: "2021-09-24T06:00:00.000",
        },
        {
            streamer: "Lisanougat",
            topic: "Baba Is You",
            start: "2021-09-24T06:00:00.000",
            end: "2021-09-24T07:00:00.000",
        },
        {
            streamer: "Lisanougat",
            topic: "The End Is Nigh Speedrun",
            start: "2021-09-24T07:00:00.000",
            end: "2021-09-24T08:00:00.000",
        },
        {
            streamer: "Sir_nightmare94",
            topic: "Svils Show",
            start: "2021-09-24T08:00:00.000",
            end: "2021-09-24T10:00:00.000",
        },
        {
            streamer: "Kurisuvanedge",
            topic: "Spiele Shuffle mit Glücksrad",
            start: "2021-09-24T10:00:00.000",
            end: "2021-09-24T14:00:00.000",
        },
        {
            streamer: "Grandtriskel",
            topic: "Sonic Colors: Ultimate",
            start: "2021-09-24T14:00:00.000",
            end: "2021-09-24T18:00:00.000",
        },
        {
            streamer: "Sir_nightmare94",
            highlight: true,
            topic: "PnP",
            start: "2021-09-24T18:00:00.000",
            end: "2021-09-24T21:00:00.000",
        },
        {
            streamer: "Ananasatom",
            highlight: true,
            topic: "MIMICORPS",
            start: "2021-09-24T21:00:00.000",
            end: "2021-09-24T22:00:00.000",
        },
        {
            streamer: "piatralisch",
            highlight: true,
            topic: "Jackbox",
            start: "2021-09-24T22:00:00.000",
            end: "2021-09-25T01:00:00.000",
        },
    ],
    "2021-09-25": [
        {
            streamer: "piatralisch",
            highlight: true,
            topic: "Jackbox",
            start: "2021-09-25T00:00:00.000",
            end: "2021-09-25T01:00:00.000",
        },
        {
            streamer: "Dosenpfirsiche",
            topic: "Stadt-Land-Fluss",
            start: "2021-09-25T01:00:00.000",
            end: "2021-09-25T03:00:00.000",
        },
        {
            streamer: "Lisanougat",
            topic: "Fall Guys",
            start: "2021-09-25T03:00:00.000",
            end: "2021-09-25T04:00:00.000",
        },
        {
            streamer: "Lisanougat",
            topic: "Ben and Ed - Blood Party",
            start: "2021-09-25T04:00:00.000",
            end: "2021-09-25T05:00:00.000",
        },
        {
            streamer: "GumLong",
            topic: "Everhood",
            start: "2021-09-25T05:00:00.000",
            end: "2021-09-25T08:00:00.000",
        },
        {
            streamer: "Sir_nightmare94",
            topic: "Daily Game Routine",
            start: "2021-09-25T08:00:00.000",
            end: "2021-09-25T09:00:00.000",
        },
        {
            streamer: "Sir_nightmare94",
            topic: "PnP Recap",
            start: "2021-09-25T09:00:00.000",
            end: "2021-09-25T10:00:00.000",
        },
        {
            streamer: "Sir_nightmare94",
            topic: "Super Mario World",
            start: "2021-09-25T10:00:00.000",
            end: "2021-09-25T11:00:00.000",
        },
        {
            streamer: "Emtes",
            topic: "Shadow of the Colossus",
            start: "2021-09-25T11:00:00.000",
            end: "2021-09-25T14:00:00.000",
        },
        {
            streamer: "Nislregen",
            highlight: true,
            topic: "Quiz + Finale",
            start: "2021-09-25T14:00:00.000",
            end: "2021-09-25T17:00:00.000",
        },
    ],
};