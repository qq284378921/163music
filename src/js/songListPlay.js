`
<a href="./play-page.html?id=5cc588427b968a0073b468b5">
<div class="songNumber">
  <p class="listNumber">01</p>
</div>
<div class="songInfo">
  <div class="songIT">大碗宽面</div>
  <div class="songIS"><i></i>吴亦凡--大碗宽面</div>
</div>
<div class="songBBox">
  <svg class="icon icon-play">
    <use xmlns:="" xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-play"></use>
  </svg></span>
</div>
</a>
`
getSongInfo()

function getSongInfo() {
  let query = new AV.Query('PlayList')
  query.get(id).then(function (song) {
    // 成功获得实例
    let songInfo = song.attributes
    $('.sl-title').text(songInfo.PlayListName)
    $('.songIcon').css('background-image','url('+songInfo.picture+')')
    $('.songTB').css('background-image', "url(" + songInfo.picture + ")") 
    $('.intro').text("简介: " + songInfo.intro)
    let listContent = ''
    songInfo.info.map((song,i) => {
      let info = eval("(" + song + ")") 
      listContent += `
      <a href="./play-page.html?id=${info.id}">
      <div class="songNumber">
        <p class="listNumber">${i+1}</p>
      </div>
      <div class="songInfo">
        <div class="songIT">${info.name}</div>
        <div class="songIS"><i></i>${info.singer}</div>
      </div>
      <div class="songBBox">
        <svg class="icon icon-play">
          <use xmlns:="" xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-play"></use>
        </svg></span>
      </div>
      </a>
      `
    })
    $('#sl-box').html(listContent)
  }, function (error) {
    alert('该歌链接挂啦！！！请稍后重试')
    // 异常处理
  })
}