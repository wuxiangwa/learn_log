const utils = {
  // 判断类型
  isSupport: (params, type = 'function') => {
    // return document.implementation.hasFeature(type, "2.0");
    return typeof document[params] === type;
  },
  getTags(element, type = 'all', filter = null) {
    const whatToShows = {
      all: 'ALL',
      element: 'ELEMENT',
      attribute: 'ATTRIBUTE',
      text: 'TEXT'
    };
    const tags = [];

    if (filter && typeof filter !== 'function') {
      throw new Error('error params');
    }

    (function _tags(_ele) {
      let iterator = document.createNodeIterator(_ele, NodeFilter[`SHOW_${whatToShows[type] || whatToShows.all}`], filter, false);
      let node = iterator.nextNode();
      while (node !== null) {
        if (!node.tagName) {
          node = iterator.nextNode();
          continue;
        }

        let tagName = node.tagName.toLowerCase();
        tags.indexOf(tagName) < 0 && tags.push(tagName);
        // iframe
        tagName === 'iframe' && _tags(node.contentDocument.body);
        node = iterator.nextNode();
      }
    })(element);
    return tags;
  },
  addHandler: function(element, type, handler) {
    if (element.addEventListener) {
      element.addEventListener(type, handler, false);
    } else if (element.attachEvent) {
      element.attachEvent(`on${type}`, handle);
    } else {
      element[`on${type}`] = handler;
    }
  },
  removeHandler: function(element, type, handler) {
    if (element.addEventListener) {
      element.removeEventListener(type, handler, false);
    } else if (element.attachEvent) {
      element.datchEvent(`on${type}`, handle);
    } else {
      element[`on${type}`] = null;
    }
  },

  // event util
  getEvent: function(event) {
    return event ? event : window.event;
  },
  getTarget: function(event) {
    return event.target || event.srcElement;
  },
  preventDefault: function(event) {
    if (event.preventDefault) {
      event.preventDefault();
    } else {
      event.returnValue = false;
    }
  },
  stopPropagation: function(event) {
    if (event.stopPropagation) {
      event.stopPropagation();
    } else {
      event.cancelBubble = false;
    }
  }
}
