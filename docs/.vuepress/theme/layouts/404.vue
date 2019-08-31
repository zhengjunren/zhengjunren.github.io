<template>
  <div class="theme-container">
    <div class="theme-default-content">
      <h1>404</h1>
      <blockquote>{{ getMsg() }}</blockquote>
      <router-link to="/">回到首页！</router-link>
    </div>
  </div>
</template>

<script>
const msgs = [
  `这里啥也没有...`,
  `我们是怎么来到这里的？`,
  `这里是404，啥也没有...`,
  `到别处去瞧瞧，这里啥也没有...`
]

export default {
  methods: {
    getMsg () {
      return msgs[Math.floor(Math.random() * msgs.length)]
    }
  }
}
</script>
