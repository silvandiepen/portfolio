<template>
  <div :class="blockClasses">
    <Hero :color="colors[0]">
      <h1>Curri-<br />culeum Vitae</h1>
      <h4>
        What did Sil do? For which companies does and did he work? That.. you
        will find here.
      </h4>
    </Hero>

    <ContentSection :color="colors[1]">
      <div class="content">
        <h2>About Sil</h2>
        <p>
          I’m a dad and loving husband and professionally a self-taught frontend
          developer. Take pride in my work when it feels nice, looks great and
          works perfect.
        </p>
        <p>
          Born in 1986 in a small village called Limmen the Netherlands, but
          grew up in Heiloo, the next village. Always had a passion for drawing,
          computers and technology. From building his own computers to starting
          a website on Geocities. Moved to Curaçao in 2010 to see and experience
          living abroad and came back to Holland to work in a more professional
          environment and be able to work on projects for bigger clients.
          Decided to move to Malta in 2020 with his little family, where he’s
          working as a full-time remote frontend developer.
        </p>
      </div>
    </ContentSection>
    <ContentSection :color="colors[2]">
      <div class="content">
        <h2><Icon :name="Icons.BAG2" />Areas of Expertise</h2>
        <p>An overview of all my current and past jobs;</p>

        <h3>
          Design Systems<br />
          and Component Excellence
        </h3>
        <p>
          Exceptional proficiency in creating and maintaining design systems and
          component libraries to ensure a unified and visually compelling user
          interface across diverse applications.
        </p>

        <h3>
          Masterful Styling<br />
          and UI Development
        </h3>
        <p>
          Outstanding UI-focused front-end development skills, excelling in
          translating design concepts into pixel-perfect, visually stunning
          interfaces with meticulous attention to styling details.
        </p>

        <h3>
          Micro Animations<br />
          & Enhanced Interaction
        </h3>
        <p>
          Advanced expertise in implementing micro animations to elevate user
          engagement, employing nuanced visual elements to enhance overall
          interactivity and user delight.
        </p>

        <h3>
          Responsive<br />
          & Adaptive Design Mastery
        </h3>
        <p>
          Extensive experience crafting responsive designs that seamlessly adapt
          to various devices, ensuring an exceptional user experience across
          desktop and mobile plat- forms.
        </p>

        <h3>User-Centric Design Principles</h3>
        <p>
          Applied mastery of user-centric design principles to prioritize
          usability, accessibility, and overall user satisfaction, seamlessly
          integrating user feedback and testing meth- odologies.
        </p>

        <h3>
          Collaborative Design<br />
          & Development Leadership
        </h3>
        <p>
          Leadership in collaborative efforts with design teams, backend
          developers, and stakeholders, ensuring seamless integration of design
          components and functional features.
        </p>

        <h3>
          Continuous Learning<br />
          & Innovative Solutions
        </h3>
        <p>
          Proven dedication to staying at the forefront of design trends and
          emerging frontend technologies, consistently integrating innovative
          solutions to drive continuous im- provement in development practices.
        </p>
      </div>
    </ContentSection>

    <ContentSection :color="colors[3]">
      <div class="content">
        <h2><Icon :name="Icons.BOOK" />Technologies</h2>
        <p>All technologies I have worked with in the past and present;</p>

        <TechnologyList :items="technologies"></TechnologyList>
      </div>
    </ContentSection>

    <ContentSection
      :color="colors[4 + index]"
      v-for="(item, index) in cvData"
    >
      <div class="content">
        <h2>
          <a v-if="item.link" :href="item.link">@{{ item.company }}</a
          ><template v-else>{{ item.company }}</template>
        </h2>
        <h6 :class="bemm('date')">
          <Icon :name="Icons.CLOCK" />
          {{ getFormattedDate(item.date[0]) }} -
          {{ getFormattedDate(item.date[1]) }}
        </h6>
        <h6 :class="bemm('location')">
          <Icon :name="Icons.LOCATION_MARKER" />
          {{ item.location.join(", ") }}
        </h6>

        <h3>{{ item.title }}</h3>
        <div class="p" v-html="renderMd(item.description)"></div>

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
  </div>
</template>

<script lang="ts" setup>
import { useBemm } from "bemm";
import { computed, onMounted, ref } from "vue";

import { format } from "@sil/format";
import { Icons } from "open-icon";

import Icon from "@/components/Icon.vue";
import ContentSection from "@/components/ContentSection.vue";
import Hero from "@/components/Hero.vue";
import { eventBus, getColorSet } from "@/utils";

import Tags from "@/components/Tags.vue";

import { cv as cvData } from "@/data/cv";
import { CVItem, CVTechnologies, technologies } from "@/data/cv/types";
import { Tag } from "@/types";
import TechnologyList from "@/components/Collection/TechnologyList.vue";
import { renderMd } from "@/utils/markdown";

const bemm = useBemm("cv");

const colors = ref(getColorSet(cvData.length + 4));

onMounted(() => {
  eventBus.on("change-colors", () => {
    colors.value = getColorSet(cvData.length + 4);
  });
});


const getFormattedDate = (date: Date) => format(date, { template: "MM YY" });

const blockClasses = computed(() => {
  return [bemm()];
});

const getTechnologies = (item: CVItem): Tag[] =>
  item.technologies
    ? item.technologies.map((t: CVTechnologies) => ({ label: t, occurance: 2 }))
    : [];
</script>

<style lang="scss">
.cv {
}
</style>
