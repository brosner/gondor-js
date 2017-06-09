'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var fetch = require('isomorphic-fetch');
var withQuery = require('with-query');

function authHeaders(accessToken) {
  return {
    Authorization: 'Bearer ' + accessToken
  };
}

var Client = function () {
  function Client(_ref) {
    var cluster = _ref.cluster;

    _classCallCheck(this, Client);

    this.apiUrl = 'https://api.' + cluster + '.eldarioncloud.com/v2/';
  }

  _createClass(Client, [{
    key: 'resourceGroups',
    value: function resourceGroups(_ref2) {
      var accessToken = _ref2.accessToken;

      var client = this;
      return {
        list: async function list() {
          var res = await fetch(client.apiUrl + 'resource_groups/', {
            headers: Object.assign({}, authHeaders(accessToken))
          });
          return res.json();
        }
      };
    }
  }, {
    key: 'sites',
    value: function sites(_ref3) {
      var accessToken = _ref3.accessToken,
          resourceGroup = _ref3.resourceGroup;

      var client = this;
      return {
        list: async function list() {
          var res = await fetch(withQuery(client.apiUrl + 'sites/', { resource_group: resourceGroup }), {
            headers: Object.assign({}, authHeaders(accessToken))
          });
          return res.json();
        }
      };
    }
  }, {
    key: 'instances',
    value: function instances(_ref4) {
      var accessToken = _ref4.accessToken,
          site = _ref4.site;

      var client = this;
      return {
        list: async function list() {
          var res = await fetch(withQuery(client.apiUrl + 'instances/', { site: site }), {
            headers: Object.assign({}, authHeaders(accessToken))
          });
          return res.json();
        }
      };
    }
  }, {
    key: 'services',
    value: function services(_ref5) {
      var accessToken = _ref5.accessToken,
          instance = _ref5.instance;

      var client = this;
      return {
        list: async function list() {
          var res = await fetch(withQuery(client.apiUrl + 'services/', { instance: instance }), {
            headers: Object.assign({}, authHeaders(accessToken))
          });
          return res.json();
        }
      };
    }
  }]);

  return Client;
}();

module.exports = Client;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJmZXRjaCIsInJlcXVpcmUiLCJ3aXRoUXVlcnkiLCJhdXRoSGVhZGVycyIsImFjY2Vzc1Rva2VuIiwiQXV0aG9yaXphdGlvbiIsIkNsaWVudCIsImNsdXN0ZXIiLCJhcGlVcmwiLCJjbGllbnQiLCJsaXN0IiwicmVzIiwiaGVhZGVycyIsIk9iamVjdCIsImFzc2lnbiIsImpzb24iLCJyZXNvdXJjZUdyb3VwIiwicmVzb3VyY2VfZ3JvdXAiLCJzaXRlIiwiaW5zdGFuY2UiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxJQUFNQSxRQUFRQyxRQUFRLGtCQUFSLENBQWQ7QUFDQSxJQUFNQyxZQUFZRCxRQUFRLFlBQVIsQ0FBbEI7O0FBR0EsU0FBU0UsV0FBVCxDQUFxQkMsV0FBckIsRUFBa0M7QUFDaEMsU0FBTztBQUNMQywrQkFBeUJEO0FBRHBCLEdBQVA7QUFHRDs7SUFFS0UsTTtBQUVKLHdCQUF5QjtBQUFBLFFBQVhDLE9BQVcsUUFBWEEsT0FBVzs7QUFBQTs7QUFDdkIsU0FBS0MsTUFBTCxvQkFBNkJELE9BQTdCO0FBQ0Q7Ozs7MENBRStCO0FBQUEsVUFBZkgsV0FBZSxTQUFmQSxXQUFlOztBQUM5QixVQUFNSyxTQUFTLElBQWY7QUFDQSxhQUFPO0FBQ0NDLFlBREQsd0JBQ1E7QUFDWCxjQUFNQyxNQUFNLE1BQU1YLE1BQVNTLE9BQU9ELE1BQWhCLHVCQUEwQztBQUMxREkscUJBQVNDLE9BQU9DLE1BQVAsQ0FBYyxFQUFkLEVBQWtCWCxZQUFZQyxXQUFaLENBQWxCO0FBRGlELFdBQTFDLENBQWxCO0FBR0EsaUJBQU9PLElBQUlJLElBQUosRUFBUDtBQUNEO0FBTkksT0FBUDtBQVFEOzs7aUNBRXFDO0FBQUEsVUFBOUJYLFdBQThCLFNBQTlCQSxXQUE4QjtBQUFBLFVBQWpCWSxhQUFpQixTQUFqQkEsYUFBaUI7O0FBQ3BDLFVBQU1QLFNBQVMsSUFBZjtBQUNBLGFBQU87QUFDQ0MsWUFERCx3QkFDUTtBQUNYLGNBQU1DLE1BQU0sTUFBTVgsTUFDaEJFLFVBQWFPLE9BQU9ELE1BQXBCLGFBQW9DLEVBQUVTLGdCQUFnQkQsYUFBbEIsRUFBcEMsQ0FEZ0IsRUFFaEI7QUFDRUoscUJBQVNDLE9BQU9DLE1BQVAsQ0FBYyxFQUFkLEVBQWtCWCxZQUFZQyxXQUFaLENBQWxCO0FBRFgsV0FGZ0IsQ0FBbEI7QUFNQSxpQkFBT08sSUFBSUksSUFBSixFQUFQO0FBQ0Q7QUFUSSxPQUFQO0FBV0Q7OztxQ0FFZ0M7QUFBQSxVQUFyQlgsV0FBcUIsU0FBckJBLFdBQXFCO0FBQUEsVUFBUmMsSUFBUSxTQUFSQSxJQUFROztBQUMvQixVQUFNVCxTQUFTLElBQWY7QUFDQSxhQUFPO0FBQ0NDLFlBREQsd0JBQ1E7QUFDWCxjQUFNQyxNQUFNLE1BQU1YLE1BQ2hCRSxVQUFhTyxPQUFPRCxNQUFwQixpQkFBd0MsRUFBRVUsVUFBRixFQUF4QyxDQURnQixFQUVoQjtBQUNFTixxQkFBU0MsT0FBT0MsTUFBUCxDQUFjLEVBQWQsRUFBa0JYLFlBQVlDLFdBQVosQ0FBbEI7QUFEWCxXQUZnQixDQUFsQjtBQU1BLGlCQUFPTyxJQUFJSSxJQUFKLEVBQVA7QUFDRDtBQVRJLE9BQVA7QUFXRDs7O29DQUVtQztBQUFBLFVBQXpCWCxXQUF5QixTQUF6QkEsV0FBeUI7QUFBQSxVQUFaZSxRQUFZLFNBQVpBLFFBQVk7O0FBQ2xDLFVBQU1WLFNBQVMsSUFBZjtBQUNBLGFBQU87QUFDQ0MsWUFERCx3QkFDUTtBQUNYLGNBQU1DLE1BQU0sTUFBTVgsTUFDaEJFLFVBQWFPLE9BQU9ELE1BQXBCLGdCQUF1QyxFQUFFVyxrQkFBRixFQUF2QyxDQURnQixFQUVoQjtBQUNFUCxxQkFBU0MsT0FBT0MsTUFBUCxDQUFjLEVBQWQsRUFBa0JYLFlBQVlDLFdBQVosQ0FBbEI7QUFEWCxXQUZnQixDQUFsQjtBQU1BLGlCQUFPTyxJQUFJSSxJQUFKLEVBQVA7QUFDRDtBQVRJLE9BQVA7QUFXRDs7Ozs7O0FBSUhLLE9BQU9DLE9BQVAsR0FBaUJmLE1BQWpCIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgZmV0Y2ggPSByZXF1aXJlKCdpc29tb3JwaGljLWZldGNoJyk7XG5jb25zdCB3aXRoUXVlcnkgPSByZXF1aXJlKCd3aXRoLXF1ZXJ5Jyk7XG5cblxuZnVuY3Rpb24gYXV0aEhlYWRlcnMoYWNjZXNzVG9rZW4pIHtcbiAgcmV0dXJuIHtcbiAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7YWNjZXNzVG9rZW59YCxcbiAgfTtcbn1cblxuY2xhc3MgQ2xpZW50IHtcblxuICBjb25zdHJ1Y3Rvcih7IGNsdXN0ZXIgfSkge1xuICAgIHRoaXMuYXBpVXJsID0gYGh0dHBzOi8vYXBpLiR7Y2x1c3Rlcn0uZWxkYXJpb25jbG91ZC5jb20vdjIvYDtcbiAgfVxuXG4gIHJlc291cmNlR3JvdXBzKHsgYWNjZXNzVG9rZW4gfSkge1xuICAgIGNvbnN0IGNsaWVudCA9IHRoaXM7XG4gICAgcmV0dXJuIHtcbiAgICAgIGFzeW5jIGxpc3QoKSB7XG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGAke2NsaWVudC5hcGlVcmx9cmVzb3VyY2VfZ3JvdXBzL2AsIHtcbiAgICAgICAgICBoZWFkZXJzOiBPYmplY3QuYXNzaWduKHt9LCBhdXRoSGVhZGVycyhhY2Nlc3NUb2tlbikpLFxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHJlcy5qc29uKCk7XG4gICAgICB9LFxuICAgIH07XG4gIH1cblxuICBzaXRlcyh7IGFjY2Vzc1Rva2VuLCByZXNvdXJjZUdyb3VwIH0pIHtcbiAgICBjb25zdCBjbGllbnQgPSB0aGlzO1xuICAgIHJldHVybiB7XG4gICAgICBhc3luYyBsaXN0KCkge1xuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChcbiAgICAgICAgICB3aXRoUXVlcnkoYCR7Y2xpZW50LmFwaVVybH1zaXRlcy9gLCB7IHJlc291cmNlX2dyb3VwOiByZXNvdXJjZUdyb3VwIH0pLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGhlYWRlcnM6IE9iamVjdC5hc3NpZ24oe30sIGF1dGhIZWFkZXJzKGFjY2Vzc1Rva2VuKSksXG4gICAgICAgICAgfSxcbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlcy5qc29uKCk7XG4gICAgICB9LFxuICAgIH07XG4gIH1cblxuICBpbnN0YW5jZXMoeyBhY2Nlc3NUb2tlbiwgc2l0ZSB9KSB7XG4gICAgY29uc3QgY2xpZW50ID0gdGhpcztcbiAgICByZXR1cm4ge1xuICAgICAgYXN5bmMgbGlzdCgpIHtcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goXG4gICAgICAgICAgd2l0aFF1ZXJ5KGAke2NsaWVudC5hcGlVcmx9aW5zdGFuY2VzL2AsIHsgc2l0ZSB9KSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBoZWFkZXJzOiBPYmplY3QuYXNzaWduKHt9LCBhdXRoSGVhZGVycyhhY2Nlc3NUb2tlbikpLFxuICAgICAgICAgIH0sXG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXMuanNvbigpO1xuICAgICAgfSxcbiAgICB9O1xuICB9XG5cbiAgc2VydmljZXMoeyBhY2Nlc3NUb2tlbiwgaW5zdGFuY2UgfSkge1xuICAgIGNvbnN0IGNsaWVudCA9IHRoaXM7XG4gICAgcmV0dXJuIHtcbiAgICAgIGFzeW5jIGxpc3QoKSB7XG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKFxuICAgICAgICAgIHdpdGhRdWVyeShgJHtjbGllbnQuYXBpVXJsfXNlcnZpY2VzL2AsIHsgaW5zdGFuY2UgfSksXG4gICAgICAgICAge1xuICAgICAgICAgICAgaGVhZGVyczogT2JqZWN0LmFzc2lnbih7fSwgYXV0aEhlYWRlcnMoYWNjZXNzVG9rZW4pKSxcbiAgICAgICAgICB9LFxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzLmpzb24oKTtcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxuXG59XG5cbm1vZHVsZS5leHBvcnRzID0gQ2xpZW50O1xuIl19