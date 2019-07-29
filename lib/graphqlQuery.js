import gql from "graphql-tag";

const GET_REPO_INFO = gql`
{
  user(login: "t-mario-y") {
    repositories(first: 50, privacy: PUBLIC, isFork: false, orderBy: {field: CREATED_AT, direction: DESC}) {
      nodes{
        id
        name
        url
        description
        primaryLanguage{
          color
          name
        }
      }
    }
  }
}
`

export default GET_REPO_INFO;