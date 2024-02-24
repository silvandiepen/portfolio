<template>
    <div :class="blockClasses">
        <Hero :color="colors[0]">
            <h1>Hi, I'm <strong>Sil van Diepen</strong></h1>
            <h4>One of the bigger questions in life; Who is Sil van Diepen? Of course we can't go too much in depth, but
                here
                is a little summary to have an idea.</h4>
            <ButtonGroup>
                <Button :icon="Icons.ARROW_DOWN" :size="ButtonSize.XLARGE" :type="ButtonType.GHOST"
                    href="#interests">Personal</Button>
                <Button :icon="Icons.LAPTOP" :size="ButtonSize.XLARGE" :type="ButtonType.GHOST"
                    :to="`/about/uses`">Uses</Button>
                <Button :icon="Icons.DOCUMENT" :size="ButtonSize.XLARGE" :type="ButtonType.GHOST"
                    :to="`/about/cv`">CV</Button>
            </ButtonGroup>
        </Hero>

        <ContentSection :color="'background'" id="interests">
            <h2>
                <Icon :name="Icons.HEART" />Interests
            </h2>

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
            <h2>
                <Icon :name="Icons.LANGUAGE" />Language Skills
            </h2>

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

        <ContentSection>
            <div class="content">
                <h2>
                    <Icon :name="Icons.WORLD" />Countries visited
                </h2>

                <ol>
                    <li>Armenia</li>
                    <li>Austria</li>
                    <li>Belgium</li>
                    <li>Canada</li>
                    <li>Curaçao</li>
                    <li>Cyprus</li>
                    <li>Czech</li>
                    <li>France</li>
                    <li>Georgia</li>
                    <li>Greece</li>
                    <li>Italy</li>
                    <li>Luxemburg</li>
                    <li>Malta</li>
                    <li>Nagorno Karabakh</li>
                    <li>Netherlands</li>
                    <li>Panama</li>
                    <li>Portugal</li>
                    <li>Russia</li>
                    <li>Spain</li>
                    <li>Swiss</li>
                    <li>Ukraine</li>
                </ol>
            </div>


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

import Button from '@/components/Button.vue';
import { ButtonSize, ButtonType } from '@/components/Button.model';
import ButtonGroup from '@/components/ButtonGroup.vue';

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
