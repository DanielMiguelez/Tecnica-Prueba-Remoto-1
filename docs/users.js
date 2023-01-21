module.exports = {
  paths: {
    "/users/getUsers": {
      get: {
        tags: {
          Tasks: "Get users",
        },
        description: "Get users",
        operationId: "getUsers",
        parameters: [],
        responses: {
          200: {
            description: "Users were obtained",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/user",
                },
              },
            },
          },
        },
      },
      paths: {
        "/users/login": {
          get: {
            tags: {
              Tasks: "login",
            },
            description: "Get users",
            operationId: "getUsers",
            parameters: [],
            responses: {
              200: {
                description: "Users were obtained",
                content: {
                  "application/json": {
                    schema: {
                      $ref: "#/components/schemas/user",
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
  },
};
