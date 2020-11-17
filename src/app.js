// import Count from './components/Count.svelte'
// import Comments from './components/Comments.svelte'
// console.log('Count.svelte', Count)
// const count = new Count({ 
//   target: document.querySelector('#count')
// })
// console.log('new Count', count)
// const comments = new Comments({ 
//   target: document.querySelector('#comments')
// })

let app = {}

import('./components/Count.svelte').then( module => {
  const Count = module.default
  const count = new Count({
    target: document.querySelector('#count')
  })
  app.count = count
})

import('./components/Comments.svelte').then( module => {
  const Comments = module.default
  const comments = new Comments({
    target: document.querySelector('#comments')
  })
  app.comments = comments 
})

export default app
