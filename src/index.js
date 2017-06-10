const fetch = require('isomorphic-fetch');
const withQuery = require('with-query');


function authHeaders(accessToken) {
  return {
    Authorization: `Bearer ${accessToken}`,
  };
}

class Client {

  constructor({ cluster }) {
    this.apiUrl = `https://api.${cluster}.eldarioncloud.com/v2/`;
  }

  resourceGroups({ accessToken }) {
    const client = this;
    return {
      list() {
        return fetch(`${client.apiUrl}resource_groups/`, {
          headers: Object.assign({}, authHeaders(accessToken)),
        }).then(res => res.json());
      },
    };
  }

  sites({ accessToken, resourceGroup }) {
    const client = this;
    return {
      list() {
        return fetch(
          withQuery(`${client.apiUrl}sites/`, { resource_group: resourceGroup }),
          {
            headers: Object.assign({}, authHeaders(accessToken)),
          },
        ).then(res => res.json());
      },
    };
  }

  instances({ accessToken, site }) {
    const client = this;
    return {
      list() {
        return fetch(
          withQuery(`${client.apiUrl}instances/`, { site }),
          {
            headers: Object.assign({}, authHeaders(accessToken)),
          },
        ).then(res => res.json());
      },
    };
  }

  services({ accessToken, instance }) {
    const client = this;
    return {
      list() {
        return fetch(
          withQuery(`${client.apiUrl}services/`, { instance }),
          {
            headers: Object.assign({}, authHeaders(accessToken)),
          },
        ).then(res => res.json());
      },
    };
  }

}

module.exports = Client;
