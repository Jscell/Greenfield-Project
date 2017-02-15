angular.module('otbo5ly.services', [])

.factory('Users', function ($http) {
  return {

    getTopCookers : function(){
      return $http({
        method: 'GET',
        url: '/api/topCookers',
        })
        .then(function (resp) {
          console.log(resp.data);
          return resp.data;
        }).catch(function(err){
          if(err) {
            console.log(err);
            throw err;
          }
      });
    },

    getCookerOrders : function(username){
      return $http({
        method: 'GET',
        url: '/api/orders/'+ username,
        })
        .then(function (resp) {
          console.log(resp.data);
          return resp.data;
        }).catch(function(err){
          if(err) {
            console.log(err);
            throw err;
          }
      });
    },

    getCookerProfile : function(username){
      return $http({
        method: 'GET',
        url: '/api/users/'+ username,
        })
        .then(function (resp) {
          console.log(resp.data);
          return resp.data;
        }).catch(function(err){
          if(err) {
            console.log(err);
            throw err;
          }
      });
    },

    getTodayCookings : function(username){
      return $http({
        method: 'GET',
        url: '/api/todayCookings/',
        })
        .then(function (resp) {
          console.log(resp.data);
          return resp.data;
        }).catch(function(err){
          if(err) {
            console.log(err);
            throw err;
          }
      });
    },

    addCookerSchedule : function(username){
      return $http({
        method: 'POST',
        url: '/api/schedule/' + username,
        })
        .then(function (resp) {
          console.log(resp.data);
          return resp.data;
        }).catch(function(err){
          if(err) {
            console.log(err);
            throw err;
          }
      });
    }

  }
})
.factory('Auth', function ($http, $location, $window) {
  // Don't touch this Auth service!!!
  // it is responsible for authenticating our user
  // by exchanging the user's username and password
  // for a JWT from the server
  // that JWT is then stored in localStorage as 'com.shortly'
  // after you signin/signup open devtools, click resources,
  // then localStorage and you'll see your token from the server
  var signin = function (user) {
    return $http({
      method: 'POST',
      url: '/api/users/signin',
      data: user
    })
    .then(function (resp) {
      return resp.data.token;
    });
  };          

  var signup = function (user) {
    return $http({
      method: 'POST',
      url: '/api/users/signup',
      data: user
    })
    .then(function (resp) {
      return resp.data.token;
    });
  };

  var isAuth = function () {
    return !!$window.localStorage.getItem('com.otbo5ly');
  };

  var signout = function () {
    $window.localStorage.removeItem('com.otbo5ly');
    $window.localStorage.removeItem('user.otbo5ly');
    $location.path('/signin');
  };


  return {
    signin: signin,
    signup: signup,
    isAuth: isAuth,
    signout: signout
  };
});
