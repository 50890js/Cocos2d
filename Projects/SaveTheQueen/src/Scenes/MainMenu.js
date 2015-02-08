var MainMenu = cc.Scene.extend( {
	
	// Constructor function
	ctor: function ( ) {
		this._super(  );
		this.init(  );
	},
	init : function (  ) {
		
		// Load the Main Menu JSON and get into the variable 
		var BaseLayer = ccs.csLoader.createNode( res_ccs.main_menu_layer );		
		
		// Get the play button reference		
		var btn = BaseLayer.getChildByName ( 'btn_play' );		
		//Add the Touch Event Listeneer for the button
		btn.addTouchEventListener ( function ( sender, type ) {			
			switch ( type ) {
			case ccui.Widget.TOUCH_BEGAN :
				// Load the Game Scene
				cc.director.runScene( new cc.TransitionFade( 0.5, new GameScene ( ) ) );
				break;
			}
		}, btn );
		
		// Add the layer to the scene
		this.addChild( BaseLayer );
	}
	
} );