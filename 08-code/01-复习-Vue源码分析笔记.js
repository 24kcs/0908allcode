/**
 * 
 * Vue的源码
 * 数据代理:
 * 创建Vue的实例的时候,获取到配置对象中data对象,遍历data对象中的所有的属性,通过Object.defineproperty()为vm实例对象添加data中所有的属性,代理者:vm,被代理者:data
 * 
 * 模版解析之表达式:(模版解析之指令(事件指令和一般指令))
 * 创建Vue的实例的时候,通过Compile的对象,保存data中的数据,然后通过配置对象中的el获取到页面的容器对象,如果没有el则把body作为模版容器,创建文档碎片对象,遍历容器对象中所有的子节点,把所有的子节点全部添加到文档碎片对象中,初始化,把文档碎片对象中所有的节点全部进行遍历,分别判断当前的节点是标签还是文本,
 * 如果是文本(还需要判断当前的文本是否和插值的正则匹配),如果匹配则最终调用bind方法,内部需要调用updater对象中的相关方法,进行标签中相关的内容的替换(需要获取vm实例对象及当前这个要替换的表达式的属性的值)
 * 如果是标签,则遍历该标签所有的属性,判断该属性是不是指令,在判断指令是事件指令还是普通指令
 * 如果是事件指令,干掉v-开头,再干掉:,剩下的是事件的名字及表达式(该事件对应的回调函数),通过这个表达式去vm中的methods中这个方法的代码,然后通过addEventListener方法,为当前的节点绑定事件
 * 如果是普通指令,找对应的CompileUtil中的相关的方法,最终执行的是updater对象中相关的方法,然后进行替换操作
 * 无论是普通指令还是事件指令,最终都要把标签上的相关属性删除
 * 
 * 劫持和监视:
 * 在Vue实例进行初始化的时候,在编译模版之前,要通过observe函数进行劫持,在该函数内部,如果传入的数据是对象,则创建Observer的实例对象,并保存data中的数据,把data中的所有的属性进行遍历,在遍历的过程中创建dep对象(id,subs数组--->为了存储watcher对象(建立关系)),再通过Object.defineProperty()方法把所有的属性重新的添加到data中,重写get和set方法,最终,劫持的结果,每个属性对应一个dep
 * 开始初始化,所有的表达式,在初始化的过程中都会直接或者间接的调用bind方法,bind方法内部会创建Watcher的而实例对象,每次创建对象的时候,都会在内部创建一个新的属性(也是对象)depIds(用来存储dep的id值及对应的这个dep对象(建立关系)),由于是初始化表达式(需要把html中用到的表达式的值在界面显示后,显示出来),所以,都会读取vm中data中的相关属性的值,就会进入vm的data属性的get方法中,一旦进入这个get方法就会自动的进入Observer的实例对象的data中的重写的get中,此时开始要建立关系了,把当前的dep添加到watcher中,watcher就会添加到对应的dep中,此时建立关系,初始化完毕后,每个表达式会对应一个watcher
 * dep和watcher的关系:
 * 1个dep对应一个watcher:data中的属性有一个,html模版中也只有一个表达式(该属性只用一次)
 * 1个dep对应多个watcher:data中的属性有一个,html模版中有多个表达式
 * 多个dep对应一个watcher:data中的属性有多个,html模版中有一个表达式
 * 多个dep对应多个watcher:data中的属性有多个,html模版中有多个表达式
 * data中的属性:car:{color:{'red','green'}},出现多个dep,如果表达式中:car.color:(出现多个watcher)
 * 如果界面中修改了data中的数据:
 * 直接进入到vm的data中属性的set方法内部,就会自动的进入Observer中的data中的属性的set方法内部,然后找到对应的dep对象,调用dep的subs数组(该数组中存储了对应的watcher)进行遍历,通知对应的watcher进行更新,最终watcher对象中会调用Compile中的updater对象中的相关方法进行调用
 * 
 * 
 * 
 * 
 * 
 * 双向数据绑定:
 * 在模版初始化的时候,找到这个表单节点,遍历所有的属性,判断该属性是不是指令,是不是普通指令,之后再判断该指令是不是model指令,找model指令后面的方法的回调这个表达式,通过addEventListener方法为表单元素绑定input事件,回调一旦触发,就会修改data中的属性的值,然后后面发生的事情和上面修改data中的数据的流程是一样
 * 
 * 
 * 
 * 
 * 
 */