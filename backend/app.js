var fs = require('fs');
const { URL } = require('url');
const myURL = new URL('/files/1524/1524-0.txt','file://www.gutenburg.org/');
var done;


function JSONify(){
	var data = fs.readFileSync('Chapter_1.txt','utf-8');
	var dataNew = data.replace(/"/g,'\\"');
  dataNew = dataNew.replace(/[^\x00-\x7F]/g,'');
  dataNew = dataNew.replace(/\n/g,'');
  newdata = '{\n  \"text\": \" ' + dataNew + '\"\n}';
  fs.writeFileSync('Chapter_1.json',newdata,'utf-8');
  done = fs.readFileSync('Chapter_1.json','utf-8');
  console.log("JSONIFY DONE");
}

console.log(done);
var response;
function amazingAI(){
  var ToneAnalyserV3 = require('watson-developer-cloud/tone-analyzer/v3');
  var tone_analyser = new ToneAnalyserV3({
    username: '859b35a5-f631-4683-9ba3-52add7d63165',
          password: 'hpHkNrMGSeOe',//remove before git (maybe)
          version_date: '2017-09-21'
        });

  var params = {
    'tone_input' : require('./test.json'),
    'content_type' : 'application/json',
    'sentences' : false
  };


  tone_analyser.tone(params, function(error, response){
    if (error)
      console.log('error:', error);
    else
    {
      console.log(JSON.stringify(response,null,2));
      // saveJSON(response);
      get_values(response);
    }
  });
};

function saveJSON(resp)
{
	var jsonfile = require('jsonfile');
	var file = './response.json';
	jsonfile.writeFile(file,resp,function(err){
   console.error(err)})
};



//takes in the json file and then returns the largest Text_to_emotion_sum

var joy;
function get_values(resp)
{
  // var fs = require("fs");
  // var contents = fs.readFileSync("response.json");
  var jsonContent = JSON.parse(resp);
  var max = 0;
  var max_index = -1;
  for(iterator = 0; iterator < jsonContent.document_tone.tones.length; iterator++)
  {
    console.log("this is the something value", jsonContent.document_tone.tones[iterator].score);
    if (max < jsonContent.document_tone.tones[iterator].score)
      max = jsonContent.document_tone.tones[iterator].score;
    max_index = iterator;
  }
  console.log("The type of music I want is", jsonContent.document_tone.tones[max_index].tone_id)
};



JSONify();
amazingAI();
get_values();
