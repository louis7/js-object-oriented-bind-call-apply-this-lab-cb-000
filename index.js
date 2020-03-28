//Your code here
funtion justInvoke (fn){
  return fn();
}

funtion setThisWithCall (fn, thisValue, argument){
  return fn.call(thisValue, argument);
}

funtion setThisWithApply (fn, thisValue, argument){
  return fn.apply(thisValue, ourArguments);

}

funtion returnNewFunctionOf(functionToBeCopied, thisValue){
  const copy = functionToBeCopied.bind(thisValue);
  return copy;
}
