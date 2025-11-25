var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_AREA_DESAGUADERO_1 = new ol.format.GeoJSON();
var features_AREA_DESAGUADERO_1 = format_AREA_DESAGUADERO_1.readFeatures(json_AREA_DESAGUADERO_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AREA_DESAGUADERO_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AREA_DESAGUADERO_1.addFeatures(features_AREA_DESAGUADERO_1);
var lyr_AREA_DESAGUADERO_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AREA_DESAGUADERO_1, 
                style: style_AREA_DESAGUADERO_1,
                popuplayertitle: 'AREA_DESAGUADERO',
                interactive: false,
    title: 'AREA_DESAGUADERO<br />\
    <img src="styles/legend/AREA_DESAGUADERO_1_0.png" /> AREA CULTIVADA<br />\
    <img src="styles/legend/AREA_DESAGUADERO_1_1.png" /> AREA NO CULTIVADA<br />\
    <img src="styles/legend/AREA_DESAGUADERO_1_2.png" /> INFRAESTRUCTURA<br />' });
var format_AREA_BERMEJO_2 = new ol.format.GeoJSON();
var features_AREA_BERMEJO_2 = format_AREA_BERMEJO_2.readFeatures(json_AREA_BERMEJO_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AREA_BERMEJO_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AREA_BERMEJO_2.addFeatures(features_AREA_BERMEJO_2);
var lyr_AREA_BERMEJO_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AREA_BERMEJO_2, 
                style: style_AREA_BERMEJO_2,
                popuplayertitle: 'AREA_BERMEJO',
                interactive: false,
    title: 'AREA_BERMEJO<br />\
    <img src="styles/legend/AREA_BERMEJO_2_0.png" /> AREA CULTIVADA<br />\
    <img src="styles/legend/AREA_BERMEJO_2_1.png" /> AREA NO CULTIVADA<br />\
    <img src="styles/legend/AREA_BERMEJO_2_2.png" /> INFRAESTRUCTURA<br />' });
var format_LIMITENACIONAL_3 = new ol.format.GeoJSON();
var features_LIMITENACIONAL_3 = format_LIMITENACIONAL_3.readFeatures(json_LIMITENACIONAL_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LIMITENACIONAL_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LIMITENACIONAL_3.addFeatures(features_LIMITENACIONAL_3);
var lyr_LIMITENACIONAL_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LIMITENACIONAL_3, 
                style: style_LIMITENACIONAL_3,
                popuplayertitle: 'LIMITE NACIONAL',
                interactive: false,
                title: '<img src="styles/legend/LIMITENACIONAL_3.png" /> LIMITE NACIONAL'
            });
var format_CA_PERIMETROS_ABAS_ASISTIDO_4 = new ol.format.GeoJSON();
var features_CA_PERIMETROS_ABAS_ASISTIDO_4 = format_CA_PERIMETROS_ABAS_ASISTIDO_4.readFeatures(json_CA_PERIMETROS_ABAS_ASISTIDO_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CA_PERIMETROS_ABAS_ASISTIDO_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CA_PERIMETROS_ABAS_ASISTIDO_4.addFeatures(features_CA_PERIMETROS_ABAS_ASISTIDO_4);
var lyr_CA_PERIMETROS_ABAS_ASISTIDO_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CA_PERIMETROS_ABAS_ASISTIDO_4, 
                style: style_CA_PERIMETROS_ABAS_ASISTIDO_4,
                popuplayertitle: 'CA_PERIMETROS_ABAS_ASISTIDO',
                interactive: false,
                title: '<img src="styles/legend/CA_PERIMETROS_ABAS_ASISTIDO_4.png" /> CA_PERIMETROS_ABAS_ASISTIDO'
            });
var format_CENTROSPOBLADOS_5 = new ol.format.GeoJSON();
var features_CENTROSPOBLADOS_5 = format_CENTROSPOBLADOS_5.readFeatures(json_CENTROSPOBLADOS_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CENTROSPOBLADOS_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CENTROSPOBLADOS_5.addFeatures(features_CENTROSPOBLADOS_5);
var lyr_CENTROSPOBLADOS_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CENTROSPOBLADOS_5, 
                style: style_CENTROSPOBLADOS_5,
                popuplayertitle: 'CENTROS POBLADOS',
                interactive: false,
                title: '<img src="styles/legend/CENTROSPOBLADOS_5.png" /> CENTROS POBLADOS'
            });
var format_ABAS_LIMITES_2_6 = new ol.format.GeoJSON();
var features_ABAS_LIMITES_2_6 = format_ABAS_LIMITES_2_6.readFeatures(json_ABAS_LIMITES_2_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ABAS_LIMITES_2_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ABAS_LIMITES_2_6.addFeatures(features_ABAS_LIMITES_2_6);
var lyr_ABAS_LIMITES_2_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ABAS_LIMITES_2_6, 
                style: style_ABAS_LIMITES_2_6,
                popuplayertitle: 'ABAS_LIMITES_2',
                interactive: false,
                title: '<img src="styles/legend/ABAS_LIMITES_2_6.png" /> ABAS_LIMITES_2'
            });
var format_ABAS_LIMITES_1_7 = new ol.format.GeoJSON();
var features_ABAS_LIMITES_1_7 = format_ABAS_LIMITES_1_7.readFeatures(json_ABAS_LIMITES_1_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ABAS_LIMITES_1_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ABAS_LIMITES_1_7.addFeatures(features_ABAS_LIMITES_1_7);
var lyr_ABAS_LIMITES_1_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ABAS_LIMITES_1_7, 
                style: style_ABAS_LIMITES_1_7,
                popuplayertitle: 'ABAS_LIMITES_1',
                interactive: false,
                title: '<img src="styles/legend/ABAS_LIMITES_1_7.png" /> ABAS_LIMITES_1'
            });
var format_ABAS_COCA_LIMITE_8 = new ol.format.GeoJSON();
var features_ABAS_COCA_LIMITE_8 = format_ABAS_COCA_LIMITE_8.readFeatures(json_ABAS_COCA_LIMITE_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ABAS_COCA_LIMITE_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ABAS_COCA_LIMITE_8.addFeatures(features_ABAS_COCA_LIMITE_8);
var lyr_ABAS_COCA_LIMITE_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ABAS_COCA_LIMITE_8, 
                style: style_ABAS_COCA_LIMITE_8,
                popuplayertitle: 'ABAS_COCA_LIMITE',
                interactive: false,
                title: '<img src="styles/legend/ABAS_COCA_LIMITE_8.png" /> ABAS_COCA_LIMITE'
            });
var format_ABAS_COCA_3_9 = new ol.format.GeoJSON();
var features_ABAS_COCA_3_9 = format_ABAS_COCA_3_9.readFeatures(json_ABAS_COCA_3_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ABAS_COCA_3_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ABAS_COCA_3_9.addFeatures(features_ABAS_COCA_3_9);
var lyr_ABAS_COCA_3_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ABAS_COCA_3_9, 
                style: style_ABAS_COCA_3_9,
                popuplayertitle: 'ABAS_COCA_3',
                interactive: false,
                title: '<img src="styles/legend/ABAS_COCA_3_9.png" /> ABAS_COCA_3'
            });
var format_ABAS_COCA_2_10 = new ol.format.GeoJSON();
var features_ABAS_COCA_2_10 = format_ABAS_COCA_2_10.readFeatures(json_ABAS_COCA_2_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ABAS_COCA_2_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ABAS_COCA_2_10.addFeatures(features_ABAS_COCA_2_10);
var lyr_ABAS_COCA_2_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ABAS_COCA_2_10, 
                style: style_ABAS_COCA_2_10,
                popuplayertitle: 'ABAS_COCA_2',
                interactive: false,
                title: '<img src="styles/legend/ABAS_COCA_2_10.png" /> ABAS_COCA_2'
            });
var format_ABAS_COCA_1_11 = new ol.format.GeoJSON();
var features_ABAS_COCA_1_11 = format_ABAS_COCA_1_11.readFeatures(json_ABAS_COCA_1_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ABAS_COCA_1_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ABAS_COCA_1_11.addFeatures(features_ABAS_COCA_1_11);
var lyr_ABAS_COCA_1_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ABAS_COCA_1_11, 
                style: style_ABAS_COCA_1_11,
                popuplayertitle: 'ABAS_COCA_1',
                interactive: false,
                title: '<img src="styles/legend/ABAS_COCA_1_11.png" /> ABAS_COCA_1'
            });
var format_LIMITEMUNICIPAL_12 = new ol.format.GeoJSON();
var features_LIMITEMUNICIPAL_12 = format_LIMITEMUNICIPAL_12.readFeatures(json_LIMITEMUNICIPAL_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LIMITEMUNICIPAL_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LIMITEMUNICIPAL_12.addFeatures(features_LIMITEMUNICIPAL_12);
var lyr_LIMITEMUNICIPAL_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LIMITEMUNICIPAL_12, 
                style: style_LIMITEMUNICIPAL_12,
                popuplayertitle: 'LIMITE MUNICIPAL',
                interactive: false,
                title: '<img src="styles/legend/LIMITEMUNICIPAL_12.png" /> LIMITE MUNICIPAL'
            });
var format_DEPARTAMENTO_13 = new ol.format.GeoJSON();
var features_DEPARTAMENTO_13 = format_DEPARTAMENTO_13.readFeatures(json_DEPARTAMENTO_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DEPARTAMENTO_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DEPARTAMENTO_13.addFeatures(features_DEPARTAMENTO_13);
var lyr_DEPARTAMENTO_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DEPARTAMENTO_13, 
                style: style_DEPARTAMENTO_13,
                popuplayertitle: 'DEPARTAMENTO',
                interactive: false,
                title: '<img src="styles/legend/DEPARTAMENTO_13.png" /> DEPARTAMENTO'
            });
var format_FRANJAFRONTERA50KM_14 = new ol.format.GeoJSON();
var features_FRANJAFRONTERA50KM_14 = format_FRANJAFRONTERA50KM_14.readFeatures(json_FRANJAFRONTERA50KM_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FRANJAFRONTERA50KM_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FRANJAFRONTERA50KM_14.addFeatures(features_FRANJAFRONTERA50KM_14);
var lyr_FRANJAFRONTERA50KM_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FRANJAFRONTERA50KM_14, 
                style: style_FRANJAFRONTERA50KM_14,
                popuplayertitle: 'FRANJA FRONTERA 50 KM',
                interactive: false,
                title: '<img src="styles/legend/FRANJAFRONTERA50KM_14.png" /> FRANJA FRONTERA 50 KM'
            });
var format_MARCODELISTA_15 = new ol.format.GeoJSON();
var features_MARCODELISTA_15 = format_MARCODELISTA_15.readFeatures(json_MARCODELISTA_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MARCODELISTA_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MARCODELISTA_15.addFeatures(features_MARCODELISTA_15);
var lyr_MARCODELISTA_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MARCODELISTA_15, 
                style: style_MARCODELISTA_15,
                popuplayertitle: 'MARCO DE LISTA',
                interactive: false,
                title: '<img src="styles/legend/MARCODELISTA_15.png" /> MARCO DE LISTA'
            });
var format_P_49Amanzanado_16 = new ol.format.GeoJSON();
var features_P_49Amanzanado_16 = format_P_49Amanzanado_16.readFeatures(json_P_49Amanzanado_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_P_49Amanzanado_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_P_49Amanzanado_16.addFeatures(features_P_49Amanzanado_16);
var lyr_P_49Amanzanado_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_P_49Amanzanado_16, 
                style: style_P_49Amanzanado_16,
                popuplayertitle: 'P_49 Amanzanado',
                interactive: false,
                title: '<img src="styles/legend/P_49Amanzanado_16.png" /> P_49 Amanzanado'
            });
var format_P_49Disperso_17 = new ol.format.GeoJSON();
var features_P_49Disperso_17 = format_P_49Disperso_17.readFeatures(json_P_49Disperso_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_P_49Disperso_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_P_49Disperso_17.addFeatures(features_P_49Disperso_17);
var lyr_P_49Disperso_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_P_49Disperso_17, 
                style: style_P_49Disperso_17,
                popuplayertitle: 'P_49 Disperso',
                interactive: false,
                title: '<img src="styles/legend/P_49Disperso_17.png" /> P_49 Disperso'
            });
var group_P49 = new ol.layer.Group({
                                layers: [lyr_P_49Amanzanado_16,lyr_P_49Disperso_17,],
                                fold: 'close',
                                title: 'P- 49'});
var group_CONFLICTO_COCA = new ol.layer.Group({
                                layers: [lyr_ABAS_COCA_3_9,lyr_ABAS_COCA_2_10,lyr_ABAS_COCA_1_11,],
                                fold: 'close',
                                title: 'CONFLICTO_COCA'});
var group_CONFLICTOSLIMITES = new ol.layer.Group({
                                layers: [lyr_ABAS_LIMITES_2_6,lyr_ABAS_LIMITES_1_7,],
                                fold: 'close',
                                title: 'CONFLICTOS LIMITES'});
var group_IMAGENSATELITAL = new ol.layer.Group({
                                layers: [lyr_AREA_DESAGUADERO_1,lyr_AREA_BERMEJO_2,],
                                fold: 'close',
                                title: 'IMAGEN SATELITAL'});

lyr_GoogleSatellite_0.setVisible(true);lyr_AREA_DESAGUADERO_1.setVisible(false);lyr_AREA_BERMEJO_2.setVisible(false);lyr_LIMITENACIONAL_3.setVisible(true);lyr_CA_PERIMETROS_ABAS_ASISTIDO_4.setVisible(true);lyr_CENTROSPOBLADOS_5.setVisible(true);lyr_ABAS_LIMITES_2_6.setVisible(false);lyr_ABAS_LIMITES_1_7.setVisible(false);lyr_ABAS_COCA_LIMITE_8.setVisible(false);lyr_ABAS_COCA_3_9.setVisible(false);lyr_ABAS_COCA_2_10.setVisible(false);lyr_ABAS_COCA_1_11.setVisible(false);lyr_LIMITEMUNICIPAL_12.setVisible(true);lyr_DEPARTAMENTO_13.setVisible(true);lyr_FRANJAFRONTERA50KM_14.setVisible(false);lyr_MARCODELISTA_15.setVisible(true);lyr_P_49Amanzanado_16.setVisible(true);lyr_P_49Disperso_17.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,group_IMAGENSATELITAL,lyr_LIMITENACIONAL_3,lyr_CA_PERIMETROS_ABAS_ASISTIDO_4,lyr_CENTROSPOBLADOS_5,group_CONFLICTOSLIMITES,lyr_ABAS_COCA_LIMITE_8,group_CONFLICTO_COCA,lyr_LIMITEMUNICIPAL_12,lyr_DEPARTAMENTO_13,lyr_FRANJAFRONTERA50KM_14,lyr_MARCODELISTA_15,group_P49];
lyr_AREA_DESAGUADERO_1.set('fieldAliases', {'cod_clas': 'cod_clas', 'SUPER': 'SUPER', 'cod_area': 'cod_area', 'area_ha': 'area_ha', 'cultivo': 'cultivo', 'cod_depto': 'cod_depto', 'depto': 'depto', 'cod_prov': 'cod_prov', 'prov': 'prov', 'cod_mpio': 'cod_mpio', 'mpio': 'mpio', 'cod_cd_com': 'cod_cd_com', 'ciu_com': 'ciu_com', 'id_ciu_com': 'id_ciu_com', 'ord_mun': 'ord_mun', 'cod_ag': 'cod_ag', 'con_ag': 'con_ag', 'ag_unico': 'ag_unico', 'cod_ae': 'cod_ae', 'con_ae': 'con_ae', 'ae_unico': 'ae_unico', 'cod_aba': 'cod_aba', 'aba_unico': 'aba_unico', 'upa_fin': 'upa_fin', 'zona_utm': 'zona_utm', 'region': 'region', });
lyr_AREA_BERMEJO_2.set('fieldAliases', {'cod_clas': 'cod_clas', 'SUPER': 'SUPER', 'cod_area': 'cod_area', 'area_ha': 'area_ha', 'cultivo': 'cultivo', 'cod_depto': 'cod_depto', 'depto': 'depto', 'cod_prov': 'cod_prov', 'prov': 'prov', 'cod_mpio': 'cod_mpio', 'mpio': 'mpio', 'cod_cd_com': 'cod_cd_com', 'ciu_com': 'ciu_com', 'id_ciu_com': 'id_ciu_com', 'ord_mun': 'ord_mun', 'cod_ag': 'cod_ag', 'con_ag': 'con_ag', 'ag_unico': 'ag_unico', 'cod_ae': 'cod_ae', 'con_ae': 'con_ae', 'ae_unico': 'ae_unico', 'cod_aba': 'cod_aba', 'aba_unico': 'aba_unico', 'upa_fin': 'upa_fin', 'zona_utm': 'zona_utm', 'region': 'region', });
lyr_LIMITENACIONAL_3.set('fieldAliases', {'id': 'id', 'cod_depto': 'cod_depto', 'depto': 'depto', 'cod_prov': 'cod_prov', 'prov': 'prov', 'cod_mpio': 'cod_mpio', 'mpio': 'mpio', 'tioc_aioc': 'tioc_aioc', 'ord_mun': 'ord_mun', 'nro_ley': 'nro_ley', 'fecha_ley': 'fecha_ley', 'bl_comli_m': 'bl_comli_m', 'capital': 'capital', 'f_crec_tot': 'f_crec_tot', 'cultprin23': 'cultprin23', 'prodagri23': 'prodagri23', 'prodpecu23': 'prodpecu23', 'voc_sup_ha': 'voc_sup_ha', 'potencial': 'potencial', 'cob_veget': 'cob_veget', 'cob_veg_ha': 'cob_veg_ha', 'uso_actual': 'uso_actual', 'uso_act_ha': 'uso_act_ha', 'mpio_2012': 'mpio_2012', 'po_cnpv_12': 'po_cnpv_12', 'mpio_2024': 'mpio_2024', 'po_cpv_24': 'po_cpv_24', 'img_siembr': 'img_siembr', 'img_cosech': 'img_cosech', 'avan_mm': 'avan_mm', 'sup_cult': 'sup_cult', 'sup_n_cult': 'sup_n_cult', 'limit': 'limit', });
lyr_CA_PERIMETROS_ABAS_ASISTIDO_4.set('fieldAliases', {'depto': 'depto', 'mpio': 'mpio', 'ciu_com': 'ciu_com', });
lyr_CENTROSPOBLADOS_5.set('fieldAliases', {'depto': 'depto', 'prov': 'prov', 'mpio': 'mpio', 'ciu_com': 'ciu_com', });
lyr_ABAS_LIMITES_2_6.set('fieldAliases', {'depto': 'depto', 'mpio': 'mpio', 'ciu_com': 'ciu_com', 'categoria': 'categoria', });
lyr_ABAS_LIMITES_1_7.set('fieldAliases', {'depto': 'depto', 'mpio': 'mpio', 'ciu_com': 'ciu_com', 'categoria': 'categoria', });
lyr_ABAS_COCA_LIMITE_8.set('fieldAliases', {'depto': 'depto', 'mpio': 'mpio', 'ciu_com': 'ciu_com', 'categoria': 'categoria', });
lyr_ABAS_COCA_3_9.set('fieldAliases', {'depto': 'depto', 'mpio': 'mpio', 'ciu_com': 'ciu_com', 'categoria': 'categoria', });
lyr_ABAS_COCA_2_10.set('fieldAliases', {'depto': 'depto', 'mpio': 'mpio', 'ciu_com': 'ciu_com', 'categoria': 'categoria', });
lyr_ABAS_COCA_1_11.set('fieldAliases', {'depto': 'depto', 'mpio': 'mpio', 'ciu_com': 'ciu_com', 'categoria': 'categoria', });
lyr_LIMITEMUNICIPAL_12.set('fieldAliases', {'id': 'id', 'cod_depto': 'cod_depto', 'depto': 'depto', 'cod_prov': 'cod_prov', 'prov': 'prov', 'cod_mpio': 'cod_mpio', 'mpio': 'mpio', 'tioc_aioc': 'tioc_aioc', 'ord_mun': 'ord_mun', 'nro_ley': 'nro_ley', 'fecha_ley': 'fecha_ley', 'bl_comli_m': 'bl_comli_m', 'capital': 'capital', 'f_crec_tot': 'f_crec_tot', 'cultprin23': 'cultprin23', 'prodagri23': 'prodagri23', 'prodpecu23': 'prodpecu23', 'voc_sup_ha': 'voc_sup_ha', 'potencial': 'potencial', 'cob_veget': 'cob_veget', 'cob_veg_ha': 'cob_veg_ha', 'uso_actual': 'uso_actual', 'uso_act_ha': 'uso_act_ha', 'mpio_2012': 'mpio_2012', 'po_cnpv_12': 'po_cnpv_12', 'mpio_2024': 'mpio_2024', 'po_cpv_24': 'po_cpv_24', 'img_siembr': 'img_siembr', 'img_cosech': 'img_cosech', 'avan_mm': 'avan_mm', 'sup_cult': 'sup_cult', 'sup_n_cult': 'sup_n_cult', });
lyr_DEPARTAMENTO_13.set('fieldAliases', {'id': 'id', 'cod_depto': 'cod_depto', 'depto': 'depto', 'cod_prov': 'cod_prov', 'prov': 'prov', 'cod_mpio': 'cod_mpio', 'mpio': 'mpio', 'tioc_aioc': 'tioc_aioc', 'ord_mun': 'ord_mun', 'nro_ley': 'nro_ley', 'fecha_ley': 'fecha_ley', 'bl_comli_m': 'bl_comli_m', 'capital': 'capital', 'f_crec_tot': 'f_crec_tot', 'cultprin23': 'cultprin23', 'prodagri23': 'prodagri23', 'prodpecu23': 'prodpecu23', 'voc_sup_ha': 'voc_sup_ha', 'potencial': 'potencial', 'cob_veget': 'cob_veget', 'cob_veg_ha': 'cob_veg_ha', 'uso_actual': 'uso_actual', 'uso_act_ha': 'uso_act_ha', 'mpio_2012': 'mpio_2012', 'po_cnpv_12': 'po_cnpv_12', 'mpio_2024': 'mpio_2024', 'po_cpv_24': 'po_cpv_24', 'img_siembr': 'img_siembr', 'img_cosech': 'img_cosech', 'avan_mm': 'avan_mm', 'sup_cult': 'sup_cult', 'sup_n_cult': 'sup_n_cult', });
lyr_FRANJAFRONTERA50KM_14.set('fieldAliases', {'id': 'id', 'cod_depto': 'cod_depto', 'depto': 'depto', 'cod_prov': 'cod_prov', 'prov': 'prov', 'cod_mpio': 'cod_mpio', 'mpio': 'mpio', 'tioc_aioc': 'tioc_aioc', 'ord_mun': 'ord_mun', 'nro_ley': 'nro_ley', 'fecha_ley': 'fecha_ley', 'bl_comli_m': 'bl_comli_m', 'capital': 'capital', 'f_crec_tot': 'f_crec_tot', 'cultprin23': 'cultprin23', 'prodagri23': 'prodagri23', 'prodpecu23': 'prodpecu23', 'voc_sup_ha': 'voc_sup_ha', 'potencial': 'potencial', 'cob_veget': 'cob_veget', 'cob_veg_ha': 'cob_veg_ha', 'uso_actual': 'uso_actual', 'uso_act_ha': 'uso_act_ha', 'mpio_2012': 'mpio_2012', 'po_cnpv_12': 'po_cnpv_12', 'mpio_2024': 'mpio_2024', 'po_cpv_24': 'po_cpv_24', 'img_siembr': 'img_siembr', 'img_cosech': 'img_cosech', 'avan_mm': 'avan_mm', 'sup_cult': 'sup_cult', 'sup_n_cult': 'sup_n_cult', 'limit': 'limit', });
lyr_MARCODELISTA_15.set('fieldAliases', {'n_depto': 'n_depto', 'n_mpio': 'n_mpio', });
lyr_P_49Amanzanado_16.set('fieldAliases', {'em_depto': 'em_depto', 'em_mpio': 'em_mpio', });
lyr_P_49Disperso_17.set('fieldAliases', {'em_depto': 'em_depto', 'em_mpio': 'em_mpio', });
lyr_AREA_DESAGUADERO_1.set('fieldImages', {'cod_clas': 'TextEdit', 'SUPER': 'TextEdit', 'cod_area': 'TextEdit', 'area_ha': 'TextEdit', 'cultivo': 'TextEdit', 'cod_depto': 'TextEdit', 'depto': 'TextEdit', 'cod_prov': 'TextEdit', 'prov': 'TextEdit', 'cod_mpio': 'TextEdit', 'mpio': 'TextEdit', 'cod_cd_com': 'TextEdit', 'ciu_com': 'TextEdit', 'id_ciu_com': 'TextEdit', 'ord_mun': 'TextEdit', 'cod_ag': 'TextEdit', 'con_ag': 'TextEdit', 'ag_unico': 'TextEdit', 'cod_ae': 'TextEdit', 'con_ae': 'TextEdit', 'ae_unico': 'TextEdit', 'cod_aba': 'TextEdit', 'aba_unico': 'TextEdit', 'upa_fin': 'TextEdit', 'zona_utm': 'Range', 'region': 'TextEdit', });
lyr_AREA_BERMEJO_2.set('fieldImages', {'cod_clas': 'TextEdit', 'SUPER': 'TextEdit', 'cod_area': 'TextEdit', 'area_ha': 'TextEdit', 'cultivo': 'TextEdit', 'cod_depto': 'TextEdit', 'depto': 'TextEdit', 'cod_prov': 'TextEdit', 'prov': 'TextEdit', 'cod_mpio': 'TextEdit', 'mpio': 'TextEdit', 'cod_cd_com': 'TextEdit', 'ciu_com': 'TextEdit', 'id_ciu_com': 'TextEdit', 'ord_mun': 'TextEdit', 'cod_ag': 'TextEdit', 'con_ag': 'TextEdit', 'ag_unico': 'TextEdit', 'cod_ae': 'TextEdit', 'con_ae': 'TextEdit', 'ae_unico': 'TextEdit', 'cod_aba': 'TextEdit', 'aba_unico': 'TextEdit', 'upa_fin': 'TextEdit', 'zona_utm': 'Range', 'region': 'TextEdit', });
lyr_LIMITENACIONAL_3.set('fieldImages', {'id': 'TextEdit', 'cod_depto': 'TextEdit', 'depto': 'TextEdit', 'cod_prov': 'TextEdit', 'prov': 'TextEdit', 'cod_mpio': 'TextEdit', 'mpio': 'TextEdit', 'tioc_aioc': 'TextEdit', 'ord_mun': 'TextEdit', 'nro_ley': 'TextEdit', 'fecha_ley': 'TextEdit', 'bl_comli_m': 'TextEdit', 'capital': 'TextEdit', 'f_crec_tot': 'TextEdit', 'cultprin23': 'TextEdit', 'prodagri23': 'TextEdit', 'prodpecu23': 'TextEdit', 'voc_sup_ha': 'TextEdit', 'potencial': 'TextEdit', 'cob_veget': 'TextEdit', 'cob_veg_ha': 'TextEdit', 'uso_actual': 'TextEdit', 'uso_act_ha': 'TextEdit', 'mpio_2012': 'TextEdit', 'po_cnpv_12': 'TextEdit', 'mpio_2024': 'TextEdit', 'po_cpv_24': 'TextEdit', 'img_siembr': 'TextEdit', 'img_cosech': 'TextEdit', 'avan_mm': 'TextEdit', 'sup_cult': 'TextEdit', 'sup_n_cult': 'TextEdit', 'limit': 'TextEdit', });
lyr_CA_PERIMETROS_ABAS_ASISTIDO_4.set('fieldImages', {'depto': 'TextEdit', 'mpio': 'TextEdit', 'ciu_com': 'TextEdit', });
lyr_CENTROSPOBLADOS_5.set('fieldImages', {'depto': 'TextEdit', 'prov': 'TextEdit', 'mpio': 'TextEdit', 'ciu_com': 'TextEdit', });
lyr_ABAS_LIMITES_2_6.set('fieldImages', {'depto': 'TextEdit', 'mpio': 'TextEdit', 'ciu_com': 'TextEdit', 'categoria': 'TextEdit', });
lyr_ABAS_LIMITES_1_7.set('fieldImages', {'depto': 'TextEdit', 'mpio': 'TextEdit', 'ciu_com': 'TextEdit', 'categoria': 'TextEdit', });
lyr_ABAS_COCA_LIMITE_8.set('fieldImages', {'depto': 'TextEdit', 'mpio': 'TextEdit', 'ciu_com': 'TextEdit', 'categoria': 'TextEdit', });
lyr_ABAS_COCA_3_9.set('fieldImages', {'depto': 'TextEdit', 'mpio': 'TextEdit', 'ciu_com': 'TextEdit', 'categoria': 'TextEdit', });
lyr_ABAS_COCA_2_10.set('fieldImages', {'depto': 'TextEdit', 'mpio': 'TextEdit', 'ciu_com': 'TextEdit', 'categoria': 'TextEdit', });
lyr_ABAS_COCA_1_11.set('fieldImages', {'depto': 'TextEdit', 'mpio': 'TextEdit', 'ciu_com': 'TextEdit', 'categoria': 'TextEdit', });
lyr_LIMITEMUNICIPAL_12.set('fieldImages', {'id': 'TextEdit', 'cod_depto': 'TextEdit', 'depto': 'TextEdit', 'cod_prov': 'TextEdit', 'prov': 'TextEdit', 'cod_mpio': 'TextEdit', 'mpio': 'TextEdit', 'tioc_aioc': 'TextEdit', 'ord_mun': 'TextEdit', 'nro_ley': 'TextEdit', 'fecha_ley': 'TextEdit', 'bl_comli_m': 'TextEdit', 'capital': 'TextEdit', 'f_crec_tot': 'TextEdit', 'cultprin23': 'TextEdit', 'prodagri23': 'TextEdit', 'prodpecu23': 'TextEdit', 'voc_sup_ha': 'TextEdit', 'potencial': 'TextEdit', 'cob_veget': 'TextEdit', 'cob_veg_ha': 'TextEdit', 'uso_actual': 'TextEdit', 'uso_act_ha': 'TextEdit', 'mpio_2012': 'TextEdit', 'po_cnpv_12': 'Range', 'mpio_2024': 'TextEdit', 'po_cpv_24': 'Range', 'img_siembr': 'Range', 'img_cosech': 'Range', 'avan_mm': 'Range', 'sup_cult': 'TextEdit', 'sup_n_cult': 'TextEdit', });
lyr_DEPARTAMENTO_13.set('fieldImages', {'id': 'TextEdit', 'cod_depto': 'TextEdit', 'depto': 'TextEdit', 'cod_prov': 'TextEdit', 'prov': 'TextEdit', 'cod_mpio': 'TextEdit', 'mpio': 'TextEdit', 'tioc_aioc': 'TextEdit', 'ord_mun': 'TextEdit', 'nro_ley': 'TextEdit', 'fecha_ley': 'TextEdit', 'bl_comli_m': 'TextEdit', 'capital': 'TextEdit', 'f_crec_tot': 'TextEdit', 'cultprin23': 'TextEdit', 'prodagri23': 'TextEdit', 'prodpecu23': 'TextEdit', 'voc_sup_ha': 'TextEdit', 'potencial': 'TextEdit', 'cob_veget': 'TextEdit', 'cob_veg_ha': 'TextEdit', 'uso_actual': 'TextEdit', 'uso_act_ha': 'TextEdit', 'mpio_2012': 'TextEdit', 'po_cnpv_12': 'TextEdit', 'mpio_2024': 'TextEdit', 'po_cpv_24': 'TextEdit', 'img_siembr': 'TextEdit', 'img_cosech': 'TextEdit', 'avan_mm': 'TextEdit', 'sup_cult': 'TextEdit', 'sup_n_cult': 'TextEdit', });
lyr_FRANJAFRONTERA50KM_14.set('fieldImages', {'id': 'TextEdit', 'cod_depto': 'TextEdit', 'depto': 'TextEdit', 'cod_prov': 'TextEdit', 'prov': 'TextEdit', 'cod_mpio': 'TextEdit', 'mpio': 'TextEdit', 'tioc_aioc': 'TextEdit', 'ord_mun': 'TextEdit', 'nro_ley': 'TextEdit', 'fecha_ley': 'TextEdit', 'bl_comli_m': 'TextEdit', 'capital': 'TextEdit', 'f_crec_tot': 'TextEdit', 'cultprin23': 'TextEdit', 'prodagri23': 'TextEdit', 'prodpecu23': 'TextEdit', 'voc_sup_ha': 'TextEdit', 'potencial': 'TextEdit', 'cob_veget': 'TextEdit', 'cob_veg_ha': 'TextEdit', 'uso_actual': 'TextEdit', 'uso_act_ha': 'TextEdit', 'mpio_2012': 'TextEdit', 'po_cnpv_12': 'TextEdit', 'mpio_2024': 'TextEdit', 'po_cpv_24': 'TextEdit', 'img_siembr': 'TextEdit', 'img_cosech': 'TextEdit', 'avan_mm': 'TextEdit', 'sup_cult': 'TextEdit', 'sup_n_cult': 'TextEdit', 'limit': 'TextEdit', });
lyr_MARCODELISTA_15.set('fieldImages', {'n_depto': 'TextEdit', 'n_mpio': 'TextEdit', });
lyr_P_49Amanzanado_16.set('fieldImages', {'em_depto': 'TextEdit', 'em_mpio': 'TextEdit', });
lyr_P_49Disperso_17.set('fieldImages', {'em_depto': 'TextEdit', 'em_mpio': 'TextEdit', });
lyr_AREA_DESAGUADERO_1.set('fieldLabels', {'cod_clas': 'no label', 'SUPER': 'no label', 'cod_area': 'no label', 'area_ha': 'no label', 'cultivo': 'no label', 'cod_depto': 'no label', 'depto': 'no label', 'cod_prov': 'no label', 'prov': 'no label', 'cod_mpio': 'no label', 'mpio': 'no label', 'cod_cd_com': 'no label', 'ciu_com': 'no label', 'id_ciu_com': 'no label', 'ord_mun': 'no label', 'cod_ag': 'no label', 'con_ag': 'no label', 'ag_unico': 'no label', 'cod_ae': 'no label', 'con_ae': 'no label', 'ae_unico': 'no label', 'cod_aba': 'no label', 'aba_unico': 'no label', 'upa_fin': 'no label', 'zona_utm': 'no label', 'region': 'no label', });
lyr_AREA_BERMEJO_2.set('fieldLabels', {'cod_clas': 'inline label - visible with data', 'SUPER': 'inline label - always visible', 'cod_area': 'no label', 'area_ha': 'no label', 'cultivo': 'no label', 'cod_depto': 'no label', 'depto': 'no label', 'cod_prov': 'no label', 'prov': 'no label', 'cod_mpio': 'no label', 'mpio': 'no label', 'cod_cd_com': 'no label', 'ciu_com': 'no label', 'id_ciu_com': 'no label', 'ord_mun': 'no label', 'cod_ag': 'no label', 'con_ag': 'no label', 'ag_unico': 'no label', 'cod_ae': 'no label', 'con_ae': 'no label', 'ae_unico': 'no label', 'cod_aba': 'no label', 'aba_unico': 'no label', 'upa_fin': 'no label', 'zona_utm': 'no label', 'region': 'no label', });
lyr_LIMITENACIONAL_3.set('fieldLabels', {'id': 'no label', 'cod_depto': 'no label', 'depto': 'no label', 'cod_prov': 'no label', 'prov': 'no label', 'cod_mpio': 'no label', 'mpio': 'no label', 'tioc_aioc': 'no label', 'ord_mun': 'no label', 'nro_ley': 'no label', 'fecha_ley': 'no label', 'bl_comli_m': 'no label', 'capital': 'no label', 'f_crec_tot': 'no label', 'cultprin23': 'no label', 'prodagri23': 'no label', 'prodpecu23': 'no label', 'voc_sup_ha': 'no label', 'potencial': 'no label', 'cob_veget': 'no label', 'cob_veg_ha': 'no label', 'uso_actual': 'no label', 'uso_act_ha': 'no label', 'mpio_2012': 'no label', 'po_cnpv_12': 'no label', 'mpio_2024': 'no label', 'po_cpv_24': 'no label', 'img_siembr': 'no label', 'img_cosech': 'no label', 'avan_mm': 'no label', 'sup_cult': 'no label', 'sup_n_cult': 'no label', 'limit': 'no label', });
lyr_CA_PERIMETROS_ABAS_ASISTIDO_4.set('fieldLabels', {'depto': 'no label', 'mpio': 'no label', 'ciu_com': 'no label', });
lyr_CENTROSPOBLADOS_5.set('fieldLabels', {'depto': 'no label', 'prov': 'no label', 'mpio': 'no label', 'ciu_com': 'no label', });
lyr_ABAS_LIMITES_2_6.set('fieldLabels', {'depto': 'no label', 'mpio': 'no label', 'ciu_com': 'no label', 'categoria': 'no label', });
lyr_ABAS_LIMITES_1_7.set('fieldLabels', {'depto': 'no label', 'mpio': 'no label', 'ciu_com': 'no label', 'categoria': 'no label', });
lyr_ABAS_COCA_LIMITE_8.set('fieldLabels', {'depto': 'no label', 'mpio': 'no label', 'ciu_com': 'no label', 'categoria': 'no label', });
lyr_ABAS_COCA_3_9.set('fieldLabels', {'depto': 'no label', 'mpio': 'no label', 'ciu_com': 'no label', 'categoria': 'no label', });
lyr_ABAS_COCA_2_10.set('fieldLabels', {'depto': 'no label', 'mpio': 'no label', 'ciu_com': 'no label', 'categoria': 'no label', });
lyr_ABAS_COCA_1_11.set('fieldLabels', {'depto': 'no label', 'mpio': 'no label', 'ciu_com': 'no label', 'categoria': 'no label', });
lyr_LIMITEMUNICIPAL_12.set('fieldLabels', {'id': 'no label', 'cod_depto': 'no label', 'depto': 'no label', 'cod_prov': 'no label', 'prov': 'no label', 'cod_mpio': 'no label', 'mpio': 'no label', 'tioc_aioc': 'no label', 'ord_mun': 'no label', 'nro_ley': 'no label', 'fecha_ley': 'no label', 'bl_comli_m': 'no label', 'capital': 'no label', 'f_crec_tot': 'no label', 'cultprin23': 'no label', 'prodagri23': 'no label', 'prodpecu23': 'no label', 'voc_sup_ha': 'no label', 'potencial': 'no label', 'cob_veget': 'no label', 'cob_veg_ha': 'no label', 'uso_actual': 'no label', 'uso_act_ha': 'no label', 'mpio_2012': 'no label', 'po_cnpv_12': 'no label', 'mpio_2024': 'no label', 'po_cpv_24': 'no label', 'img_siembr': 'no label', 'img_cosech': 'no label', 'avan_mm': 'no label', 'sup_cult': 'no label', 'sup_n_cult': 'no label', });
lyr_DEPARTAMENTO_13.set('fieldLabels', {'id': 'no label', 'cod_depto': 'no label', 'depto': 'no label', 'cod_prov': 'no label', 'prov': 'no label', 'cod_mpio': 'no label', 'mpio': 'no label', 'tioc_aioc': 'no label', 'ord_mun': 'no label', 'nro_ley': 'no label', 'fecha_ley': 'no label', 'bl_comli_m': 'no label', 'capital': 'no label', 'f_crec_tot': 'no label', 'cultprin23': 'no label', 'prodagri23': 'no label', 'prodpecu23': 'no label', 'voc_sup_ha': 'no label', 'potencial': 'no label', 'cob_veget': 'no label', 'cob_veg_ha': 'no label', 'uso_actual': 'no label', 'uso_act_ha': 'no label', 'mpio_2012': 'no label', 'po_cnpv_12': 'no label', 'mpio_2024': 'no label', 'po_cpv_24': 'no label', 'img_siembr': 'no label', 'img_cosech': 'no label', 'avan_mm': 'no label', 'sup_cult': 'no label', 'sup_n_cult': 'no label', });
lyr_FRANJAFRONTERA50KM_14.set('fieldLabels', {'id': 'no label', 'cod_depto': 'no label', 'depto': 'no label', 'cod_prov': 'no label', 'prov': 'no label', 'cod_mpio': 'no label', 'mpio': 'no label', 'tioc_aioc': 'no label', 'ord_mun': 'no label', 'nro_ley': 'no label', 'fecha_ley': 'no label', 'bl_comli_m': 'no label', 'capital': 'no label', 'f_crec_tot': 'no label', 'cultprin23': 'no label', 'prodagri23': 'no label', 'prodpecu23': 'no label', 'voc_sup_ha': 'no label', 'potencial': 'no label', 'cob_veget': 'no label', 'cob_veg_ha': 'no label', 'uso_actual': 'no label', 'uso_act_ha': 'no label', 'mpio_2012': 'no label', 'po_cnpv_12': 'no label', 'mpio_2024': 'no label', 'po_cpv_24': 'no label', 'img_siembr': 'no label', 'img_cosech': 'no label', 'avan_mm': 'no label', 'sup_cult': 'no label', 'sup_n_cult': 'no label', 'limit': 'no label', });
lyr_MARCODELISTA_15.set('fieldLabels', {'n_depto': 'no label', 'n_mpio': 'no label', });
lyr_P_49Amanzanado_16.set('fieldLabels', {'em_depto': 'no label', 'em_mpio': 'no label', });
lyr_P_49Disperso_17.set('fieldLabels', {'em_depto': 'no label', 'em_mpio': 'no label', });
lyr_P_49Disperso_17.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});