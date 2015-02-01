var SplashScreen = cc.Layer.extend( {
	_targets: [],
	_callback: function ( ) {
		if ( this._targets.length > 0 ) {
			this._targets.shift().runAction ( this.getAction(  ) );
		} else {
			if ( this.splashScreenFinishedCallback )
				this.splashScreenFinishedCallback.call ( this );
		}
	},
	splashScreenFinishedCallback: null,
	ctor: function ( arguments ) {
		this._super(  );		
		this.addTargets( arguments[0] );
		this.setCallback( arguments[1] );
		
		this.setColor( cc.color( 13, 12, 31, 255) );
		this.start();
	},
	start: function ( ) {
		if ( this._targets.length > 0 ) {
			this._targets.shift().runAction ( this.getAction(  ) );
		} else {
			if ( this.splashScreenFinishedCallback )
				this.splashScreenFinishedCallback.call ( this );
		}
	},
	getAction: function ( ) {
		var fi = new cc.FadeIn( 0.5 ),
			delay = new cc.DelayTime( 1 ),
			fo = new cc.FadeOut ( 0.5 ),
			cb = new cc.CallFunc( this._callback, this ),
			seq = new cc.Sequence( [ fi, delay, fo, cb ] );
		
		return seq;
	},
	addTargets: function ( targets ) {		
		var i = 0,
			len = targets.length;
		
		for ( i = 0; i < len; i++ ) {
			this.addTarget( targets[i] );			
		}
	},
	addTarget: function ( target ) {
		var item,
			sSize = cc.winSize;
		
		if ( typeof target === 'string' ) {
			
			item = new cc.Sprite( target );
			item.setOpacity( 0 );			
			item.setAnchorPoint ( 0.5, 0.5 );
			item.setPosition ( sSize.width / 2, sSize.height / 2 );
			this._targets.push( item );
			this.addChild( item );
		} else if ( target instanceof cc.Node ) {
			target.setOpacity ( 0 );
			target.setAnchorPoint ( 0.5, 0.5 );
			target.setPosition ( sSize.width / 2, sSize.height / 2 );
			this._targets.push( target );
			this.addChild( target );
		} else {
			
		}
	},
	setCallback : function ( callback ) {
		if ( typeof callback === 'function' ) {
			this.splashScreenFinishedCallback = callback;
		}
	}	
} );


SplashScreen.scene = function (  ) {
	var scene = new cc.Scene();	
	var layer = new SplashScreen ( arguments );
	scene.addChild( layer );
	return scene;
} 