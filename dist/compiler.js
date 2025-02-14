"use strict";
class Compiler {
    compile(code) {
        console.log("Compiling...");
        const _code = code.split("\n").map((line) => line.trim());
        for (let i = 0; i < _code.length; i++) {
            const line = _code[i];
            const parametrs = line.split(" ");
            let outputCode = "";
            /*if (parametrs[0] === "print") {
              outputCode = `console.log("${parametrs[1]}")`;
            }*/
        }
    }
}
class Env {
    set(variable, value) {
        this[variable] = value;
    }
    op(operation) {
        try {
            const result = eval(operation);
            return result;
        }
        catch (error) {
            console.error("Error while performing operation:", error);
            return null;
        }
    }
}
const env = new Env();
env.set("name", "John");
console.log(env.name);
env.set("age", env.op("10+5"));
console.log(env.age);
env.set("isAdult", env.op(env.age + ">=18"));
console.log(env.isAdult);
