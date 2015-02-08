var GameScene = cc.Scene.extend ( {
	
	//Constructor function for Calss
	ctor: function ( ) {
		// Call the super function of the super class 
		this._super(  );
		
		// Call the Init function
		this.init(  );
	},
	init: function ( ) {
		
		// Window Size variables
		var visibleSize = cc.winSize;
		// Position variables
		var origin = cc.p( visibleSize.width / 2 , visibleSize.height / 2 );
		
		// Open up the map tmx file, and set the position
		var map = cc.TMXTiledMap ( res_tiledmaps.level01 );
		map.setPosition( origin.x , origin.y );
		map.setAnchorPoint( 0.5 , 0.5 );		
		
		// Add the tmx file to the layer.
		this.addChild( map );		
	},
	initTiledMap : function ( ) {
		
	}
} );