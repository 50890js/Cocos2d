var SplashScreen = cc.Layer.extend( {
	
	
	
} );

SplashScreen.scene = function ( ) {
	var scene = new cc.Scene();
	var layer = SplashScreen ( );
	scene.addChild( layer );
	return scene;
} 