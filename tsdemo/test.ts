const pi = Math.PI;
console.log(PI)

interface MyName {
	
}

class Preson {
	private IP: number = Math.PI;
	
	static index: number = 1024;
	
	static numInt = function (opt:string):any {
		return Preson.index;
	}
	
	public name: string = '';
	
	constructor () {
		this.name = 'myName';
		this.init();
		
	};
	
	init() {
		console.log(this.name, Preson.index);
	};
};
