// ./src/api/[api-name]/content-types/[api-name]/lifecycles.js

const { default: slugify } = require("slugify");

module.exports = {
  beforeCreate(event) {
    const { data, where, select, populate } = event.params;

    if (data.name) {
      data.slug = slugify(data.name, { lower: true });
    }
  },

  beforeUpdate(event) {
    const { result, params, data, param1, param2, param3 } = event.params;

    console.log(event);
    if (data.name) {
      data.slug = slugify(data.name, { lower: true });
    }
  },
};
