// let a = [
//     "Initializing Hack Tool...",
//     "Connecting to Facebook...",
//     "Connecting to server 1...",
//     "Connection failed. Retrying...",
//     "Connecting to server 2...",
//     "Connected Successfully...",
//     "Username iamdeepak...",
//     "Trying Brute force...",
//     "200k passwords tried...",
//     "Match not found...",
//     "Another 200k passwords tried...",
//     "Match not found...",
//     "Another 200k passwords tried...",
//     "Match not found...",
//     "Another 200k passwords tried...",
//     "Match found...",
//     "Accessing Account...",
//     "Hack Successfully..."
// ];

// const sleep = async(seconds) => {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve(true);
//         }, seconds * 1000);
//     });
// };

// const showHack = async (message) => {
//     await sleep(2);
//     // console.log(message);
//     text.innerHTML = text.innerHTML + message + "<br>"
// };

// (async () => {
//     for (let i = 0; i < a.length; i++) {
//         await showHack(a[i]);
//     }
// })();


let HackerBox = document.getElementsByClassName("side")
let checkBox = document.getElementsByClassName("checkBox")

function allCheck() {
    if (checkBox[2].checked) {
        checkBox[0].checked = true
        checkBox[1].checked = true
    }
}

const genCode = () => {
    let code = ""
    while (code.length < 598) {
        code = code.concat(Math.floor(Math.random() * 2))
    }
    return code;
}
console.log(genCode())

function hack() {
    let targetValue = document.getElementById("target").value
    let message = document.getElementById("messages")
    let text = document.getElementsByClassName("text")

    if (targetValue == "") {
        message.style.display = "none"
        let input = document.querySelector(".input")
        input.classList.add("errror")
        setTimeout(() => {
            input.classList.remove("errror")
        }, 1000);
    }
    else {

        if (checkBox[0].checked == false && checkBox[1].checked == false && checkBox[2].checked == false) {
            checkBox[0].classList.add("errror")
            checkBox[1].classList.add("errror")
            checkBox[2].classList.add("errror")
            setTimeout(() => {
                checkBox[0].classList.remove("errror")
                checkBox[1].classList.remove("errror")
                checkBox[2].classList.remove("errror")
            }, 1000);
        }
        else {

            message.style.display = "block"

            let clear1 = setInterval(() => {
                HackerBox[0].innerHTML = genCode()
            }, 250);
            let clear2 = setInterval(() => {
                HackerBox[1].innerHTML = genCode()
            }, 300);

            const hackApi = async () => {
                for (let i = 0; i < text.length; i++) {
                    text[i].innerHTML = " "
                }


                let p1 = document.createElement("span")
                p1.classList.add("message")
                message.appendChild(p1)
                let sp1 = document.createElement("span")
                sp1.classList.add("message")
                message.appendChild(sp1)

                let p2 = document.createElement("p")
                p2.classList.add("message")
                message.appendChild(p2)

                let p3 = document.createElement("span")
                p3.classList.add("message")
                message.appendChild(p3)
                let sp2 = document.createElement("span")
                sp2.classList.add("message")
                message.appendChild(sp2)

                let one = document.createElement("div")
                one.classList.add("one")

                let p4 = document.createElement("span")
                p4.classList.add("message")
                message.appendChild(one).appendChild(p4)
                p4.style.display = "inherit"
                let sp3 = document.createElement("span")
                sp3.classList.add("message")
                message.appendChild(one).appendChild(sp3)

                let p5 = document.createElement("span")
                p5.classList.add("message")
                message.appendChild(p5)
                let sp4 = document.createElement("span")
                sp4.classList.add("message")
                message.appendChild(sp4)

                let Msg1 = await new Promise((resolve, reject) => {
                    p1.innerHTML = "Hijacking user"
                    p1.classList.add("messageAnime")
                    let counter = 0;
                    let looper = setInterval(function () {
                        counter++
                        sp1.innerHTML += "."
                        if (counter == 4) {
                            sp1.innerHTML = ""
                        }
                        if (counter == 8) {
                            clearInterval(looper)
                            sp1.innerHTML = ""
                        }
                    }, 1000)

                    resolve(1)
                })

                let Msg2 = await new Promise((resolve, reject) => {
                    setTimeout(() => {
                        p2.innerHTML = "user located"
                        p2.classList.add("messageAnime")
                        resolve(1)
                    }, 8000);
                })

                let Msg2a = await new Promise((resolve, reject) => {
                    setTimeout(() => {
                        p2.innerHTML = `username : ${targetValue};`
                        resolve(1)
                    }, 2000);
                })

                let Msg2b = await new Promise((resolve, reject) => {
                    setTimeout(() => {
                        p2.innerHTML += `  password:XXXXXXX ;`
                        resolve(1)
                    }, 500);
                })

                let Msg2c = await new Promise((resolve, reject) => {
                    setTimeout(() => {
                        p2.innerHTML += `  number:+91XXXXXXXXXX;`
                        resolve(1)
                    }, 800);
                })

                let Msg3 = await new Promise((resolve, reject) => {
                    setTimeout(() => {
                        p3.innerHTML = "getting device info"
                        p3.classList.add("messageAnime")

                        let counter = 0;
                        let looper = setInterval(function () {
                            counter++
                            sp2.innerHTML += "."
                            if (counter == 4) {
                                sp2.innerHTML = ""
                            }
                            if (counter == 8) {
                                clearInterval(looper)
                                sp2.innerHTML = ""
                            }
                        }, 1000)

                        resolve(1)
                    }, 1000);
                })
                let checkBox = document.getElementsByClassName("checkBox")

                if (checkBox[0].checked == true) {
                    let Msg4a = await new Promise((resolve, reject) => {
                        setTimeout(() => {
                            p4.innerHTML = "Facebook hacked"
                            resolve(1)
                        }, 8000);
                    })
                }
                if (checkBox[1].checked == true) {
                    let Msg4a = await new Promise((resolve, reject) => {
                        setTimeout(() => {
                            p4.innerHTML = "Instagram hacked"
                            resolve(1)
                        }, 1000);
                    })
                }

                if (checkBox[2].checked == true) {
                    let Msg4a = await new Promise((resolve, reject) => {
                        setTimeout(() => {
                            p4.innerHTML = "Facebook hacked"
                            resolve(1)
                        }, 1000);
                        setTimeout(() => {
                            p4.innerHTML = "Instagram hacked"
                            resolve(1)
                        }, 1000);
                    })
                }

                let Msg4 = await new Promise((resolve, reject) => {
                    setTimeout(() => {
                        p4.innerHTML = "resetting passwords"

                        let counter = 0;
                        let looper = setInterval(function () {
                            counter++
                            sp3.innerHTML += "."
                            if (counter == 4) {
                                sp3.innerHTML = ""
                            }
                            if (counter == 8) {
                                clearInterval(looper)
                                sp3.innerHTML = ""
                            }
                        }, 1000)

                        resolve(1)
                    }, 1000);
                })

                let msg2d = await new Promise((resolve, reject) => {
                    setTimeout(() => {
                        p2.innerHTML = "acess granted to phone"
                        resolve(1)
                    }, 8000);
                })

                let msg2e = await new Promise((resolve, reject) => {
                    setTimeout(() => {
                        p2.innerHTML = "logs generated"
                        resolve(1)
                    }, 1000);
                })

                let Msg5 = await new Promise((resolve, reject) => {
                    setTimeout(() => {
                        p5.innerHTML = "hacking status : pending"
                        p5.classList.add("messageAnime")

                        let counter = 0;
                        let looper = setInterval(function () {
                            counter++
                            sp4.innerHTML += "."
                            if (counter == 4) {
                                sp4.innerHTML = ""
                            }
                            if (counter == 8) {
                                clearInterval(looper)
                                sp4.innerHTML = ""
                            }
                        }, 1000)

                        resolve(1)
                    }, 1000);
                })
                let HackerBox = document.getElementsByClassName("side")
                let Msg5a = await new Promise((resolve, reject) => {
                    setTimeout(() => {
                        p5.innerHTML = "hacking status : hacked! succesfully -_+"
                        resolve(1)
                        clearInterval(clear1)
                        clearInterval(clear2)
                        HackerBox[0].innerHTML = "Hacker Man"
                        HackerBox[1].innerHTML = "Hacker Man"
                    }, 8000);

                })
            }


            hackApi()
        }
    }
}