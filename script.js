// 画像の要素を取得
const image = document.getElementById('image1');

// 画像のパスを格納する配列 (例)
const imagePaths = ['render_image.png'];

// 現在の画像のインデックス
let currentImageIndex = 0;

// 画像を更新する関数
function updateImage() {
    // 配列の範囲内でインデックスを更新
    currentImageIndex = (currentImageIndex + 1) % imagePaths.length;

    // 画像の src 属性を更新
    image.src = imagePaths[currentImageIndex];
}

// 1分ごとに画像を更新
setInterval(updateImage, 60000); // 60000ミリ秒 = 1分