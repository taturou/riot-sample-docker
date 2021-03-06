import riot from 'rollup-plugin-riot';
import node_resolve from 'rollup-plugin-node-resolve';
import replace from 'rollup-plugin-replace';
import postcss from 'postcss';
import postcss_cssnext from 'postcss-cssnext';

export default {
  entry: 'src/main.js',
  dest: 'dist/app.js',
  format: 'es',
  plugins: [
    node_resolve({
      jsnext: true
    }),
    riot({
      parsers: {
        css: { cssnext }
      }
    })
  ]
};

function cssnext (tagName, css) {
  // A small hack: it passes :scope as :root to PostCSS.
  // This make it easy to use css variables inside tags.
  css = css.replace(/:scope/g, ':root')
  css = postcss([postcss_cssnext]).process(css).css
  css = css.replace(/:root/g, ':scope')
  return css
}
