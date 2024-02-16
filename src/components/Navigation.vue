<template>
    <nav :class="bemm()">
      <Button  type="ghost" :icon="Icons.ARROW_LEFT" @click="goHome()">Back</Button>
    </nav>
</template>
<script setup lang="ts">
import { useBemm } from "bemm";
import Button from "./Button.vue";
import { Icons } from "open-icon";
import {useRouter} from 'vue-router';
import {RouteName} from '@/router';

const router = useRouter();
const bemm = useBemm('nav');

const goHome = ()=>{

    router.push({name: RouteName.HOME});
    console.log('hoiii')
}
</script>

<style lang="scss">

.nav{
    position: fixed;
    padding: 4vw 8vw;
}
</style>