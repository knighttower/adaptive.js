
  

(This docs still under construction, see "example" and "test" folders for extensive examples of usage)

  

# Adaptive.js

  

Adaptive.js is not a CSS media query replacement nor should be the primary handler of responsive or adaptive applications (CSS should do most of it). On the contrary, it aims to enhance the ability to make layouts "adapt" better to different devices depending on preset or custom media queries while using plain JavaScript or any of the cool frameworks out there (Vue, React, etc) and overcome the limitations of pure CSS.

  

(If you need some reference to understand responsive and adaptive head over here: https://www.geeksforgeeks.org/difference-between-responsive-design-and-adaptive-design/)

  

## Features

### --Stand alone or hybrid with Vue

Adaptive.js works as stand-alone out-of-the-box, but it also works along side integrated with Vue (hybrid mode) as it offers direct integration with it (as a plugin and a directive). This approach will help to cover applications that have both dynamic and static markup (not accessible either by Vue or its components) but it still needs to play nice with the responsive/adaptive style for any screen size.

  

For other frameworks like React, etc. Adaptive would work with them in a slightly different manner and not as tightly coupled as it could be with Vue. (working on it to support them in the future)

````

const { createApp } = Vue;

import Adaptive from '../src/Adaptive.js';

import hello from './hello.vue';

const app = createApp({});

//Optional | Add custom media query (min px, max px) settings (min max)

Adaptive.addQueryMinMax('kitty', 900, 1400);

// Optional | Add a custom media query expression (it accepts any valid media query)

Adaptive.addQueryExpression('doggy', '(min-width: 900px)');

// Needs to be instaciated right after the app and before the components

Adaptive.useVue(app);

// Do components and other stuff right after

app.component('hello', hello);

app.mount('#app');

````

  

### --Teleport

  

Teleports an element temporarily or permanently [before,after,to] to a given target. Important because the order, position and hierarchy can be adapt better to the desired layout or device.

  

| prop |use |description|

|----------------|-------------------|---------------------|

| **before** | teleport.mobile{before:target} --or-- teleport.mobile.before(target) | Teleports the element before the position of the target element (No merging. Good for cases where both should not inherit nor interfere with each other) |

| **after** | teleport.mobile{after:target} --or-- teleport.mobile.after(target) | Teleports the element after the position of the target element (No merging. Good for cases where both should not inherit nor interfere with each other) |

| **to** | teleport.mobile{to:target} --or-- teleport.mobile.to(target) | Teleports and appends the element to the target element (important if the element needs to inherit properties from the parent (target) element or be part of it) |

  

Consider the following graphic:

![Screenshot_32](https://user-images.githubusercontent.com/649334/185774621-257a9b0f-c68e-4c38-984d-9cfea40ebb71.png)

  
  

When using with Vue, there is no need to wrap it into custom tags, it uses the directive style v-teleport-to

### --Add/Remove Classes

  

Too many classes or rule-sets that override other rule-sets can be complex or hard. So rather than creating single use classes, this could be done like this example:

- Need to change the class only at mobiles and desktop, others should be the base class:

-  ``<div class="bg-warning" data-adaptive="addClass.mobile|desktop(bg-info,w-100,p-5); removeClass.mobile|desktop('bg-warning')>...</div>``

- The above will result like:

- Mobile and desktop devices:

-  ``<div class="bg-info,w-100,p-5"...>...</div>``

- Other devices

-  ``<div class="bg-warning"...>...</div>``

  

### --Add/Remove Inline style

One off cases where it needs tweaks per breakdown. For instance:

  

- On mobile devices the element needs 2px left margin

-  ``<div ... data-adaptive="addStyle.mobile(margin-left:2px;)>...</div>``

- The above will result in mobiles like:

-  -  ``<div style="margin-left:2px;"...>...</div>``

  

### --Execute js functions at breakdows

  

````

Adaptive.registerElement(body, {

	execute: {

		mobile: function(element) {

		axio.get(something only for mobiles)

	},

		tablets: function(element) {

			axio.get(something only for tablets)

		},

	}

});

// or
// For Vue
this.$Adaptive.if('tablet', [this, 'tablet']);
in Vue component = data.tablet (reactive)

// or
Stand alone
Adaptive.if('tablet', function() {
// code
});
//or
//Vue
this.$Adaptive.if('tablet', function() {
// code
});

// or
//Vue callback
this.$Adaptive.if('tablet', this.changeText);

````

  

### --Add custom queries

````

//Optional | Add custom media query (min px, max px) settings (min max)

Adaptive.addQueryMinMax('kitty', 900, 1400);

// Optional | Add a custom media query expression (it accepts any valid media query)

Adaptive.addQueryExpression('doggy', '(min-width: 900px)');

````

or directly in the element

````

<!-- Example of using custom queries -->

<div id="customQueries" data-adaptive="addClass[(min-width: 900px) and (max-width: 1599px)](custom-class-at-custom-breakdown)">Custom Expressions via string like Directive</div>

````

  

### --Out of the box present breakdowns

````

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

* othe non standard

*/

  

broadMediaQueries = {

'non-desktop': [100, 1024],

fullscreen: [1441, 6000] /* Large monitos and fullscreen in 1920 res */,

};

````

  
  

### --Easy sintax

- Dot notation

````

<!-- Teleporting only at mobile and desktop, all others will be set back to original position -->

<div data-adaptive="teleport.desktop|mobile.before(#hello)"><span style="background:#1f2252; color: white;">Static element that will teleport at "desktop or mobile" right above "static hello"</span></div>

````

- Object like

````

<div data-adaptive="{'teleport':{

'tablet': {

'to':'.lazy'

}

}}"><span style="color:blue">Static element that will teleport at "tablet" size to a Vue driven element when visible</span></div>

````

- Compound breakdowns

````

<!-- Example of using multiple breakdowns or compound (|)=(or) directives -->

<div data-adaptive="addClass.tablet(laura, miau);

addClass.mobile|fullscreen(red, green);

addClass.desktop(uno, dos)">....</div>

````

  

### --Adaptive.js Classes can be used as stand-alone

- Adaptive: Main Adaptive.js

- Observer: Easy register or unregister callback functions to be executed when any document node changes. (can be used stand alone or along with Adaptive.js)

- Teleport: teleport elements to other locations (can be used stand alone or along with Adaptive.js)

- ElementHelper: Element selector with some utility functions and Xpath support. (can be used stand alone or along with Adaptive.js)

  

### Description

  

So what's the story or why even today? In many projects I have worked in, even thought I try to stick to the philosophy of using mostly CSS utility classes and media queries to create responsive and adaptive layouts, CSS sometime falls short in some areas, and that's why some JS is needed to help in those bumps. For instance, moving elements from one location to another is not possible with CSS (only if the element belongs directly to the same parent and is a flex (flex order)). In cases like that, where an element has to move that far, Adaptive.js has a "teleport" feature that will move any element to specific targets at the specified Media query breakdown. Thus helping the layout not just being responsive but also adapting to the desired necessities.

  

  

Furthermore, Adaptive.js helps with adding (or removing) already existing classes, teleporting and even adding specific JS functions that will execute at a very specific screen size or media query.

  

  

But wait! what are those limitations you speak of! kind sir...

  

The short version.. is edge cases, class management and hierarchy, operations that are not currently part of CSS (teleporting, adding inline style on the fly, adding/removing classes, execute JS code at specific breakpoinst, etc) like:

  

  

- Too many specific classes for small tweaks and the issue with the "!important" - Now days is not uncommon that frameworks and vendors use their classes, but they all have to some how make their rules be the primary style on any element, and that's why many elements end up with a long list of rule sets with the "!important" keyword in order to override all or some of the computed styles and when the end user needs to add its own styles on top of the others sometimes the only way is to create long hierarchy rule sets like this: .grand-parent > .parent > .child > element.with-class.with-new-class {...!important}. This complexity increases when using media queries because they too need to override other base styles or even overlapping ones, and what about conflict..

  
  

Inspiration I used to build this:

https://wicky.nillia.ms/enquire.js/

https://github.com/CyberAP/vue-component-media-queries

https://developer.mozilla.org/en-US/docs/Web/API/Window/matchMedia

https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver

https://vuejs.org/guide/built-ins/teleport.html

  
  

(This docs still under construction)