/* Magic Mirror Config Sample
 *
 * By Michael Teeuw https://michaelteeuw.nl
 * MIT Licensed.
 *
 * For more information on how you can configure this file
 * See https://github.com/MichMich/MagicMirror#configuration
 *
 */

var config = {
    address: "10.0.0.105", 	// Address to listen on, can be:
    // - "localhost", "127.0.0.1", "::1" to listen on loopback interface
    // - another specific IPv4/6 to listen on a specific interface
    // - "0.0.0.0", "::" to listen on any interface
    // Default, when address config is left out or empty, is "localhost"
    port: 8080,
    basePath: "/", 	// The URL path where MagicMirror is hosted. If you are using a Reverse proxy
                      // you must set the sub path here. basePath must end with a /
    ipWhitelist: ["127.0.0.1", "::ffff:127.0.0.1", "10.0.0.1/24", "::1", "::ffff:10.0.0.19"], 	// Set [] to allow all IP addresses
    // or add a specific IPv4 of 192.168.1.5 :
    // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
    // or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
    // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],

    useHttps: false, 		// Support HTTPS or not, default "false" will use HTTP
    httpsPrivateKey: "", 	// HTTPS private key path, only require when useHttps is true
    httpsCertificate: "", 	// HTTPS Certificate path, only require when useHttps is true

    language: "nb",
    logLevel: ["INFO", "LOG", "WARN", "ERROR"], // Add "DEBUG" for even more logging
    timeFormat: 24,
    units: "metric",
    // serverOnly:  true/false/"local" ,
    // local for armv6l processors, default
    //   starts serveronly and then starts chrome browser
    // false, default for all NON-armv6l devices
    // true, force serveronly mode, because you want to.. no UI on this device

    modules: [
        {
            module: 'MMM-PIR-Sensor',
//            position: "top_center",
            config: {
                powerSavingDelay: 30, // (seconds) how long the monitor will be turned on
//                presenceIndicator: "fa-eye", // Customizing the indicator
//                presenceOffIndicator: "fa-eye", // Customizing the indicator
//                presenceIndicatorColor: "#f51d16", // Customizing the indicator
                presenceOffIndicatorColor: "#2b271c" // Customizing the indicator
            }
        },
        {
            module: "alert",
        },
//        {
//            module: "updatenotification",
//            position: "bottom_bar"
//        },
        {
            module: "clock",
            position: "top_left",
            config: {
                clockBold: true,
                displaySeconds: false,
                showWeek: true,
                showSunTimes: false,
                showMoonTimes: false,
//                lat: 60.39299,
//                lon: 5.32415
                    }
        },
        {
            module: "calendar",
//                        header: "Planer",
            position: "top_left",
            config: {
                excludedEvents: [{filterBy: '^Jentene hos.*', regex: true},
                    {filterBy: '.* turn$', regex: true}],
                customEvents: [{keyword: ' - ', symbol: 'birthday-cake', color: 'Gold'},
                               {keyword: 'Kong ', symbol: 'crown', color: 'Gold'},
                               {keyword: 'Dronning ', symbol: 'crown', color: 'Gold'}],
                maximumNumberOfDays: 10,
                getRelative: 0,
                colored: true,
                fade: false,
                calendars: [
                    {
//orb
                        symbol: "hiking",
                        url: "https://calendar.google.com/calendar/ical//private-<id>/basic.ics" 
                        ,color: "#00FF00"
                    },
                    {
//ellinor
                        symbol: "gamepad",
                        url: "https://calendar.google.com/calendar/ical//basic.ics"
                        ,color: "#880088"
                    },
                    {
//tone
                        symbol: "dragon",
                        maximumNumberOfDays: 6,
                        url: "https://calendar.google.com/calendar/ical//basic.ics"
                        ,color: "#3030FF"
                    }
                    ,
                    {
//felles
                        symbol: "users",
                        url: "https://calendar.google.com/calendar/ical//basic.ics"

                    },
                    {
                        symbol: "users",
                        url: "https://calendar.google.com/calendar/ical/no.norwegian%23holiday%40group.v.calendar.google.com/public/basic.ics",
                        color: "Aquamarine"
                    }
                ]
            }
        },
//        {
//            module: 'MMM-YrThen',
  //          position: 'top_right',
    //        config: {
      //          location: '1-92581',
        //        numDays: 3,
          //      showAll: true,
            //    details: true,
              //  numDetails: 8,
                //windText: false,
//                maxMinSeparator: "/"
  //          }
    //    },
{
    module: "mmm-hue-lights",
    position: "top_right", // pick whichever position you want
    config: {
        bridgeIp: "10.0.0.2",
        user: "<id>",
        displayMode: "groups",
        displayType: "grid",
        hideFilter: ["Fermzilla"],
        // ... and whatever else configuration options you want to use
    }
},
        {
             module: "helloworld",
             position: "top_left",
             config: {
                carouselId: 1,
                text: "<iframe src='http://volumio.local' style='height: 480px; width: 800px;'></iframe>"
//                text: "<iframe src='http://10.0.0.22:1880/ui' style='height: 480px; width: 800px;'></iframe>"
               }
       },
        {
             module: "helloworld",
             position: "top_left",
             config: {
                carouselId: 2,
                text: "<iframe src='http://10.0.0.22:1880/ui' style='height: 480px; width: 800px;'></iframe>"
               }
       },

//        {
//            module: 'MMM-JsonTable',
//            position: 'top_right',
//            header: '',
//            config: {
//                url: 'http://10.0.0.12/temperature.json', // Required
//                arrayName: 'values',
//                descriptiveRow: '<tr class="align-left"><td style="padding: 2px 15px;"/><td style="padding: 2px 15px;">N&aring;</td><td style="padding: 2px 15px;">Maks</td><td style="padding: 2px 15px;">Min</td></tr>'
//            }
{
            module: 'MMM-Carousel',
            position: 'bottom_left',  // Only required to show navigation
            config: {
                transitionInterval: 0,
                ignoreModules: ["MMM-PIR-Sensor","alert","updatenotification"],
                mode: 'slides',
                showPageIndicators: true,
                showPageControls: false,
                slides: [
                    ["clock","calendar",'mmm-hue-lights'],
                    [{name:"helloworld", carouselId: 1} ],
                    [{name:"helloworld", carouselId: 2} ],
                ],
                keyBindingsMode: "DEFAULT",
                keyBindings: { 
                    NextSlide: "ArrowRight", 
                    PrevSlide: "ArrowLeft", 
                    Slide0:    "Home"
                }
            }
        }]
};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {module.exports = config;}

