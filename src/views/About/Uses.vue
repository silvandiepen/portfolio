<template>
    <div :class="blockClasses">
        <Hero :color="colors[0]">
            <h1><strong>What I use</strong> on a daily basis</h1>
            <h4>Inspired by many other developers, who have been on their term been inspired by Wes Bos. Here’s my “Uses”.
                What do I use to do whatever I do work wise?</h4>
        </Hero>
        <ContentSection :colors="colors[1]">

            <h2>
                <Icon :name="Icons.LAPTOP" />Hardware
            </h2>

            <dl>
                <dt>
                    <Icon :name="Icons.LAPTOP" />Workstation
                </dt>
                <dd>
                    14" Apple Macbook Pro M3 Pro<br />
                    2x LG 4k 27" Display<br />
                    Magic Keyboard & Touchpad (spacegray)<br />
                    Wacom Intuos 3
                </dd>

                <dt>
                    <Icon :name="Icons.MOBILE" /> Devices
                </dt>
                <dd>
                    iPhone 14 Pro<br />
                    iPad Pro 12"
                </dd>
            </dl>

        </ContentSection>
        <ContentSection :colors="colors[2]">

            <h2>
                <Icon :name="Icons.TERMINAL" />IDE &amp; Terminal
            </h2>

            <dl>
                <dt>IDE</dt>
                <dd>
                    VS Code with my own theme and a load of plugins.
                </dd>

                <dt>Terminal</dt>
                <dd>
                    Besides that, I use iTerm2 with ZSH on a regular basis, never got used to using the internal terminal in
                    VSCode.
                </dd>
            </dl>

        </ContentSection>

        <ContentSection :colors="colors[3]">

            <h2>
                <Icon :name="Icons.WORLD" />Online
            </h2>

            <dl>
                <dt> Online services</dt>
                <dd>Github, Codepen, Netlify</dd>

                <dt>Communication</dt>
                <dd>iMessage, Signal, Twitter</dd>
            </dl>


        </ContentSection>

        <ContentSection :colors="colors[4]">

            <h2>
                <Icon :name="Icons.APPS" />Apps
            </h2>

            <dl>
                <dt>Browser</dt>
                <dd>Chrome (primary), Safari (secondary), Firefox (testing)</dd>

                <dt>Communication</dt>
                <dd>Apple Mail, iMessage, Slack, Google Meet</dd>

                <dt>Creative</dt>
                <dd>Adobe Photoshop, Illustrator & Fresco</dd>
            </dl>


        </ContentSection>

        <ContentSection :colors="colors[5]">

            <h2>
                <!-- <Icon :name="Icons.COFFEE" /> -->
                Coffee</h2>

            <dl>
                <dt>Machine</dt>
                <dd>ECM Technika V Profi</dd>

                <dt>Grinder</dt>
                <dd>Fiorenzato F4 EVO</dd>
            </dl>
</ContentSection>

    </div>
</template>

<script lang="ts" setup>
import { useBemm } from 'bemm';
import { computed } from 'vue';
import { Icons } from 'open-icon';

import { getColorSet } from '@/utils';

import ContentSection from '@/components/ContentSection.vue';
import Hero from '@/components/Hero.vue';
import Icon from '@/components/Icon.vue';

const bemm = useBemm('uses');


const colors = computed(() => {

    return getColorSet(7);
})

const blockClasses = computed(() => {
    return [
        bemm(),
    ]
})

</script>
