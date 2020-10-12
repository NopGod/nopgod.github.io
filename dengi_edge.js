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
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
            {
                id: 'blue82',
                type: 'image',
                rect: ['82.8%', '-259.1%','146.4%','365.2%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"blue8.png",'50%','50%','100%','auto']
            },
            {
                id: 'red2',
                type: 'image',
                rect: ['-129.6%', '-10.7%','146.4%','365.2%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"red2.png",'50%','50%','100%','auto'],
                transform: [[],['-180'],[],['1.02164']]
            },
            {
                id: 'ili3',
                type: 'image',
                rect: ['0px', '-1px','100%','100%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"ili3.png",'50%','50%','1440px','250px']
            },
            {
                id: 'vitya2',
                type: 'image',
                rect: ['auto', '-0.4%','412px','250px','52.1%', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"vitya2.png",'0%','0%','100%','auto']
            },
            {
                id: 'dengi',
                type: 'image',
                rect: ['138px', '-29px','100%','100%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"dengi.png",'50%','50%','1440px','250px']
            },
            {
                id: 'pozor',
                type: 'image',
                rect: ['-127px', '28px','100%','100%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"pozor.png",'50%','50%','1440px','250px']
            },
            {
                id: 'ly2',
                type: 'image',
                rect: ['52.9%', '19.3%','557px','88.7%','auto', 'auto'],
                sizeRange: ['0%','','',''],
                fill: ["rgba(0,0,0,0)",im+"ly2.png",'0%','0%','100%','100%']
            },
            {
                id: 'tnt2',
                type: 'image',
                rect: ['71.5%', '-0.4%','107px','107px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"tnt2.png",'0px','0px']
            },
            {
                id: 'plash',
                type: 'image',
                rect: ['0px', '0px','100%','100%','auto', 'auto'],
                clip: ['rect(0px 742.8984375px 250px 0px)'],
                fill: ["rgba(0,0,0,0)",im+"plash.png",'50%','50%','1440px','250px']
            },
            {
                id: 'mon2',
                type: 'image',
                rect: ['0px', '125px','100%','170.4%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"mon2.png",'0%','0%','1440px','426px'],
                filter: [0, 0, 1, 1, 0, 0, 1, 0, "rgba(0,0,0,0)", 0, 0, 0]
            },
            {
                id: 'anon2',
                type: 'image',
                rect: ['-12px', '-1px','100%','100%','auto', 'auto'],
                clip: ['rect(0px 1440px 13.76806640625px 0px)'],
                fill: ["rgba(0,0,0,0)",im+"anon2.png",'50%','50%','1440px','250px']
            },
            {
                id: 'text3',
                type: 'image',
                rect: ['65.3%', '92%','261px','7.6%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"text3.png",'50%','50%','261px','19px'],
                filter: [0, 0, 1, 1, 0, 0, 0, 0, "rgba(0,0,0,0.72)", 2, 2, 10]
            },
            {
                id: 'plus',
                type: 'image',
                rect: ['auto', 'auto','100%','100%','-5.1%', '0%'],
                fill: ["rgba(0,0,0,0)",im+"plus.png",'50%','50%','1440px','250px']
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_red2}": [
                ["style", "top", '-10.8%'],
                ["transform", "scaleY", '1'],
                ["transform", "rotateZ", '-180deg'],
                ["transform", "scaleX", '1.02164'],
                ["style", "background-size", [100,'auto'], {valueTemplate:'@@0@@% @@1@@'} ],
                ["style", "left", '-129.64%'],
                ["style", "background-position", [50,50], {valueTemplate:'@@0@@% @@1@@%'} ]
            ],
            "${_mon2}": [
                ["subproperty", "filter.grayscale", '1'],
                ["style", "top", '-282px'],
                ["subproperty", "filter.contrast", '1.0666666666667'],
                ["style", "left", '0px'],
                ["subproperty", "filter.sepia", '0.6'],
                ["style", "opacity", '0.000000'],
                ["style", "background-position", [50,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["subproperty", "filter.saturate", '0.83333333333333']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1.00)'],
                ["style", "min-width", '850px'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '250px'],
                ["style", "max-width", '1440px'],
                ["style", "width", '100%']
            ],
            "${_ili3}": [
                ["style", "top", '-1px'],
                ["style", "left", '0px'],
                ["style", "background-position", [50,50], {valueTemplate:'@@0@@% @@1@@%'} ]
            ],
            "${_tnt2}": [
                ["style", "top", '-0.4%'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '71.53%']
            ],
            "${_vitya2}": [
                ["style", "top", '-0.4%'],
                ["style", "background-position", [0,0], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "bottom", 'auto'],
                ["style", "background-size", [100,'auto'], {valueTemplate:'@@0@@% @@1@@'} ],
                ["style", "right", '51.65%'],
                ["style", "left", 'auto'],
                ["style", "opacity", '0.000000']
            ],
            "${_dengi}": [
                ["style", "top", '-29px'],
                ["style", "opacity", '0'],
                ["style", "left", '138px'],
                ["style", "background-position", [50,50], {valueTemplate:'@@0@@% @@1@@%'} ]
            ],
            "${_plash}": [
                ["style", "top", '0px'],
                ["style", "background-position", [50,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "clip", [0,416.8115234375,250,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "left", '0px']
            ],
            "${_pozor}": [
                ["style", "top", '28px'],
                ["style", "opacity", '0'],
                ["style", "left", '-127px'],
                ["style", "background-position", [50,50], {valueTemplate:'@@0@@% @@1@@%'} ]
            ],
            "${_text3}": [
                ["style", "top", '92%'],
                ["subproperty", "filter.drop-shadow.blur", '10px'],
                ["subproperty", "filter.drop-shadow.offsetV", '2px'],
                ["style", "left", '65.28%'],
                ["subproperty", "filter.drop-shadow.color", 'rgba(0,0,0,0.72)'],
                ["style", "right", 'auto'],
                ["style", "background-position", [50,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["subproperty", "filter.drop-shadow.offsetH", '2px']
            ],
            "${_ly2}": [
                ["style", "bottom", 'auto'],
                ["style", "background-size", [100,100], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "left", '47.78%'],
                ["style", "width", '557px'],
                ["style", "top", '22.68%'],
                ["style", "min-width", '0%'],
                ["style", "max-width", 'none'],
                ["style", "height", '88.74%'],
                ["style", "right", 'auto'],
                ["style", "background-position", [0,0], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "opacity", '0']
            ],
            "${_blue82}": [
                ["style", "top", '-256.8%'],
                ["transform", "rotateZ", '0deg'],
                ["style", "background-size", [100,'auto'], {valueTemplate:'@@0@@% @@1@@'} ],
                ["style", "background-position", [50,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "left", '83.13%']
            ],
            "${_plus}": [
                ["style", "top", 'auto'],
                ["style", "bottom", '0%'],
                ["style", "right", '-5.07%'],
                ["style", "background-position", [50,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "left", 'auto']
            ],
            "${_anon2}": [
                ["style", "top", '-1px'],
                ["style", "left", '-12px'],
                ["style", "clip", [0,1440,13.76806640625,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "background-position", [50,50], {valueTemplate:'@@0@@% @@1@@%'} ]
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 3840,
            autoPlay: true,
            labels: {
                "start": 0
            },
            timeline: [
                { id: "eid54", tween: [ "style", "${_dengi}", "left", '0px', { fromValue: '138px'}], position: 155, duration: 95 },
                { id: "eid78", tween: [ "style", "${_dengi}", "left", '-106px', { fromValue: '0px'}], position: 3500, duration: 100 },
                { id: "eid118", tween: [ "style", "${_ly2}", "top", '19.28%', { fromValue: '22.68%'}], position: 200, duration: 90 },
                { id: "eid124", tween: [ "style", "${_ly2}", "top", '5.52%', { fromValue: '19.28%'}], position: 3435, duration: 120 },
                { id: "eid64", tween: [ "style", "${_pozor}", "opacity", '1', { fromValue: '0'}], position: 155, duration: 95 },
                { id: "eid74", tween: [ "style", "${_pozor}", "opacity", '0', { fromValue: '1'}], position: 3500, duration: 100 },
                { id: "eid145", tween: [ "style", "${_anon2}", "clip", [0,1440,248.55078125,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,1440,13.76806640625,0]}], position: 155, duration: 250 },
                { id: "eid147", tween: [ "style", "${_anon2}", "clip", [242.029052734375,1440,248.55078125,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,1440,248.55078125,0]}], position: 3435, duration: 210 },
                { id: "eid85", tween: [ "style", "${_vitya2}", "opacity", '1', { fromValue: '0.000000'}], position: 0, duration: 88 },
                { id: "eid90", tween: [ "style", "${_vitya2}", "opacity", '0', { fromValue: '1'}], position: 3500, duration: 100 },
                { id: "eid119", tween: [ "style", "${_ly2}", "opacity", '1', { fromValue: '0'}], position: 200, duration: 90 },
                { id: "eid125", tween: [ "style", "${_ly2}", "opacity", '0', { fromValue: '1'}], position: 3435, duration: 120 },
                { id: "eid63", tween: [ "style", "${_pozor}", "top", '0px', { fromValue: '28px'}], position: 155, duration: 95 },
                { id: "eid73", tween: [ "style", "${_pozor}", "top", '-20px', { fromValue: '0px'}], position: 3500, duration: 100 },
                { id: "eid36", tween: [ "style", "${_blue82}", "top", '-132.8%', { fromValue: '-256.8%'}], position: 0, duration: 250 },
                { id: "eid42", tween: [ "style", "${_blue82}", "top", '-17.6%', { fromValue: '-132.8%'}], position: 3500, duration: 250 },
                { id: "eid151", tween: [ "style", "${_tnt2}", "opacity", '1', { fromValue: '0.000000'}], position: 250, duration: 155 },
                { id: "eid153", tween: [ "style", "${_tnt2}", "opacity", '0', { fromValue: '1'}], position: 3435, duration: 120 },
                { id: "eid62", tween: [ "style", "${_pozor}", "left", '0px', { fromValue: '-127px'}], position: 155, duration: 95 },
                { id: "eid72", tween: [ "style", "${_pozor}", "left", '128px', { fromValue: '0px'}], position: 3500, duration: 100 },
                { id: "eid27", tween: [ "style", "${_red2}", "left", '-20.24%', { fromValue: '-129.64%'}], position: 0, duration: 250 },
                { id: "eid31", tween: [ "style", "${_red2}", "left", '99.43%', { fromValue: '-20.24%'}], position: 3500, duration: 250 },
                { id: "eid87", tween: [ "style", "${_vitya2}", "top", '-0.4%', { fromValue: '-0.4%'}], position: 155, duration: 0 },
                { id: "eid35", tween: [ "style", "${_blue82}", "left", '-24.26%', { fromValue: '83.13%'}], position: 0, duration: 250 },
                { id: "eid41", tween: [ "style", "${_blue82}", "left", '-141.74%', { fromValue: '-24.26%'}], position: 3500, duration: 250 },
                { id: "eid117", tween: [ "style", "${_ly2}", "left", '52.22%', { fromValue: '47.78%'}], position: 200, duration: 90 },
                { id: "eid123", tween: [ "style", "${_ly2}", "left", '61.87%', { fromValue: '52.22%'}], position: 3435, duration: 120 },
                { id: "eid56", tween: [ "style", "${_dengi}", "opacity", '1', { fromValue: '0'}], position: 155, duration: 95 },
                { id: "eid80", tween: [ "style", "${_dengi}", "opacity", '0', { fromValue: '1'}], position: 3500, duration: 100 },
                { id: "eid88", tween: [ "style", "${_vitya2}", "right", '51.18%', { fromValue: '51.65%'}], position: 0, duration: 3600 },
                { id: "eid162", tween: [ "style", "${_mon2}", "opacity", '1', { fromValue: '0.000000'}], position: 0, duration: 88, easing: "easeInOutQuad" },
                { id: "eid170", tween: [ "style", "${_mon2}", "opacity", '0', { fromValue: '1'}], position: 3500, duration: 210, easing: "easeInOutQuad" },
                { id: "eid55", tween: [ "style", "${_dengi}", "top", '0px', { fromValue: '-29px'}], position: 155, duration: 95 },
                { id: "eid79", tween: [ "style", "${_dengi}", "top", '16px', { fromValue: '0px'}], position: 3500, duration: 100 },
                { id: "eid136", tween: [ "style", "${_plash}", "clip", [0,1441.44921875,250,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,416.8115234375,250,0]}], position: 250, duration: 250 },
                { id: "eid138", tween: [ "style", "${_plash}", "clip", [0,1441.44921875,250,1065.21728515625], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,1441.44921875,250,0]}], position: 3435, duration: 210 },
                { id: "eid175", tween: [ "style", "${_mon2}", "left", '22px', { fromValue: '0px'}], position: 0, duration: 3840, easing: "easeInOutSine" },
                { id: "eid176", tween: [ "style", "${_mon2}", "background-position", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 3840, duration: 0, easing: "easeInOutSine" },
                { id: "eid28", tween: [ "style", "${_red2}", "top", '-129.6%', { fromValue: '-10.8%'}], position: 0, duration: 250 },
                { id: "eid32", tween: [ "style", "${_red2}", "top", '-252.31%', { fromValue: '-129.6%'}], position: 3500, duration: 250 },
                { id: "eid165", tween: [ "style", "${_mon2}", "top", '53px', { fromValue: '-282px'}], position: 0, duration: 3840, easing: "easeInOutSine" }            ]
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
})(jQuery, AdobeEdge, "EDGE-132531328");
