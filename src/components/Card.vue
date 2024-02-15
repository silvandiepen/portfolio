<template>
    <div :class="bemm()">
        <slot></slot>
    </div>
</template>

<script setup lang="ts">

import { useBemm } from "bemm";
const bemm = useBemm('card');

</script>