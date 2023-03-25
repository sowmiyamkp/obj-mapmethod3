const users = [
  {
    first_name: 'Mike',
    location: 'London'
  },
  {
    first_name: 'Tim',
    location: 'US'
  },
  {
    first_name: 'John',
    location: 'Australia'
  }
];
let per=users.map(function(user){
	return `${user.first_name} lives in ${user.location}`
})
console.log(per);



