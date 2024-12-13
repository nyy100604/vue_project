before 中只包含后台代码，前端需要自己实现

后台运行方式：
```bash
cd backend
yarn develop
```

如遇到后台项目不能启动，可以先删除 `node_modules` 目录，然后运行 `yarn install` 重新安装，确保安装过程中没出现网络错误。

前端运行方式：
```bash
cd frontend
yarn dev
```

后台管理地址：
http://localhost:1337

前端地址：
http://localhost:3000

后台管理用户/密码
admin@test.com/Abc-123456

示例用户/密码
abcdef@test.com/123456