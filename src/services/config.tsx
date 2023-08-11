import { GraphQLClient } from 'graphql-request'

const url = process.env.NEXT_PUBLIC_CONTENT_API || "" //"https://api-sa-east-1.graphcms.com/v2/cl0ra7ipa0rhp01xuhm3jcwxv/master"
const graphQLClient = new GraphQLClient(url, {
  headers: {
    "Authorization": `Bearer ${process.env.NEXT_PUBLIC_API_TOKEY}`
  }
})
export default graphQLClient