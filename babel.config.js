module.exports = {
  presets: ["@vue/cli-plugin-babel/preset"],
  transformToRequire: {
    'video': 'src',
    'source': 'src',
    'img': 'src',
    'image': 'xlink:href',
    'b-card': 'img-src'
}
};
