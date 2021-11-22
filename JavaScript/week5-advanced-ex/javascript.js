function solution(s) {
  const stack = [];
  for (let i = 0; i < s.length; i++) {
    if (isBracket(s[i])) {
      if (isOpening(s[i])) stack.push(s[i]);
      else {
        let open = stack.pop();
        if (!checkIfOpenMatchClose(open, s[i])) return 0;
      }
    }
  }
  return stack.length === 0 ? 1 : 0 ; 
}

function isOpening(s) {
  //returns true or false
  return s === "{" || s === "[" || s === "(" ? true : false;
}

function isBracket(s) {
  // returns true or false
  return s == "{" ||
    s === "[" ||
    s === "(" ||
    s === "}" ||
    s === "]" ||
    s === ")"
    ? true
    : false;
}

function checkIfOpenMatchClose(open, close) {
  if (open === undefined) return false;
  else {
    if (open === "{" && close !== "}") return false;
    else if (open === "[" && close !== "]") return false;
    else if (open === "(" && close !== ")") return false;
    else return true;
  }
}

// let s = "{[()()]}" ;
// let s = "([)()]" ;
// let s = "0K )'s +÷ )( + ()";
// let s = "0K ('s + )( + ())";
let s = "{{{{";
// let s = "{}" ;

console.log(solution(s));
