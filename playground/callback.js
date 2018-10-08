var getUser=(id,callback)=>{
var user={
	id,
	name:'Shefali'
};
setTimeout(()=>{
	callback(user);
},300);
};
getUser(31,(userObject)=>{
	console.log(userObject);
});