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
- 实现一个简单的Link组件：
```$xslt
interface LinkProps {
    to:string
}
const Link:React.FC<LinkProps> = ({children,to}) =>{
    const history = useHistory()
    return (
        <a href={a} onClick={()=>history.push(to)}/>
    )
}
```
#### redux
- 使用流程：首先创建一个reducer；将reducer当参数传入redux下的createStore方法下，生成一个store
在需要使用store状态的地方引入store。通过store.getState方法可以取得响应的状态；为了能够使得
当前组件能够感知到store中状态的改变，使用store.subscribe()方法来进行订阅。当我们希望改变store中的状态时，
使用store.dispatch方法来通知store进行状态的改变。dispatch方法传入的参数就是action；一般来说，
action有两个参数：1.type：表示希望对state作出的改变；2.payload：表示传入的参数
#### react-redux
1. 在入口函数引入react-redux
2. 使用Provider组件来包裹入口函数
3. connect函数类似于高阶组件，它内部封装了getState、subscribe以及dispatch方法。connect方法调用方式
```react
    connect(mapStateToProps,mapDispatchToProps)(component)
```
connect的第一个参数传入store中的state；第二个参数，传入store中的dispatch；并将它们以props的形式
注入到组件中去
##### 在函数组件中使用react-redux
- 从react-redux中引入hooks，useSelector。使用useSelector可以帮助我们获取到store中的数据
- 使用useDispatch来派发dispatch
