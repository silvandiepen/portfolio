<template>
    <div :class="bemm()" :style="`--rotation: ${rotation}deg; --scrolled: ${scrolled}px`">
        <div class="ring" ref="ring">
            <svg width="100%" height="100%" viewBox="0 0 200 200" preserveAspectRatio="xMidYMid meet"
                xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <path id="textPath" d="M100 100 m -80, 0 a 80,80 0 0,1 160,0 a 80,80 0 0,1 -160,0" />
                </defs>
                <circle cx="100" cy="100" r="80" fill="none" />
                <text>
                    <textPath href="#textPath" startOffset="0">
                        Dad, Husband, Illustrator, Developer, Designer, Photographer,
                    </textPath>
                </text>
            </svg>
        </div>
        <!-- <div :class="bemm('hire-me')">
            MAIL<BR /> ME
        </div> -->
        <div :class="bemm('container')">
            <h1>Hi, I'm <span>Sil van<br /> Diepen</span></h1>
            <h4>I’m a Dad, Husband, Illustrator, Developer, Designer, Photographer and love to create good looking and
                working things.
            </h4>
        </div>
    </div>
</template>


<script lang="ts" setup>
import { ref, onMounted } from "vue";
import { useBemm } from 'bemm';
const bemm = useBemm('intro');


const ring = ref(null);
const rotation = ref(0);
const scrolled = ref(0);

const handleScroll = () => {
    if (!ring.value) return;
    rotation.value = window.scrollY / 10;
    scrolled.value = window.scrollY;
}

onMounted(() => {
    window.addEventListener('scroll', handleScroll);
})




</script>

<style lang="scss">
.intro {
    overflow: hidden;
    position: relative;
    display: flex;
    flex-direction: column;
    gap: var(--space);
    text-align: left;

    // background-color: var(--background);
    // background-color: var(--tertiary);
    // color: var(--tertiary-text);

    background-color: var(--background);
    color: var(--background);
    justify-content: flex-end;


    min-height: 100vh;

    // @media screen and (orientation:portrait) {
    //     aspect-ratio: 3/2;
    // }

    // @media screen and (width <=800px) {
    //     aspect-ratio: 1/1;
    // }


    &::before {
        content: "";
        background-color: var(--foreground);
        clip-path: polygon(100% 0, 0 0, 0.00% 95.00%, 2.00% 94.94%, 4.00% 94.77%, 6.00% 94.48%, 8.00% 94.10%, 10.00% 93.63%, 12.00% 93.09%, 14.00% 92.50%, 16.00% 91.88%, 18.00% 91.25%, 20.00% 90.64%, 22.00% 90.06%, 24.00% 89.54%, 26.00% 89.10%, 28.00% 88.75%, 30.00% 88.50%, 32.00% 88.36%, 34.00% 88.34%, 36.00% 88.44%, 38.00% 88.65%, 40.00% 88.97%, 42.00% 89.38%, 44.00% 89.88%, 46.00% 90.44%, 48.00% 91.04%, 50.00% 91.67%, 52.00% 92.29%, 54.00% 92.89%, 56.00% 93.45%, 58.00% 93.95%, 60.00% 94.36%, 62.00% 94.68%, 64.00% 94.90%, 66.00% 94.99%, 68.00% 94.97%, 70.00% 94.84%, 72.00% 94.59%, 74.00% 94.24%, 76.00% 93.79%, 78.00% 93.27%, 80.00% 92.70%, 82.00% 92.08%, 84.00% 91.46%, 86.00% 90.84%, 88.00% 90.25%, 90.00% 89.71%, 92.00% 89.24%, 94.00% 88.85%, 96.00% 88.57%, 98.00% 88.39%, 100.00% 88.33%);

        height: 100%;
        width: 150%;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 1;

        --divide: 2;

        @media screen and (width <=800px) {
            --divide: 4;
        }

        animation: comeDown 1s ease-in-out forwards;

        @keyframes comeDown {
            0% {
                transform: translateY(-100%);
            }

            100% {
                transform: translateY(0);
            }
        }

        transform: translateY(calc(var(--scrolled) / 5 * -1)) translateX(calc((var(--scrolled) / var(--divide)) * -1));
    }


    &__container {
        position: relative;
        z-index: 2;
        padding: var(--spacing);
        padding-bottom: calc(var(--spacing) * 3);
    }

    h1 {
        font-size: clamp(2em, 16vw, 10em);
        // max-width: 75%;
        line-height: .9;
        font-weight: 400;
        letter-spacing: -.025em;

        // transform: rotate(-2deg) translateX(-.25em);
        transform-origin: 0 100%;
        color: var(--background);
        // background: -webkit-linear-gradient(var(--background), var(--secondary));
        // -webkit-background-clip: text;
        // -webkit-text-fill-color: transparent;

        clip-path: inset(0 0 100% 0);
        animation: loadTitle .5s 1s ease-in-out forwards;

        @keyframes loadTitle {
            0% {
                clip-path: inset(0 0 100% 0);
            }

            100% {
                clip-path: inset(0 0 0 0);
            }
        }

        span {
            text-transform: uppercase;
            display: block;
            font-weight: 900;
            // color: var(--primary);
        }
    }

    h4 {
        transform-origin: 0 0;
        // transform: rotate(-2deg);
        font-weight: normal;
        font-size: 1.5em;
        line-height: 1.25;
        margin-top: 1.5em;
        max-width: 75%;
        clip-path: inset(100% 0 0 0);
        animation: loadSubTitle .3s 1.5s ease-in-out forwards;

        @keyframes loadSubTitle {
            0% {
                transform: translateX(1em);
                clip-path: inset(0 100% 0 0);
            }

            100% {
                transform: translateX(0em);
                clip-path: inset(0 0 0 0);
            }
        }

        @media screen and (width <=800px) {
            max-width: 100%;
        }
    }

    &__hire-me {
        position: absolute;
        bottom: 0;
        right: var(--spacing);
        background-color: var(--primary);
        border-radius: 50%;
        aspect-ratio: 1/1;
        z-index: 2;
        display: flex;
        align-items: center;
        justify-content: center;
        white-space: wrap;
        font-size: 1.5em;
        font-weight: bold;
        width: 5em;
        text-align: center;
        line-height: 1;
        transform: rotate(-10deg);
        color: var(--primary-text);
        text-shadow: 4px 4px 0px rgba(var(--background-rgb), .25);
    }
}
</style>