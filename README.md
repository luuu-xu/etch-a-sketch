# etch-a-sketch
A project building a version of Etch-A-Sketch on HTML from The Odin Project.

- Wrote JavaScript function createGrid(number) so that the pixels can be created and appended to the container div.
- Used CSS grid in style.css on .container so that the pixels divs are nicely and automatically organized inside the box.
- In order to set the number of columns and rows in the box, CSS style grid-template-columns: repeat(number, auto) is used and inserted into createGrid function.

- drawing() used DOM manipulation querySelectorAll to select all of .pixel div, but since these are in a nodelist, then forEach is used so that addEventListener is added to each one of the .pixel div. 
- So whenever the mouse entered the pixel, CSS style background-color: black is added into the specific pixel.
- The basic etch-a-sketch is done!

- Added a Erase button so that the drawings can be erased at once.
- erase() function is easy enough, setting every pixel in pixels nodelist to the same background color as the container.

- A Resize button is added, this one is slightly more complicated: it needs to ask the user to input a number as the size of the grid box; reset the current box; createGrid with the input from the user; start drawing() again.
- reset() is fairly simple, by removeChild of forEach of the pixels after querySelectorAll all of them existing pixel divs.
- whatSize function prompts asking the user to input a number between 10 to 100 so it can return the number for createGrid(). Notice that the return from prompt is a string, so Number is used on the string converting it to a number, or NaN if user instead input a random string. Then in order to keep the box nice, a minimum of 10 and a maximum of 100 of pixels per row is set.
- Inside resize() function, it runs reset(), createGrid(whatSize()), drawing(). 

Possible feature:
- instead of changing the color to black, maybe change each one pixel with a random RGB value.
- add an effect where a pixel is only 10% blacker than before if it is passed, so after 10 times, it is completely black.
- add a slider to replace the Resize button, especially the ugly prompt window.
- make it prettier!