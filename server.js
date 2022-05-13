const tmi = require('tmi.js')


const client = new tmi.Client({
    connection: {
      reconnect: true
    },
    identity: {
        username: `sircarios`,
        password: `oauth:`
      },
    channels: [
      'sircharbles',
      'morganmarlene',
      'stephdotted'
    ]
  });
  
  client.connect();
  var wat = client.getChannels();
  console.log(wat);

  client.on('message', async (channel, context, message) => {
    console.log('channel', {channel, user: context.username, message}
      );
    
    const isNotBot = context.username.toLowerCase() !== `sircarios`;

    const charbles = context.username.toLowerCase() == `sircharbles`;
    
    const ohai = message.toLowerCase() == `ohai`;
    const drinkspls = message.toLowerCase() == "drinks please" 
    const goldfishpls = message.toLowerCase() == "snacks please"
    const starbuckspls = message.toLowerCase() == "sbux please"
    const relaxpls = message.toLowerCase() == "time to relax"

    const drinkmsg = `/me pours ` + context.username + ` another drink. Cheers!`
    const goldfishmsg = "/me hands " + context.username + " a giant box of flavor-blasted Goldfish! Wooo!"
    const starbucksmsg = "/me hands " + context.username + " a Venti Iced Cold Brew with Almondmlk!"
    const relaxmsg = "/me draws up a nice warm bubble bath... will the toaster be joining you " + context.username + "?"

    const stephsnacksmsg = "/me hands Steph a warmed up Timmy's donut!"
    const fionasnackmsg = "/me hands Fiona a warmed up Starbucks donut with special glaze...!"

    // Intervals

    // type late to spam dicks
    const late = message.toLocaleLowerCase() == "late"
    const dicks = "DICKS DICKS DICKS DICKS DICKS DICKS DICKS DICKS DICKS DICKS DICKS DICKS DICKS DICKS DICKS DICKS " 
    
    function intervalFunc() {
      client.say(channel, dicks);
    }
    
    if( isNotBot && charbles && late) {
      setInterval(intervalFunc, 60000);
    }

    // type ~ad to run ads
    const runAd = message.toLocaleLowerCase() == "~ad"
    const adCommand = "/commercial 90" 
    
    function adintervalFunc() {
      client.say(channel, adCommand);
    }
    
    if( isNotBot && runAd) {
      client.say(channel, adCommand);
      setInterval(adintervalFunc, 330000);
    }
  
// Charles  messages
    if ( isNotBot && charbles && ohai ) {
              client.say(channel, drinkmsg);
    }
    if ( isNotBot && charbles && drinkspls ) {
        client.say(channel, drinkmsg);
      }
      if ( isNotBot && charbles && goldfishpls ) {
        client.say(channel, goldfishmsg);
      }
      if ( isNotBot && charbles && starbuckspls ) {
        client.say(channel, starbucksmsg);
      }
      if ( isNotBot && charbles && relaxpls ) {
        client.say(channel, relaxmsg);
      }

      // steph messages 
    const steph = context.username.toLowerCase() == `stephdotted`;
    if ( isNotBot && steph && drinkspls ) {
        client.say(channel, drinkmsg);
      }
   if ( isNotBot && steph && goldfishpls ) {
           client.say(channel, stephsnacksmsg);
     }
     if ( isNotBot && steph && starbuckspls ) {
      client.say(channel, starbucksmsg);
    }
    if ( isNotBot && steph && relaxpls ) {
      client.say(channel, relaxmsg);
    }


      // fiona msgs
    const fiona = context.username.toLowerCase() == `fiona_sinead`;
    if ( isNotBot && fiona && drinkspls ) {
        client.say(channel, drinkmsg);
      }
      if ( isNotBot && fiona && goldfishpls ) {
        client.say(channel, fionasnackmsg);
      }
      if ( isNotBot && fiona && starbuckspls ) {
        client.say(channel, starbucksmsg);
      }
      if ( isNotBot && fiona && relaxpls ) {
        client.say(channel, relaxmsg);
      }

      /* hobbit messages
    const hobbit = context.username.toLowerCase() == `angryhob8it`;
    if ( isNotBot && hobbit && drinkspls ) {
        client.say(channel, drinkmsg);
      }
      if ( isNotBot && hobbit && relaxpls ) {
        client.say(channel, relaxmsg);
      }

      */

      // nox msgs
      const nox = context.username.toLowerCase() == `noxbane96`;
    if ( isNotBot && nox && drinkspls ) {
         client.say(channel, drinkmsg);
       }
       if ( isNotBot && nox && relaxpls ) {
        client.say(channel, relaxmsg);
      }

      // morgan msgs
      const morgan = context.username.toLowerCase() == `morganmarlene`;
      if ( isNotBot && morgan && drinkspls ) {
           client.say(channel, drinkmsg);
         }
      if ( isNotBot && morgan && goldfishpls ) {
        client.say(channel, goldfishmsg);
      }
      if ( isNotBot && morgan && starbuckspls ) {
        client.say(channel, starbucksmsg);
      }
      if ( isNotBot && morgan && relaxpls ) {
        client.say(channel, relaxmsg);
      }

      // darth msgs
      const darth = context.username.toLowerCase() == `darthstitch22`;
      if ( isNotBot && darth && drinkspls ) {
           client.say(channel, drinkmsg);
         }
      if ( isNotBot && darth && goldfishpls ) {
        client.say(channel, goldfishmsg);
      }
      if ( isNotBot && darth && starbuckspls ) {
        client.say(channel, starbucksmsg);
      }
      if ( isNotBot && darth && relaxpls ) {
        client.say(channel, relaxmsg);
      }

      //sound alert responses
      var varChickenDance = `chicken dance`;
      const bobble = message.toLowerCase().includes(varChickenDance)
      const bobbleMsg = 'chickenBobble chickenBobble chickenBobble chickenBobble chickenBobble chickenBobble chickenBobble chickenBobble chickenBobble chickenBobble chickenBobble chickenBobble chickenBobble chickenBobble chickenBobble chickenBobble chickenBobble chickenBobble chickenBobble chickenBobble chickenBobble chickenBobble chickenBobble chickenBobble chickenBobble chickenBobble chickenBobble chickenBobble chickenBobble chickenBobble chickenBobble chickenBobble chickenBobble chickenBobble chickenBobble'
      if ( isNotBot && bobble ) {
        client.say(channel, bobbleMsg);
      }
      // const soundalerts = context.username.toLowerCase() == `soundalerts`;
      var varsaxalert = `epic sax`;
      const saxalert = message.toLowerCase().includes(varsaxalert)
      const saxMsg = 'catJAM catJAM catJAM catJAM catJAM catJAM catJAM catJAM catJAM catJAM catJAM catJAM catJAM catJAM catJAM catJAM catJAM catJAM '
      if ( isNotBot && saxalert ) {
        client.say(channel, saxMsg);
      }

      var jebaited = `jebaited`;
      const jebalert = message.toLowerCase().includes(jebaited)
      const jebMsg = 'peepoRiot peepoRiot peepoRiot peepoRiot peepoRiot peepoRiot peepoRiot peepoRiot peepoRiot peepoRiot peepoRiot peepoRiot peepoRiot peepoRiot peepoRiot'
      if ( isNotBot && jebalert ) {
        client.say(channel, jebMsg);
      }

      var babyshark = `baby shark`;
      const babysharkalert = message.toLowerCase().includes(babyshark)
      const sharkMsg = 'Jammies Jammies Jammies Jammies Jammies Jammies Jammies Jammies Jammies Jammies Jammies Jammies Jammies Jammies Jammies Jammies Jammies Jammies Jammies '
      if ( isNotBot && babysharkalert ) {
        client.say(channel, sharkMsg);
      }

      var hamsterdance = `hamster dance`;
      const hamsteralert = message.toLowerCase().includes(hamsterdance)
      const hamsterMsg = 'PartyParrot PartyParrot PartyParrot PartyParrot PartyParrot PartyParrot PartyParrot PartyParrot PartyParrot PartyParrot PartyParrot PartyParrot PartyParrot'
      if ( isNotBot && hamsteralert ) {
        client.say(channel, hamsterMsg);
      }
  });