import xmljson from 'xmljson';
import Promise from 'es6-promise';

const xml2json = (xml) => {
    return new Promise((resolve, reject) => {
        xmljson.to_json(xml, function (err, result) {
            if(err !== null) reject(err);
            resolve(result);
        });
    });
};

export default xml2json;