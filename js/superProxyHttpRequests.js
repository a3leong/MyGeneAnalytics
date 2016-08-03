
/**
 * numberWithCommas()
 * Description: Converts a number type to a string type with commas for every
 *              3 decimal places. Code uses a regex and is taken from
 *              http://stackoverflow.com/questions/2901102/how-to-print-a-number-with-commas-as-thousands-separators-in-javascript
 *              since it was easier to use than a 'roll-your-own' solution.
 * Arguments:
 *     num - Number to convert to string
 * Return Value: Returns a string representing the passed in number with commas.
 **/
function numberWithCommas(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

/**
 * get30DaySessions()
 * Description: Makes a call to the setup Google superProxy query endpoint to get
 *              the cached data that was obained from Google Analytics.
 * Arguments: N/A
 * Return Value: Returns a promise to return a number value representing the total
 *               amount of sessions calculated from the last 30 days to the current day.
 *               Upon error, logs the error on the console then rejects. No data is displayed.
 */


function get30DaySessions(){
  return new Promise(function(resolve,reject){
    // superProxy query endpoint url. Cached query data updates every 30 minutes.
    var url = "https://superproxyanaly.appspot.com/query?id=ahFzfnN1cGVycHJveHlhbmFseXIVCxIIQXBpUXVlcnkYgICAgICumQkM";
    $.ajax({
      url: url,
      method: 'GET'
    }).done(function(data){ 
      var sessionsCount = data.totalsForAllResults['ga:sessions'];
      resolve(sessionsCount);
    }).fail(function(xhr, status, error) {
        // error handling
        console.log("Error:");
        console.log(status);
        console.log(xhr.responseText);
        reject();
    });
  });
}