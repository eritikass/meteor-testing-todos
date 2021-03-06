/**
 * Created by eritikass on 01/02/16.
 */


// @link https://github.com/eritikass/google_spreadsheet_eve_postracker/blob/master/towerdata.gs#L36
var POS_DATA = {
    "12235":{
        "typeID":"12235",
        "typeName":"Amarr Control Tower",
        "fuel":{
            "hour":40,
            "typeID":4247
        }
    },
    "20059":{
        "typeID":"20059",
        "typeName":"Amarr Control Tower Medium",
        "fuel":{
            "hour":20,
            "typeID":4247
        }
    },
    "20060":{
        "typeID":"20060",
        "typeName":"Amarr Control Tower Small",
        "fuel":{
            "hour":10,
            "typeID":4247
        }
    },
    "27539":{
        "typeID":"27539",
        "typeName":"Angel Control Tower",
        "fuel":{
            "hour":36,
            "typeID":4246
        }
    },
    "27607":{
        "typeID":"27607",
        "typeName":"Angel Control Tower Medium",
        "fuel":{
            "hour":18,
            "typeID":4246
        }
    },
    "27610":{
        "typeID":"27610",
        "typeName":"Angel Control Tower Small",
        "fuel":{
            "hour":9,
            "typeID":4246
        }
    },
    "27530":{
        "typeID":"27530",
        "typeName":"Blood Control Tower",
        "fuel":{
            "hour":36,
            "typeID":4247
        }
    },
    "27589":{
        "typeID":"27589",
        "typeName":"Blood Control Tower Medium",
        "fuel":{
            "hour":18,
            "typeID":4247
        }
    },
    "27592":{
        "typeID":"27592",
        "typeName":"Blood Control Tower Small",
        "fuel":{
            "hour":9,
            "typeID":4247
        }
    },
    "16213":{
        "typeID":"16213",
        "typeName":"Caldari Control Tower",
        "fuel":{
            "hour":40,
            "typeID":4051
        }
    },
    "20061":{
        "typeID":"20061",
        "typeName":"Caldari Control Tower Medium",
        "fuel":{
            "hour":20,
            "typeID":4051
        }
    },
    "20062":{
        "typeID":"20062",
        "typeName":"Caldari Control Tower Small",
        "fuel":{
            "hour":10,
            "typeID":4051
        }
    },
    "27532":{
        "typeID":"27532",
        "typeName":"Dark Blood Control Tower",
        "fuel":{
            "hour":32,
            "typeID":4247
        }
    },
    "27591":{
        "typeID":"27591",
        "typeName":"Dark Blood Control Tower Medium",
        "fuel":{
            "hour":16,
            "typeID":4247
        }
    },
    "27594":{
        "typeID":"27594",
        "typeName":"Dark Blood Control Tower Small",
        "fuel":{
            "hour":8,
            "typeID":4247
        }
    },
    "27540":{
        "typeID":"27540",
        "typeName":"Domination Control Tower",
        "fuel":{
            "hour":32,
            "typeID":4246
        }
    },
    "27609":{
        "typeID":"27609",
        "typeName":"Domination Control Tower Medium",
        "fuel":{
            "hour":16,
            "typeID":4246
        }
    },
    "27612":{
        "typeID":"27612",
        "typeName":"Domination Control Tower Small",
        "fuel":{
            "hour":8,
            "typeID":4246
        }
    },
    "27535":{
        "typeID":"27535",
        "typeName":"Dread Guristas Control Tower",
        "fuel":{
            "hour":32,
            "typeID":4051
        }
    },
    "27597":{
        "typeID":"27597",
        "typeName":"Dread Guristas Control Tower Medium",
        "fuel":{
            "hour":16,
            "typeID":4051
        }
    },
    "27600":{
        "typeID":"27600",
        "typeName":"Dread Guristas Control Tower Small",
        "fuel":{
            "hour":8,
            "typeID":4051
        }
    },
    "12236":{
        "typeID":"12236",
        "typeName":"Gallente Control Tower",
        "fuel":{
            "hour":40,
            "typeID":4312
        }
    },
    "20063":{
        "typeID":"20063",
        "typeName":"Gallente Control Tower Medium",
        "fuel":{
            "hour":20,
            "typeID":4312
        }
    },
    "20064":{
        "typeID":"20064",
        "typeName":"Gallente Control Tower Small",
        "fuel":{
            "hour":10,
            "typeID":4312
        }
    },
    "27533":{
        "typeID":"27533",
        "typeName":"Guristas Control Tower",
        "fuel":{
            "hour":36,
            "typeID":4051
        }
    },
    "27595":{
        "typeID":"27595",
        "typeName":"Guristas Control Tower Medium",
        "fuel":{
            "hour":18,
            "typeID":4051
        }
    },
    "27598":{
        "typeID":"27598",
        "typeName":"Guristas Control Tower Small",
        "fuel":{
            "hour":9,
            "typeID":4051
        }
    },
    "16214":{
        "typeID":"16214",
        "typeName":"Minmatar Control Tower",
        "fuel":{
            "hour":40,
            "typeID":4246
        }
    },
    "20065":{
        "typeID":"20065",
        "typeName":"Minmatar Control Tower Medium",
        "fuel":{
            "hour":20,
            "typeID":4246
        }
    },
    "20066":{
        "typeID":"20066",
        "typeName":"Minmatar Control Tower Small",
        "fuel":{
            "hour":10,
            "typeID":4246
        }
    },
    "27780":{
        "typeID":"27780",
        "typeName":"Sansha Control Tower",
        "fuel":{
            "hour":36,
            "typeID":4247
        }
    },
    "27782":{
        "typeID":"27782",
        "typeName":"Sansha Control Tower Medium",
        "fuel":{
            "hour":18,
            "typeID":4247
        }
    },
    "27784":{
        "typeID":"27784",
        "typeName":"Sansha Control Tower Small",
        "fuel":{
            "hour":9,
            "typeID":4247
        }
    },
    "27536":{
        "typeID":"27536",
        "typeName":"Serpentis Control Tower",
        "fuel":{
            "hour":36,
            "typeID":4312
        }
    },
    "27601":{
        "typeID":"27601",
        "typeName":"Serpentis Control Tower Medium",
        "fuel":{
            "hour":18,
            "typeID":4312
        }
    },
    "27604":{
        "typeID":"27604",
        "typeName":"Serpentis Control Tower Small",
        "fuel":{
            "hour":9,
            "typeID":4312
        }
    },
    "27538":{
        "typeID":"27538",
        "typeName":"Shadow Control Tower",
        "fuel":{
            "hour":32,
            "typeID":4312
        }
    },
    "27603":{
        "typeID":"27603",
        "typeName":"Shadow Control Tower Medium",
        "fuel":{
            "hour":16,
            "typeID":4312
        }
    },
    "27606":{
        "typeID":"27606",
        "typeName":"Shadow Control Tower Small",
        "fuel":{
            "hour":8,
            "typeID":4312
        }
    },
    "27786":{
        "typeID":"27786",
        "typeName":"True Sansha Control Tower",
        "fuel":{
            "hour":32,
            "typeID":4247
        }
    },
    "27788":{
        "typeID":"27788",
        "typeName":"True Sansha Control Tower Medium",
        "fuel":{
            "hour":16,
            "typeID":4247
        }
    },
    "27790":{
        "typeID":"27790",
        "typeName":"True Sansha Control Tower Small",
        "fuel":{
            "hour":8,
            "typeID":4247
        }
    }
}


EvePos = new Meteor.Collection('evePos');
EveMoons = new Meteor.Collection('eveMoons');
EveSilos = new Meteor.Collection('eveSilos');


function fetchPosList(keyID, vCode) {
    var keyMD5 = CryptoJS.MD5(keyID + '@' + vCode).toString();

    var last_updated = EvePos.findOne({keyMD5: keyMD5, new: true}, {sort: {list_cachedUntil: 1}});
    if (last_updated && !(last_updated.list_cachedUntil < new Date())) {
        console.log('no update, cached pos list')
        //return;
    }

    var api_poslist = 'http://api.eveonline.com/corp/StarbaseList.xml.aspx?keyID=' + keyID + '&vCode=' + vCode;
    var xmlStr = HTTP.call('GET', api_poslist, {timeout: 5000, params: {}});

    var xmlDom = Meteor.npmRequire('xmldom');
    var DOMParser = xmlDom.DOMParser;

    var doc = new DOMParser().parseFromString(xmlStr.content);


    var currentTime = null;
    _.forEach(doc.getElementsByTagName('currentTime'), function(row, index) {
        currentTime = row.childNodes && row.childNodes[0] && row.childNodes[0].nodeValue;
    });

    var cachedUntil = null;
    _.forEach(doc.getElementsByTagName('cachedUntil'), function(row, index) {
        cachedUntil = row.childNodes && row.childNodes[0] && row.childNodes[0].nodeValue;
    });

    var rows = doc.getElementsByTagName('row')

    var moonsFind = doc.getElementsByTagName('row');
    var moonsNotFound = [];

    if (moonsFind.length>0) {
        EvePos.update({keyMD5: keyMD5}, {$set: {new: false}});
    }

    _.forEach(moonsFind, function(row, index) {
        var moonID = parseInt(row.getAttribute('moonID'), 10);



        var moonData = {
            keyMD5: keyMD5,
            itemID: parseInt(row.getAttribute('itemID'), 10),
            typeID: parseInt(row.getAttribute('typeID'), 10),
            locationID: parseInt(row.getAttribute('locationID'), 10),
            moonID: moonID,
            state: parseInt(row.getAttribute('state'), 10),
            stateTimestamp: moment.utc(row.getAttribute('stateTimestamp')).toDate(),
            onlineTimestamp: moment.utc(row.getAttribute('onlineTimestamp')).toDate(),
            standingOwnerID: row.getAttribute('standingOwnerID'),
            list_currentTime: moment.utc(currentTime).toDate(),
            list_cachedUntil: moment.utc(cachedUntil).toDate(),
            new: true,
        };

        var findPos = EvePos.findOne({moonID: moonID});
        if (findPos) {
            EvePos.update(findPos._id, {$set: moonData});
        } else {
            EvePos.insert(moonData);
        }

        var moon = EveMoons.findOne({moonID: moonID});
        if (!moon) {
            moonsNotFound.push(moonID);
        }

    });


    if (moonsNotFound.length > 0) {
        var urlMoonJson = 'http://eve.kassikas.net/json/moonjson.php?extended=1&moonIDs=' + moonsNotFound.join(';');
        var res = HTTP.call('GET', urlMoonJson, {timeout: 5000, params: {}});

        _.forEach(JSON.parse(res.content), function(moon, index) {
            moon.planet = parseInt(moon.planet, 10);
            moon.moon = parseInt(moon.moon, 10);
            moon.nameTranslit = Transliteration.slugify(moon.moonName, {lowercase: false, separator: '_'});
            EveMoons.remove({moonID: moon.moonID});
            EveMoons.insert(moon);
        });
    }

}

function get_onlineuntil_DH_str(date_onlineuntil) {

    var timestamp_untilonline = Math.floor(date_onlineuntil.getTime() / 1000);
    var d2 = new Date();
    var timestamp_now = Math.floor(d2.getTime() / 1000);

    var difsec = timestamp_untilonline - timestamp_now;
    var dif_h = parseInt(difsec/60/60, 10);

    var left_h = dif_h%24;
    var left_d = (dif_h-left_h)/24;

    return left_d + "d " + left_h + "h";

}

function getMoonPosOnlineUntilStr(keyID, vCode, moonID) {
    var keyMD5 = CryptoJS.MD5(keyID + '@' + vCode).toString();

    var pos = EvePos.findOne({moonID: moonID, keyMD5: keyMD5});
    if (!pos) {
        return 'pos not found';
    }

    if (pos && pos.pos_onlineUntil && pos.pos_cachedUntil && (pos.pos_cachedUntil > new Date())) {
        console.log('no update, cached pos data');
        return get_onlineuntil_DH_str(pos.pos_onlineUntil);
    }

    var posType = POS_DATA[pos.typeID];

    if (!posType) {
        return 'pos type not found (' + pos.typeID + ')';
    }


    var api_url_posdata = "http://api.eveonline.com/corp/StarbaseDetail.xml.aspx?keyID=" + keyID + "&vCode=" + vCode + "&itemID=" + pos.itemID;

    var xmlStr = HTTP.call('GET', api_url_posdata, {timeout: 5000, params: {}});


    var xmlDom = Meteor.npmRequire('xmldom');
    var DOMParser = xmlDom.DOMParser;

    var doc = new DOMParser().parseFromString(xmlStr.content);

    var currentTime = null;
    _.forEach(doc.getElementsByTagName('currentTime'), function(row, index) {
        currentTime = row.childNodes && row.childNodes[0] && row.childNodes[0].nodeValue;
    });

    var cachedUntil = null;
    _.forEach(doc.getElementsByTagName('cachedUntil'), function(row, index) {
        cachedUntil = row.childNodes && row.childNodes[0] && row.childNodes[0].nodeValue;
    });

    var fuelBlocksLeft = 0;

    _.forEach(doc.getElementsByTagName('row'), function(row, index) {
        var typeID = row.getAttribute('typeID');
        var quantity = parseInt(row.getAttribute('quantity'), 10);

        if (quantity && (typeID == posType.fuel.typeID)) {
            fuelBlocksLeft = quantity;
        }
    });

    var fuelHLeft = fuelBlocksLeft ? parseInt(fuelBlocksLeft / posType.fuel.hour) : 0;
    var fuelUntil_unix_ms = (new Date()).getTime() + (60 * 60 * fuelHLeft * 1000);
    var dateOnlineUntil = new Date(fuelUntil_unix_ms);

    var posData = {
        pos_currentTime: moment.utc(currentTime).toDate(),
        pos_cachedUntil: moment.utc(cachedUntil).toDate(),
        pos_onlineUntil: dateOnlineUntil,
        pos_typeName: posType.typeName,
    };

    EvePos.update(pos._id, {$set: posData});

    return get_onlineuntil_DH_str(dateOnlineUntil);
}


function showResXml(res, response) {
    response.writeHead(200, {'Content-Type': 'text/xml'});
    response.end('<?xml version="1.0" encoding="UTF-8"?><fuelres><value>' + res + '</value></fuelres>');
}

function displaySilo(keyID, vCode, moonID, siloNr, response) {
    console.log(siloNr);
    var keyMD5 = CryptoJS.MD5(keyID + '@' + vCode).toString();
    var siloNr = Math.max( Math.max(parseInt(siloNr, 10))-1, 0);

    var Q = {keyMD5: keyMD5, moonID: moonID};
    var opt = {sort: {content_quantity: -1}, limit: 1, skip: siloNr};

    console.log(Q);
    console.log(opt);

    var siloFromDb = EveSilos.findOne(Q, opt);
    console.log(siloFromDb);

    response.writeHead(200, {'Content-Type': 'text/xml'});
    response.end('<?xml version="1.0" encoding="UTF-8"?><silo>'
        +'<typeID>' + (siloFromDb && siloFromDb.content_typeID || '-') + '</typeID>'
        +'<quantity>' + (siloFromDb && siloFromDb.content_quantity || '-') + '</quantity>'
        +'</silo>');

}

function fetch_silos(keyID, vCode) {
    var keyMD5 = CryptoJS.MD5(keyID + '@' + vCode).toString();
    var siloTypeID = 14343;

    var siloFromDb = EveSilos.findOne({keyMD5: keyMD5}, {sort: {asset_cachedUntil: -1}});
    if (siloFromDb && siloFromDb.asset_cachedUntil && siloFromDb.asset_cachedUntil && (siloFromDb.asset_cachedUntil > new Date())) {
        console.log('no update, silo data cached');
        return;
    }


    // get list of systems we have towers to get only silo located there
    var towers = {};
    _.forEach(EvePos.find({keyMD5: keyMD5, new: true}).fetch(), function(pos) {
        towers[pos.moonID] = pos;
    });

    var systemIds = _.unique(_.map(towers, function(pos) {
        return pos.locationID;
    }));

    _.forEach(EveMoons.find({"systemID": { $in: systemIds }}).fetch(), function(moon) {
        towers[moon.moonID].moon = moon;
    });


    var api_url_posdata = "http://api.eveonline.com/corp/AssetList.xml.aspx?keyID=" + keyID + "&vCode=" + vCode;

    var xmlStr = HTTP.call('GET', api_url_posdata, {timeout: 5000, params: {}});

    var xmlDom = Meteor.npmRequire('xmldom');
    var DOMParser = xmlDom.DOMParser;

    var doc = new DOMParser().parseFromString(xmlStr.content);

    var currentTime = null;
    _.forEach(doc.getElementsByTagName('currentTime'), function(row, index) {
        currentTime = row.childNodes && row.childNodes[0] && row.childNodes[0].nodeValue;
    });

    var cachedUntil = null;
    _.forEach(doc.getElementsByTagName('cachedUntil'), function(row, index) {
        cachedUntil = row.childNodes && row.childNodes[0] && row.childNodes[0].nodeValue;
    });


    var silos = {};
    var itemIds = [];
    _.forEach(doc.getElementsByTagName('row'), function(row) {
        var typeID = parseInt(row.getAttribute('typeID'), 10);
        var itemID = row.getAttribute('itemID');
        var locationID = parseInt(row.getAttribute('locationID'), 10);

        //if (locationID != 30004304) { return; }

        // filter out all the wrong items and silos in corp hangars and stuff
        if (typeID != siloTypeID || !locationID || !_.contains(systemIds, locationID)) {
            return;
        }

        silos[itemID] = {
            itemID: itemID,
            locationID: locationID,
            content_typeID: null,
            content_quantity: 0,
            asset_currentTime: moment.utc(currentTime).toDate(),
            asset_cachedUntil: moment.utc(cachedUntil).toDate(),
            //moonId: false,
            keyMD5: keyMD5
        };


        _.forEach(row.getElementsByTagName('row'), function(rowItem) {
            console.log(rowItem.getAttribute('typeID') + ' > ' + rowItem.getAttribute('quantity'));
            silos[itemID].content_typeID = parseInt(rowItem.getAttribute('typeID'), 10);
            silos[itemID].content_quantity = parseInt(rowItem.getAttribute('quantity'), 10);
        });

        var moonDb = EveSilos.findOne({itemID: itemID});
        if (!moonDb || moonDb.moonId) {
            itemIds.push(itemID);
        }

    });

    var itemIds = _.unique(itemIds);

    var api_url_locations = "http://api.eveonline.com/corp/Locations.xml.aspx?keyID=" + keyID + "&vCode=" + vCode + "&ids=" + itemIds.join(',');


    var xmlStr = HTTP.call('GET', api_url_locations, {timeout: 5000, params: {}});

    var xmlDom = Meteor.npmRequire('xmldom');
    var DOMParser = xmlDom.DOMParser;

    var doc = new DOMParser().parseFromString(xmlStr.content);

    _.forEach(doc.getElementsByTagName('row'), function(row) {
        var itemID = row.getAttribute('itemID');
        var x = parseInt(row.getAttribute('x'), 10);
        var y = parseInt(row.getAttribute('y'), 10);
        var z = parseInt(row.getAttribute('z'), 10);
        var itemName = (row.getAttribute('itemName') || '').trim();

        var silo = silos[itemID];
        if (!silo) { return; }

        //if (itemID != 1018022972868) { return; }
        //console.log(itemID, x, y, z, itemName);
        console.log({itemID: itemID});

        var moonDb = EveSilos.findOne({itemID: itemID});
        if (!moonDb || !moonDb.moonId) {
            var json_closest_celestial = 'https://www.fuzzwork.co.uk/api/nearestCelestial.php?x=' + x + '&y=' + y + '&z=' + z + '&solarsystemid=' + silo.locationID;
            console.log(json_closest_celestial);

            var jsonStr = HTTP.call('GET', json_closest_celestial, {timeout: 5000, params: {}});
            var locJson = JSON.parse(jsonStr.content);
            if (locJson.itemid) {
                silos[itemID].moonId = locJson.itemid;
            }

            if (moonDb) {
                EveSilos.update(moonDb._id, silo);
            } else {
                EveSilos.insert(silo);
            }

        }


        /*

         for (var moonID in towers) {
         var tower = towers[moonID];
         if (!tower.moon) { continue; }
         if (tower.locationID != silo.locationID) { continue; }
         var moon = tower.moon;

         console.log(tower.locationID, silo.locationID, (tower.locationID != silo.locationID));

         // http://www.calculatorsoup.com/calculators/geometry-solids/distance-two-points.php
         var distance = Math.sqrt(
         // x2-x1
         Math.pow((moon.x-x),2) +
         // y2-y1
         Math.pow((moon.y-y),2) +
         // z2-z1
         Math.pow((moon.z-z),2)
         );

         console.log(moon.x + ', ' + moon.y  + ', ' + moon.z);
         console.log(x + ', ' + y  + ', ' + z);

         console.log(moon.nameTranslit + ' / ' + distance);

         //console.log(tower);


         //break;
         }

         */

    });


    _.forEach(silos, function(silo) {
        var moonDb = EveSilos.findOne({itemID: silo.itemID});

        if (moonDb) {
            //if (moonDb.moonId) {
            //    silo.moonID = moonDb.moonId;
            //}
            //if (moonDb.content_typeID) {
            //    silo.content_typeID = moonDb.content_typeID;
            //}
            EveSilos.update(moonDb._id, silo);
        } else {
            EveSilos.insert(silo);
        }
    });

}

function test_eveonlinejs(keyID, vCode, characterID) {
    var eveonlinejs = Meteor.npmRequire('eveonlinejs');

    var siloTypeID = 14343;

    eveonlinejs.setParams({
        keyID: keyID,
        vCode: vCode,
        characterID: characterID,
    });

    /*
     eveonlinejs.fetch('eve:SkillTree', function (err, result) {
     if (err) throw err;

     for (var groupID in result.skillGroups) {
     console.log(result.skillGroups[groupID].groupName);
     }
     });
     */

// EveSilos

    var silos = {};

    eveonlinejs.fetch('corp:AssetList', function (err, result) {
        if (err) throw err;

        console.log(result.currentTime);
        console.log(result.cachedUntil);


        _.forEach(result.assets, function (item) {
            var typeId = parseInt(item.typeID, 10);
            if (typeId != siloTypeID) { return; }

            var silo = {
                systemID: parseInt(item.locationID, 10),
                itemID: parseInt(item.itemID, 10),
                //content_typeID: null,
                content_quantity: 0,
                currentTime: moment.utc(result.currentTime).toDate(),
                cachedUntil: moment.utc(result.cachedUntil).toDate()
            };

            if (silo.itemID != 1016055823156) { return; }

            if (item.contents) { // && item.contents[item.itemID]) {
                console.log(item.contents); //[item.itemID]);
                console.log(item.contents[item.itemID]);

                _.forEach(item.contents, function (citem) {
                    //console.log(citem);
                    //console.log(citem.typeID);
                    //console.log(citem.quantity);
                    silo.content_typeID = parseInt(citem.typeID, 10);
                    silo.content_quantity = parseInt(citem.quantity, 10);
                });

            }

            //EveSilos.insert({})

            console.log(silo);


        });
    });

    console.log('aaa');

}

Router.map(function() {
    this.route('posapi_call', {
        path: '/posapi/call',
        where: 'server',
        action: function() {

            // GET, POST, PUT, DELETE
            var requestMethod = this.request.method;
            var query = this.request.query;

            var keyID = parseInt(query.keyID, 10);
            var vCode = (query.vCode || '').trim();

            if (!keyID || !vCode) {
                return showResXml('keyID/vCode missing!', this.response);
            }

            var system = (query.system || '').trim();
            var moonNr = parseInt(query.moon, 10);
            var planet = parseInt(query.planet, 10);

            if (!system || !moonNr || !planet) {
                return showResXml('-', this.response);
            }

            //test_eveonlinejs(keyID, vCode, 241675010);

            fetchPosList(keyID, vCode);

            var args = {
                "systemName": system,
                "planet": planet,
                "moon": moonNr
            };

            var moon = EveMoons.findOne(args);

            if (!moon) {
                return showResXml('moon not found', this.response);
            }

            var siloNr = parseInt(query.silo, 10) || 0;

            if (siloNr) {
                fetch_silos(keyID, vCode);
                displaySilo(keyID, vCode, moon.moonID, siloNr, this.response);
                return;
            }


            var res = getMoonPosOnlineUntilStr(keyID, vCode, moon.moonID);

            showResXml(res, this.response);

        }
    });
});