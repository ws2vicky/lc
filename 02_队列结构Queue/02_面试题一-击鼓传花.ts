import ArrayQueue from './01_实现队列结构Queue'

function hotPotato(names: string[], num: number): number {
  if (names.length === 0) return -1

  // 1.创建队列结构
  const queue = new ArrayQueue<string>()

  // 2.将所有的name入队操作
  for (const name of names) {
    queue.enqueue(name)
  }

  // 3.淘汰的规则
  while (queue.size() > 1) {
    // 1/2不淘汰
    for (let i = 1; i < num; i++) {
      const name = queue.dequeue()
      if (name) queue.enqueue(name)
    }
    // 3淘汰
    queue.dequeue()
  }

  // 4.取出最后一个人
  const leftName = queue.dequeue()!
  const index = names.indexOf(leftName)

  return index
}

const leftIndex = hotPotato(["why", "james", "kobe", "curry","abc", "cba", "nba", "mba"], 4)
console.log(leftIndex)
