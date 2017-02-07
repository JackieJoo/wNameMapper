
if( typeof module !== 'undefined' )
require( 'wNameMapper' );

var _ = wTools;

var nameMapper = new wNameMapper
({
  Points : 5001,
  LineStrip : 5002,
  LineLoop : 5003,
  Lines : 5004,
  TriangleStrip : 5005,
  TriangleFan : 5006,
  Triangles : 5007,
});

// console.log( 'nameMapper.valueToKeyMap',nameMapper.valueToKeyMap );
// console.log( 'nameMapper.keyToValueMap',nameMapper.keyToValueMap );

var keyForPoints = nameMapper.valueFor( 'Points' )
console.log( 'keyForPoints :',keyForPoints );
// keyForPoints : 5001

var value = nameMapper.keyFor( keyForPoints )
console.log( 'value :',value );
// value : Points

var keys = nameMapper.valueFor([ 'Points','Lines' ])
console.log( 'keys :',keys );
// keys : 5001, 5004
