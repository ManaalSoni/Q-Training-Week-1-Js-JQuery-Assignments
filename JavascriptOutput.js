/*-------------------
    Question 1 : 
-------------------*/
console.log('Question 1:')
const paragraph = `Thank you so much for contacting us. Dreamland guest relations. You're speaking with Ronaldo. May I have your name, please? Yes, sure. My name is robin soleimani. What is your phone number? It is 9876535362 as mentioned in the book Diary. Thank you so much for providing the info!`;
const sentences = paragraph.replace(/([.?!])\s*(?=[A-Z])/g, "$1|").split("|")

let counter = 1;

for (var sent of sentences){
    if (sent.split(' ').length > 4){ //Task 1: splits sent to count number of words and filter words<4
        var masked_sent = `${counter}. ${sent.replace(/[6-9]\d{9}/g, 'XXXXXXXXXX').trim()}`;
        console.log(masked_sent);
        counter++;
    }
}
/*-------------------
    Question 2 : 
-------------------*/
console.log('Question 2:')
const qTeams = {
    aaiec: 400, 
    aaiwc: 60, 
    qai: 200, 
    poc: 100,
    gtm: 50,
    hr: 10
};

var result = [];

for (var members in qTeams) {
    result.push([members, qTeams[members]]);
}

result.sort((a, b) => b[1] - a[1]);

for (var team of result){
    console.log(`${team[0]} - ${team[1]}`)
}
  