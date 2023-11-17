Try it out!: https://classychameleon.github.io

# gvg8_job_scraper_web
A webscraper for finding jobs, made with flutter. <br>
JobScraper searches on common Icelandic employment websites for jobs that match your search terms. <br>
Results are shown in one handy list. Duplicates are discarded. <br>
<br>
Designed for mobile, ported on web for easier demonstration. <br>
Currently only Alfred.is and Tvinna.is are supported.  <br>
Note: Due to CORS, data from Tvinna.is are limited and are fetched from local data if the app is running on the web 

# More details
* Asynchronously fetches data from multiple websites.
* Gathers results with no duplicates. In case of duplicates, shows both urls.
* Shows in real time what data it's fetching while displaying a snazzy loading bar. 
* Manage Search Presets for people with multiple career opportunities. 
* Responsive and intuitive interface.

# Possible TODOs
* Add local storage to save search presets (sqlite for mobile, maybe window.localstorage for web)
* Cache results for each search term and add refresh button to start a fresh search
* Make website version of JobScraper prettier (at least limit the width of everything)
* Add a theme
* Add tests
  * Test duplicate detection
  * Test if results are gathered correctly from websites


