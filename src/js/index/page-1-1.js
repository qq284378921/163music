getInfo()

function getInfo() {
  var query = new AV.Query('PlayList');
  query.find().then((songs) => {
    let i = 0
    songs.map((song,i) => {
      let info = {picture: song.attributes.picture, intro: song.attributes.intro, PlayListName: song.attributes.PlayListName}
      insertInfo(info,i,songs[i].id)
      i=i+1
    })
  })
}
function insertInfo(event,e,id) {
  $(".playList > div > img")[e].src = event.picture
  $(".playList > p")[e].innerText = event.PlayListName
  // $(".playList")[e].setAttribute('data-id',id)
  $($(".playList")[e]).attr('onclick',"location='./song-list.html?id=" + id + "'")

}
