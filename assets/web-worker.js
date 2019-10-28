const executeBlockingAction = (loopLimit) => {
  for(let i=0; i<loopLimit; i++) {}
  postMessage('done');
}

onmessage = (event) => {
  const {data} = event;
  executeBlockingAction(data);
}