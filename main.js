for(i = 0; i < customers.results.length; i++){
const temp = `
  <div id = "profile">
    <img src=${customers.results[i].picture.large}>
    <h2>${customers.results[i].name.first} ${customers.results[i].name.last}</h2>
    <a href="email">${customers.results[i].email}</a>

    <div>${customers.results[i].location.street}</div>
    <div>${customers.results[i].location.city}, ${customers.results[i].location.state} ${customers.results[i].location.postcode}</div>
    <div>${customers.results[i].phone}</div>
  </div>
  `;

  document.querySelector('.container1').innerHTML += temp;
    console.log(customers.results[i]);
}
