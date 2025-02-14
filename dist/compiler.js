"use strict";
class Compiler {
    compile(code) {
        console.log("Compiling...");
        const _code = code.split("\n").map((line) => line.trim());
        for (let i = 0; i < _code.length; i++) {
            const line = _code[i];
            const parametrs = line.split(" ");
            let outputCode = "";
            if (parametrs[0] === "print") {
                outputCode = `console.log("${parametrs[1]}")`;
            }
        }
    }
}
class Env {
    set(variable, value) {
        this[variable] = value;
    }
}
const env = new Env();
env.set("name", "John");
console.log(env.name);
