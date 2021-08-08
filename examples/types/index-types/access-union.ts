type Events = {
  type: 'click'
} | {
  type: 'touch'
} | {
  type: 'move'
}

// 返回 "click" | "touch" | "move" 
type EventsName = Events['type']