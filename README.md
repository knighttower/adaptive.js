# Adaptive.js

Adaptive.js is not a CSS media query replacement nor should be the primary handler of responsive or adaptive applications (CSS should do most of it). On the contrary, it aims to enhance the ability to make layouts "adapt" better to different devices depending on preset or custom media queries while using plain JavaScript or any of the cool frameworks out there (Vue, React, etc) and overcome the limitations of pure CSS.

(If you need some reference to understand responsive and adaptive head over here: https://www.geeksforgeeks.org/difference-between-responsive-design-and-adaptive-design/)

## Features

### --Teleport

Teleports an element temporarily or permanently [before,after,to] to a given target. Important because the order, position and hierarchy can be adapt better to the desired layout or device.
| prop |use |description|
|----------------|-------------------|---------------------|
|**before**|teleport.mobile{before:target} --or-- teleport.mobile.before(target)|Teleports the element before the position of the target element (No merging. Good for cases where both should not inherit nor interfere with each other)|
|**after**|teleport.mobile{after:target} --or-- teleport.mobile.after(target)|Teleports the element after the position of the target element (No merging. Good for cases where both should not inherit nor interfere with each other)|
|**to**|teleport.mobile{to:target} --or-- teleport.mobile.to(target)|Teleports and appends the element to the target element (important if the element needs to inherit properties from the parent (target) element or be part of it) |

Consider the following graphic:

### --Add/Remove Classes

Too many classes or rule sets that override other rules sets can be complex or hard.
For instance using Bootstrap to add margin and padding for different breakdowns:
https://codesandbox.io/s/bootstrap-5-playground-forked-ogh556?file=/index.html&resolutionWidth=1000&resolutionHeight=675

### Description

Adaptive.js works as stand-alone out-of-the-box, but it also works along side integrated with Vue (hybrid mode) as it offers direct integration with it (as a plugin and a directive). This approach will help to cover applications that have both dynamic and static markup (not accessible either by Vue or its components) but it still needs to play nice with the responsive/adaptive style for any screen size.

For other frameworks like React, etc. Adaptive would work with them in a slightly different manner and not as tightly coupled as it could be with Vue. (working on it to support them in the future)

So what's the story or why even today? In many projects I have worked in, even thought I try to stick to the philosophy of using mostly CSS utility classes and media queries to create responsive and adaptive layouts, CSS sometime falls short in some areas, and that's why some JS is needed to help in those bumps. For instance, moving elements from one location to another is not possible with CSS (only if the element belongs directly to the same parent and is a flex (flex order)). In cases like that, where an element has to move that far, Adaptive.js has a "teleport" feature that will move any element to specific targets at the specified Media query breakdown. Thus helping the layout not just being responsive but also adapting to the desired necessities.

Furthermore, Adaptive.js helps with adding (or removing) already existing classes, teleporting and even adding specific JS functions that will execute at a very specific screen size or media query.

But wait! what are those limitations you speak of! kind sir...
The short version.. is edge cases, class management and hierarchy, operations that are not currently part of CSS (teleporting, adding inline style on the fly, adding/removing classes, execute JS code at specific breakpoinst, etc) like:

-   Too many specific classes for small tweaks and the issue with the "!important" - Now days is not uncommon that frameworks and vendors use their classes, but they all have to some how make their rules be the primary style on any element, and that's why many elements end up with a long list of rule sets with the "!important" keyword in order to override all or some of the computed styles and when the end user needs to add its own styles on top of the others sometimes the only way is to create long hierarchy rule sets like this: .grand-parent > .parent > .child > element.with-class.with-new-class {...!important}. This complexity increases when using media queries because they too need to override other base styles or even overlapping ones, and what about conflict..

(This docs still under construction)
