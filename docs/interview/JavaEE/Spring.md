---
title: Spring
date: 2021-01-18
---
## Spring 有几种注入方式
1. 手动注入
    + set 方法注入
    + 构造方法注入
2. 自动注入
    + XML 自动注入
        + set 方法
        + 构造方法
    + @Autowired 注解自动注入(先 byType, 后 byName)
        + 属性
        + 构造方法
        + set 方法

## Bean 的生命周期

### Bean 定义
1. singleton: 在Spring的IoC容器中只存在一个对象实例，所有该对象的引用都共享这个实例。Spring 容器只会创建该bean定义的唯一实例，这个实例会被保存到缓存中，并且对该bean的所有后续请求和引用都将返回该缓存中的对象实例，一般情况下，无状态的bean使用该scope。
2. prototype:每次对该bean的请求都会创建一个新的实例，一般情况下，有状态的bean使用该scope。
3. request：每次http请求将会有各自的bean实例，类似于prototype。
4. session：在一个http session中，一个bean定义对应一个bean实例。
5. global session：在一个全局的http session中，一个bean定义对应一个bean实例。典型情况下，仅在使用portlet context的时候有效。

其次说明spring的默认scope（bean作用域）是singleton

### 生命周期
class -> BeanDefinition -> BeanFactoryPostProcessor -> new 对象 -> 填充属性 -> aware -> 初始化 -> AOP -> 放置单例池 -> bean 对象

### 实例化
+ 实例化前：InstantiationAwareBeanPostProcessor.postProcessBeforeInstantiation()
+ 实例化：推断构造，new 
+ 实例化后：InstantiationAwareBeanPostProcessor.postProcessAfterInstantiation()

### 初始化
+ Aware beanName
+ 初始化前： BeanPostProcessor.postProcessBeforeInitialization()
+ 初始化：InitializingBean
+ 初始化后：AOP 代理对象-> BeanPostProcessor.postProcessAfterInitialization()

BeanFactory

BeanFactoryPostProcessor

## BeanFactory简介以及与FactoryBean的区别

### BeanFactory
它负责生产和管理bean的一个工厂。在Spring中，BeanFactory是IOC容器的核心接口，它的职责包括：实例化、定位、配置应用程序中的对象及建立这些对象间的依赖。BeanFactory只是个接口，并不是IOC容器的具体实现，但是Spring容器给出了很多种实现，如 DefaultListableBeanFactory、XmlBeanFactory、ApplicationContext等，其中XmlBeanFactory就是常用的一个，该实现将以XML方式描述组成应用的对象及对象间的依赖关系。XmlBeanFactory类将持有此XML配置元数据，并用它来构建一个完全可配置的系统或应用。
它为其他具体的IOC容器提供了最基本的规范，例如DefaultListableBeanFactory,XmlBeanFactory,ApplicationContext 等具体的容器都是实现了BeanFactory，再在其基础之上附加了其他的功能。  

### FactoryBean

一般情况下，Spring通过反射机制利用`<bean>`的class属性指定实现类实例化Bean，在某些情况下，实例化Bean过程比较复杂，如果按照传统的方式，则需要在`<bean>`中提供大量的配置信息。配置方式的灵活性是受限的，这时采用编码的方式可能会得到一个简单的方案。Spring为此提供了一个`org.springframework.bean.factory.FactoryBean`的工厂类接口，用户可以通过实现该接口定制实例化Bean的逻辑。FactoryBean接口对于Spring框架来说占用重要的地位，Spring自身就提供了70多个FactoryBean的实现。它们隐藏了实例化一些复杂Bean的细节，给上层应用带来了便利。从Spring3.0开始，FactoryBean开始支持泛型，即接口声明改为FactoryBean`<T>`的形式

以Bean结尾，表示它是一个Bean，不同于普通Bean的是：它是实现了FactoryBean`<T>`接口的Bean，根据该Bean的ID从BeanFactory中获取的实际上是FactoryBean的getObject()返回的对象，而不是FactoryBean本身，如果要获取FactoryBean对象，请在id前面加一个&符号来获取。

FactoryBean是一个接口，当在IOC容器中的Bean实现了FactoryBean后，通过getBean(String BeanName)获取到的Bean对象并不是FactoryBean的实现类对象，而是这个实现类中的getObject()方法返回的对象。要想获取FactoryBean的实现类，就要getBean(&BeanName)，在BeanName之前加上&。