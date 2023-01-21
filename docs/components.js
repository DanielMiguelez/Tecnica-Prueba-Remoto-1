module.exports = {
  components: {
    schemas: {
      user: {
        type: "object",

        properties: {
          name: {
            type: "string",

            description: "User name",

            example: "Daniel Miguelez",
          },
          email: {
            type: "boolean",

            description: "user email",

            example: "dani@gmail.com",
          },
          password: {
            type: "string",

            description: "user password",

            example: "daniel1",
          },
          role: {
            type: "string",

            description: "user role",

            example: "admin",
          },
          confirmed: {
            type: "boolean",

            description: "The status of the user",

            example: false,
          },
        },
      },
      
    },
  },
};
