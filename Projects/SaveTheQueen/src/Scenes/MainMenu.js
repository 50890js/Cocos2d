var MainMenu = cc.Scene.extend( {
	
	ctor: function ( ) {
		this._super(  );
		this.init(  );
	},
	init : function (  ) {
		var BaseLayer = ccs.csLoader.createNode( 'res/MainMenu/MainMenuBaseLayer.csb' );		
				
		if ( BaseLayer ) {
			this.addChild( BaseLayer );
		}
	}
	
} );