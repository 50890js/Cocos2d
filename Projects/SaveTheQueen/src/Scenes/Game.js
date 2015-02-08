var GameScene = cc.Scene.extend ( {
	
	ctor: function ( ) {
		this._super(  );
		this.init(  );
	},
	init: function ( ) {
		var _layer = new GameLayer ( );
		
		this.addChild( _layer );
	}
	
} );

var GameLayer = cc.Layer.extend( {
	
	ctor: function ( ) {
		this._super(  );
		this.init( );
	},
	init: function ( ) {
		
		var winSize = cc.winSize;
		var origin = new cc.p( winSize.width / 2, winSize.height / 2 );
		
		this._tilemap = new cc.TMXTiledMap( res_tiledmaps.level01 );
		this._tilemap.setAnchorPoint( 0.5, 0.5 );
		this._tilemap.setPosition( origin.x , origin.y );
		var scale = winSize.height / this._tilemap.height;		
		
		
		var p = this._tilemap.getObjectGroup('SpawnPoints').getObject ( 'playSpawn' );
		var pos = this._tilemap.convertToWorldSpace( cc.p( p.x, p.y ) );
		var player = new stqController ( res_icons.sound_normal_png );
		
		player.setPosition ( pos.x, pos.y );		
		
		
		this._tilemap.setScale( scale, scale );		
		
		this.addChild( player, 1 );		
		this.addChild( this._tilemap );
		
	}
	
} );