const endpoint = '/graphql'
const queryCode = `
  query ($topicId:Int!){
    title,
    topics {
      id, title
    }
    getTopic(id:$topicId) {
      id title body
    }
  }
`;
const variables = {topicId: 1}
const option = {
    method: 'POST',
    headers: { 'Content-type': 'application/json'},
    body: JSON.stringify({
        query: queryCode,
        variables
    })
}
fetch(
    endpoint,
    option,
).then(res => res.json()).then(console.log)