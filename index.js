/**
 * riot-ssr-middleware
 */

var render = require('riot-ssr')

module.exports = function (options) {
  return function riotRenderMiddleware (req, res, next) {
    var _options = typeof options === 'function'
      ? options(req, res)
      : options

    render(_options.path, _options.opts, function (rendered) {
      req.rendered = rendered
      next()
    }, options)
  }
}
