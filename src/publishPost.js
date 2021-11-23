const publishPost = async (req) => {

	const { post_id, title, user, content_type, content } = await req.json()
	console.log({ post_id, title, user, content_type, content })
	const info = Object.assign({}, {title, user, content_type, content} )
	console.log({ info })
	await FILES.put(post_id, JSON.stringify(info))
	return new Response(`SUCCESS POSTING`, {
  		headers: { 'content-type': 'text/html' },
	})

}

export default publishPost