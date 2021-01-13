import Ajv, {JSONSchemaType, DefinedError} from "ajv"

const ajv = new Ajv();

const schemas = require('./types.json')
const ValidatorsKey = Object.keys(schemas.definitions)
type a = typeof schemas ;

console.log(ValidatorsKey)

const Validators = ValidatorsKey.reduce((res, key) => {
   const schema = schemas.definitions[key]; 

   console.log(schema)
   let validator = ajv.compile(schema);
   // @ts-ignore
   res[key] = validator
   return res;
}, { 

});



// or, if you did not use type annotation for the schema,
// type parameter can be used to make it type guard:
// const validate = ajv.compile<MyData>(schema)

const data: any = {foo: 10}

// if (validates(data)) {
//   // data is MyData here
//   console.log(data)
// } else {
//    console.log(validate.errors)
// }