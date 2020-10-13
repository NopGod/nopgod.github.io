
(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;
//Edge symbol: 'stage'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_Stage}","mousemove",function(sym,e){this.onMove(e.pageX,e.pageY);});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"document","compositionReady",function(sym,e){this.onMove=function(posX,posY){timelinecontrol=Number(posX)*2;console.log(timelinecontrol);sym.stop(timelinecontrol);}});
//Edge binding end
})("stage");
//Edge symbol end:'stage'
})(jQuery,AdobeEdge,"EDGE-678121021");