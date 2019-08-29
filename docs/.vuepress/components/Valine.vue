<template>
    <!-- Valine 无后端评论系统 组件 -->
    <div v-if="valine">
        <br>
        <br>
        <h4 class="valine">评论:</h4>
        <div id="vcomments"></div>
<!--        <br>-->
        <span :id="path.path" class="leancloud-visitors last-updated" :data-flag-title="path.title">
            <div style="color: #4e6e8e" class="post-meta-item-text prefix">当前页访问次数: <i style="color: #aaa" class="leancloud-visitors-count">1000000+</i></div>
        </span>
    </div>
</template>

<script>
    export default {
        computed: {
            valine: function() {
                let { valine } = this.$frontmatter;
                if (typeof valine !== "undefined") {
                    return valine;
                }
                return true;
            },
            path: function() {
                let { path = "/", title = "首页" } = this.$page;
                return { path, title };
            }
        },
        mounted() {
            this.renderValine();
        },
        watch: {
            $route: {
                handler: function(to, from) {
                    if (to.path !== from.path) {
                        this.$nextTick(() => {
                            this.renderValine();
                        });
                    }
                }
            }
        },
        methods: {
            renderValine() {
                const Valine = require("valine");
                if (typeof window !== undefined) {
                    this.window = window;
                    window.AV = require("leancloud-storage");
                }
                new Valine({
                    el: "#vcomments",
                    appId: "xL9mVBUcUUGmhBL5EWeNVnH1-gzGzoHsz",
                    appKey: "9BVVita96I9uTg8jEsXtDYAA",
                    notify: false,
                    verify: false,
                    avatar: "retro",
                    path: window.location.pathname,
                    meta: ["nick", "mail", "link"],
                    pageSize: 10,
                    visitor: true, // 阅读量统计
                    placeholder: "快来评论吧~~~"
                });
            }
        }
    };
</script>
