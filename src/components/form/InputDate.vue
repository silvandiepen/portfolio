<template>
    <div :class="bemm()">
        <label :class="bemm('label')" v-if="label">
            {{ label }}
        </label>

        <div :class="bemm('control-container')">
            <input :class="bemm('control')" :placeholder="placeholder" type="date" v-model="value" />
        </div>
    </div>
</template>

<script lang="ts" setup>
import { useBemm } from 'bemm';
const bemm = useBemm('input-date');

defineProps({
    label: {
        type: String,
        default: ""
    },
    placeholder: {
        type: String,
        default: ""
    }
})
const value = defineModel()
</script>

<style lang="scss" src="./style/Form.scss"></style>