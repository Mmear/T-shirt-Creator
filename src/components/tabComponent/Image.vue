<template>
    <div class="tabImage">
        <el-upload class="image-uploader"
            list-type="picture-card"
            drag
            action="https://jsonplaceholder.typicode.com/posts/"
        >
            <div class="el-upload__text"> <i class="el-icon-upload"></i> 将文件拖到此处，或<em>点击上传</em></div>
            <!-- <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div> -->
        </el-upload>
        <div class="upload-list-wrp">
            <ul class="image-list">
                <li v-for="(img, index) in imgListt" 
                :key="index"
                :style="{backgroundImage: 'url(' + img.url + ')'}"
                class="image-item"
                >
                    <i class="action-delete el-icon-delete" title="从图库中删除"></i>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: 'tab-image',
    props: {
        imgList: Array
    },
    data () {
        return {
            imgListt: [
                {
                    url: require('../../assets/img/01.jpg')
                },
                {
                    url: require('../../assets/img/02.jpg')
                },
                {
                    url: require('../../assets/img/03.jpg')
                },
                {
                    url: require('../../assets/img/04.jpg')
                }
            ]
        }
    }
}
</script>

<style lang="stylus">
.tabImage {
    display flex
    flex-direction column
    .image-uploader {
        width 90%
        margin 10px auto
        overflow auto
        .el-upload-list {
            
        }
        .el-upload {
            line-height 0
            width 100%
            background-color transparent
            border none
            .el-upload-dragger {
                border-style dashed
                border-width 3px
                transition all 0.3s
                &:hover {
                    border-color $hoverColor
                }
                .el-icon-upload {
                    font-size 40px
                    display block
                    color: #ddd
                }
                .el-upload__text {
                    height 100%
                    font-size 13px
                    color: #ddd
                }
                background-color transparent
                height 100%
                width 100%
            }
        }
        .el-upload__tip {
            color: #ddd
        }
    }
    .upload-list-wrp {
        width 90%
        margin 10px auto
        .image-list {
            display block
            list-style none 
            padding 0
            margin 0
            .image-item {
                float left
                width calc(50% - 10px)
                height 120px
                text-align center
                background-color #fff
                margin 0 10px 10px 0
                overflow hidden
                cursor pointer
                transition all 250ms ease 
                opacity 0.8
                position relative
                background-size cover
                .action-delete {
                    position absolute 
                    top 5px
                    left 5px
                    color: $dangerColor
                    opacity 0
                    transition all 250ms ease 
                }
                &:hover .action-delete {
                    opacity 1
                }
            }
        }
    
    }
}
</style>


