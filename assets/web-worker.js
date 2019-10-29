const executeBlockingAction = (loopLimit) => {
  for(let i=0; i<loopLimit; i++) {}
  self.postMessage('done');
}

self.onmessage = (event) => {
  const {data} = event;
  executeBlockingAction(data);
}