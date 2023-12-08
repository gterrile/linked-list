export default class Node {
  constructor(value, nextNode) {
    if (value) {
      this.value = value
    } else {
      this.value = null
    }
    if (nextNode) {
      this.nextNode = nextNode
    } else {
      this.nextNode = null
    }
  }
}