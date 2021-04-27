### TIPS:
- 使用组件化开发的时候，在导出组件时，可以在组件根目录
如`components`文件夹下创建一个统一的index.ts文件，再该文件中
统一进行导出，这样在引用的时候会方便许多，

#### 使用react-router
- 使用Route进行路由导航的时候，如果希望精确匹配数据
那么需要加上属性`exact`；如果没有该属性的话，那么当访问的url与
当前的url部分匹配的话，两个组件都会渲染。
例如：访问/login；那么不仅渲染/login,还会渲染
'/'。
- 对于使用RESTFUL风格定义的路由，在Route中定义组件时，
其属性path的设置比较特殊。例如：
```
    <Route path="/detail/:touristRouteId" component={DetailPage}/>
```
对于``:touristRouteId``,它必须与组件定义的类名一致

- 对于没有被Route直接渲染的组件，如果相想要使用history、location、match等方法，
那么需要使用withRouter来对该组件进行包裹。（withRouter就是一个高阶组件，
通过在内部进行参数的传递，使得非路由组件也能使用路由）

- 非路由组件希望使用路由方法，第二种方式是使用hooks。即
```
    useHistory、useLocation、useParams、useRouteMatch
```
