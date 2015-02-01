var MainMenu = cc.Layer.extend( {
	
	ctor: function ( ) {
		this._super(  );
	}
	
} );

MainMenu.scene = function ( ) {
	var scene = new cc.Scene(  );
	var layer = new MainMenu ( );
	scene.addChild( layer );
	return scene;
}