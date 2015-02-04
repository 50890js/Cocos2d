var MainMenu = cc.Scene.extend( {
	
	ctor: function ( ) {
		this._super(  );
		this.init(  );
	},
	init : function (  ) {
		var BaseLayer = ccs.csLoader.createNode( 'res/MainMenuBaseLayer.json' );
		var btn = BaseLayer.getChildByName ( 'btn_play' );
		btn.addTouchEventListener ( function ( sender, type ) {
			cc.log ( 'Hello World' );
		}, btn );
		this.addChild( BaseLayer );
	}
	
} );