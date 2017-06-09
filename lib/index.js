const fetch = require('isomorphic-fetch');
const withQuery = require('with-query');


function authHeaders(accessToken) {
  return {
    Authorization: `Bearer ${accessToken}`,
  };
}

class Client {

  constructor({ cluster, clientId }) {
    this.apiUrl = `https://api.${cluster}.eldarioncloud.com/v2/`;
    this.identityUrl = 'https://identity.gondor.io/';
    this.clientId = clientId;
  }

  resourceGroups({ accessToken }) {
    const client = this;
    return {
      async list() {
        const res = await fetch(`${client.apiUrl}resource_groups/`, {
          headers: Object.assign({}, authHeaders(accessToken)),
        });
        return res.json();
      },
    };
  }

  sites({ accessToken, resourceGroup }) {
    const client = this;
    return {
      async list() {
        const res = await fetch(
          withQuery(`${client.apiUrl}sites/`, { resource_group: resourceGroup }),
          {
            headers: Object.assign({}, authHeaders(accessToken)),
          },
        );
        return res.json();
      },
    };
  }

  instances({ accessToken, site }) {
    const client = this;
    return {
      async list() {
        const res = await fetch(
          withQuery(`${client.apiUrl}instances/`, { site }),
          {
            headers: Object.assign({}, authHeaders(accessToken)),
          },
        );
        return res.json();
      },
    };
  }

  services({ accessToken, instance }) {
    const client = this;
    return {
      async list() {
        const res = await fetch(
          withQuery(`${client.apiUrl}services/`, { instance }),
          {
            headers: Object.assign({}, authHeaders(accessToken)),
          },
        );
        return res.json();
      },
    };
  }

}

module.exports = Client;
