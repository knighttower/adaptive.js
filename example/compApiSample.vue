<template>
    <div>
        Composition Api component
        <button @click="count++">You clicked me {{ count }} times.</button>
    </div>
</template>

<script>
import { ref, inject, onMounted } from 'vue';

export default {
    setup() {
        const $Adaptive = inject('Adpative');
        // console.log($Adaptive);
        const count = ref(0);
        return { count };
    },
};
</script>
