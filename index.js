var vec2 = require('vector2d');

var AABB = function( pos, size ){

	this[0] = vec2.v(pos);
	this[1] = vec2.v(size).scale(0.5);
	return this;

};

AABB.prototype = {
	position : function(){	
		var self = this;
		return {
			set : function( vec ){

				self[0].set( vec );
				return self;

			},
			add : function( vec ){

				self[0].add(vec);
				return self;

			},
			subtract : function( vec ){

				self[0].subtract( vec );
				return self;

			},
			multiply : function( vec ){

				self[0].multiply( vec );
				return self;

			},
			divide : function( vec ){

				self[0].divide( vec );
				return self;

			}
		}
	},
	size : function(){
		var self = this;
		return {
			set : function( vec ){

				self[1].set(vec2.scale(vec, 0.5));
				return self;

			},
			add : function( vec ){

				self[1].add(vec2.scale(vec, 0.5));
				return self;

			},
			subtract : function( vec ){

				self[1].subtract(vec2.scale(vec, 0.5));
				return self;

			},
			multiply : function( vec ){

				self[1].multiply( vec );
				return self;

			},
			divide : function( vec ){

				self[1].divide( vec );
				return self;

			},
			scale : function( factor ){

				self[1].scale( factor );
				return self;

			}
		}
	},
	scale : function( factor ){
		this[0].scale(factor);
		this[1].scale(factor);
		return this;
	},
	css : function(){

		return {
			left : this[0][0],
			top : this[0][1],
			width : (this[1][0] * 2),
			height : (this[1][1] * 2)			
		}

	},
	coords : function(){

		return {
			x : this[0][0],
			y : this[0][1],
			w : (this[1][0] * 2),
			h : (this[1][1] * 2)			
		}	

	},
	styleElement : function( el ){
		el.style.left = this[0][0] + "px";
		el.style.top = this[0][1] + "px";
		el.style.width = (this[1][0] * 2) + "px";
		el.style.height = (this[1][1] * 2) + "px";
		return el;

	},
	drawToCanvas : function( context ){

		context.fillRect(this[0][0], this[0][1], this[1][0], this[1][1]);
		return this;

	},
	collisionCheck : function( aabb ){
		/*
			add the two half-widths together, then subtract aabb's x + hw from this' x + hw.
		*/
		var px = ( ( aabb[1][0] + this[1][0] ) - Math.abs( (this[0][0] + this[1][0]) - (aabb[0][0] + aabb[1][0]) ) );

		// px is greater than zero the the boxes overlap on the x axis. Otherwise we exit now, no possible collision
		if(px > 0){

			var py = ( ( aabb[1][1] + this[1][1] ) - Math.abs( (this[0][1] + this[1][1]) - (aabb[0][1] + aabb[1][1]) ) );

			if(px > 0){

				return [px, py];

			}

		}

		return false;

	}

}

module.exports.AABB = function(pos, size){

	return new AABB(pos, size);

}