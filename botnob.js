/* Use of asyncWhile
 
var aw = asyncWhile(condition [cb, endCb]);
aw.start();

# condition -> equal to the condition of while statement while(condition){}, but here can do a sring or a function (callback)
	= If the condition is a string, then the variable that is use in the condition have to do global scope
	= If the condition is a callback (recommended), then the callback have to return a boolean value and the variable can do global scope or local scope
# cb -> are optional, is a callback to execute in every loop repetition
# endCb -> are optional, is a callback to execute when the loop ends
 
= If cb is omited and endCb is use, then cb have to do null, undefined or false
 
@autor: Samuel Burbano Ramos - @samuelb1311
*/

var AsyncWhile = function(condition, cb, endCb){
	if (!(this instanceof AsyncWhile)) return new AsyncWhile(condition, cb, endCb);
	this._nbreak = true;
	this.condition = condition;
	this.cb = cb;
	this.endCb = endCb;
};

AsyncWhile.prototype.start = function(){
	if ((typeof this.condition === 'function' ? this.condition() : eval(this.condition)) && this._nbreak){
		if (this.cb) this.cb();
		setImmediate(function(){
			this.start();
		}.bind(this));
	} else if (this.endCb) this.endCb();
};

AsyncWhile.prototype.break = function() {
	this._nbreak = false;
};

module.exports.asyncWhile = AsyncWhile;
