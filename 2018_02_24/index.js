function reset(endAngle) {
  let rule,
    cssRule,
    cssRule_webkit
  var ss = document.styleSheets
  for (var i = 0; i < ss.length; ++i) {
    for (var x = 0; x < ss[i].cssRules.length; ++x) {
      rule = ss[i].cssRules[x]
      if (rule.name == "circle" && rule.type == CSSRule.KEYFRAMES_RULE) {
        cssRule = rule
        cssRule.deleteRule('0%')
        cssRule.deleteRule('100%')
        cssRule.appendRule("0% { transform: rotate(" + endAngle + "deg)")
        cssRule.appendRule("100% { transform: rotate(" + endAngle + "deg)")
      }
      if (rule.name == "circle-webkit" && rule.type == CSSRule.KEYFRAMES_RULE) {
        cssRule_webkit = rule
        cssRule_webkit.deleteRule('0%')
        cssRule_webkit.deleteRule('100%')
        cssRule_webkit.appendRule("0% { -webkit-transform: rotate(" + endAngle + "deg)")
        cssRule_webkit.appendRule("100% { -webkit-transform: rotate(" + endAngle + "deg)")
      }
    }
  }
}

function getRule(startAngle, endAngle) {
  let rule,
    cssRule,
    cssRule_webkit
  var ss = document.styleSheets
  for (var i = 0; i < ss.length; ++i) {
    for (var x = 0; x < ss[i].cssRules.length; ++x) {
      rule = ss[i].cssRules[x]
      if (rule.name == "circle" && rule.type == CSSRule.KEYFRAMES_RULE) {
        cssRule = rule
        cssRule.deleteRule('0%')
        cssRule.deleteRule('100%')
        cssRule.appendRule("0% { transform: rotate(" + startAngle + "deg)")
        cssRule.appendRule("100% { transform: rotate(" + endAngle + "deg)")
      }
      if (rule.name == "circle-webkit" && rule.type == CSSRule.KEYFRAMES_RULE) {
        cssRule_webkit = rule
        cssRule_webkit.deleteRule('0%')
        cssRule_webkit.deleteRule('100%')
        cssRule_webkit.appendRule("0% { -webkit-transform: rotate(" + startAngle + "deg)")
        cssRule_webkit.appendRule("100% { -webkit-transform: rotate(" + endAngle + "deg)")
      }
    }
  }
}
