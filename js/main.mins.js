/*
 *--------------字符串命名说明--------------------
 * introduce = 介绍
 * sty1 ==the first  style   第一种样式
 * trs1 = the first transition language   第一组过渡语
 * lingtheight == gramm lightheight     高亮语法
 * scrollRight == 源码版向右移动
 * drawBoard ==画板，用于盛放简历内容
 * resume == 简历内容
 * str == 总的拼接字符串
 *
 */
/* 字符拼接区 */
var introduce = '\n  \/*Please call me 明哥*\/\n  \/*毕业于：香港公开大学*\/\n  \/*擅长寓教于乐教学模式,教学箴言有教无类*\/\n  \/*先来点CSS，加点基本样式......*\/';
var sty1 = '\n   body{\n    transition: all 1s;\n    background:#3f5263;\n     }\n    #sourceBoard{\n    font-family:"微软雅黑";\n    overflow:auto;\n    border:3px solid black;\n    border-radius:5px;\n    width:45.1%;\n    height:400px;\n    font-size:14px;\n    font-weight:900;\n  }';
var trs1 = '\n  \/*似乎有点单调，那就让语法高亮吧*\/ ';
var lightheight = '\n  #sourceBoard{\n   background:#ffffcc\n  }\n    .token.property{\n   color:#905;\n   }\n   .token.comment{\n     color:#cc3300;\n}\n    .token.selector{\n    color:#690;\n     }\n  ';
var trs2 = '  \/*OK，我需要准备一下履历。先将刚才写的样式放到旁边去*\/';
var scrollRight = '\n  #sourceBoard{\n    -webkit-transform: rotateY(10deg);\n    -moz-transform: rotateX(10deg);\n     position:relative;\n    left:52%; } \n    \/*OK,Start*\/\n  ';
var drawBoard = '#drawBoard{\n  color:#fff;\n  float:left;\n  position:relative;\n  top:-440px;\n  width:48.5%;\n  height:600px;\n  border:5px solid black;\n   border-radius:5px;\n  overflow:auto;\n  }';
var resume = '\n  # <center>个人履历</center>\n ----------------------------------------------\n  ## 行业经验:移动互联网出行 ## \n  ----------------------------------------------\n  ### 现任职:前端全栈讲师 \n  曾任职于舟山智慧城市,风行网,等大型软件公司担任Android高级开发工程师\n  与技术顾问北大青鸟,中公教育,东软睿道等大型培训中心担任Java、Android、\n  前端等课程金牌讲师,荣获企业与国内众多大学外聘优秀教师与企业金牌导师称号!\n  具有六年开发经验与授课经验,参与并主持多个大型项目研发对移动互联网出行行业有较深的经验 \n  \n 个人成就(只展示部分)：\n 1.北京大学优秀外聘教师 \n 2.广西大学优秀外聘教师 \n 3.山东大学优秀外聘教师 \n 4.扬州大学优秀外聘教师\n 5.山西大学优秀外聘教师\n 6.太原理工大学优秀外聘教师\n 7.上海海洋大学优秀外聘教师\n 8.南京信息工程大学外聘教师 \n \n ###  \n----------------------------------------------\n  ### 擅长技术 ### \n----------------------------------------------\n 1. Android/PHP/Java/JavaScript/HTML5/CSS3/SQL/小程序 \n 2. MyBatis/SpringBoot/AspectJ/RESTful/Spring/SpringMVC \n 3. jQuery/Vue.js/React.js/Node.js/Sass/less \n 4. stylus/Bootstrap/Linux/Tomcat/MySQL \n 5. Gradle/Maven/SVN/Git/AS/IDEA/WebStorm/Atom \n \n  ### 联系方式\n \n  ----------------------------------------------\n  1. 邮箱：[latentl@126.com] \n  2. 博客：[https://blog.csdn.net/weixin_40845165]\n    ';
var trs3 = '\n  \/*好像少了点什么，本履历是markdown语法，应该改成html才看着舒服。\n  *接下来·嗯\n  *倒数3个数字\n  *3......\n  *2......\n  *1......\n  *Come on baby，Thanks */';
var str = introduce.concat(sty1).concat(trs1).concat(lightheight).concat(trs2).concat(scrollRight).concat(drawBoard).concat(resume).concat(trs3);
var styleTag = document.getElementById('styleTag');
var sourceBoard = document.getElementById('sourceBoard');
var n = 0;
var controller = setInterval(put, 50);

function put() {
    n += 1;
    if (n > 0 && n <= 929) {
        sourceBoard.innerHTML = str.substring(0, n);
        styleTag.innerHTML = str.substring(0, n)
    }
    if (n >= 380) {
        $('#sourceBoard').animate({scrollTop: 1000}, 50)
    }
    if (n >= 465 && n <= 929) {
        sourceBoard.innerHTML = Prism.highlight(str.substring(0, n), Prism.languages.css)
    }
    if (n >= 672 && n <= 929) {
        if (document.getElementById('drawBoard')) {
            console.log('drawBoard元素已经存在')
        } else {
            var drawBoard = document.createElement('pre');
            drawBoard.id = 'drawBoard';
            document.body.appendChild(drawBoard)
        }
    }
    if (n > 929 && n < 1885) {
        var drawBoard = document.getElementById('drawBoard');
        drawBoard.innerHTML = str.substring(929, n);
        $('#drawBoard').animate({scrollTop: 1000}, 50)
    }
    if (n >= 1885) {
        sourceBoard.innerHTML = Prism.highlight(str.substring(0, 929), Prism.languages.css) + Prism.highlight(str.substring(1883, n), Prism.languages.css)
    }
    if (n >= 1977) {
        var drawBoard = document.getElementById('drawBoard');
        drawBoard.innerHTML = marked(str.substring(929, 1885));
        if (n > str.length) {
            window.clearInterval(controller)
        }
    }
    console.log(n)
};
