class Typed{

    _timeline;

    _blink;
    _printErrors;
    _blinkClasses;
    _blinkSpeed;

    _isWriting;

    constructor(el, options = {}) {
        this.el = el;
        this._timeline = [];


        //Blink - default: true
        this._blink = ('blink' in options) ? options.blink : true;

        //Print Errors - default: false
        this._printErrors = ('printErrors' in options) ? options.printErrors : false;

        //Blink Classes - default: []
        this._blinkClasses = ('blinkClasses' in options) ? options.blinkClasses : [];

        //Blink Speed - default: 600
        this._blinkSpeed = ('blinkSpeed' in options) ? options.blinkSpeed : 600;


        this._isWriting = false;

        this.el.innerText = "";

        return this;
    }


    __startBlink(){
        let span = document.createElement("span");
        for (const cl in this._blinkClasses){
            if(this._blinkClasses.hasOwnProperty(cl)){
                span.classList.add(this._blinkClasses[cl]);
            }
        }
        span.innerText = '|';
        this.el.appendChild(span);

        let interval = setInterval(() => {
            if(this._isWriting === true){
                span.style.opacity = "1";
            }
            else{
                span.style.opacity = (span.style.opacity === "0") ? "1" : "0";
            }
        }, this._blinkSpeed);
    }

    /*
    * str: "Ceci est un texte"
    * style: {color: "red",fontWeight:bold}
    * */

    __type(el, str, style = {}, delay){
        return new Promise((resolve, reject) => {
            let letters = str.split('');
            let counter = 0;

            if(delay < 0){
                reject("The delay cannot be negative");
                return;
            }

            let interval = setInterval(() => {
                this._isWriting = true;
                let element = document.createElement("span");

                //Apply styles
                for (const [key, value] of Object.entries(style)){
                    if(style.hasOwnProperty(key)){
                        element.style[key] = value;
                    }
                }

                //Append SPAN to element
                element.innerText = letters[counter];
                el.appendChild(element);

                //Increment and check the end
                counter++;
                if(counter >= letters.length){
                    this._isWriting = false;
                    resolve();
                    clearInterval(interval);
                }
            },delay);
        })

    }
    type(str, style = {}, delay = 100){
        this._timeline.push("w^" + str + "///" + JSON.stringify(style) + "///" + delay);

        return this;
    }


    /*
    * delay: Integer (milliseconds)
    * */
    __pause(delay){
        return new Promise(resolve => setTimeout(resolve, delay));
    }
    pause(delay){
        this._timeline.push("p^" + delay);

        return this;
    }


    /*
    * length: Integer
    * delay: Integer (milliseconds)
    * */
    __delete(el, length, delay){
        return new Promise((resolve) => {
            let counter = 0;
            let interval = setInterval(() => {
                this._isWriting = true;

                //Remove last char
                el.removeChild(el.lastChild);

                //Increment and check the end of the loop
                counter++;
                if(counter > length){
                    this._isWriting = false;
                    resolve();
                    clearInterval(interval);
                }
            }, delay);
        })
    }
    delete(length, delay = 100){
        this._timeline.push("d^" + length + "/" + delay);

        return this;
    }



    _start(){
        return new Promise((resolve) => {
            setTimeout(async () => {
                let span = document.createElement("span");
                this.el.appendChild(span);

                if(this._blink){
                    this.__startBlink();
                }

                for (const instruction in this._timeline){
                    if(this._timeline.hasOwnProperty(instruction)){
                        const action = this._timeline[instruction].split('^')[0];
                        const value = this._timeline[instruction].split('^')[1];

                        //Write
                        if(action === "w"){
                            const values = value.split('///');
                            const str = values[0];
                            const style = JSON.parse(values[1]);
                            const delay = values[2];

                            try{
                                await this.__type(span, str, style, delay);
                            }
                            catch(e){
                                (this._printErrors) ? console.log(e) : '';
                                throw e;
                            }
                        }

                        //Pause
                        else if(action === "p"){
                            await this.__pause(value);
                        }

                        //Delete
                        else if(action === "d"){
                            const values = value.split('/');
                            const val = values[0];
                            const delay = values[1];

                            await this.__delete(span, val, delay);
                        }
                    }
                }

                resolve();
            }, 1)
        })
    }

    run(callback){
        if(callback != null){
            this._start().then(() => callback());
        }
        else{
            this._start();
        }
    }

}