(window.webpackJsonp=window.webpackJsonp||[]).push([[141],{714:function(v,_,t){"use strict";t.r(_);var a=t(7),n=Object(a.a)({},(function(){var v=this,_=v.$createElement,t=v._self._c||_;return t("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[t("h2",{attrs:{id:"b-树"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#b-树"}},[v._v("#")]),v._v(" B 树")]),v._v(" "),t("p",[v._v("B树是一种多路自平衡搜索树，它类似普通的二叉树，但是B书允许每个节点有更多的子节点。B树示意图如下：\n"),t("img",{attrs:{src:"/sql/B%E6%A0%91.png",alt:"B 树"}})]),v._v(" "),t("p",[v._v("B树的特点：")]),v._v(" "),t("ul",[t("li",[v._v("所有键值分布在整个树中")]),v._v(" "),t("li",[v._v("任何关键字出现且只出现在一个节点中")]),v._v(" "),t("li",[v._v("搜索有可能在非叶子节点结束")]),v._v(" "),t("li",[v._v("在关键字全集内做一次查找，性能逼近二分查找算法")])]),v._v(" "),t("p",[t("img",{attrs:{src:"/sql/B%E6%95%B0%E6%9F%A5%E6%89%BE.jpg",alt:"B 树查找"}})]),v._v(" "),t("p",[v._v("来模拟下查找文件29的过程：")]),v._v(" "),t("ol",[t("li",[v._v("根据根结点指针找到文件目录的根磁盘块1，将其中的信息导入内存。【磁盘IO操作1次】")]),v._v(" "),t("li",[v._v("此时内存中有两个文件名17，35和三个存储其他磁盘页面地址的数据。根据算法我们发现17<29<35，因此我们找到指针p2。")]),v._v(" "),t("li",[v._v("根据p2指针，我们定位到磁盘块3，并将其中的信息导入内存。【磁盘IO操作2次】")]),v._v(" "),t("li",[v._v("此时内存中有两个文件名26，30和三个存储其他磁盘页面地址的数据。根据算法我们发现26<29<30，因此我们找到指针p2。")]),v._v(" "),t("li",[v._v("根据p2指针，我们定位到磁盘块8，并将其中的信息导入内存。【磁盘IO操作3次】")]),v._v(" "),t("li",[v._v("此时内存中有两个文件名28，29。根据算法我们查找到文件29，并定位了该文件内存的磁盘地址。")])]),v._v(" "),t("h2",{attrs:{id:"b-树-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#b-树-2"}},[v._v("#")]),v._v(" B+ 树")]),v._v(" "),t("p",[t("img",{attrs:{src:"/sql/B+%E6%A0%91.png",alt:"B 树"}})]),v._v(" "),t("p",[v._v("从图中也可以看到，B+树与B树的不同在于：")]),v._v(" "),t("ol",[t("li",[v._v("所有关键字存储在叶子节点，非叶子节点不存储真正的data")]),v._v(" "),t("li",[v._v("为所有叶子节点增加了一个链指针")])]),v._v(" "),t("h3",{attrs:{id:"b-树在myisam索引实现"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#b-树在myisam索引实现"}},[v._v("#")]),v._v(" B+树在MyISAM索引实现")]),v._v(" "),t("p",[v._v("叶节点的data域存放的是数据记录的地址\n"),t("img",{attrs:{src:"/sql/B+%E6%A0%91%E5%9C%A8MyISAM%E7%B4%A2%E5%BC%95%E5%AE%9E%E7%8E%B0.webp",alt:"B+树在MyISAM索引实现"}}),v._v("\nMyISAM的索引方式也叫做“非聚集”的，之所以这么称呼是为了与InnoDB的聚集索引区分。")]),v._v(" "),t("h3",{attrs:{id:"b-树在innodb索引实现"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#b-树在innodb索引实现"}},[v._v("#")]),v._v(" B+树在InnoDB索引实现")]),v._v(" "),t("p",[t("img",{attrs:{src:"/sql/B+%E6%A0%91%E5%9C%A8InnoDB%E7%B4%A2%E5%BC%95%E5%AE%9E%E7%8E%B0.webp",alt:"B+树在InnoDB索引实现"}})]),v._v(" "),t("p",[v._v("第一个重大区别是InnoDB的数据文件本身就是索引文件。\n从上文知道，MyISAM索引文件和数据文件是分离的，索引文件仅保存数据记录的地址。\n而在InnoDB中，表数据文件本身就是按B+Tree组织的一个索引结构，这棵树的叶节点data域保存了完整的数据记录。\n这个索引的key是数据表的主键，因此InnoDB表数据文件本身就是主索引。")]),v._v(" "),t("p",[v._v("从示意图，可以看到叶节点包含了完整的数据记录。这种索引叫做聚集索引。因为InnoDB的数据文件本身要按主键聚集，所以InnoDB要求表必须有主键（MyISAM可以没有），如果没有显式指定，则MySQL系统会自动选择一个可以唯一标识数据记录的列作为主键，如果不存在这种列，则MySQL自动为InnoDB表生成一个隐含字段作为主键，这个字段长度为6个字节，类型为长整形。")]),v._v(" "),t("p",[v._v("第二个与MyISAM索引的不同是InnoDB的辅助索引data域存储相应记录主键的值而不是地址。换句话说，InnoDB的所有辅助索引都引用主键作为data域")]),v._v(" "),t("ul",[t("li",[v._v("为什么不建议使用过长的字段作为主键？")])]),v._v(" "),t("p",[v._v("因为所有辅助索引都引用主索引，过长的主索引会令辅助索引变得过大。")]),v._v(" "),t("ul",[t("li",[v._v("在InnoDB中不要用非单调的字段作为主键。")])]),v._v(" "),t("p",[v._v("因为InnoDB数据文件本身是一颗B+Tree，非单调的主键会造成在插入新记录时数据文件为了维持B+Tree的特性而频繁的分裂调整，十分低效，而使用自增字段作为主键则是一个很好的选择。")]),v._v(" "),t("p",[v._v("聚集索引这种实现方式使得按主键的搜索十分高效，但是辅助索引搜索需要检索两遍索引：首先检索辅助索引获得主键，然后用主键到主索引中检索获得记录。")]),v._v(" "),t("h2",{attrs:{id:"问题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#问题"}},[v._v("#")]),v._v(" 问题")]),v._v(" "),t("p",[v._v("为什么mysql的索引使用B+树而不是B树呢？？")]),v._v(" "),t("ol",[t("li",[v._v("B+树更适合外部存储(一般指磁盘存储),由于内节点(非叶子节点)不存储data，所以一个节点可以存储更多的内节点，每个节点能索引的范围更大更精确。也就是说使用B+树单次磁盘IO的信息量相比较B树更大，IO效率更高。")]),v._v(" "),t("li",[v._v("mysql是关系型数据库，经常会按照区间来访问某个索引列，B+树的叶子节点间按顺序建立了链指针，加强了区间访问性，所以B+树对索引列上的区间范围查询很友好。而B树每个节点的key和data在一起，无法进行区间查找。")])])])}),[],!1,null,null,null);_.default=n.exports}}]);