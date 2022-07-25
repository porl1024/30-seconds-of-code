function proclaim(status = 'not ready...', repeat = 1) {
    for (let i = 0; i < repeat; i += 1) {
      console.log(`I'm sure that I am ${status }`);
    }
  }
  
  proclaim();
  proclaim('ready?');
  proclaim('ready!', 4);