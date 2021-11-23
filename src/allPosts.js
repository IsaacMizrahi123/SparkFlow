const allPosts = async () => {

	const posts = await FILES.list()
	console.log({ posts })
	return new Response(`List in console`, {
  		headers: { 'content-type': 'text/html' },
	})

}

export default allPosts