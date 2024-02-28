
<template>
    <div :class="bemm()">
        <ul :class="bemm('list')">
            <li :class="bemm('item')" v-for="item in work">
                <WorkCard :work="item" />
            </li>
        </ul>
    </div>
</template>

<script lang="ts" setup>
import { useBemm, } from 'bemm';
import { onMounted } from 'vue';
import { useWork } from '@/composables/useWork';
import WorkCard from './WorkCard.vue';

// import { Project } from '@/types';

const bemm = useBemm('work-list');
const { work, loadWork, 
    // filter 
} = useWork();


onMounted(() => {
    loadWork();
    // console.log(filter.value);

})
//  defineProps({
//     projects: {
//         type: Array as PropType<Project[]>,
//         default: () => []
//     }
// })


// watch(() => projects.value,
//     () => {
//         console.log('changed');
//         console.log(projects.value.length)
//     }, {
//     deep: true
// })
</script>

<style lang="scss">
.work-list {

    &__list {
        padding: var(--spacing) 0;

        display: flex;
        flex-wrap: wrap;
        width: 100%;
        gap: calc(var(--space) * 3);
        align-items: center;
        justify-content: center;
    }

    &__item {
        width: 480px;
        max-width: calc(100% - (var(--spacing) * 2));

        @media screen and (width >=1024px) {
            &:nth-child(2n) {
                transform: translateY(25%);
            }

        }
    }


}
</style>