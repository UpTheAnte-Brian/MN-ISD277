ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:3857").setExtent([-10441348.648790, 5603925.945780, -10411429.886254, 5620887.267428]);
var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Contiguous_US_1 = new ol.format.GeoJSON();
var features_Contiguous_US_1 = format_Contiguous_US_1.readFeatures(json_Contiguous_US_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Contiguous_US_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Contiguous_US_1.addFeatures(features_Contiguous_US_1);
var lyr_Contiguous_US_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Contiguous_US_1, 
                style: style_Contiguous_US_1,
                popuplayertitle: "Contiguous_US",
                interactive: true,
                title: '<img src="styles/legend/Contiguous_US_1.png" /> Contiguous_US'
            });
var format_mn_school_districts_2 = new ol.format.GeoJSON();
var features_mn_school_districts_2 = format_mn_school_districts_2.readFeatures(json_mn_school_districts_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_mn_school_districts_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_mn_school_districts_2.addFeatures(features_mn_school_districts_2);
var lyr_mn_school_districts_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_mn_school_districts_2, 
                style: style_mn_school_districts_2,
                popuplayertitle: "mn_school_districts",
                interactive: true,
                title: '<img src="styles/legend/mn_school_districts_2.png" /> mn_school_districts'
            });
var format_target_businesses_3 = new ol.format.GeoJSON();
var features_target_businesses_3 = format_target_businesses_3.readFeatures(json_target_businesses_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_target_businesses_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_target_businesses_3.addFeatures(features_target_businesses_3);
var lyr_target_businesses_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_target_businesses_3, 
                style: style_target_businesses_3,
                popuplayertitle: "target_businesses",
                interactive: true,
                title: '<img src="styles/legend/target_businesses_3.png" /> target_businesses'
            });

lyr_OSMStandard_0.setVisible(true);lyr_Contiguous_US_1.setVisible(true);lyr_mn_school_districts_2.setVisible(true);lyr_target_businesses_3.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_Contiguous_US_1,lyr_mn_school_districts_2,lyr_target_businesses_3];
lyr_Contiguous_US_1.set('fieldAliases', {'FID': 'FID', 'OBJECTID': 'OBJECTID', 'NAME': 'NAME', 'STATE_ABBR': 'STATE_ABBR', 'STATE_FIPS': 'STATE_FIPS', 'ORDER_ADM': 'ORDER_ADM', 'MONTH_ADM': 'MONTH_ADM', 'DAY_ADM': 'DAY_ADM', 'YEAR_ADM': 'YEAR_ADM', 'TYPE': 'TYPE', 'POP': 'POP', 'SQ_MILES': 'SQ_MILES', 'PRIM_MILES': 'PRIM_MILES', 'Shape_Leng': 'Shape_Leng', 'Shape__Are': 'Shape__Are', 'Shape__Len': 'Shape__Len', 'Status': 'Status', });
lyr_mn_school_districts_2.set('fieldAliases', {'SDORGID': 'SDORGID', 'FORMID': 'FORMID', 'SDTYPE': 'SDTYPE', 'SDNUMBER': 'SDNUMBER', 'PREFNAME': 'PREFNAME', 'SHORTNAME': 'SHORTNAME', 'WEB_URL': 'WEB_URL', 'SQMILES': 'SQMILES', 'ACRES': 'ACRES', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'Status': 'Status', 'SuperI': 'SuperI', 'Email': 'Email', 'Phone': 'Phone', 'UpTheAnte': 'UpTheAnte', 'display': 'display', 'file_path': 'file_path', });
lyr_target_businesses_3.set('fieldAliases', {'name': 'name', 'category': 'category', 'longitude': 'longitude', 'latitude': 'latitude', 'technology': 'technology', 'owner': 'owner', 'status': 'status', 'avg_trans': 'avg_trans', 'short_name': 'short_name', });
lyr_Contiguous_US_1.set('fieldImages', {'FID': 'Range', 'OBJECTID': 'Range', 'NAME': 'TextEdit', 'STATE_ABBR': 'TextEdit', 'STATE_FIPS': 'TextEdit', 'ORDER_ADM': 'Range', 'MONTH_ADM': 'TextEdit', 'DAY_ADM': 'Range', 'YEAR_ADM': 'Range', 'TYPE': 'TextEdit', 'POP': 'Range', 'SQ_MILES': 'TextEdit', 'PRIM_MILES': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape__Are': 'TextEdit', 'Shape__Len': 'TextEdit', 'Status': 'TextEdit', });
lyr_mn_school_districts_2.set('fieldImages', {'SDORGID': 'TextEdit', 'FORMID': 'TextEdit', 'SDTYPE': 'TextEdit', 'SDNUMBER': 'TextEdit', 'PREFNAME': 'TextEdit', 'SHORTNAME': 'TextEdit', 'WEB_URL': 'TextEdit', 'SQMILES': 'TextEdit', 'ACRES': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'Status': 'TextEdit', 'SuperI': 'TextEdit', 'Email': 'TextEdit', 'Phone': 'TextEdit', 'UpTheAnte': 'TextEdit', 'display': 'TextEdit', 'file_path': 'ExternalResource', });
lyr_target_businesses_3.set('fieldImages', {'name': 'TextEdit', 'category': 'TextEdit', 'longitude': 'TextEdit', 'latitude': 'TextEdit', 'technology': 'TextEdit', 'owner': 'TextEdit', 'status': 'TextEdit', 'avg_trans': 'Range', 'short_name': 'TextEdit', });
lyr_Contiguous_US_1.set('fieldLabels', {'FID': 'no label', 'OBJECTID': 'no label', 'NAME': 'no label', 'STATE_ABBR': 'no label', 'STATE_FIPS': 'no label', 'ORDER_ADM': 'no label', 'MONTH_ADM': 'no label', 'DAY_ADM': 'no label', 'YEAR_ADM': 'no label', 'TYPE': 'no label', 'POP': 'no label', 'SQ_MILES': 'no label', 'PRIM_MILES': 'no label', 'Shape_Leng': 'no label', 'Shape__Are': 'no label', 'Shape__Len': 'no label', 'Status': 'no label', });
lyr_mn_school_districts_2.set('fieldLabels', {'SDORGID': 'no label', 'FORMID': 'no label', 'SDTYPE': 'no label', 'SDNUMBER': 'no label', 'PREFNAME': 'no label', 'SHORTNAME': 'no label', 'WEB_URL': 'no label', 'SQMILES': 'no label', 'ACRES': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'Status': 'no label', 'SuperI': 'no label', 'Email': 'no label', 'Phone': 'no label', 'UpTheAnte': 'no label', 'display': 'no label', 'file_path': 'no label', });
lyr_target_businesses_3.set('fieldLabels', {'name': 'no label', 'category': 'inline label - always visible', 'longitude': 'hidden field', 'latitude': 'hidden field', 'technology': 'no label', 'owner': 'no label', 'status': 'no label', 'avg_trans': 'no label', 'short_name': 'no label', });
lyr_target_businesses_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});