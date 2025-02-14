class Compiler {
  compile(code: string): void {
    console.log("Compiling...");
    const _code: string[] = code.split("\n").map((line) => line.trim());

    for (let i = 0; i < _code.length; i++) {
      const line: string = _code[i];
      const parametrs: string[] = line.split(" ");

      let outputCode: string = "";

      if (parametrs[0] === "print") {
        outputCode = `console.log("${parametrs[1]}")`;
      }
    }
  }
}

class Env {
  [key: string]: any;

  set<T>(variable: string, value: T): void {
    this[variable] = value;
  }

  /*op(variable: string, ) {}
  
  usage:
  const op = new Op();
  env.op("1 + 1");
  env.op("1 / 1");
  env.op("1 not 1");
  env.op("1 == 1");
  env.op("1 cos 1");
  env.op("1 tan 1");
  */
}

const env = new Env();
env.set("name", "John");
console.log(env.name);
