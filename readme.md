# Overview
App is hosted at: https://superproxyanaly.appspot.com/admin
The number display is written as an html file that is meant to be put into the index page as an iframe.


## superProxy
https://developers.google.com/analytics/solutions/google-analytics-super-proxy
https://github.com/googleanalytics/google-analytics-super-proxy
In order to reduce requests to the API, superProxy acts as an intermediary that caches results
of requests to the Google Core Reporting API and automatically refreshes the cache at specified intervals.
The code is pulled from the Github repository listed above and was modified to use the OAuthentication created
for the web application. The code was then uploaded to Google App Engine as a new web application and was then deployed.
The link to create new cacheable queries is listed at the top.
The code to be uploaded to Google App Engine is located in the superproxy folder.


*Note: You must also allow cross-origin access by adding the following code by making the changes made in this commit: 
https://github.com/erajasekar/google-analytics-super-proxy/commit/26a0fb907c268ccd70b5b16bcfdb1e610a794fee?diff=unified*


## Google app engine
You need to upload the code into Google's cloud repository (possibly can just add remote to github)
then in the Google cloud Shell you need to clone the repository and subsequently deploy that code.
To deploy use this code in Google cloud shell in the directory where app.yaml is located:
appcfg.py -A [YOUR_PROJECT_ID] -V v1 update ./

## Code Snippets
*JavaScript codee to pull session number from retrieved JSON:*
Number(x.totalsForAllResults["ga:sessions"])

*HTML Snippet for mygene.info:*
```html
live API now</a>  <!-- Code around insertion -->
    </p>...   
<iframe src='gAnalyticsIFrame.html' width='200' height='100'></iframe> <!-- Actual line of code -->
...<p id="metadata_timestamp"></p>  <!-- Code around insertion -->
```


*For Questions email: a3leong@gmail.com*
