//// 注意: 以下は編集しないこと!
let data = [
	{name:'札幌', lat:43.06417, lng:141.34694},
	{name:'仙台', lat:38.26889, lng:140.87194},
	{name:'新宿', lat:35.68944, lng:139.69167},
	{name:'名古屋', lat:35.18028, lng:136.90667},
	{name:'大阪', lat:34.68639, lng:135.52},
	{name:'広島', lat:34.39639, lng:132.45944},
	{name:'高知', lat:33.55972, lng:133.53111},
	{name:'福岡', lat:33.60639, lng:130.41806},
	{name:'鹿児島', lat:31.56028, lng:130.55806},
	{name:'沖縄', lat:26.2125, lng:127.68111}
];
//// 注意: 以上は編集しないこと!

// 練習4-2 メッセージ追加プログラム
let h2 = document.querySelector('h2#ex42');
let pa = document.createElement('p');
pa.textContent = '写真表と都市の緯度軽度のページです。';
pa.style.textEmphasis='sesame green';
h2.insertAdjacentElement('afterend', pa);
// 練習4-3 写真表作成プログラム
let add = document.querySelector('div#phototable');
let sr = document.createElement('p');
let ty = document.createElement('img');
ty.setAttribute('src','hanako.png');
add.insertAdjacentElement('afterend',sr);
sr.insertAdjacentElement('afterend',ty);
let srt = document.createElement('p');
let tye = document.createElement('img');
tye.setAttribute('src','jiro.png');
add.insertAdjacentElement('afterend',srt);
srt.insertAdjacentElement('afterend',tye);
let sra = document.createElement('p');
let tya = document.createElement('img');
tya.setAttribute('src','taro.png');
add.insertAdjacentElement('afterend',sra);
sra.insertAdjacentElement('afterend',tya);

// 練習4-4 箇条書き削除プログラム
let c = document.querySelectorAll('li');
let d;
for (d of c) {
  d.remove();
}

// 練習4-5 箇条書き追加プログラム
let eft = document.querySelector('ul#location');
let g;
for (let f of data) {
  g = document.createElement('li');
  g.textContent = f.name + '... 緯度:' + f.lat + ',経度:' + f.lng;
  eft.insertAdjacentElement('beforeend',g);
}

