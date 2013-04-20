var IEBrowser = function(baseBrowserDecorator) {
  baseBrowserDecorator(this);

   this._getOptions = function(url) {
    // Internet Explorer CLI options
    // http://msdn.microsoft.com/en-us/library/hh826025(v=vs.85).aspx
    return ['-noframemerging', url];
  };
};

IEBrowser.prototype = {
  name: 'IE',
  DEFAULT_CMD: {
    win32: process.env.ProgramFiles + '\\Internet Explorer\\iexplore.exe'
  },
  ENV_CMD: 'IE_BIN'
};

IEBrowser.$inject = ['baseBrowserDecorator'];


// PUBLISH DI MODULE
module.exports = {
  'launcher:IE': ['type', IEBrowser]
};
