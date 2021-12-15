import { validateNumber } from "./components/validator";

if (process.argv[2]) console.log(validateNumber(parseInt(process.argv[2], 10)));
else
  console.log(`
    usage: 
      node dist/index 3
      npm start -- 7
`);
