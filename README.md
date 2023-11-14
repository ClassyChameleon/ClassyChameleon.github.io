Try it out!: https://classychameleon.github.io

# gvg8_job_scraper_web
A pet project made with Flutter. <br>
A webscraper for finding jobs. <br>
Designed for mobile, ported on web so it's easier to demonstrate for my CV

# What is this?
This app allows you to search multiple Icelandic employment websites at once and aggregates the results in one handy list.  <br>
Currently only Alfred.is and Tvinna.is are supported.  <br>
Note: Due to CORS, data from Tvinna.is are limited and are fetched from local data if the app is running on the web 

# Technical stuff
* Asynchronously fetches data from multiple websites.
* Compiles result with no duplicates. 
* Shows in real time what data it's fetching while displaying a snazzy loading bar. 
* Manage Search Presets for people with multiple career opportunities. 
* Responsive and intuitive interface.

# Possible todo
* Add local storage to save search presets (sqlite for mobile, maybe window.localstorage for web)
* Cache results for each search term and add refresh button to start a fresh search
* Make website version of JobScraper prettier (at least limit the width of everything)
* Add a theme

# What I learned from this
Flutter uses similar ideas as modern web development tools such as React and Next.js where you make components and use script to decide how the components are laid out <br>
Flutter is handy if developing for multiple platforms since it has built-in tools to port to various platforms. <br>
Community tools are numerous and very simple to add to your project <br>
A few issues that I hope will be fixed:
* Can't check if an asset exists until after loading, forcing an exception to be thrown in the console regardless if you catch it or not
* Scrollable widgets are given unlimited size if they're not in a limited size container. Flutter can calculate how many pixels the widget is off screen and should therefore be able to automatically limit the size so it wont go off screen.
  * This might be intentional to make developers conscious that it's good practice to manually limit the size of the container based on your needs, but it still feels weird
* Constant suggestions whether a widget should be a 'const' or can't be 'const' while writing code. I added a line at the top of the file to disable 'const' suggestions until the code was done, then I removed the line and added const wherever applicaple.
  * If the IDE is smart enough to know what widgets can be optimized by adding const, why can't it be handled by the compiler?
