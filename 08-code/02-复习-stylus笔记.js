/**
 * 
 * 复习stylus的使用
 * 1. 普通的css代码
 * css预处理器:
 * 1.less
 * 2.stylus
 *  注意:
 *  层次关系(选择器和样式代码之间是有缩进,一般缩进推荐使用2个空格,如果使用4个空格,可以,但是层次感太强,不好看)
 * vscode中写html,如果使用stylus,那么需要先通过下面的命令,安装stylus(全局安装)
 * 1. npm install stylus -g  全局安装
 * 如果stylus文件和当前的要产生的css文件是同一级目录
 * index.styl和index.css在同一个目录中,此时命令该如何如何
 * stylus -w index.styl -o 绝对路径
 * 如果styls文件和当前css目录是同一级目录(index.styl和css目录在同一个目录中,要在css目录中产生一个index.styl文件)
 * stylus -w index.styl -o css
 * 在stylus文件中写样式代码,然后保存,就会自动的在对应的index.css文件中生成对应的代码
 * 
 * 
 * 
 * 
 */

// div
//   width 300px
//     height 200px
//     p
//         color red
// a
//  width 100px