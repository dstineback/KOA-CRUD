'use strict';

const mongoose = require('mongoose');

const WhiffWhaffPlayer = new mongoose.Schema({
  name: String,
  wins: Number,
  losses: Number,
  specialSkill: {type: String, default: 'None'}
});

module.exports = mongoose.model('player', WhiffWhaffPlayer);

// curl localhost:7777/whiff-whaff -X POST -d '{"name":"Bertram Wilberforce Wooster", "wins":"7", "losses":"2", "specialSkill":"Quick-witted and loyal manservant"}'

// curl localhost:7777/whiff-whaff -X POST -d '{"name":"Cyril Fotheringey-Phipps", "wins":"1", "losses":"4", "specialSkill":"Ignorance"}'

// curl localhost:7777/whiff-whaff -X POST -d '{"name":"Lord Marmaduke Chuffnell", "wins":"5", "losses":"5", "specialSkill":"Peerage/nobility"}'

// curl localhost:7777/whiff-whaff -X POST -d '{"name":"Augustus Fink-Nottle", "wins":"8", "losses":"12", "specialSkill":"Better when drunk"}'

// curl localhost:7777/whiff-whaff -X POST -d '{"name":"Reginald Twistelton", "wins":"0", "losses":"7"}'

// curl localhost:7777/whiff-whaff -X POST -d '{"name":"Nigel Fresthlethwaite-St George", "wins":"8", "losses":"3", "specialSkill":"Obscene inherited wealth"}'
