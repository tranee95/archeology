import '../css/index.css';

class main {

    private root : JQuery;

    public log(): void { 
        console.log("log 123");    
        console.log($("#root"));
    };
}

const _main = new main();
_main.log(); 

