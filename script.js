function getNestedMarkup(tag, content, count) {
  tag = "<" + tag + ">"
  var start = ""
  var end = ""
  var closingTag = tag.replace("<", "</")
  while (count-- > 0) {
    start += (tag + content)
    end += closingTag
  }
  return start + end
}

const DIV_COUNT = 99 // + container = 100
container.innerHTML = getNestedMarkup("div", "", DIV_COUNT)
