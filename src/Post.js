const Post = async (req) => {

	const { params } = req
	const post = await FILES.get(params.id)
	console.log({ post })
	const res = JSON.stringify(post)
	console.log({ res })
	const headers = {
    	'Access-Control-Allow-Origin': '*',
    	'Content-type': 'application/json'
  	}
	return new Response(post, { headers })
	
}

export default Post