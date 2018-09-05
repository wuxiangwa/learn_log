let node = {
  type: "Identifier",
  name: "foo"
}, type = "literal", name= 5;
({type, name} = node);
console.log(type, name);
