

var stqController = cc.Sprite.extend( {
	_selected: false,
	
	ctor: function ( filename, rect ) {
		this._super( filename, rect );
		this.init( );		
	},
	init: function ( ) {
		
		// Set event listener		
		cc.eventManager.addListener({
			event: cc.EventListener.TOUCH_ONE_BY_ONE,
			swallowTouches: true,
			onTouchBegan: this.onTouchBegan,
			onTouchMoved: this.onTouchMoved,
			onTouchEnded: this.onTouchEnded
		}, this);
		
	},
	_getSwipe: function ( oldCoords, newCoords ) {
		if ( ( oldCoords.x - newCoords.x ) > ( cc.winSize.width * 0.05 ) ) {
			return SWIPE_DIRECTION.DIRECTION_RIGHT;
		} else if ( ( oldCoords.x - newCoords.x ) < -( cc.winSize.width * 0.05 ) ) {
			return SWIPE_DIRECTION.DIRECTION_LEFT;
		} else if ( ( oldCoords.y - newCoords.y ) > ( cc.winSize.height * 0.05 ) ) {
			return SWIPE_DIRECTION.DIRECTION_DOWN;
		} else if ( ( oldCoords.y - newCoords.y ) < -( cc.winSize.height * 0.05 ) ) {
			return SWIPE_DIRECTION.DIRECTION_TOP;
		}
	},
	onTouchBegan: function ( touch, event ) {
		var self = event.getCurrentTarget (  );
		var sel = cc.rectContainsPoint( self.getBoundingBox (  ) , touch.getLocation ( ) );
		if ( !sel ) return false;
		
		this._selected = sel;		
		return true;
	},
	onTouchMoved: function ( touch, event ) {

		return true;
	},
	onTouchEnded: function ( touch, event ) {
		var self = event.getCurrentTarget ( );
		
		var oldCoords = touch.getStartLocation ( );
		var newCoords = touch.getLocation ( );		
		var swipeDir = self._getSwipe(oldCoords, newCoords);
		
		var parent = self.getParent ( );
		var _tilemap = parent._tilemap;
		var dt = ( 32 * cc.winSize.height ) / _tilemap.getContentSize (  ).height;  
		switch ( swipeDir ) {
			case SWIPE_DIRECTION.DIRECTION_LEFT :
				self.runAction ( cc.moveBy( 0.5, dt, 0 ) );
				break;
			case SWIPE_DIRECTION.DIRECTION_RIGHT :
				self.runAction ( cc.moveBy( 0.5, -dt, 0 ) );
				break;
			case SWIPE_DIRECTION.DIRECTION_TOP :
				self.runAction ( cc.moveBy( 0.5, 0, dt ) );
				break;
			case SWIPE_DIRECTION.DIRECTION_DOWN :
				self.runAction ( cc.moveBy( 0.5, 0, -dt ) );
				break;
		}
		return true;
	}
	
} );