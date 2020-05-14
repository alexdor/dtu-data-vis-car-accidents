// See https://github.com/kaisermann/svelte-preprocess#with-svelte-vs-code
const autoPreprocess = require("svelte-preprocess");

module.exports = {
  preprocess: autoPreprocess({
    postcss: true,
    typescript: true,
  }),
};
