$(()=>{
  // const tasks = $('#tasks');
  const api = 'https://602dfbbc96eaad00176dd008.mockapi.io/api/tasks';
  
  // Your code here
  fetch(api).then(function (response) {
	// The API call was successful!
	return response.json();
}).then(function (data) {
	// This is the JSON from our response
	console.log(data);  
  appendData(data);
}).catch(function (err) {
	// There was an error
	console.warn('Something went wrong.', err);
});

// for each values of data from API

  function appendData(data) {
    var string = "";
    for (var i in data) {
      console.log(data[i].title[0]);
      string += '<div class="card"><div class="container"><table><tr><td> <div class="dot">' + data[i].title[0] + '</div> </td>  <td class="custSpace"></td> <td> <div class="custFontWht"> <span>' + data[i].title + '</span> </div> <div> <span class="name">' + data[i].id + '</span> </div> </td> </tr> </table> <div class="custDivHght"></div> <table class="custTableDim"> <tr> <td> <div> <span>Due On</span> </div> <div class="custFontWht"> <span>' + data[i].due_date + '</span> </div></td> <td class="custSpace"></td><td><div class="custFontWht"><span>Status</span></div><div> <span class="name">' + data[i].status + '</span></div></td></tr></table></div></div>';
    }
    document.getElementById('json').innerHTML = string;
  }
});