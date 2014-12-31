var pick = require('101/pick'),
    through = require('through'),
    assign = require('101/assign'),
    Combiner = require('stream-combiner'),
    geojsonStream = require('geojson-stream');

module.exports = pickStream;
module.exports.pickProperties = pickProperties;

function pickStream(properties) {
    return Combiner(geojsonStream.parse(),
        through(function(feature, callback) {
            this.queue(pickProperties(feature, properties));
        }),
        geojsonStream.stringify());
}

function pickProperties(feature, properties) {
    return assign({}, feature, {
        properties: pick(feature.properties, properties)
    });
}
