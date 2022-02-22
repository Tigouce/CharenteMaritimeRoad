var size = 0;
var placement = 'point';
function categories_Routes_principales_17_2(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement) {
                switch(value.toString()) {case 'Autoroute':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(1,64,255,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 1}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Départementale':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(255,47,1,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 1}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Nationale':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(251,214,2,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 1}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;}};

var style_Routes_principales_17_2 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = feature.get("CLASS_ADM");
    var labelText = "";
    size = 0;
    var labelFont = "10px, sans-serif";
    var labelFill = "#000000";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'line';
    if ("" !== null) {
        labelText = String("");
    }
    
var style = categories_Routes_principales_17_2(feature, value, size, resolution, labelText,
                          labelFont, labelFill, bufferColor,
                          bufferWidth, placement);

    return style;
};
