# XDML - shared组件 rollup版本的工程模板

使用了：
    - svelte配合typescript编写组件内容
    - Jest配合svelte-testing-library做测试

## usage

初始化:

```shell
# 安装相关工具
npm i -g degit

# 生成模板
cd shared-xdml/packages
degit https://github.com/jrg-project-templates/shared-xdml-component-rollup [新包名]
```

修改模板:

```shell
# 1.全局搜索 packageName, 并修改成你想命名的包名
# 2.修改[packageName]文件名

# 3.执行依赖安装
lerna bootstrap
# 4.检查package.json里的scripts的路径

# 5. 编写代码

# 6. 单独编译
yarn build

# 7. 单独部署到CDN
yarn deploy

# 8.引用请查看 shared-xdml/index.html的示例
```
