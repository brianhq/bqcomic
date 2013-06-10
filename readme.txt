bqcomic Visual Novel/Comic Plugin v0.1

////////////
Requirements
////////////
jQuery 1.8
PHP5
an HTML5 compatible browser, preferrably Chrome or Firefox

////////////////
Included scripts
////////////////
jQuery-1.4.3.min.js
bqcomic-0.1.php

////////////
What it does
////////////
bqcomic is a jQuery experiment designed to examine how one can manipulate DOM
elements to create a slideshow presentation with text input. The JavaScript
contains two functions that build and update the array of elements that comprise
the presentation. Clients can then call the functions in their HTML to update the
content DIV elements.


////////////
How it works
////////////
Basically I made a template design for a visual novel look, with an image for
the background, a panel for images, and a dialog box showing the speaker's
portrait, name and the lines. It's simple, but it works, which is the whole point
for the prototype. In the future a backend could be created that would generate
pages using the layout and code structure for easy content creation.

Adding panels is as easy as a single line of code, with clear and distinct
parameters. In the html, you can add panels by using the following syntax in the
script portion of your page:

addline("panel_number", "speaker", "speaker_portrait.xyz", "dialog", "panel_image.xyz");

Navigating each panel is done by including divs using the IDs "#next" and 
"#prev" in a format following the template I use. When a use clicks on the divs,
the update() function is called in bqcomic which iterates through the array of 
elements built with addLine() and replaces the current HTML with the array data.