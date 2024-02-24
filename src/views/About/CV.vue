<template>
    <div :class="blockClasses">
        <Hero :color="getColor()">
            <h1>Curriculeum Vitae</h1>
            <h4>What did Sil do? For which companies does and did he work? That.. you will find here. </h4>
        </Hero>

        <ContentSection :color="getColor()">
            <div class="content">

                <h2>About Sil</h2>
                <p>I’m a dad and loving husband and professionally a self-taught frontend developer. Take pride in my work
                    when it feels nice, looks great and works perfect.</p>
                <p>Born in 1986 in a small village called
                    Limmen the Netherlands, but grew
                    up in Heiloo, the next village. Always
                    had a passion for drawing, computers
                    and technology. From building his own
                    computers to starting a website on
                    Geocities. Moved to Curaçao in 2010 to
                    see and experience living abroad and
                    came back to Holland to work in a more
                    professional environment and be able
                    to work on projects for bigger clients.
                    Decided to move to Malta in 2020 with
                    his little family, where he’s working as a
                    full-time remote frontend developer.</p>
            </div>

        </ContentSection>
        <!-- <ContentSection :color="getColor()">

            <h2 id="work-experience">
                <Icon :name="Icons.BAG2" />Work Experience
            </h2>
            <p>An overview of all my current and past jobs;</p>

        </ContentSection> -->


        <ContentSection :color="getColor()" v-for="(item) in cvData">
            <div class="content">

                <h2><a v-if="item.link" :href="item.link">@{{ item.company }}</a><template v-else>{{ item.company
                }}</template></h2>
                <h6 :class="bemm('date')">
                    <Icon :name="Icons.CLOCK" />
                {{ getFormattedDate(item.date[0]) }} - {{ getFormattedDate(item.date[1])
                    }}
                    </h6>
                <h6 :class="bemm('location')">
                    <Icon :name="Icons.LOCATION_MARKER" />
                    {{ item.location.join(', ') }}
                    

                </h6>

                <h3>{{ item.title }}</h3>
                <p>{{ item.description }}</p>

                <template v-if="item.about">
                    <h5>About {{ item.company }}</h5>
                    <p>{{ item.about }}</p>

                </template>

                <template v-if="item.end">
                    <h5>Why stop?</h5>
                    <p>{{ item.end }}</p>
                </template>

                <template v-if="item.technologies">
                    <h5>Technologies used</h5>
                    <Tags :tags="getTechnologies(item)" />
                </template>

            </div>
        </ContentSection>

        <ContentSection :color="getColor()">
            <div class="content">
                <h2>
                    <Icon :name="Icons.BOOK" />Technologies Used
                </h2>
                <p>All technologies I have worked with in the past and present;</p>
                <!-- <ul>
                    <li v-for="item in Object.values(CVTechnologies).sort((a, b) => a < b ? -1 : a > b ? 1 : 0)">{{ item
                    }}
                    </li>
                </ul> -->

                <template v-for="technology in technologies">

                    <h4>{{ technology.name }}</h4>
                    <ul :class="bemm('tech-list')" v-if="technology.technologies">
                        <li :class="[bemm('tech-item'), bemm('tech-item', activeTechnology == tech.name ? 'active' : 'inactive')]"
                            @click="activeTechnology = tech.name" v-for="tech in technology.technologies">
                            <dl>
                                <dt>{{ tech.name }}</dt>
                                <dd>{{ tech.description }}</dd>
                            </dl>

                        </li>
                    </ul>
                </template>

            </div>
        </ContentSection>

    </div>
</template>

<script lang="ts" setup>
import { useBemm } from 'bemm';
import { computed, ref } from 'vue';

import { format } from "@sil/format";
import { Icons } from 'open-icon';

import Icon from "@/components/Icon.vue";
import ContentSection from '@/components/ContentSection.vue';
import Hero from '@/components/Hero.vue';
import { getColorSet } from '@/utils';

import Tags from '@/components/Tags.vue';

import { cv } from '@/data/cv';
import { CVItem, CVTechnologies, technologies } from '@/data/cv/types';
import { Tag } from '@/types';


const colors = computed(() => {

    return getColorSet(cvData.value.length + 4);
})

const activeTechnology = ref<string | null>(null);


const colorCount = ref(0);
const getColor = () => {
    colorCount.value++;
    return colors.value[colorCount.value];

}


const cvData = computed(() => {
    return cv;
})

const getFormattedDate = (date: Date) => {

    // return date;

    return format(date, { template: 'MM YY' });
}


const bemm = useBemm('cv');


const blockClasses = computed(() => {
    return [
        bemm(),
    ]
})

const getTechnologies = (item: CVItem): Tag[] => item.technologies ? item.technologies.map((t: CVTechnologies) => ({ label: t, occurance: 2 })) : [];

</script>


<style lang="scss">
.cv {
    &__tech-list {
        display: flex;
        flex-wrap: wrap;
        gap: var(--space);
    }

    &__tech-item {
        background-color: color-mix(in oklab, var(--block-bg), white 50%);
        padding: var(--space);

        width: 100%;
        flex-shrink: 0;
        height: fit-content;
        border-radius: calc(var(--border-radius) / 2);


        transition: all .3s ease-in-out;
      
        dl {
            display: flex;
            flex-direction: row;
            align-items: center;
            gap: var(--space);
            justify-content: space-between;
            dt {
                font-size: 1em;
            }

            dd {
                font-size: .75em;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                width: 75%;
            }
        }  
        &--active{
            background-color: color-mix(in oklab, var(--block-bg), white 75%);
            dl{
                dd{
                    white-space: wrap;
                    overflow: visible;

                }
            }
        }
    }
}</style>