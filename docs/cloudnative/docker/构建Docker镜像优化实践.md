## 构建 Docker 镜像优化实践
![image.png](https://img.hacpai.com/file/2019/10/image-0ab0f4d7.png)


> **基于 Dockerfile 构建**

一个普通的 `Dockerfile` 文件：

```dockerfile
FROM ubuntu

RUN apt update
RUN apt install -y toilet vim
CMD ["toilet", "docker"]
```

### 优化实践

#### 一、为了更有效的利用构建缓存，将更新最频繁的步骤放在最后面

#### 二、避免将全部内容拷贝至镜像中, 至保留需要的内容即可

#### 三、将包管理器的缓存生成与安装包的命令写到一起(同一行)可防止包缓存过期

#### 四、谨慎使用包管理器，不安装非必要的包，注意清理包管理器缓存文件

```dockerfile
RUN apt update && apt install -y --no-install-recommends openjdk-8-jdk
# --no-install-recommends 避免安装推荐的包
```

#### 五、 尽可能选择官方镜像，看实际需求进行最终选择

#### 六、多阶段构建

Docker 19.03 版本新增了一种方法 `buildkit` 。

通过添加环境变量 `DOCKER_BUILDKIT=1` 或者在 Docker 的配置文件 `/etc/docker/daemon.json` 中添加如下配置：

```dockerfile
"features": {  
 "buildkit": true  
}
```

`buildkit` 在多阶段构建时，可进行并行构建，可大大提升了构建效率。