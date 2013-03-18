describe("AABB Module", function(){

	describe("Test framework", function(){

		it("loads the module", function(){

			expect(require('aabb')).toBeTruthy();

		})

	});

	describe("Creating AABB objects", function(){

		var aabb = require('aabb').AABB;

		it("can generate a new object", function(){

			var box = aabb([10,20],[100,200]).coords();

			expect(box).toEqual({x : 10, y : 20, w : 100, h : 200});

		});

	});

	describe("AABB Position", function(){

		var aabb = require('aabb').AABB;

		it("can have a vector added", function(){

			var box = aabb([10,20],[100,200]);

			box.position().add([10,20]);

			expect(box.coords()).toEqual({ x : 20, y : 40, w : 100, h : 200});

		});
		it("can have a vector subtracted", function(){

			var box = aabb([10,20],[100,200]);

			box.position().subtract([10,20]);

			expect(box.coords()).toEqual({ x : 0, y : 0, w : 100, h : 200});

		});

		it("can have the position multiplied by a vector", function(){

			var box = aabb([10,20],[100,200]);

			box.position().multiply([2, 2]);

			expect(box.coords()).toEqual({ x : 20, y : 40, w : 100, h : 200});

		});

		it("can have the position divided by a vector", function(){

			var box = aabb([10,20],[100,200]);

			box.position().divide([2, 2]);

			expect(box.coords()).toEqual({ x : 5, y : 10, w : 100, h : 200});

		});

	})

	describe("AABB Size", function(){

		var aabb = require('aabb').AABB;

		it("can have a vector added", function(){

			var box = aabb([10,20],[100,200]);

			box.size().add([10,20]);

			expect(box.coords()).toEqual({ x : 10, y : 20, w : 110, h : 220});

		});
		it("can have a vector subtracted", function(){

			var box = aabb([10,20],[100,200]);

			box.size().subtract([10,20]);

			expect(box.coords()).toEqual({ x : 10, y : 20, w : 90, h : 180});

		});

		it("can be multiplied by a vector", function(){

			var box = aabb([10,20],[100,200]);

			box.size().multiply([2, 2]);

			expect(box.coords()).toEqual({ x : 10, y : 20, w : 200, h : 400});

		});

		it("can have the size divided by a vector", function(){

			var box = aabb([10,20],[100,200]);

			box.size().divide([2, 2]);

			expect(box.coords()).toEqual({ x : 10, y : 20, w : 50, h : 100});

		});

		it("can be scaled by a factor", function(){

			var box = aabb([10,20],[100,200]);

			box.size().scale(2);

			expect(box.coords()).toEqual({ x : 10, y : 20, w : 200, h : 400});

		});

	});
	
	describe("Actions on Position and Size", function(){

		var aabb = require('aabb').AABB;

		it("can be scaled", function(){

			var box = aabb([1,2],[100,50]);

			box.scale(2);

			expect(box.coords()).toEqual({ x : 2, y : 4, w : 200, h : 100})

		});

		it("can return a css properties object", function(){

			var box = aabb([1,2],[100,50]);

			expect(box.css()).toEqual({ left : 1, top: 2, width: 100, height: 50});

		});

		it("can accurately detect a collision with another AABB", function(){

			var boxA = aabb([10,10],[100,100]);
			var boxB = aabb([90,90],[100,100]);

			expect(boxA.collisionCheck(boxB)).toEqual([20, 20]);

			boxB.position().add([20,20]);

			expect(boxA.collisionCheck(boxB)).toEqual(false);

		})

	})

})