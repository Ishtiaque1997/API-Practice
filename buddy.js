const loadBuddies=()=>{
 fetch('https://randomuser.me/api/?results=5')
 .then(res=>res.json())
 .then(data=>displayBuddy(data))
}
loadBuddies();

const displayBuddy=(data)=>{
 const buddies=data.results;
 console.log(buddies)
 const holder=document.getElementById('buddy')
 for(const buddy of buddies){
   const place=document.createElement('p');
   place.innerHTML=`Name: ${buddy.name.first} ${buddy.name.last} email:${buddy.email}`;
   holder.appendChild(place)
 }
}