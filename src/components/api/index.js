//JSON - Login
const axios = require('axios');
var $ = require("jquery");

export function POST(url,data){






  return $.ajax({
    url : `${url}`,
    type: 'POST',
    data : data,
    crossDomain: true,

    dataType: "json",
    contentType: "application/json",
    headers:{"X-STUDY-TOKEN":"98b5a39c1a0a283b44db8659dbe6591b32481f568b8d0527d6652adfe1cddd7a",
    "X-PARTICIPANT-TOKEN":"3fe1ab9a3a277383368af8ec6f28baec70cc357b66181c1e09d10cef903dc152"}

}).then(response => {
        return response

}).catch(err => {
        return null
}

)














  console.log(data,"gggggggggggggg")
  var resp = axios({
    method: 'post',
    url: url,
    data: data,
    headers: {
      "Content-Type":"application/json",
      "X-STUDY-TOKEN":"98b5a39c1a0a283b44db8659dbe6591b32481f568b8d0527d6652adfe1cddd7a",
    "X-PARTICIPANT-TOKEN":"3fe1ab9a3a277383368af8ec6f28baec70cc357b66181c1e09d10cef903dc152"}

  });
var response = fetch(url, {
  method: 'post',
  headers: {
    "Content-type": "application/json",
    "X-STUDY-TOKEN":"98b5a39c1a0a283b44db8659dbe6591b32481f568b8d0527d6652adfe1cddd7a",
    "X-PARTICIPANT-TOKEN":"3fe1ab9a3a277383368af8ec6f28baec70cc357b66181c1e09d10cef903dc152"
  },
  body: data,
})
.then(function (data) {
  console.log('Request succeeded with JSON response', data);
})
.catch(function (error) {
  console.log('Request failed', error);
});
return response
}
export function loginApi(data) {
  var response = "";
  if (data.email == "burhan@trialx.com" && data.password == "123") {
    response = {
      status: "success",
      loggedInUser: "hruday@gmail.com"
    };
    return response;
  } else {
    response = {
      status: "failed",
      error: "Username or password incorrect"
    };
    return response;
  }
}

//JSON - DashBoardPage
export function dashboardApi() {
  var response = "";
  response = {
    user: [
      {
        id: 1,
        name: "test1",
        age: "11",
        gender: "male",
        email: "test1@gmail.com",
        phoneNo: "9415346313"
      },
      {
        id: 2,
        name: "test2",
        age: "12",
        gender: "male",
        email: "test2@gmail.com",
        phoneNo: "9415346314"
      },
      {
        id: 3,
        name: "test3",
        age: "13",
        gender: "male",
        email: "test3@gmail.com",
        phoneNo: "9415346315"
      },
      {
        id: 3,
        name: "test3",
        age: "13",
        gender: "male",
        email: "test3@gmail.com",
        phoneNo: "9415346315"
      },
      {
        id: 3,
        name: "test3",
        age: "13",
        gender: "male",
        email: "test3@gmail.com",
        phoneNo: "9415346315"
      },
      {
        id: 3,
        name: "test3",
        age: "13",
        gender: "male",
        email: "test3@gmail.com",
        phoneNo: "9415346315"
      },
      {
        id: 3,
        name: "test3",
        age: "13",
        gender: "male",
        email: "test3@gmail.com",
        phoneNo: "9415346315"
      },
      {
        id: 3,
        name: "test3",
        age: "13",
        gender: "male",
        email: "test3@gmail.com",
        phoneNo: "9415346315"
      },
      {
        id: 3,
        name: "test3",
        age: "13",
        gender: "male",
        email: "test3@gmail.com",
        phoneNo: "9415346315"
      },
      {
        id: 3,
        name: "test3",
        age: "13",
        gender: "male",
        email: "test3@gmail.com",
        phoneNo: "9415346315"
      },
      {
        id: 3,
        name: "test3",
        age: "13",
        gender: "male",
        email: "test3@gmail.com",
        phoneNo: "9415346315"
      },
      {
        id: 3,
        name: "test3",
        age: "13",
        gender: "male",
        email: "test3@gmail.com",
        phoneNo: "9415346315"
      },
      {
        id: 3,
        name: "test3",
        age: "13",
        gender: "male",
        email: "test3@gmail.com",
        phoneNo: "9415346315"
      },
      {
        id: 3,
        name: "test3",
        age: "13",
        gender: "male",
        email: "test3@gmail.com",
        phoneNo: "9415346315"
      },
      {
        id: 3,
        name: "test3",
        age: "13",
        gender: "male",
        email: "test3@gmail.com",
        phoneNo: "9415346315"
      },
      {
        id: 4,
        name: "test4",
        age: "14",
        gender: "male",
        email: "test4@gmail.com",
        phoneNo: "9415346316"
      },
      {
        id: 5,
        name: "test5",
        age: "15",
        gender: "male",
        email: "test5@gmail.com",
        phoneNo: "9415346317"
      },
      {
        id: 6,
        name: "test6",
        age: "16",
        gender: "male",
        email: "test6@gmail.com",
        phoneNo: "9415346318"
      }
    ]
  };
  return response;
}
