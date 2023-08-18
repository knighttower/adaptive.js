(This docs still under construction, see "example" and "test" folders for extensive examples of usage)

**Installation:**  
NPM: https://www.npmjs.com/package/@knighttower/adaptive   

GIT: https://github.com/knighttower/adaptive.js   

DOCS: https://knighttower.github.io/adaptive.js/  


```
npm install adaptive.js
```

**Usage:**

```
import Adaptive from 'adaptive.js'
```

# Adaptive.js: Enhancing Layout Adaptability Beyond CSS, Navigating the Complexities of Modern Web Development

So what's the story or even why today?
In many projects, even when trying to stick to the philosophy of using mostly CSS utility classes and media queries to create responsive and adaptive layouts, CSS sometimes falls short in some areas, and that's why some JS is needed to help along those bumps.

But wait! what are those limitations you speak of! kind sir...

The short version.. is edge cases, class management and hierarchy, operations that are not currently part of CSS (teleporting, adding inline style on the fly, adding/removing classes, execute JS code at specific breakpoinst, etc)

For instance, moving elements from one location to another is not possible with CSS (only if the element belongs directly to the same parent and is a flex item (flex order)). In cases like that, where an element has to move that far, that's when Adaptive.js has a "teleport" feature that will move any element to specific targets at the specified Media query breakdown. Thus helping the layout not just being responsive but also adapting to the desired necessities.
But that's not all Adaptive.js can help with, it can dynamically add and remove classes at different Media Breakdowns, or even to add 'inline' styles so that small tweaks are possible without adding endless classes that have only a single-one-time use.

Furthermore, Adaptive.js can add specific JS functions that will execute at a very specific screen size or media query, that is extremely helpful if you have JS functionality that should only execute at a very specific size or device!

Adaptive.js is not a CSS media query replacement nor should be the primary handler of responsive or adaptive applications (CSS should do most of it). On the contrary, it aims to enhance the ability to make layouts "adapt" better to different devices depending on preset or custom media queries via plain JavaScript or integrating with any of the cool frameworks out there (Vue, React, etc) and thus overcomimg the limitations of pure CSS or targeting complex bahaviors while avoiding WET and bloted code so that no JavaScript hacks or media functions need to be written all over, just using Adaptive will do all the magic.

(If you need some reference to understand responsive and adaptive head over here: https://www.geeksforgeeks.org/difference-between-responsive-design-and-adaptive-design/)

![adaptive ex1](https://github.com/knighttower/adaptive.js/assets/649334/a15b62bd-25e3-48e2-9ea5-0804d1da17c8)


<br/>

![adaptive ex2](https://github.com/knighttower/adaptive.js/assets/649334/9bcf8ae5-1ddd-46e4-a48f-09cc894d7e53)

<br/>
<br/>
**Bridging the Gaps:**

Adaptive.js isn't merely a response to the shortcomings of CSS; it's a comprehensive solution to the challenges presented by many CSS frameworks. It abstracts the complexity, allowing developers to focus on creating exceptional user experiences rather than navigating through conflicting classes, puzzling rules or messy solutions.

**Teleportation Without Boundaries:**

With the "teleport" feature of Adaptive.js, moving elements across your design is no longer a chore confined to heavy frameworks like Vue or React. This feature enables effortless repositioning, eliminating the dependency on bulkier solutions.

**Precision Functionality with Breakpoints:**

Adaptive.js takes adaptability to a new level. Not only can you design with precision, but you can also dictate functionality based on screen size. This means executing specific JavaScript functions at exact CSS breakpoints. The design and functionality are now in sync, responding dynamically to user environments.

**Dynamic Class and Attribute Management:**

Adding or removing classes and attributes can often be a cumbersome task. With Adaptive.js, this process is streamlined. Whether it's tweaking a design element or enhancing functionality, Adaptive.js ensures it's done with ease and precision.

**Tailored Designs with Custom CSS Queries:**

While Adaptive.js has a preset breakdown for media queries, it also offers an API to craft custom CSS queries. This means designs that are not just responsive but truly bespoke, tailored to the unique requirements of each project.

**Efficient, Clean, and Adaptable Code:**

Redundant code is a developer's bane. Adaptive.js champions the DRY (Don't Repeat Yourself) principle, ensuring that every line of code serves a purpose, reducing clutter, and boosting efficiency.

**Seamless Integration for a Cohesive Development Experience:**

While Adaptive.js shines as a standalone tool, its real strength lies in its ability to play well with others. Its seamless integration with Vue and React ensures that you get the best of all worlds, enhancing and complementing without any friction.
<br/>
<br/>

## Features

### -- It can be used directly with the markup or as part of the JS code

#### Directly in markup

```html
<!-- Example of only adding styles per breakdown -->
<div class="inline-styling" data-adaptive="{'addStyle':{'tablet':'color: blue;','desktop':'color: green;'}}">
    Inline styling per device
</div>

<!-- Example of using custom queries -->
<div
    id="customQueries"
    data-adaptive="addClass[(min-width: 900px) and (max-width: 1599px)](custom-class-at-custom-breakdown)"
>
    Custom Expressions via string like Directive
</div>

<!-- Teleporting -->
<div data-teleport-to="{'after':'#customQueries'}">
    <span style="background:#067e74; color: white;"
        >Static element that will teleport "customQueries" with data attribute in hybrid mode</span
    >
</div>
```

<br/>
#### Along with JS code

```html
<script>
    // Target specific elements
    $adaptive.registerElement('#hello', {
        addClass: {
            mobile: 'a-class-added-only-for-mobiles',
        },
    });

    // OR
    // Run functions at specific layouts or special js needs
    $adaptive.if('tablet', function() {
        // code to execute here
    });

    // ...See more use cases in the example files!
</script>
```

<br/>
### -- It works as Stand alone or hybrid Stand Alonge + (Vue or React) or directly as a plugin for Vue or React

Adaptive.js works as stand-alone out-of-the-box, but it also works along side integrated with Vue (hybrid mode) as it offers direct integration with it (as a plugin and a directive) or with React (see the examples folder in the source code). This approach will help to cover applications that have both dynamic and static markup ("static" = not accessible either by Vue/React or its components) but it still needs to play nice with the responsive/adaptive style for any screen size.

For frameworks like React, Adaptive would work with them in a slightly different manner and not as tightly coupled as it could be with Vue.

#### - Example as Stand Alone:

<br/>

```html
<html>
    <head> </head>
    <body>
        <section id="app">
            <!-- Example of only adding styles per breakdown -->
            <div
                class="inline-styling"
                data-adaptive="{'addStyle':{'tablet':'color: blue;','desktop':'color: green;'}}"
            >
                Inline styling per device
            </div>

            <br />
            <!-- Teleporting -->
            <div data-teleport-to="{'after':'#customQueries'}">
                <span style="background:#067e74; color: white;"
                    >Static element that will teleport "customQueries" with data attribute in hybrid mode</span
                >
            </div>
        </section>

        <!-- JS -->
        <script src="../../dist/Adaptive.js"></script>
        <script>
            $adaptive.init();
        </script>
    </body>
</html>
```

Example as hybrid mode:

```js
// In App.js
const { createApp } = Vue;
import Adaptive from '../src/Adaptive.js';

const App = createApp({});

// Optional: Add custom media query (min px, max px) settings (min max)
Adaptive.addQueryMinMax('myCustomMediaQueryName', 900, 1400);
// Optional: Add a custom media query expression (it accepts any valid media query)
Adaptive.addQueryExpression('myCustomMediaQueryName2', '(min-width: 900px)');
// Instanciate right after the app and before the components
Adaptive.useVue(App);
// Do components and other stuff right after
App.component('hello', hello);
// Finally mount the app
App.mount('#app');

// -----------------------------------
// In Component XX
// <!-- Example of directive binding with Adaptive directly in the element  -->
<div v-adaptive="{ addClass: { desktop: 'adds-this-class-xxxx' } }">
    Using Directive inside Vue component
</div>
<div v-teleport-to="'#hello'">Getting teleported (teleport) from the component to "static Hello"</div>

// Or in code
<script>
.... mounted() {
	this.Adaptive.if('tablet', function() {
            // code
	});
	// or
	this.Adaptive.if('tablet', this.nameOfMethod);
	// ...See more use cases in the example files!
}
</script>
```

<br/>
<br/>

### -- Teleport

Teleports an element temporarily or permanently [before,after,to] to a given target. Important because the order, position and hierarchy can be adapt better to the desired layout or device.

| prop       | use                                                                  | description                                                                                                                                                      |
| ---------- | -------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **before** | teleport.mobile{before:target} --or-- teleport.mobile.before(target) | Teleports the element before the position of the target element (No merging. Good for cases where both should not inherit nor interfere with each other)         |
| **after**  | teleport.mobile{after:target} --or-- teleport.mobile.after(target)   | Teleports the element after the position of the target element (No merging. Good for cases where both should not inherit nor interfere with each other)          |
| **to**     | teleport.mobile{to:target} --or-- teleport.mobile.to(target)         | Teleports and appends the element to the target element (important if the element needs to inherit properties from the parent (target) element or be part of it) |

--

Consider the following graphic:

![Screenshot_32](https://user-images.githubusercontent.com/649334/185774621-257a9b0f-c68e-4c38-984d-9cfea40ebb71.png)

When using with Vue, there is no need to wrap it into custom tags (like Vue does), it uses the directive style v-teleport-to

<br/>

### -- Add/Remove Classes

Too many classes or rule-sets that override other rule-sets can be complex or hard. So rather than creating single use classes, this could be done like this example:

-   Need to change the class only at mobiles and desktop, others should be the base class:

-   `<div class="bg-warning" data-adaptive="addClass.mobile|desktop(bg-info,w-100,p-5); removeClass.mobile|desktop('bg-warning')>...</div>`

-   The above will result like:

-   Mobile and desktop devices:

-   `<div class="bg-info,w-100,p-5"...>...</div>`

-   Other devices

-   `<div class="bg-warning"...>...</div>`

<br/>
<br/>

### -- Add/Remove Inline style

One off cases where it needs tweaks per breakdown. For instance:

-   On mobile devices the element needs 2px left margin
-   `<div ... data-adaptive="addStyle.mobile(margin-left:2px;)>...</div>`
-   The above will result in mobiles like:
-   -   `<div style="margin-left:2px;"...>...</div>`

<br/>

### -- Execute js functions at breakdows

  <br/>

```js


// Stand alone or React
$adaptive.if('tablet', function () {
    // code
});

// OR
$adaptive.if('tablet', function () {
    // code
}).else(() => { });

// OR when it needs to execute only once
$adaptive.if('tablet', function () {
    // code
}).onlyOnce();

// OR
// For Vue
this.Adaptive.if('tablet', [this, 'ThisCustomMethod']);
// It will call a method "ThisCustomMethod"
data.tablet(reactive | function)


//OR
//Vue
this.Adaptive.if('tablet', function () {
    // code...
});

//OR
//Vue
this.Adaptive.if('mobile', function () {
    // code..
}).else(function () {
    //code..
});

// OR
//Vue callback
this.Adaptive.if('tablet', this.changeText);

```

<br/>

### -- Add custom queries

<br/>

```js
//Optional | Add custom media query (min px, max px) settings (min max)
Adaptive.addQueryMinMax('kitty', 900, 1400);

// Optional | Add a custom media query expression (it accepts any valid media query)
Adaptive.addQueryExpression('doggy', '(min-width: 900px)');
```

or directly in the element

```html
<!-- Example of using custom queries -->
<div
    id="customQueries"
    data-adaptive="addClass[(min-width: 900px) and (max-width: 1599px)](custom-class-at-custom-breakdown)"
>
    Custom Expressions via string like Directive
</div>
```

### --Out of the box present breakdowns

```js
screens = {
    '320': [1, 379],
    '480': [380, 519],
    '520': [520, 599] /* up to : mobiles */,
    '600': [600, 699] /* up to : mid-size-tables */,
    '700': [700, 799] /* up to : tablets / ipad */,
    '800': [800, 919] /* transition in between tablets and desktop */,
    '920': [920, 999] /* from here on for desktops */,
    '1000': [1000, 1199],
    '1200': [1200, 1439],
    '1440': [1440, 1599],
    '1600': [1600, 1700],
};

/**
 * break the 3 major device types
 */
devices = {
    mobile: [1, 599] /* Actual phones */,
    tablet: [600, 799] /* tablets in portrait or below */,
    'odd-device': [800, 1023] /* small Laptops and Ipads in landscape */,
    desktop: [1024, 1440] /* Most common resolutions below 1920 */,
};

/**
 * other non standard
 */
broadMediaQueries = {
    'non-desktop': [100, 1024],
    fullscreen: [1441, 6000] /* Large monitos and fullscreen in 1920 res */,
};
```

<br/>

### -- Easy sintax

-   Dot notation

```html
<!-- Teleporting only at mobile and desktop, all others will be set back to original position -->
<div data-adaptive="teleport.desktop|mobile.before(#hello)">
    <span style="background:#1f2252; color: white;"
        >Static element that will teleport at "desktop or mobile" right above "static hello"</span
    >
</div>
```

-   Object like

```html
<div
    data-adaptive="{'teleport':{
	'tablet': {
	'to':'.lazy'
}
}}"
>
    <span>Static element that will teleport at "tablet" size to a Vue driven element when visible</span>
</div>
```

-   Array like

-   Compound breakdowns

```html
<div data-teleport-to="[after,'#hello']">
    <span style="background:#083d39; color: white;"
        >2 Static element that will teleport "hello" with data attribute using an array like string</span
    >
</div>
```

## -- All Adaptive.js Classes can be used as stand-alone

-   **Adaptive**: Main Adaptive.js
-   **Observer**: Easy register or unregister callback functions to be executed when any document node changes. (can be used stand alone or along with Adaptive.js)
-
-   **Teleport**: teleport elements to other locations (can be used stand alone or along with Adaptive.js)
-   **ElementHelper**: Element selector with some utility functions and Xpath support. (can be used stand alone or along with Adaptive.js)

<br/>

---

<br/>

## Description

<br/>

Inspiration used to build this:
<br/>
https://wicky.nillia.ms/enquire.js/
<br/>
https://github.com/CyberAP/vue-component-media-queries
<br/>
https://developer.mozilla.org/en-US/docs/Web/API/Window/matchMedia
<br/>
https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver
<br/>
https://vuejs.org/guide/built-ins/teleport.html
<br/>

(This docs still under construction)
