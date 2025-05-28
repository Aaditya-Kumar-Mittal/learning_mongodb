db.createCollection("nonfiction", {
  validator: {
    $jsonSchema: {
      required: ["name", "price"],

      properties: {
        name: {
          bsonType: "string",
          description: "must be a string and is required",
        },
        price: {
          bsonType: "double",
          description: "must be a double and is required",
        },
      },
    },
  },
  validationAction: "error",
});

db.runCommand({
  collMod: "nonfiction",
  validator: {
    $jsonSchema: {
      required: ["name", "price", "author"],

      properties: {
        name: {
          bsonType: "string",
          description: "must be a string and is required",
        },
        price: {
          bsonType: "double",
          description: "must be a double and is required",
        },
        author: {
          bsonType: "array",
          description: "must be a string and is required",
          items: {
            bsonType: "string",
            description: "must be a string",
          },
        },
      },
    },
  },
  validationAction: "error",
});
