(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{309:function(e,o,t){"use strict";t.r(o);var a=t(14),s=Object(a.a)({},(function(){var e=this,o=e._self._c;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"storage-存储"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#storage-存储"}},[e._v("#")]),e._v(" Storage(存储)")]),e._v(" "),o("h2",{attrs:{id:"存储形式分类"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#存储形式分类"}},[e._v("#")]),e._v(" 存储形式分类")]),e._v(" "),o("ol",[o("li",[e._v("Web Storage 包含两种形式：\n"),o("ul",[o("li",[e._v("localStorage")]),e._v(" "),o("li",[e._v("sessionStorage")])])]),e._v(" "),o("li",[e._v("Cookie 包含两种形式：\n"),o("ul",[o("li",[e._v("普通 Cookie")]),e._v(" "),o("li",[e._v("HttpOnly Cookie")])])]),e._v(" "),o("li",[e._v("IndexedDB 一种异步的 API ,可以访问支持索引的数据库\n"),o("br")])]),e._v(" "),o("h2",{attrs:{id:"web-storage"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#web-storage"}},[e._v("#")]),e._v(" Web Storage")]),e._v(" "),o("p",[e._v("Window 对象的 localStorage 和 sessionStorage 属性引用的是 Storage 对象，他与普通的 JavaScript 对象是否类似，但是丫的属性值必须是字符串，且它所存储的属性值是持久化的，允许在浏览器中存储键值对数据。存储的数据没有过期时间，直到手动去删除。")]),e._v(" "),o("ul",[o("li",[o("p",[e._v("localStorage：")]),e._v(" "),o("ul",[o("li",[e._v("将数据永久存储在用户的浏览器中。是 Web 浏览器提供的一种用于在本地存储中持久保存数据的机制\n-localStorage:localStorage 的生命周期是永久的，关闭页面或浏览器之后 localStorage 中的数据也不会消失。localStorage 除非主动删除数据，否则数据永远不会消失\n"),o("br")])])]),e._v(" "),o("li",[o("p",[e._v("sessionStorage：")]),e._v(" "),o("ul",[o("li",[e._v("将数据保存在 session 对象中。是 Web 浏览器提供的一种用于在会话期间存储数据的方式，所谓 session，就是指用户在浏览某个网站时，从进入网站到浏览器关闭所经过的这段时间，也就是用户浏览这个网站所花费的时间。")]),e._v(" "),o("li",[e._v("sessionStorage 的生命周期是在仅在当前会话下有效。- - sessionStorage 引入了一个“浏览器窗口”的概念，sessionStorage 是在同源的窗口中始终存在的数据。只要这个浏览器窗口没有关闭，即使刷新页面或者进入同源另一个页面，数据依然存在。但是 sessionStorage 在关闭了浏览器窗口后就会被销毁。同时独立的打开同一个窗口同一个页面，sessionStorage 也是不一样的。\n"),o("br")])])]),e._v(" "),o("li",[o("p",[e._v("WebStorage 是仅在客户端（即浏览器）中保存，不参与和服务器的通信 他们的大小要比 cookies 大，一般为 5MB，而 cookies 只有 4KB 他们的存储空间比 cookies 大，但是不参与和服务器的通信(随着 HTTP header 发送到服务器端)，所以安全性比 cookies 高 并且由于不需要再从服务器获取数据，所以访问速度比 cookies 快")])])]),e._v(" "),o("p",[o("strong",[e._v("_ 友情链接：[Wb Storage API] https://developer.mozilla.org/zh-CN/docs/Web/API/Web_Storage_API _")]),e._v(" "),o("br")]),e._v(" "),o("p",[e._v("####"),o("font",{attrs:{color:"forestgreen"}},[e._v(" seeionStorage or localStorage ?")])],1),e._v(" "),o("br"),e._v("\n- 总的来说，sessionStorage 适用于短期和会话级别的数据存储，而 localStorage 适用于长期和持久性的数据存储。如果希望存储的是 token(用户身份令牌)， 而令牌通常需要在用户退出登录之前持久保存，以便用户可以在多个会话之间保持登录状态。故推荐使用 localStorage，因为 localStorage 的性能比 sessionStorage 好，而且 localStorage 的数据不会随着浏览器窗口关闭而消失，除非主动删除数据，否则数据永远不会消失。\n"),o("br"),e._v(" "),o("h2",{attrs:{id:"cookie"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#cookie"}},[e._v("#")]),e._v(" Cookie")]),e._v(" "),o("br"),e._v("\nCookie 是由 Web 服务器保存在 Web 浏览器上的小段文本信息，它会在浏览器下次向同一 Web 服务器再发起请求时被携带并发送到服务器上。通常，它用于告知服务端两个请求是否来自同一浏览器，如保持用户的登录状态。Cookie 使基于无状态的 HTTP 协议记录稳定的状态信息成为了可能。\n"),o("ul",[o("li",[e._v("Cookie 的生命周期可以通过两种方式定义：\n会话期 Cookie 会在当前的会话结束之后删除。浏览器定义了“当前会话”结束的时间，一些浏览器重启时会使用会话恢复。这可能导致会话 cookie 无限延长。\n持久性 Cookie 在过期时间（Expires）指定的日期或有效期（Max-Age）指定的一段时间后被删除。\n"),o("ul",[o("li",[e._v("注：当 Cookie 的过期时间（ Expires）被设定时，设定的日期和时间只与客户端相关，而不是服务端。\n"),o("br")])])]),e._v(" "),o("li",[e._v("cookie 由于只能需要和服务器通信，所以每次都会携带在 HTTP 头中，如果使用 cookie 保存过多数据会带来性能问题，并且原生的 cookief 不提供任何良好的 API，使用起来不方便 ，所以一般不直接使用 cookie，而是使用封装好的第三方库，比如 js-cookie\n"),o("br")]),e._v(" "),o("li",[e._v("由于 cookie 存储在浏览器中，对客户端是可见的，客户端的一些程序可能会窥探、复制以至修正 Cookie 中的内容。可以在 cookie 中设置了 HttpOnly 属性，那么通过 js 脚本将无法读取到 cookie 信息，这样能有效的防止 XSS 攻击\n"),o("br")])]),e._v(" "),o("p",[o("strong",[e._v("_ 友情链接：[Cookie] https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Cookies _")])]),e._v(" "),o("h2",{attrs:{id:"indexeddb"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#indexeddb"}},[e._v("#")]),e._v(" IndexedDB")]),e._v(" "),o("p",[e._v("IndexedDB 是一种底层 API，用于在客户端存储大量的结构化数据（也包括文件/二进制大型对象（blobs））。该 API 使用索引实现对数据的高性能搜索。虽然 Web Storage 在存储较少量的数据很有用，但对于存储更大量的结构化数据来说力不从心。而 IndexedDB 提供了这种场景的解决方案。")]),e._v(" "),o("ul",[o("li",[o("p",[e._v("数据库模型：\nIndexedDB 是一个基于键值对的数据库模型，其中的数据以键值对的形式进行存储。")])]),e._v(" "),o("li",[o("p",[e._v("异步操作：\n与传统的同步数据库不同，IndexedDB 是一个异步的数据库。它使用事件来响应数据库操作的完成，而不会阻塞主线程。")])]),e._v(" "),o("li",[o("p",[e._v("存储容量：\nIndexedDB 的存储容量通常比 localStorage 大得多，可以存储数百兆字节的数据（取决于浏览器和设备）。")])])]),e._v(" "),o("p",[o("strong",[e._v("_ 友情链接：[IndexedDB] https://developer.mozilla.org/zh-CN/docs/Web/API/IndexedDB_API _")]),e._v(" "),o("br")]),e._v(" "),o("h3",{attrs:{id:"安全性问题"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#安全性问题"}},[e._v("#")]),e._v(" 安全性问题")]),e._v(" "),o("ul",[o("li",[e._v("Web Storage 和 Cookie 都是保存在客户端的，所以不安全，不要在里面存储敏感信息，特别是用户信息，如密码等(之前项目就犯过这样的错)，它是直接通过浏览器查看到存储信息的")]),e._v(" "),o("li",[e._v("关于更多的安全性问题，请参考友情链接(翻找了好久)")])]),e._v(" "),o("p",[o("strong",[e._v("_ 友情链接：https://blog.csdn.net/java_tang_shi_wen/article/details/115027687 _")])]),e._v(" "),o("p",[o("strong",[e._v("_ 友情链接：https://tech.meituan.com/2018/10/11/fe-security-csrf.html _")])]),e._v(" "),o("p",[o("strong",[e._v("_ 友情链接：https://github.com/Advanced-Frontend/Daily-Interview-Question/issues/31 _")]),e._v(" "),o("br")]),e._v(" "),o("h2",{attrs:{id:"推荐阅读"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#推荐阅读"}},[e._v("#")]),e._v(" 推荐阅读：")]),e._v(" "),o("ul",[o("li",[e._v("JavaScript 权威指南")]),e._v(" "),o("li",[e._v("JavaScript 高级程序设计")])])])}),[],!1,null,null,null);o.default=s.exports}}]);