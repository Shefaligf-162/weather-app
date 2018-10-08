const request = require('request');
const yargs=require('yargs');
const argv = yargs
  .options({
    a: {
      demand: true,
      alias: 'address',
      describe: 'Address to fetch weather for',
      string: true
    }
  })
  .help()
  .alias('help', 'h')
  .argv;
console.log(argv);
var encodedAddress = encodeURIComponent(argv.address);
console.log(encodedAddress);
request({
	url:`http://www.mapquestapi.com/geocoding/v1/address?key=BqEUoSBUzPPvUsuxBg2socw3SmGVANrn&location=${encodedAddress}`,
	json: true
},(error,response,body)=>{
	console.log(body.results[0].locations[0].latLng.lat);
	//console.log(JSON.stringify(body,undefined,2));
});
