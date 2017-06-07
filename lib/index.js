const fetch = require('node-fetch');
const FormData = require('form-data');
const withQuery = require('with-query');


module.exports = class Client {

  constructor({ cluster, clientId }) {
    this.apiUrl = `https://api.${cluster}.eldarioncloud.com/v2/`;
    this.identityUrl = 'https://identity.gondor.io/';
    this.clientId = clientId;
  }

  async authenticate(username, password) {
    const form = new FormData();
    form.append('grant_type', 'password');
    form.append('client_id', this.clientId);
    form.append('username', username);
    form.append('password', password);
    const res = await fetch(`${this.identityUrl}oauth/token/`, {
      method: 'POST',
      body: form,
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
