#  String、StringBulider、StringBuffer

## String

字符串常量，字符串长度不可变。Java 中 `String` 是不可变的，用于存放字符的数组被声明为final的，因此只能赋值一次，不可再更改。

## StringBuilder

字符串变量（非线程安全）。在内部，`StringBuilder`对象被当作是一个包含字符序列的变长数组。

## StringBuffer

字符串变量（Synchronized，即线程安全）。如果要频繁对字符串内容进行修改，出于效率考虑最好使用`StringBuffer`，如果想转成`String`类型，可以调用`StringBuffer`的`toString()`方法。

## 区别 
`String` 类型和 `StringBuffer` 的主要性能区别：`String` 是不可变的对象, 因此在每次对 `String` 类型进行改变的时候，都会生成一个新的 `String` 对象，然后将指针指向新的 `String` 对象，所以经常改变内容的字符串最好不要用 `String` ，因为每次生成对象都会对系统性能产生影响，特别当内存中无引用对象多了以后， JVM 的 GC 就会开始工作，性能就会降低。

使用 `StringBuffer` 类时，每次都会对 `StringBuffer` 对象本身进行操作，而不是生成新的对象并改变对象引用。所以多数情况下推荐使用 `StringBuffer` ，特别是字符串对象经常改变的情况下。
