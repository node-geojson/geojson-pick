var test = require('tape'),
    geojsonPick = require('./');

test('pickProperties', function(t) {
    t.deepEqual(['a'], geojsonPick.pickProperties({
        type: 'Feature',
        properties: { a: 1, b: 2 }
    }), {
        type: 'Feature',
        properties: { a: 1 }
    });
    t.end();
});
