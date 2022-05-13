const tmi = require('tmi.js')


fetch('https://api.twitch.tv/helix/users/follows?to_id=sircharbles')
.then(response => response.json())
.then(data => console.log(data));


const client = new tmi.Client({
    connection: {
      reconnect: true
    },
    identity: {
        username: `sircharbles_thebot`,
        password: `oauth:njux1tacr912upiyaikyqm87q5anax`
      },
    channels: [
      'sircharbles'
    ]
  });
  
  client.connect();
  // const isNotBot = context.username.toLowerCase() !== `sircharbles_thebot`;

  // const isHoss = (username: string) => username.match(/\w*(h(o|0)ss|00312)\w*/gi);

