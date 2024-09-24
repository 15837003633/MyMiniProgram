export default function parseLyric(text){
  const ret = []
  const lyrics = text.split("\n")
  const timeRex = /\[(\d{2}):(\d{2})\.(\d{2,3})\]/
  for (const line of lyrics) {
    const results =timeRex.exec(line)
    if (!results) continue
    const time = (results[1]*60 + results[2]*1 + results[3]/1000) *1000
    const content = line.replace(timeRex,"")
    ret.push({time,content})
  }
  return ret
}