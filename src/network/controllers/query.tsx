const USER_QUERY = `query {
    users {
      email
      password
    }
  }`;

const CREATE_USER = `
  mutation {
    createUser(
      data: {
        name: "My Food Style"
        minPrice: null
        maxPrice: null
        locationTypeIds: []
        locationCuisineTypeIds: []
        dishTypeIds: []
        courseTypeIds: []
        dietIds: []
        excludedIngredientIds: []
      }
    ) {
      id
      name
    }
  }
`;

const SignUp = {
  email: 'test1121@example.com',
  password: 'test',
};

export {USER_QUERY, CREATE_USER, SignUp};
