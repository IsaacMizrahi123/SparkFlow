const Post = async (req) => {

	const { params } = req
	const post = await FILES.get(params.id)
	console.log({ post })
	return new Response(post, {
  		headers: { 'content-type': 'application/json' },
	})
	
}

export default Post