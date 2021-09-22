const ul = document.querySelector('ul');


//----------- ADD ITEMS

document.getElementById('add-btn').addEventListener('click', function(e) {
	e.preventDefault();
	console.log('Hello');

    // textbox から値を取得

	const addInput = document.getElementById('add-input');

// addinputで持ってくる
	if(addInput.value !== ''){

        // htmlとタグを生成してる

	const li = document.createElement('li'),
	    firstPar = document.createElement('p'),
	    secondPar = document.createElement('p'),
	    firstIcon = document.createElement('i'),
	    secondIcon = document.createElement('i'),
	    input = document.createElement('input');


	    firstIcon.className = "fa fa-pencil-square-o";
	    secondIcon.className = "fa fa-times";
	    input.className = "edit-note";

        // inputのタイプ設定
	    input.setAttribute('type', 'text');

        //Pタグの値を設定
	    firstPar.textContent = addInput.value;


        // pタグの子要素タグの要素にIタグを生成 
	    secondPar.appendChild(firstIcon);
	    secondPar.appendChild(secondIcon);

        //  liに子要素として入れ込む

	    li.appendChild(firstPar);
	    li.appendChild(secondPar);
	    li.appendChild(input);

        //  UlにLiを子要素として入れ込む

	    ul.appendChild(li);

        //　textboxの値を初期化し空白にする
	    addInput.value = '';

	}
});


// from をとってくる
const form = document.querySelector('#add')

//　Inputのテキストボックスのやつを持ってくる

const input = document.getElementById('add-input')

// Ulタグの一番下にある子要素を取得

var list = document.getElementById("list");

//　Addボタンを押したときに実行される

form.addEventListener('submit', function(e){
    e.preventDefault()

    //Ulタグの一番下の子要素を取得
    var liTag = list.lastElementChild
    // // 取得してきた子要素をコピー

    var clone_element = liTag.cloneNode(true);
    // 一番上のPタグを取得

    var h2_element = clone_element.querySelector("p");

    // pタグに対してInputの値を設定
    h2_element.textContent = input.value;

    // Liタグの一番下に作った要素を挿入

    liTag.after(clone_element);

     //　textboxの値を初期化し空白にする
	input.value = '';
})