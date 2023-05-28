<<<<<<< HEAD
# vue-admin
=======
# tool-ft
**需要在每季度1号进行对应依赖和根据原库进行更新(npm-check-updates、npm audit fix、npm、node)**   
   
   
## 介绍
一个配置相对复杂的vue项目的demo，内容比较少，作为demo参照，实际使用中按照自己的需求自行增删，有好的修改意见经商量确定后进行更新。    
这个项目是参照<a href="https://github.com/PanJiaChen/vue-element-admin">vue-element-admin</a>项目修改来的，有兴趣可以了解。   
分为三个分支，master(h5-demo)、web_admin、web_normal，分别对应h5模板、pc管理模板、pc普通模板，另外两个模板在使用时进行补全，目前只有h5-demo   
    
    
## 目录结构及相关功能介绍
```bash
整体目录结构   
├── babel.config.js   //babel配置文件，一般不用改动
├── build   //预览发布环境效果相关命令行
├── jsconfig.json   //vscode编辑器的js项目配置文件，列为一个显式js项目，指定上下文
├── mock   //mock目录，可以按照自己需求进行配置
|  ├── article.js
|  ├── index.js
|  ├── mock-server.js
|  ├── remote-search.js
|  ├── role
|  |  ├── index.js
|  |  └── routes.js
|  ├── user.js
|  └── utils.js   //一般作为一个目录中的工具函数定义
├── package-lock.json   //npm install命令自动生成的，可以锁定目前项目的相关依赖版本；注意不要使用淘宝镜像
├── package.json   //npm配置项，相关命令、配置、依赖
├── postcss.config.js   //postcss的配置文件，js处理css的一个包
├── public   //一般只放置index.html入口文件
|  ├── favicon.ico
|  └── index.html
├── README.md
├── src   //项目开发主目录
|  ├── api   //数据请求封装
|  |  ├── article.js
|  |  ├── remote-search.js
|  |  └── user.js
|  ├── App.vue   //vue入口主文件
|  ├── assets   //静态资源
|  |  ├── 401_images
|  |  ├── 404_images
|  |  └── custom-theme
|  ├── components   //组件库
|  |  ├── Breadcrumb
|  |  ├── Hamburger
|  |  ├── MarkdownEditor
|  |  ├── SvgIcon
|  |  └── Tinymce
|  ├── directive   //自定义指令库
|  |  └── waves
|  ├── filters   //自定义过滤器，会在main.js中全局注册
|  |  └── index.js
|  ├── icons   //一个svg插件对应的自定义icon库
|  |  ├── index.js
|  |  ├── svg
|  |  └── svgo.yml
|  ├── layout   //一个自定义的vue单页面的外壳
|  |  ├── components
|  |  ├── index.vue
|  |  └── mixin
|  ├── main.js  //主js（入口js），进行全局的配置引入和定义，进行vue渲染
|  ├── permission.js   //在router的钩子函数进行一些操作，进行前置验证拦截和后置相关操作
|  ├── router   //vue-router的定义目录
|  |  ├── index.js
|  |  └── modules   //较复杂的项目，应分小模块分别定义
|  ├── settings.js    //一些自定义的应用显示设置
|  ├── store    //vuex的目录
|  |  ├── getters.js
|  |  ├── index.js
|  |  └── modules    //应用较复杂，应分类别分别存放定义
|  ├── styles    //定义的公共css样式
|  |  ├── btn.less
|  |  ├── element-ui.less
|  |  ├── element-variables.less
|  |  ├── index.less
|  |  ├── mixin.less
|  |  ├── sidebar.less
|  |  ├── transition.less
|  |  └── variables.less
|  ├── utils    //公共的一些函数或者功能函数封装
|  |  ├── auth.js
|  |  ├── get-page-title.js
|  |  ├── index.js    //普通的函数封装
|  |  ├── open-window.js
|  |  ├── permission.js
|  |  ├── request.js    //axios请求的封装
|  |  ├── scroll-to.js
|  |  └── validate.js
|  └── views    //页面目录
|     ├── components-demo
|     ├── dashboard
|     ├── error-page
|     ├── login
|     └── redirect
├── tree.md
├── vue.config.js   //vue的总配置目录
├── .editorconfig   //定义一些编辑器的通用配置，以免在不同编辑器打开会出现类似中文乱码类问题
├── .env.development    //dev环境的简单配置
├── .env.production    //pro环境的简单配置
├── .eslintignore    //eslint的忽略目录
├── .eslintrc.js    //eslint配置目录
```


## 相关命令
```bash
开发：
使用nrm进行npm的registry源管理：
nrm ls
nrm add zozo http://192.168.5.234:27001/
nrm use zozo

安装依赖（不要使用淘宝镜像）
npm install

启动服务
npm run dev


发布：
# 构建测试环境
npm run build:stage

# 构建生产环境
npm run build:prod
dist目录内为待发布项目文件

预览发布环境效果
npm run preview

预览发布环境效果 + 静态资源分析
npm run preview -- --report

代码格式检查
npm run lint

代码格式检查并自动修复
npm run lint -- --fix

git提交相关：
使用git flow工具进行提交
git flow feature/release/hotfix start/finish/publish/pull name

使用commitizen进行commit信息格式化：
npm run commit

版本更新:
major.minor.patch(不向前兼容的大版本迭代.向前兼容的较大版本迭代.小bug修复)   
更新版本时：npm version minor  
```


## 相关技术点或小组件
1. vue、vuex、vue-router   
2. mock   
3. axios的封装   
4. layout的外壳   
5. permission的封装   
6. .editorconfig在不同编辑器的正常显示   
7. eslint   可以配合husky和lint-staged使用，在git commit时触发检查staged状态的代码的eslint   
8. jsconfig.json vscode的js项目显示定义   
9. postcss  js将css转为AST，插件处理AST   
10. tree-cli的使用   
11. plop  定义组件等模板，命令生成新组件等   
12. normalize.css   该组件重置不同浏览器默认显示样式   
13. husky、lint-staged、commitlint、commitizen：git提交相关规范工具，更新husky的配置需要重新安装husky   
14. git flow   
15. 使用nrm管理npm的registry源   
16. 使用npm-check-updates进行npm依赖更新管理   
17. 使用npm audit检查依赖安全性，使用npm audit fix修复   
18. 默认站点使用cache和cdn，html no-cache   
19. history模式，非该模式中#会影响后台解析，但是需要后台支持   


## 命名规范
1. 常量：全大写，下划线分割单词  
2. 变量：变量使用下划线命名法，单词之间使用下划线连接，前缀一般为形容词  
3. 函数和方法：小驼峰命名法，前缀一般为动词  
4. 类和构造函数：大写式驼峰命名法，所有单词首字母大写  
5. 类的成员：公共属性和方法与普通变量和函数一样；私有属性和方法，前缀为下划线，后面跟变量和函数一样  
6. 注释分单行注释和多行注释、函数注释  
7. import应该放在最顶层，引入的组件名使用大写驼峰命名法  
8. vue中methods：方法命名同函数命名  
9. vue中组件命名大驼峰，且应该为多个单词，html的组件都是单个单词；组件命名前缀为功能归属如page或者创建者tw，父子组件命名需要强相关  
10. vue中组件的props命名同变量  
11. vue中页面的文件名字应该使用中横线连接  
12. vue中class名字使用下划线命名  

```
常用命名动词
get 获取/set 设置,
add 增加/remove 删除
create 创建/destory 移除
start 启动/stop 停止
open 打开/close 关闭,
read 读取/write 写入
load 载入/save 保存,
create 创建/destroy 销毁
begin 开始/end 结束,
backup 备份/restore 恢复
import 导入/export 导出,
split 分割/merge 合并
inject 注入/extract 提取,
attach 附着/detach 脱离
bind 绑定/separate 分离,
view 查看/browse 浏览
edit 编辑/modify 修改,
select 选取/mark 标记
copy 复制/paste 粘贴,
undo 撤销/redo 重做
insert 插入/delete 移除,
add 加入/append 添加
clean 清理/clear 清除,
index 索引/sort 排序
find 查找/search 搜索,
increase 增加/decrease 减少
play 播放/pause 暂停,
launch 启动/run 运行
compile 编译/execute 执行,
debug 调试/trace 跟踪
observe 观察/listen 监听,
build 构建/publish 发布
input 输入/output 输出,
encode 编码/decode 解码
encrypt 加密/decrypt 解密,
compress 压缩/decompress 解压缩
pack 打包/unpack 解包,
parse 解析/emit 生成
connect 连接/disconnect 断开,
send 发送/receive 接收
download 下载/upload 上传,
refresh 刷新/synchronize 同步
update 更新/revert 复原,
lock 锁定/unlock 解锁
check out 签出/check in 签入,
submit 提交/commit 交付
push 推/pull 拉,
expand 展开/collapse 折叠
begin 起始/end 结束,
start 开始/finish 完成
enter 进入/exit 退出,
abort 放弃/quit 离开
obsolete 废弃/depreciate 废旧,
collect 收集/aggregate 聚集
```


## 其他代码规范
注意组件的自洽性，设计合理的数据结构，减少外部依赖


## git小问题
git远程仓库中保存的文件换行符为lf，项目中统一配置.editorconfig文件设置换行符为lf，保持统一，此时对于windows同学，需要将本地的git设置进行调整，取消默认的提交转换crlf为lf，拉取时转换lf为crlf，保持一致,并开启提交时换行符的检查
```shell script
#取消默认的换行符转换
git config --global core.autocrlf false

#开启提交时的换行符检查
git config --global core.safecrlf true
```


## 埋点规范 <a href="https://wiki.zozo.cn/pages/viewpage.action?pageId=11109190">参照</a>
1. 应该包括主动行为和被动行为，目前先上报大部分主动行为，之后补充被动行为。   

2. 对于所有的H5页面默认上报所有的基础事件，对于特殊逻辑需要增加相关性和其他处理；这些基础事件包括：站点访问、页面访问、页面离开、站点离开、用户的点击、滑动（简单的轮播图的滑动，需要补充所有的滑动操作）、无限加载时触发新的请求    

3. 动作的根元素或者事件命名默认规则：页面名-语义名[-次序-ID]  使用spm替代    

4. 需要完善：  
1、为了准确的上报，需要对用户动作的细化做些工作，监听用户的所有动作，并合理上报   
2、所有的事件的spm完善或者其他形式的完善相关元素信息   
3、被动行为的补充   
4、缺少触发下页数据的行为上报   
>>>>>>> fc00e70 (feat(init): init)
