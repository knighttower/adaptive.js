<template>
    <div v-teleport-to="directive">
        <slot></slot>
    </div>
</template>
<script>
import { onMounted, inject } from 'vue';
/**
 * Adaptive Teleport
 * @module
 * @example <teleport-to target="" position=""></teleport-to>
 * @property {String|Object} target
 * @property {String} target
 */
export default {
    name: 'TeleportTo',
    inheritAttrs: false,
    props: {
        target: {
            type: [String, Object],
            require: true,
        },
        position: {
            type: String,
            default: 'to',
            require: false,
        },
    },
    setup(props) {
        const directive = `${props.position}(${props.target})`;
        return {
            directive,
        };
    },
};
</script>
