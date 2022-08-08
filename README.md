# Adaptive.js
Adaptive.js is not a CSS media query replacement nor should be the primary handler of responsive or adaptive applications (CSS should do most of it). On the contrary, it aims to enhance the ability to make layouts "adapt" better to different devices depending on preset or custom media queries while using plain JavaScript or any of the cool frameworks out there (Vue, React, etc) and overcome the limitations of pure CSS. 

(If you need some reference to understand responsive and adaptive head over here: https://www.geeksforgeeks.org/difference-between-responsive-design-and-adaptive-design/)

Adaptive.js works as stand-alone out-of-the-box, but it also works along side integrated with Vue (hybrid mode) as it offers direct integration with it (as a plugin and a directive). This approach will help to cover applications that have both dynamic and static markup (not accessible either by Vue or its components) but it still needs to play nice with the responsive/adaptive style for any screen size. 
For other frameworks like React, etc. Adaptive would work with them but not in a slightly different manner and not as tightly coupled as it could be with Vue.
So what's the story or why even today?  In many projects I have worked in, even thought I try to stick to the philosophy of using mostly CSS utility classes and media queries to create responsive and adaptive layouts, CSS sometime falls short in some areas, and that's why some JS is needed to help in those bumps. For instance, moving elements from one location to another is not possible with CSS (only if the element belongs directly to the same parent and is a flex (flex order)). In cases like that, where an element has to move that far, Adaptive.js has a "teleport" feature that will move any element to specific targets at the specified Media query breakdown. Thus helping the layout not just being responsive but also adapting to the desired necessities.
Furthermore, Adaptive.js helps with adding (or removing) already existing classes, teleporting and even adding specific JS functions that will execute at a very specific screen size or media query.

(This docs still under construction)

