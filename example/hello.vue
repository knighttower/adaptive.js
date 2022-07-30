<template>
    <div class="sample">
        <!-- Example of a later insertion -->
        <div v-if="show" class="lazy">Using (observer) After load inside component</div>
        <br /><br />
        <p class="greeting">{{ greeting }}</p>

        <br /><br />
        <button @click="clickFunction">change to number and show another element</button>
        <br /><br />

        <!-- Example of directive binding with Adaptive -->
        <div v-adaptive="{ addClass: { desktop: 'cinco' } }">Using Directive inside Vue component</div>
        <br /><br />

        <!-- Example of use as a ref element with plugin style -->
        <div ref="six">Using Ref element inside component for Vue Plugin mode and custom media query expression</div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            greeting: 'Example Vue component Hello World!',
            show: false,
        };
    },
    mounted: function() {
        // Example using the ref and custom registered media query (see the app.js)
        this.$Adaptive.registerElement(this.$refs.six, { addClass: { dog: 'seven' } });
    },
    methods: {
        clickFunction() {
            this.show = true;
            this.greeting = Math.floor(Math.random() * 10);
        },
    },
};
</script>

<style>
.greeting {
    color: red;
    font-weight: bold;
}
</style>
