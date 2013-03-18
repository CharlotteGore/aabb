
# aabb

  AABB Bounding Box module with super quick collision detection and handy CSS helpers. For the web, you see. This stuff helps!

  Vectors here are 2 dimensional arrays or Vector objects from ["Vector2D"](https://github.com/CharlotteGore/vector2d).

## Installation

    $ component install charlottegore/aabb

## API


### require('aabb').AABB() 

  Create a new Axis Aligned Bounding Box.

    var box = require('aabb').AABB([x, y], [w, h]);

  Takes two 2 dimensional arrays, `position` and `size`. 


## AABB Object API

### .css()

  Returns an object which can be applied directly to an element with jQuery.css() (and compatible utilities).

    > var box = require('aabb').AABB([10,20], [100, 200]);
    > box.css();
    > { left : 10, top : 20, width: 100, height: 200 }

### .coords()

  Returns a more conventional x, y, w, h object for more game related processing.

    > var box = require('aabb').AABB([10,20], [100, 200]);
    > box.css();
    > { x : 10, y : 20, w: 100, h: 200 }

### .styleElement( element )

  Applies the position and size to the passed element.

### .scale( factor )

  Scales both the position and size by the given factor.  

### .[0]

  Raw position vector. This is a Vector2d object.

### .[1]

  Raw size vector. Is a Vector2d object. Note that this is the half width and half height, not the full width and height. 

### .position()

  Returns functions to manipulate the position vector.

#### .position().add( vector )

  Adds the vector to the position. Returns the changed AABB object.

#### .position().subtract( vector )

  Subtracts the vector from the position. Returns the changed AABB object.

#### .position().multiply( vector )

  Multiplies the position vector by the passed vector. Returns the changed AABB object.

#### .position().divide( vector )

  Divides the position vector by the passed vector. Returns the changed AABB object.

### .size()

  Returns functions to manipulate the position vector.

#### .size().add( vector )

  Adds the vector to the size. Returns the changed AABB object.

#### .size().subtract( vector )

  Subtracts the size from the position. Returns the changed AABB object.

#### .size().multiply( vector )

  Multiplies the size vector by the passed vector. Returns the changed AABB object.

#### .size().divide( vector )

  Divides the size vector by the passed vector. Returns the changed AABB object.
   
#### .size().scale( vector )

  Scales just the size by the passed factor. Returns the changed AABB object.


## License

  MIT
