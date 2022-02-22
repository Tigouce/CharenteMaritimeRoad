var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_17_Com_1 = new ol.format.GeoJSON();
var features_17_Com_1 = format_17_Com_1.readFeatures(json_17_Com_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_17_Com_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_17_Com_1.addFeatures(features_17_Com_1);
var lyr_17_Com_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_17_Com_1, 
                style: style_17_Com_1,
                interactive: true,
                title: '<img src="styles/legend/17_Com_1.png" /> 17_Com'
            });
var format_Routes_principales_17_2 = new ol.format.GeoJSON();
var features_Routes_principales_17_2 = format_Routes_principales_17_2.readFeatures(json_Routes_principales_17_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Routes_principales_17_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Routes_principales_17_2.addFeatures(features_Routes_principales_17_2);
var lyr_Routes_principales_17_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Routes_principales_17_2, 
                style: style_Routes_principales_17_2,
                interactive: true,
    title: 'Routes_principales_17<br />\
    <img src="styles/legend/Routes_principales_17_2_0.png" /> Autoroute<br />\
    <img src="styles/legend/Routes_principales_17_2_1.png" /> Départementale<br />\
    <img src="styles/legend/Routes_principales_17_2_2.png" /> Nationale<br />'
        });

lyr_OSMStandard_0.setVisible(true);lyr_17_Com_1.setVisible(true);lyr_Routes_principales_17_2.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_17_Com_1,lyr_Routes_principales_17_2];
lyr_17_Com_1.set('fieldAliases', {'ID': 'ID', 'NOM_COM': 'NOM_COM', 'INSEE_COM': 'INSEE_COM', });
lyr_Routes_principales_17_2.set('fieldAliases', {'ID': 'ID', 'NB_CHAUSSE': 'NB_CHAUSSE', 'NB_VOIES': 'NB_VOIES', 'ACCES': 'ACCES', 'POS_SOL': 'POS_SOL', 'SENS': 'SENS', 'NUM_ROUTE': 'NUM_ROUTE', 'CLASS_ADM': 'CLASS_ADM', });
lyr_17_Com_1.set('fieldImages', {'ID': 'TextEdit', 'NOM_COM': 'TextEdit', 'INSEE_COM': 'TextEdit', });
lyr_Routes_principales_17_2.set('fieldImages', {'ID': 'TextEdit', 'NB_CHAUSSE': 'TextEdit', 'NB_VOIES': 'TextEdit', 'ACCES': 'TextEdit', 'POS_SOL': 'TextEdit', 'SENS': 'TextEdit', 'NUM_ROUTE': 'TextEdit', 'CLASS_ADM': 'TextEdit', });
lyr_17_Com_1.set('fieldLabels', {'ID': 'no label', 'NOM_COM': 'no label', 'INSEE_COM': 'no label', });
lyr_Routes_principales_17_2.set('fieldLabels', {'ID': 'no label', 'NB_CHAUSSE': 'no label', 'NB_VOIES': 'no label', 'ACCES': 'no label', 'POS_SOL': 'no label', 'SENS': 'no label', 'NUM_ROUTE': 'no label', 'CLASS_ADM': 'no label', });
lyr_Routes_principales_17_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});