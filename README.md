# BOTNOB

Make blocking operations as non-blocking operations, for now just have support for asyncWhile.

## How to use

	var aw = asyncWhile(condition [cb, endCb]);
	aw.start();

	* condition -> equal to the condition of while statement while(condition){}, but here can do a sring or a function (callback)
		. If the condition is a string, then the variable that is use in the condition have to do global scope
		. If the condition is a callback (recommended), then the callback have to return a boolean value and the variable can do global scope or local scope
	* cb -> are optional, is a callback to execute in every loop repetition
	* endCb -> are optional, is a callback to execute when the loop ends
	 
	. If cb is omited and endCb is use, then cb have to do null, undefined or false

## Example

	var asyncWhile = require('botnob').asyncWhile;

	/* Local Scope or Global Scope */
	var i = 1;
	var aw = asyncWhile(function(){ return i <= 10 }, function(){
		console.log(i);
		// break -> return aw.break()
		// continue -> return
		i += 1;
	}, function(){
		console.log('End the count!');
	});
	aw.start();

	console.log('Execute before the loop ends!');



	/* Just Global Scope */
	i = 1;
	var aw = asyncWhile('i <= 10', function(){
		console.log(i);
		// break -> return aw.break()
		// continue -> return
		i += 1;
	}, function(){
		console.log('End the count!');
	});
	aw.start();

	console.log('Execute before the loop ends!');


## Author
---------
Samuel Burbano Ramos - @samuelb1311

## Contributors
---------------
Alejandro Morales Gámez - @_alejandromg