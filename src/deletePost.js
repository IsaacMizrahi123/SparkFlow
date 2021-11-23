const deletePost = async (req) => {

	const { params } = req
	await FILES.delete(params.id)
	return new Response(`SUCCESS DELETING`, {
  		headers: { 'content-type': 'text/html' },
	})
	
}

export default deletePost