import { Router } from 'itty-router'
import allPosts from './allPosts'
import Post from './Post'
import publishPost from './publishPost'
import deletePost from './deletePost'

const router = Router()

router.get('/', () => new Response(`hello`, {
  headers: { 'content-type': 'text/html' },
})
)

router.get('/mainfeed/?', () => allPosts())

router.get('/mainfeed/:id', (req) => Post(req))

router.post('/publish/', (req) => publishPost(req))

router.post('/delete/:id', (req) => deletePost(req))

router.all('*', () => new Response ('notfound', { 
  headers: { 'content-type': 'text/html' }, 
  status: 404 
}))

addEventListener('fetch', event => {
  event.respondWith(router.handle(event.request))
})
