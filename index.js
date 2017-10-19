function theBeatlesPlay(musicians, instruments) {
  var beatleFacts = [];
  for (var i = 0; i < musicians.length; i++) {
    beatleFacts.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return beatleFacts
}

function johnLennonFacts(facts) {
  var l = facts.length;
  var i = -1;
  while (i < l) {
    i++;
    facts[i] = `${facts[i]}!!!`;
  }
  return facts
}
