class Compiler {
  compile(code: string): void {
    console.log("Compiling...");
    const _code: string[] = code.split("\n").map((line) => line.trim());

    for (let i = 0; i < _code.length; i++) {
      const line: string = _code[i];
      const parametrs: string[] = line.split(" ");

      let outputCode: string = "";

      /*if (parametrs[0] === "print") {
        outputCode = `console.log("${parametrs[1]}")`;
      }*/
    }
  }
}

class Env {
  [key: string]: any;

  set<T>(variable: string, value: T): void {
    this[variable] = value;
  }

  op(operation: string): number | boolean | null {
    try {
      const result: any = eval(operation);
      return result as number | boolean;
    } catch (error) {
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
