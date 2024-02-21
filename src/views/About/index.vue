<template>
    <div :class="blockClasses">
        <Hero :color="colors[0]">
            <h1>Hi, I'm <strong>Sil van Diepen</strong></h1>
            <h4>One of the bigger questions in life; Who is Sil van Diepen? Of course we can't go too much in depth, but here
                is a little summary to have an idea.</h4>
        </Hero>

        <ContentSection :color="'background'">
            <h2>Interests</h2>

            <article>

                <h3>
                    <Icon :name="Icons.CAMERA" />Photography
                </h3>
                <p>I’ve been taking pictures since I got my first camera from my grandma at age 8. Since then, it’s been on
                    and
                    off. I have times I take lots of pictures and times I really don’t do much. But it’s recurring and
                    really
                    love photography. Photography
                </p>
            </article>

            <article>
                <h3>
                    <Icon :name="Icons.IMAGE" /> Illustration
                </h3>
                <p>From the moment I could hold anything to draw with, I’ve been drawing figures and characters.
                    Illustration
                </p>
            </article>

            <article>
                <h3>
                    <Icon :name="Icons.TERMINAL" />Code Projects
                </h3>
                <p>When I have time, I build little projects to make my life or work easier. Or sometimes just to learn new
                    techologies. Projects</p>

            </article>
            <article>
                <h3>
                    <Icon :name="Icons.KITCHEN_UTENSILS" />Food & Cooking
                </h3>
                <p>A man (and his family) has got to eat! Considering we have to make food every day, I made it into a
                    passion.
                    Especially spices and mixing things have my interest. Cooking With Sil</p>
            </article>
            <article>

                <h3>
                    <Icon :name="Icons.FISH" />Animals
                </h3>
                <p>Grew up with many animals at home, from fish, dogs, chicken, rabbits, etc. Always loved animals and being
                    busy with them. One day… I will have my own zoo.</p>
            </article>
        </ContentSection>

        <ContentSection :color="colors[1]">
            <h2>Language Skills</h2>

            <dl>
                <dt>Dutch</dt>
                <dd>Mothertongue</dd>
            </dl>
            <dl>
                <dt>English</dt>
                <dd>Fluent</dd>
            </dl>
            <dl>
                <dt>Spanish</dt>
                <dd>Ok</dd>
            </dl>
            <dl>
                <dt>German</dt>
                <dd>Ok</dd>
            </dl>
        </ContentSection>

        <ContentSection :color="colors[3]">
            <h2 id="work-experience">Work Experience</h2>
            <p>For more details about my functions, check out my <a href="https://sil.mt/about/cv">Curriculum Vitae</a></p>
            <p>An overview of all my current and past jobs;</p>
            <dl>
                <dt>Currently</dt>
                <dd>Freelance Creative Developer</dd>
            </dl>
            <dl>
                <dt>January 2022 - November 2022</dt>
                <dd>Senior Frontend Developer at <a href="https://www.yieldstreet.com">Yieldstreet</a></dd>
            </dl>
            <dl>
                <dt>January 2022 - December 2022</dt>
                <dd>Senior Technical Consultant at <a href="https://www.vuestorefront.io">Vue Storefront</a></dd>
            </dl>
            <dl>
                <dt>September 2020 - December 2021</dt>
                <dd>Senior Frontend Developer at <a href="https://gig.com">Gaming Innovation Group</a></dd>
            </dl>
            <dl>
                <dt>October 2019 - September 2020</dt>
                <dd>Senior Frontend Consultant at <a href="https://www.divotion.com">Divotion</a></dd>
            </dl>
            <dl>
                <dt>March 2019 - September 2020</dt>
                <dd>Senior Frontend Consultant at Yolt</dd>
            </dl>
            <dl>
                <dt>November 2019 - February 2020</dt>
                <dd>Senior Frontend Consultant at <a href="https://www.transavia.com">Transavia</a></dd>
            </dl>
            <dl>
                <dt>November 2013 - September 2019</dt>
                <dd>Senior Frontend Developer at Matise</dd>
            </dl>
            <dl>
                <dt>May 2010 - current</dt>
                <dd>Freelance Web developer and Designer</dd>
            </dl>
            <dl>
                <dt>January 2007 - April 2010</dt>
                <dd>Creative Retoucher at Souverein</dd>
            </dl>
            <dl>
                <dt>January 2006 - April 2010</dt>
                <dd>Organizer at Compact Events</dd>
            </dl>
            <dl>
                <dt>January 2006 - December 2006</dt>
                <dd>Pixel artist and web developer at The
                    Saints</dd>
            </dl>
            <dl>
                <dt>September 2005 - December 2006</dt>
                <dd>Web Developer and Designer at Synetic</dd>
            </dl>
        </ContentSection>
    </div>
</template>

<script lang="ts" setup>
import { Icons } from 'open-icon';
import { useBemm } from 'bemm';
import { computed } from 'vue';

import { getColorSet } from '@/utils';

import ContentSection from '@/components/ContentSection.vue';
import Hero from '@/components/Hero.vue';
import Icon from '@/components/Icon.vue';

const bemm = useBemm('about');



const colors = computed(() => {

    return getColorSet(4);
})

const blockClasses = computed(() => {
    return [
        bemm(),
    ]
})

</script>
