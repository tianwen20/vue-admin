<template>
  <div class="components-container">
    <div class="editor-box">
      <tinymce v-model="content" :height="460" :width="375" />
    </div>
    <div class="editor-content">
      <div id="editor_html" class="editor-content1" :style="{backgroundColor: editor_color}" v-html="content" />
    </div>
    <div class="tool">
      <el-button type="primary" @click="downImg">下载图片</el-button>
      <chrome-picker v-model="colors" class="color_picker" @input="updateColor" />
      <!--      <el-input v-model="editor_color" class="editor_color" />-->
    </div>
  </div>
</template>

<script>
import Tinymce from '@/components/Tinymce'
import html2canvas from 'html2canvas'
import FileSaver from 'file-saver'
import { Chrome } from 'vue-color'

export default {
  name: 'TinymceDemo',
  components: {
    Tinymce,
    'chrome-picker': Chrome
  },
  data() {
    return {
      content: '',
      colors: '#ffffff',
      editor_color: '#ffffff'
    }
  },
  methods: {
    downImg() {
      const opts = {
        scale: 6,
        logging: true,
        allowTaint: true,
        backgroundColor: null,
        useCORS: true,
        dpi: 600
      }
      html2canvas(document.querySelector('#editor_html'), opts).then((canvas) => {
        canvas.toBlob(imgBlob => {
          FileSaver.saveAs(imgBlob, (new Date().getTime()) + '.png')
        }, 'image/png')
      })
    },
    updateColor(color) {
      console.log(color)
      console.log(this.editor_color)
      this.editor_color = color.hex8
    }
  }
}
</script>

<style>
  .editor-content1 img, .editor-box img {
    max-width: 100%;
  }
</style>

<style scoped lang="less">
  .components-container {
    width: 100%;
    display: flex;
    flex-direction: row;

    .editor-box {

    }

    .editor-content {
      margin-left: 40px;
      border: 1px solid #000000;
      height: 667px;
      overflow-y: scroll;
      clear: both;

      .editor-content1 {
        padding: 1px 0;
        width: 375px;

        p:after{
          content: '';
          height: 0;
          display: block;
          clear: both;
        }

        img {
          max-width: 100%;
        }
      }
    }

    .tool {
      margin-left: 20px;

      .color_picker{
        margin-top: 20px;
      }
    }
  }
</style>

