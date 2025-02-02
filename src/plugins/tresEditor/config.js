/*
 * @Description:
 * @Version: 1.668
 * @Autor: 地虎降天龙
 * @Date: 2024-05-10 10:11:04
 * @LastEditors: 地虎降天龙
 * @LastEditTime: 2024-05-14 16:22:26
 */
export default {
    name: 'tresEditor',
    title: 'tres3D编辑器',
    intro: '利用Three.js的原生编辑器，导入到本TvT.js快速完成项目落地。',
    version: '0.0.1',
    author: '地虎降天龙',
    website: 'https://gitee.com/hawk86104',
    state: 'active',
    creatTime: '2024-05-10',
    updateTime: '2024-05-10',
    require: [],
    preview: [
        {
            src: `<a style="color: #5384ff;" href="https://threejs.org/editor/" target="_blank">threejs.org/editor</a> 的国内镜像，为了让大家更方便使用。编辑好场景后，选择项目下的发布按钮，下载解压包，获得里面的:app.json。
            拿着它，使用旁边的<<a style="color: #5384ff;" href="https://opensource.icegl.cn/#/plugins/tresEditor/simpleImport" target="_blank">插件生成器</a>>，生成、安装插件。开始我们TvT.js的旅程吧！`,
            type: 'text',
            name: 'threeEditor',
            url: 'https://editor.icegl.cn',
            title: 'three原生Editor',
        },
        {
            src: `1、载入原生Three.js编辑器的Json文件</br>
            2、导出拆解Json的Zip包【测试用】</br>
            3、载入拆解后的Zip包了【测试用】</br>
            4、--- 生成插件包【ZIP格式】---</br>
            5、按照文档中的方法安装插件：<a style="color: #5384ff;" href="https://docs.icegl.cn/docs/three-vue-tres/plugin/manage.html#创建插件" target="_blank">插件管理</a></br>`,
            type: 'text',
            name: 'simpleImport',
            title: '插件生成器',
        },
    ],
}
