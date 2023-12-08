import Node from "./node.js"

export default class LinkedList {
  constructor() {
    this.root = null
  }

  prepend(value) {
    if (this.root == null) {
      const newNode = new Node(value)
      this.root = newNode
      newNode.nextNode = null
    } else {
      let tmp = this.root;
      const newNode = new Node(value)
      newNode.nextNode = tmp;
      this.root = newNode;
    }
  }

  append(value) {
    if (this.root == null) {
      const newNode = new Node(value)
      this.root = newNode
      newNode.nextNode = null
    } else {
      let tmp
      tmp = this.root
      while (tmp.nextNode != null) {
        tmp = tmp.nextNode
      }
      const newNode = new Node(value)
      tmp.nextNode = newNode
      newNode.nextNode = null
    }
  }

  size() {
    if (this.root == null) {
      return 0
    }
    let count = 1
    let current = this.root
    while (current.nextNode != null) {
      let tmp = current
      current = tmp.nextNode
      count += 1
    }
    return count
  }

  head() {
    return this.root
  }

  tail() {
    if (this.root == null) return
    let current = this.root
    while (current.nextNode != null) {
      let tmp = current
      current = tmp.nextNode
    }
    return current
  }

  at(index) {
    if (index === 0) return this.root
    if (index >= this.size() || index < 0) return 'Invalid Index'
    let count = 1
    let current = this.root
    while (count <= index) {
      let tmp = current
      current = tmp.nextNode
      count += 1
    }
    return current
  }

  pop() {
    let newLast = this.at( this.size() - 2)
    newLast.nextNode = null
    return newLast
  }

  contains(value) {
    if (this.root == null) return
    let current = this.root
    do {
      if (current.value === value) {
        return true
      }
      let tmp = current
      current = tmp.nextNode
    } while (current.nextNode != null)
    if (current.value === value) {
      return true
    }
    return false
  }

  find(value) {
    if (this.root == null) return
    let current = this.root
    let count = 0
    do {
      if (current.value === value) {
        return count
      }
      let tmp = current
      current = tmp.nextNode
      count += 1
    } while (current.nextNode != null)
    if (current.value === value) {
      return count
    }
    return null
  }

  toString() {
    let string = ''
    if (this.root == null) return
    let current = this.root
    do {
      string = string + `( ${current.value} ) --> `
      let tmp = current
      current = tmp.nextNode
    } while (current.nextNode != null)
    return string += `( ${current.value} ) --> null`
  }

  insertAt(value, index) {
    if (index >= this.size()) return
    if (index < 0) return
    if (index == 0) {
      this.prepend(value)
    } else {
      const newNode = new Node(value)
      newNode.nextNode = this.at(index)
      const prevNode = this.at(index - 1)
      prevNode.nextNode = newNode
    }
  }

  removeAt(index) {
    if (index < 0 || index >= this.size()) {
      return
    } else if (index === 0) {
      this.root = this.at(1)
    } else if (index === this.size() - 1) {
      const prevNode = this.at(index - 1)
      prevNode.nextNode = null
    } else {
      this.at(index - 1).nextNode = this.at(index + 1)
    }
  }
}

