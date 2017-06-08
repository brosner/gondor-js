const fetch = require('isomorphic-fetch');
const withQuery = require('with-query');
const qs = require('qs');


module.exports = class {

  constructor({ cluster, clientId }) {
    this.apiUrl = `https://api.${cluster}.eldarioncloud.com/v2/`;
    this.identityUrl = 'https://identity.gondor.io/';
    this.clientId = clientId;
  }

  async authenticate(username, password) {
    const res = await fetch(`${this.identityUrl}oauth/token/`, {
      method: 'POST',
      body: qs.stringify({
        grant_type: 'password',
        client_id: this.clientId,
        username,
        password,
      }),
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8',
      },
    });
    const data = await res.json();
    this.accessToken = data.access_token;
  }

  authHeaders() {
    return {
      Authorization: `Bearer ${this.accessToken}`,
    };
  }

  resourceGroups() {
    const client = this;
    return {
      async list() {
        const res = await fetch(`${client.apiUrl}resource_groups/`, {
          headers: Object.assign({}, client.authHeaders()),
        });
        return res.json();
      },
    };
  }

  sites(resourceGroup) {
    const client = this;
    return {
      async list() {
        const res = await fetch(
          withQuery(`${client.apiUrl}sites/`, { resource_group: resourceGroup }),
          {
            headers: Object.assign({}, client.authHeaders()),
          },
        );
        return res.json();
      },
    };
  }

  instances(site) {
    const client = this;
    return {
      async list() {
        const res = await fetch(
          withQuery(`${client.apiUrl}instances/`, { site }),
          {
            headers: Object.assign({}, client.authHeaders()),
          },
        );
        return res.json();
      },
    };
  }

  services(instance) {
    const client = this;
    return {
      async list() {
        const res = await fetch(
          withQuery(`${client.apiUrl}services/`, { instance }),
          {
            headers: Object.assign({}, client.authHeaders()),
          },
        );
        return res.json();
      },
    };
  }

};
