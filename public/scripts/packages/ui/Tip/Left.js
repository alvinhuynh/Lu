var Class = require( '/scripts/libraries/ptclass' ),
  Tip = require( 'ui/Tip' ),
  LeftTip;

LeftTip = Class.create( Tip, ( function () {

   return {
     initialize: function ( $super, $element, settings ) {

       var defaults = {
         placement: 'left'
       };

       _.defaults( settings, defaults );

       $super( $element, settings );
     }
  };

}() ));

//Export to CommonJS Loader
if( module && module.exports ) {
  module.exports = LeftTip;
}
