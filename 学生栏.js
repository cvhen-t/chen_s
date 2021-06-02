        // 默认界面：
        let defuse = {
            yenum: {
                yeshu: 100,
                page: 30,
            },
            textinfo: {
                first: "首页",
                prev: "上一页",
                pagers: "",
                next: "下一页",
                last: "最后一页",
            }
        }




        //构造对象函数

        function zreofun(daohang, options,comebakll) {
            this.root = daohang;
            this.options = options || defuse;
            this.boxjanting = {};
            this.comebakll = comebakll 
            this.init();
           


        }
        /* 初始化 */

        zreofun.prototype.init = function () {
            this.setStyle(this.root, "display: flex; justify-content: center; align-items: center;");
            this.writedaohang();
            this.buju();
            this.jiantingf();
         
            this.comebakll()
           
        }


        //创建input 首页等等
        zreofun.prototype.writedaohang = function () {
            console.log('writedaohang')
            this.root.innerHTML = '' //这里的this是指usesfun的root的属性。清空标签
    console.log('  this.root',  this.root)
            for (const keyvalue in this.options.textinfo) {
                // console.log(keyvalue)
                const div = document.createElement('div')
                this.setStyle(div, " background-color: rgb(201, 204, 104)")
                div.innerText = this.options.textinfo[keyvalue];
                this.setStyle(div, "border: 1px solid rgb(51, 51, 51); padding: 0px 5px; margin: 0px 5px; background-color: rgb(204, 204, 204); font-size: 14px;")
                if (keyvalue === 'pagers') {
                    this.pagers = div;
                    this.setStyle(div, "display: flex; justify-content: center; align-items: center; font-size: 14px;");
                    // div.innerText = ('123')
                }
                this.root.appendChild(div)

                this.boxjanting[keyvalue] = div;
            }


            //创建input
            this.ipu = document.createElement('input')

            this.root.appendChild(this.ipu)
            this.setStyle(this.ipu, "outline: none; width: 50px; height: 20px; ")
            this.ipu.setAttribute("type", "number")

            //创建按钮
            const btn = document.createElement('button')
            this.root.appendChild(btn)
            this.setStyle(btn, "outline: none; width: 50px; height: 24px; margin-left: 5px;")
            btn.innerText = ('跳转')
            this.boxjanting["跳转"] = btn;
        }


        //创建布局


        zreofun.prototype.buju = function () {
            console.log('buju')
            const zethis = this
            const bujufun = function (...e) {



                e.forEach(function (arr) {


                    const sp = document.createElement("span");
                    if (arr.length === 0) {

                        sp.innerText = ("...")

                        zethis.pagers.appendChild(sp);
                    } else {
                        for (let i = arr[0]; i <= arr[1]; i++) {
                            const p = document.createElement("p");
                            p.innerText = i;
                            if (i === zethis.options.yenum.page) {
                                zethis.setStyle(
                                    p,
                                    "border: 1px solid rgb(51, 51, 51); margin: 0px 5px; padding: 0px 5px; background-color: orange;"
                                );
                            } else {
                                zethis.setStyle(
                                    p,
                                    "border: 1px solid rgb(51, 51, 51); margin: 0px 5px; padding: 0px 5px;"
                                );
                            }
                            zethis.pagers.appendChild(p);
                        }
                    }
                });
            };

            if (this.options.yenum.page <= 5 ||
                this.options.yenum.page >= this.options.yenum.yeshu - 4) {

                bujufun(
                    [1, 5],
                    [],
                    [this.options.yenum.yeshu - 4, this.options.yenum.yeshu]
                )


            } else {
                bujufun(
                    [1, 2],
                    [],
                    [this.options.yenum.page - 2, this.options.yenum.page + 2],
                    [],
                    [this.options.yenum.yeshu - 1, this.options.yenum.yeshu]

                )
            }


        }


        //jinting事件
        zreofun.prototype.jiantingf = function () {
            let pagecopy = 0
            const boxthis = this
           
            for (const key in this.boxjanting) {
             console.log( key)
                boxthis.boxjanting[key].onclick = function (e) {

                    


                    if(boxthis.boxjanting[key].innerText==='首页'){
                        boxthis.options.yenum.page = 0
                        pagecopy = 1
                        console.log(boxthis.options.yenum.page)
                                           
                    }//分割
                    if(boxthis.boxjanting[key].innerText==='下一页'){
                        console.log(1)
                    
                        pagecopy =  pagecopy = boxthis.options.yenum.page+1
                                           
                    }//分割
                    if(boxthis.boxjanting[key].innerText==='上一页'){
                        console.log(1)
                        pagecopy = boxthis.options.yenum.page-1
                                           
                    }//分割
                    if(boxthis.boxjanting[key].innerText==='最后一页'){
                        console.log('123')
                        pagecopy = 100
                                           
                    }//分割

                    if(key==='pagers'&&e.target.nodeName=='P'){
                       
                        pagecopy =  Number(e.target.innerText);
                                           
                    }//分割
                    if(key==='跳转'){

                        pagecopy =  boxthis.ipu.value*1
                                           
                    }//分割

                    if (pagecopy !== boxthis.options.yenum.page) {
                        boxthis.options.yenum.page= pagecopy;
                        console.log(tbaby);
                      
                        boxthis.init();
                       
                    }

                }

            }//forin


        }

        /* 给元素设置样式 */
        zreofun.prototype.setStyle = function (element, css) {
            element.style = css
        }




        // var a = [
        //     [1, 2],
        //     [1, 3, 5],
        //     [1, 6]
        // ]
        // a.forEach(function (e) {
        //     console.log(e.length)
        // })