/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};
var opts = {};
var resources = [
];
var symbols = {
"stage": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "both",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
            {
                id: 'bk',
                type: 'image',
                rect: ['0px', '0px','558px','281px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"bk.jpg",'0px','0px']
            },
            {
                id: 'cv',
                type: 'image',
                rect: ['123px', '-25px','447px','65px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"cv.png",'0px','0px']
            },
            {
                id: 'xc',
                type: 'image',
                rect: ['223px', '-13px','271px','80px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"xc.png",'0px','0px']
            },
            {
                id: 'gg2',
                type: 'image',
                rect: ['-18px', '154px','657px','181px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"gg2.png",'0px','0px']
            },
            {
                id: 'nn',
                type: 'image',
                rect: ['201px', '149px','119px','147px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"nn.png",'0px','0px']
            },
            {
                id: 'vv',
                type: 'image',
                rect: ['39px', '182px','449px','88px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"vv.png",'0px','0px']
            },
            {
                id: 'mm',
                type: 'image',
                rect: ['-154px', '-8px','731px','298px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"mm.png",'0px','0px']
            },
            {
                id: 'm3',
                type: 'image',
                rect: ['-42px', '-6px','723px','309px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"m3.png",'0px','0px']
            },
            {
                id: 'sd',
                type: 'image',
                rect: ['-18px', '-24px','595px','365px','auto', 'auto'],
                opacity: 0,
                fill: ["rgba(0,0,0,0)",im+"sd.png",'0px','0px']
            },
            {
                id: 'bn',
                type: 'image',
                rect: ['398px', '206px','133px','39px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"bn.png",'0px','0px']
            },
            {
                id: 'cap',
                type: 'image',
                rect: ['16px', '37px','177px','83px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"cap.png",'0px','0px']
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_vv}": [
                ["style", "left", '114px'],
                ["style", "top", '182px']
            ],
            "${_bn}": [
                ["style", "left", '398px'],
                ["style", "top", '206px']
            ],
            "${_gg2}": [
                ["style", "left", '-18px'],
                ["style", "top", '154px']
            ],
            "${_sd}": [
                ["style", "top", '-24px'],
                ["style", "opacity", '0'],
                ["style", "left", '-18px']
            ],
            "${_m3}": [
                ["style", "left", '-31px'],
                ["style", "top", '-6px']
            ],
            "${_mm}": [
                ["style", "left", '-55px'],
                ["style", "top", '-13px']
            ],
            "${_cv}": [
                ["style", "left", '116px'],
                ["style", "top", '-25px']
            ],
            "${_xc}": [
                ["style", "left", '223px'],
                ["style", "top", '-13px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "width", '557px'],
                ["style", "height", '280px'],
                ["style", "overflow", 'hidden']
            ],
            "${_cap}": [
                ["style", "left", '16px'],
                ["style", "top", '37px']
            ],
            "${_bk}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${_nn}": [
                ["style", "left", '201px'],
                ["style", "top", '149px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 3000,
            autoPlay: true,
            timeline: [
                { id: "eid12", tween: [ "style", "${_gg2}", "left", '-75px', { fromValue: '-18px'}], position: 0, duration: 3000 },
                { id: "eid26", tween: [ "style", "${_m3}", "left", '-155px', { fromValue: '-31px'}], position: 0, duration: 3000 },
                { id: "eid21", tween: [ "style", "${_mm}", "left", '-69px', { fromValue: '-55px'}], position: 0, duration: 3000 },
                { id: "eid18", tween: [ "style", "${_vv}", "left", '-51px', { fromValue: '114px'}], position: 0, duration: 3000 },
                { id: "eid6", tween: [ "style", "${_cv}", "left", '208px', { fromValue: '116px'}], position: 0, duration: 3000 },
                { id: "eid3", tween: [ "style", "${_xc}", "left", '280px', { fromValue: '223px'}], position: 0, duration: 3000 }            ]
        }
    }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources, opts);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-254294984");
