'use strict'
let user = {
	name: "John";
	surname: "Smith";

}

user.name = "Pete";
alert(user.name);
delete user.name;
alert(user.name);
