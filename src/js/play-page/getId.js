let id
getSongId()
// 获取song.id
function getSongId() {
  let search = window.location.search
  if (search.indexOf('?') === 0) {
    search = search.substring(1)
  }
  // 去重，避免url中含有两个&造成数组中有空值
  let array = search.split('&').filter(e => e)
  for (let i = 0; i < array.length; i++) {
    let kv = array[i].split('=')
    let key = kv[0]
    let val = kv[1]
    if (key === 'id') {
      id = val
      break
    }
  }
}