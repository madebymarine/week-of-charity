<template>
    <div id="app">
        <router-view />
    </div>
</template>

<style lang="scss">

    @import url('https://rsms.me/inter/inter.css');
    @import url('https://fonts.googleapis.com/css2?family=Fredoka+One&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Kalam:wght@300;400;700&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap');

    body {
        overflow-x: hidden;
    }

    .woc--heading {
        position: relative;

        &::before {
            background-image: linear-gradient(-124deg, #ff2400, #e81d1d, #e8b71d, #e3e81d, #1de840, #1ddde8, #2b1de8, #dd00f3, #dd00f3);
            bottom: 0;
            content: "";
            display: block;
            height: 4px;
            left: calc(50% - 2em);
            position: absolute;
            width: 4em;
        }
    }

</style>