(function( global, factory, plug) {
	if ( typeof module === "object" && typeof module.exports === "object" ) {
		module.exports = global.document ?
			factory( global, true, plug) :
			function( w ) {
				if ( !w.document ) {
					throw new Error( "jQuery requires a window with a document" );
				}
				return factory( w, undefined, plug);
			};
	} else {
		factory( global, undefined, plug);
	}

// Pass this if window is not defined yet
}(typeof window !== "undefined" ? window : this, function( window, noGlobal, plug ) {
  // 最终执行的闭包
  var $ = window.jQuery;
  $.fn.abc = function() {
    console.log("")
  }
  console.log($, noGlobal, plug);
}, "bootstrapValidator"));