const gql = require('graphql-tag');

// ! this mean that we have to return required things from the server but not from the user

//   getUsers: [User] array of type user
module.exports = gql`
    type Post{
        id: ID!
        body: String!
        createdAt: String!
        username: String!
    }
    type Query{
        getPosts: [Post]
        getPost(postId: ID!):Post
        getUsers: [User]
    }
    type User{
        id:  ID!
        email: String!
        token: String!
        username: String!
        createdAt: String!
    }
    input RegisterInput{
        username: String!
        password: String!
        confirmPassword: String!
        email: String!
    }
    type Mutation{
        register(registerInput : RegisterInput): User!
        login(username: String! , password: String!): User!
        createPost(body: String!): Post!
        deletePost(postId: ID!): String!
    }

`;
