
const getPosts = async (key) => {
	const res = await FILES.get(key)
	return res
}

const allPosts = async () => {

	const keyList = await FILES.list()
	console.log({ keyList })
	const res = JSON.stringify(keyList.keys)
	console.log({ res })
	//const posts = await keyList.keys.map(getPosts) //.join('')
	//console.log({ posts })
	const headers = {
    	'Access-Control-Allow-Origin': '*',
    	'Content-type': 'application/json'
  	}
	return new Response(res, { headers })

}

export default allPosts