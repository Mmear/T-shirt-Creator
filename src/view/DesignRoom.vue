<template>
<div id="designRoom">
		<div id="designNavigation">
			<!-- 可用组件代替 -->
		</div>
		<div id="designWorkSpace">
			<div class="design-left">
				<!-- 左方素材选择栏 -->	
				<div class="left-tab-wrp">
					<ul class="left-tab">
                        <li v-for="(tab, index) in tabs" :key="index"
                         :class="[{'acive-tab': currentTab.title === tab.title}, 'tab-item']">
                            <i class="tab-icon" :class="tab.icon"></i>
                            <span>{{ tab.title }}</span>
                        </li>
					</ul>
				</div>
				<div class="left-content-wrp">
                    <!-- 响应式布局 浏览器视口宽度<=x 时，隐藏，变为弹出式浮层 -->
					<!-- 根据左部选项卡不同切换 -->
					<keep-alive>
						<component :is="currentTab.component"></component>
					</keep-alive>
				</div>
			</div>
			<div class="design-main">
				<div class="top-toolTips">
					<!-- 动态组件 根据鼠标选中的对象不同 所显示的内容也不同 -->
					<keep-alive>
						<!-- <component :is="currentObject.toolComponent"></component> -->
					</keep-alive>
				</div>
				<!-- 主要设计区域 -->
				<div class="main-stage canvas-wrapper">
					<div class="canvas-cotainer">
						<canvas id="front-canvas"></canvas>
						<canvas id="upper-canvas"></canvas>
					</div>
				</div>
			</div>
			<div class="design-stage-nav pos-fixed"></div>
			<div class="design-zoom-wrp pos-fixed"></div>
			<div class="design-zoom-thumbn pos-fixed"></div>
		</div> 
	</div>
</template>

<script>
// 引入 fabric
import { fabric } from 'fabric-browseronly'
import TabImage from '@/components/tabComponent/Image'
export default {
    data () {
        return {
            isActive: false,
            tabs: [
                {
                    title: '商品',
                    component: 'TabProduct',
                    icon: 'el-icon-goods'
                },
                {
                    title: '形状',
                    component: 'TabShape',
                    icon: 'el-icon-news'
                },
                {
                    title: '图片',
                    component: 'TabImage',
                    icon: 'el-icon-picture'
                },
                {
                    title: '组件',
                    component: 'TabLayer',
                    icon: 'el-icon-more-outline'
                }
            ],
            currentTab: null
        }
    },
    components: {
        TabImage
    },
    created () {
        this.currentTab = this.tabs[2]
    },
    mounted () {
        let canvas = new fabric.Canvas('front-canvas');
        canvas.add(new fabric.Circle({ radius: 30, fill: '#f55', top: 100, left: 100 }));
        canvas.selectionColor = 'rgba(0,255,0,0.3)';
        canvas.selectionBorderColor = 'blue';
        canvas.selectionLineWidth = 15;
        canvas.selection = false; 
    }
}
</script>

<style lang="stylus" scoped>
#designRoom {
    display inline-block
    #designNavigation {
        width 100%
        height 60px
        position fixed
        top: 0
        left: 0
        float left
        clear both
        z-index 10000
        background-color #f1f1f1
    }
    #designWorkSpace {
        display flex
        align-items stretch
        position relative
        clear both
        height : calc(100vh - 60px)
        margin 60px 0 0 0
        background-color #d1d1d1
        .design-left {
            display flex
            width 420px
            background-color #c1c1c1
            .left-tab-wrp {
                // 左侧tab栏
                position relative
                // float left
                width 70px
                background-color #272c33
                .left-tab {
                    list-style none 
                    display flex
                    flex-direction column
                    padding 0
                    margin 0
                    overflow auto
                    .tab-item {
                        color: #ddd
                        &:hover {
                            color: $hoverColor
                        }
                        height 50px
                        padding 15px 0 
                        text-align center
                        font-size 14px
                        cursor pointer 
                        .tab-icon {
                            display block 
                            font-size 20px
                            padding 3px 0
                        }
                    }
                    .acive-tab {
                        background-color #3f4652
                    }
                }
            }
            .left-content-wrp {
                width 350px
                background-color #3f4652
                overflow auto
            }
        }
        .design-main {
            background-color #b1b1b1
            width: calc(100vw - 420px)
            .top-toolTips {

            }
            .main-stage {
                .canvas-container {
                    #front-canvas {

                    }
                    #upper-canvas {

                    }
                }
            }
        }
        .design-stage-nav {

        }
        .design-zoom-wrp {

        }
        .design-zoom-thumbn {

        }
    }
}

.pos-fixed {
    position fixed
}
</style>
