/*
    It is one object controls access to another object. This can be useful for various
    purposes such as lazy loading, access control, logging, monitoring, caching or validation.
*/

// Subject interface
class IServer {
  request(body) {}
}

const transaltions = {
  EN: 'processing',
  FR: 'traitement'
}

// Subject
class Server extends IServer {
  request(body) {
    if(body.path === '/process') {
      const version = body.headers && body.headers.version ? body.headers.version : '1.0'
      const locale = body.headers && body.headers.locale ? body.headers.locale  : 'EN' 
      console.log(transaltions[locale] + ' : ' + version)
    } else {
      console.log('500')
    }
  }
}

// Server Proxy which enrich requests by headers
class Proxy extends Server {
  constructor(server) {
    super();
    this.server = server;
  }


  request(body) {
    let _body = body
    if (!body.headers) {
      _body = {...body, headers: {locale: 'FR', version: '1.2.0'}}
    }
    this.server.request(_body);
  }
}

function processRequest(server) {
  server.request({path: '/process'});
}

// Example
const server = new Server();
const serverProxy = new Proxy(server);

// Here we interact with both the server and the server proxy in the same way
processRequest(server);
// "processing : 1.0"
processRequest(serverProxy);
// "traitement : 1.2.0"

