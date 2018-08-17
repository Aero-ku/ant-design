webpackJsonp([115],{1887:function(e,t){e.exports={content:["article",["p","Ant Design \u8bbe\u8ba1\u89c4\u8303\u4e0a\u652f\u6301\u4e00\u5b9a\u7a0b\u5ea6\u7684\u6837\u5f0f\u5b9a\u5236\uff0c\u4ee5\u6ee1\u8db3\u4e1a\u52a1\u548c\u54c1\u724c\u4e0a\u591a\u6837\u5316\u7684\u89c6\u89c9\u9700\u6c42\uff0c\u5305\u62ec\u4f46\u4e0d\u9650\u4e8e\u4e3b\u8272\u3001\u5706\u89d2\u3001\u8fb9\u6846\u548c\u90e8\u5206\u7ec4\u4ef6\u7684\u89c6\u89c9\u5b9a\u5236\u3002"],["p",["img",{title:null,src:"https://zos.alipayobjects.com/rmsportal/zTFoszBtDODhXfLAazfSpYbSLSEeytoG.png",alt:"\u4e00\u4e9b\u914d\u7f6e\u597d\u7684\u4e3b\u9898"}]],["h2","\u6837\u5f0f\u53d8\u91cf"],["p","antd \u7684\u6837\u5f0f\u4f7f\u7528\u4e86 ",["a",{title:null,href:"http://lesscss.org/"},"Less"]," \u4f5c\u4e3a\u5f00\u53d1\u8bed\u8a00\uff0c\u5e76\u5b9a\u4e49\u4e86\u4e00\u7cfb\u5217\u5168\u5c40/\u7ec4\u4ef6\u7684\u6837\u5f0f\u53d8\u91cf\uff0c\u4f60\u53ef\u4ee5\u6839\u636e\u9700\u6c42\u8fdb\u884c\u76f8\u5e94\u8c03\u6574\u3002"],["ul",["li",["p",["a",{title:null,href:"https://github.com/ant-design/ant-design/blob/master/components/style/themes/default.less"},"\u9ed8\u8ba4\u6837\u5f0f\u53d8\u91cf"]]]],["p","\u5982\u679c\u4ee5\u4e0a\u53d8\u91cf\u4e0d\u80fd\u6ee1\u8db3\u4f60\u7684\u5b9a\u5236\u9700\u6c42\uff0c\u53ef\u4ee5\u7ed9\u6211\u4eec\u63d0 issue\u3002"],["h2","\u5b9a\u5236\u65b9\u5f0f"],["p","\u6211\u4eec\u4f7f\u7528 ",["a",{title:null,href:"http://lesscss.org/usage/#using-less-in-the-browser-modify-variables"},"modifyVars"]," \u7684\u65b9\u5f0f\u6765\u8986\u76d6\u53d8\u91cf\u3002\n\u5728\u5177\u4f53\u5de5\u7a0b\u5b9e\u8df5\u4e2d\uff0c\u6709 ",["code","package.theme"]," \u548c ",["code","less"]," \u4e24\u79cd\u65b9\u6848\uff0c\u9009\u62e9\u4e00\u79cd\u5373\u53ef\u3002"],["p","\u53ef\u4ee5\u5728\u672c\u5730\u8fd0\u884c ",["a",{title:null,href:"https://github.com/ant-design/antd-init/tree/master/examples/customize-antd-theme"},"\u4f8b\u5b50"]," \u67e5\u770b\u5b9a\u5236\u6548\u679c\u3002"],["h3","1) theme \u5c5e\u6027\uff08\u63a8\u8350\uff09"],["p","\u914d\u7f6e\u5728 ",["code","package.json"]," \u6216 ",["code",".webpackrc"]," \u4e0b\u7684 ",["code","theme"]," \u5b57\u6bb5\u3002theme \u53ef\u4ee5\u914d\u7f6e\u4e3a\u4e00\u4e2a\u5bf9\u8c61\u6216\u6587\u4ef6\u8def\u5f84\u3002"],["pre",{lang:"js",highlighted:'<span class="token string">"theme"</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>\n  <span class="token string">"primary-color"</span><span class="token punctuation">:</span> <span class="token string">"#1DA57A"</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">,</span>'},["code",'"theme": {\n  "primary-color": "#1DA57A",\n},']],["p","\u6216\u8005 ",["a",{title:null,href:"https://github.com/ant-design/antd-init/blob/master/examples/customize-antd-theme/theme.js"},"\u4e00\u4e2a js \u6587\u4ef6"],"\uff1a"],["pre",{lang:"js",highlighted:'<span class="token string">"theme"</span><span class="token punctuation">:</span> <span class="token string">"./theme.js"</span><span class="token punctuation">,</span>'},["code",'"theme": "./theme.js",']],["p","\u5b9a\u4e49 ",["code","theme"]," \u5c5e\u6027\u65f6\uff0c\u9700\u8981\u914d\u5408\u4f7f\u7528\uff08",["a",{title:null,href:"https://github.com/ant-design/antd-init"},"antd-init"]," \u6216 ",["a",{title:null,href:"https://github.com/dvajs/dva-cli"},"dva-cli"],"\u3002\u5982\u679c\u4f60\u4f7f\u7528\u7684\u662f\u5176\u4ed6\u811a\u624b\u67b6\uff0c\u53ef\u4ee5\u53c2\u8003 ",["a",{title:null,href:"https://github.com/ant-tool/atool-build/blob/a4b3e3eec4ffc09b0e2352d7f9d279c4c28fdb99/src/getWebpackCommonConfig.js#L131-L138"},"atool-build \u4e2d less-loader \u7684 webpack \u76f8\u5173\u914d\u7f6e "],"\uff0c\u5229\u7528 ",["a",{title:null,href:"https://github.com/webpack/less-loader#less-options"},"less-loader"]," \u7684 ",["code","modifyVars"]," \u914d\u7f6e\u6765\u8986\u76d6\u539f\u6765\u7684\u6837\u5f0f\u53d8\u91cf\u3002"],["p","\u6ce8\u610f\uff1a"],["ul",["li",["p","\u6837\u5f0f\u5fc5\u987b\u52a0\u8f7d less \u683c\u5f0f\u3002"],["ul",["li",["p","\u5982\u679c\u4f60\u5728\u4f7f\u7528 ",["a",{title:null,href:"https://github.com/ant-design/babel-plugin-import"},"babel-plugin-import"]," \u7684 ",["code","style"]," \u914d\u7f6e\u6765\u5f15\u5165\u6837\u5f0f\uff0c\u9700\u8981\u5c06\u914d\u7f6e\u503c\u4ece ",["code","'css'"]," \u6539\u4e3a ",["code","true"],"\uff0c\u8fd9\u6837\u4f1a\u5f15\u5165 less \u6587\u4ef6\u3002"]],["li",["p","\u5982\u679c\u4f60\u662f\u901a\u8fc7 ",["code","'antd/dist/antd.css'"]," \u5f15\u5165\u6837\u5f0f\u7684\uff0c\u6539\u4e3a ",["code","antd/dist/antd.less"],"\u3002"]]]],["li",["p",["code","dva-cli@0.7.0+"]," \u7684 ",["code","theme"]," \u5c5e\u6027\u9700\u8981\u5199\u5728 ",["a",{title:null,href:"https://github.com/dvajs/dva-example-user-dashboard/commit/d6da33b3a6e18eb7f003752a4b00b5a660747c31"},".roadhogrc"]," \u6587\u4ef6\u91cc\u3002"]],["li",["p","\u5982\u679c\u8981\u8986\u76d6 ",["code","@icon-url"]," \u53d8\u91cf\uff0c\u5185\u5bb9\u9700\u8981\u5305\u62ec\u5f15\u53f7 ",["code",'"@icon-url": "\'your-icon-font-path\'"'],"\uff08",["a",{title:null,href:"https://github.com/visvadw/dvajs-user-dashboard/pull/2"},"\u4fee\u6b63\u793a\u4f8b"],"\uff09\u3002"]]],["h3","2) less"],["p","\u7528 less \u6587\u4ef6\u8fdb\u884c\u53d8\u91cf\u8986\u76d6\u3002"],["p","\u5efa\u7acb\u4e00\u4e2a\u5355\u72ec\u7684 ",["code","less"]," \u6587\u4ef6\u5982\u4e0b\uff0c\u518d\u5f15\u5165\u8fd9\u4e2a\u6587\u4ef6\u3002"],["pre",{lang:"css",highlighted:'<span class="token atrule"><span class="token rule">@import</span> <span class="token string">"~antd/dist/antd.less"</span><span class="token punctuation">;</span></span>   // \u5f15\u5165\u5b98\u65b9\u63d0\u4f9b\u7684 less \u6837\u5f0f\u5165\u53e3\u6587\u4ef6\n<span class="token atrule"><span class="token rule">@import</span> <span class="token string">"your-theme-file.less"</span><span class="token punctuation">;</span></span>   // \u7528\u4e8e\u8986\u76d6\u4e0a\u9762\u5b9a\u4e49\u7684\u53d8\u91cf'},["code",'@import "~antd/dist/antd.less";   // \u5f15\u5165\u5b98\u65b9\u63d0\u4f9b\u7684 less \u6837\u5f0f\u5165\u53e3\u6587\u4ef6\n@import "your-theme-file.less";   // \u7528\u4e8e\u8986\u76d6\u4e0a\u9762\u5b9a\u4e49\u7684\u53d8\u91cf']],["p","\u6ce8\u610f\uff1a\u8fd9\u79cd\u65b9\u5f0f\u5df2\u7ecf\u8f7d\u5165\u4e86\u6240\u6709\u7ec4\u4ef6\u7684\u6837\u5f0f\uff0c\u4e0d\u9700\u8981\u4e5f\u65e0\u6cd5\u548c\u6309\u9700\u52a0\u8f7d\u63d2\u4ef6 ",["code","babel-plugin-import"]," \u7684 ",["code","style"]," \u5c5e\u6027\u4e00\u8d77\u4f7f\u7528\u3002"],["h2","\u793e\u533a\u6559\u7a0b"],["ul",["li",["p",["a",{title:null,href:"https://intoli.com/blog/antd-scss-theme-plugin/"},"Using Ant Design in Sass-Styled Webpack Projects with ",["code","antd-scss-theme-plugin"]]]],["li",["p",["a",{title:null,href:"https://medium.com/@GeoffMiller/how-to-customize-ant-design-with-react-webpack-the-missing-guide-c6430f2db10f"},"How to Customize Ant Design with React & Webpack\u2026 the Missing Guide"]]],["li",["p",["a",{title:null,href:"https://gist.github.com/Kruemelkatze/057f01b8e15216ae707dc7e6c9061ef7"},"Theming Ant Design with Sass and Webpack"]]],["li",["p",["a",{title:null,href:"https://medium.com/@mzohaib.qc/using-sass-scss-with-react-app-create-react-app-d03072083ef8"},"Using Sass/Scss with React App (create-react-app)"]]],["li",["p",["a",{title:null,href:"https://medium.com/@mzohaib.qc/ant-design-dynamic-runtime-theme-1f9a1a030ba0"},"Dynamic Theming in Browser using Ant Design"]]]]],meta:{order:5,title:"\u5b9a\u5236\u4e3b\u9898",filename:"docs/react/customize-theme.zh-CN.md"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#\u6837\u5f0f\u53d8\u91cf",title:"\u6837\u5f0f\u53d8\u91cf"},"\u6837\u5f0f\u53d8\u91cf"]],["li",["a",{className:"bisheng-toc-h2",href:"#\u5b9a\u5236\u65b9\u5f0f",title:"\u5b9a\u5236\u65b9\u5f0f"},"\u5b9a\u5236\u65b9\u5f0f"]],["li",["a",{className:"bisheng-toc-h2",href:"#\u793e\u533a\u6559\u7a0b",title:"\u793e\u533a\u6559\u7a0b"},"\u793e\u533a\u6559\u7a0b"]]]}}});