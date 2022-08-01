<template>
    <div class="sample">
        <p class="greeting">{{ greeting }}</p>

        <br /><br />
        <button @click="changeText">change to number and show another element</button>
        <br /><br />

        <!-- Example of directive binding with Adaptive -->
        <div v-adaptive="{ addClass: { desktop: 'cinco' } }">Using Directive inside Vue component</div>
        <br /><br />

        <!-- Example of use as a ref element with plugin style -->
        <div ref="six">Using Ref element inside component for Vue Plugin mode and custom media query expression</div>

        <br /><br />
        <!-- Example of a later insertion -->
        <div v-if="show" class="lazy">Using (observer) After load inside component</div>
        <br /><br />
        <button @click="toggle">Show hide Lazy element</button>
        <br /><br />
        <div v-teleport-to="'#hello'">Getting teleport from the component to "static Hello"</div>
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
        changeText() {
            this.greeting = Math.floor(Math.random() * 10);
        },
        toggle() {
            this.show = !this.show;
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
