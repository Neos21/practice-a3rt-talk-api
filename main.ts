const params = new URLSearchParams();  // FormData() でも良いらしい
params.append('apikey', Deno.env.get('A3RT_API_KEY'));
params.append('query' , '猫は部屋で何をしていますか？');
const response = await fetch('https://api.a3rt.recruit.co.jp/talk/v1/smalltalk', {
  method: 'POST',
  body: params
});
const json = await response.json();
console.log(json.results?.[0].reply);
