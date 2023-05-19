function parent(){
    const message = "Hello World";

    function child(){
        alert(message);
    }

    child();
}

parent();

const childFN = parent();
childFN();

export {parent, childFN};