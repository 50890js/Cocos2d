var stqController = cc.Sprite.extend( {
	
	ctor: function ( filename, rect ) {
		this._super( filename, rect );
		this.init( );		
	},
	init: function ( ) {
		
		// Set event listener
		var listener = cc.EventListener.create( {
			event: cc.EventListener.TOUCH_ONE_BY_ONE,
			swallowTouches: true,
			onTouchBegan: this.onTouchBegan,
			onTouchMoved: this.onTouchMoved,
			onTouchEnded: this.onTouchEnded
		} );
		cc.eventManager.addListener( listener , this );
		
	},
	onTouchBegan: function ( touch, event ) {

		return true;
	},
	onTouchMoved: function ( touch, event ) {

		return true;
	},
	onTouchEnded: function ( touch, event ) {
		var oldCoords = touch.getStartLocation ( );
		var newCoords = touch.getLocation ( );
		
		return true;
	}
	
} );