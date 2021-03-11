(window.webpackJsonp=window.webpackJsonp||[]).push([[127],{320:function(i,t,r){"use strict";r.r(t);var s=r(5),n=Object(s.a)({},(function(){var i=this,t=i.$createElement,r=i._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":i.$parent.slotKey}},[r("h1",{attrs:{id:"arraylist-与-linkedlist-区别"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#arraylist-与-linkedlist-区别"}},[i._v("#")]),i._v(" ArrayList 与 LinkedList 区别")]),i._v(" "),r("ul",[r("li",[r("p",[i._v("因为 Array 是基于索引(index)的数据结构，它使用索引在数组中搜索和读取数据是很快的。Array 获取数据的时间复杂度是 O(1),但是要删除数据却是开销很大的，因为这需要重排数组中的所有数据。")])]),i._v(" "),r("li",[r("p",[i._v("相对于 ArrayList，LinkedList 插入是更快的。因为 LinkedList 不像 ArrayList 一样，不需要改变数组的大小，也不需要在数组装满的时候要将所有的数据重新装入一个新的数组，这是 ArrayList 最坏的一种情况，时间复杂度是 O(n)，而 LinkedList 中插入或删除的时间复杂度仅为 O(1)。ArrayList 在插入数据时还需要更新索引（除了插入数组的尾部）。")])]),i._v(" "),r("li",[r("p",[i._v("类似于插入数据，删除数据时，LinkedList 也优于 ArrayList。")])]),i._v(" "),r("li",[r("p",[i._v("LinkedList 需要更多的内存，因为 ArrayList 的每个索引的位置是实际的数据，而 LinkedList 中的每个节点中存储的是实际的数据和前后节点的位置。")])]),i._v(" "),r("li",[r("p",[i._v("你的应用不会随机访问数据。因为如果你需要 LinkedList 中的第 n 个元素的时候，你需要从第一个元素顺序数到第 n 个数据，然后读取数据。")])]),i._v(" "),r("li",[r("p",[i._v("你的应用更多的插入和删除元素，更少的读取数据。因为插入和删除元素不涉及重排数据，所以它要比 ArrayList 要快。")])])])])}),[],!1,null,null,null);t.default=n.exports}}]);