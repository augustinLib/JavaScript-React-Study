## Array

- Destructing Assignment
```
const object = [{ name : 'Lion' }, { name : 'Tiger' }, { name : 'Bear' }];

console.log(object); // [ { name: 'Lion' }, { name: 'Tiger' }, { name: 'Bear' } ]
console.log(object[0]); // { name: 'Lion' }
console.log(object[0].name); // Lion
console.log(object[1].name); // Tiger
```
```
object.forEach((item, index) => {
  console.log(item, index);
});
```
```
object.length; // 3
```
```
object.push({ name : 'Elephant' });
```

## Loop
- for
```
for (let i = 0; i < 10, i++) {
    console.log(i)
};
```
- for and an array
```
const name = ['dog', 'cat', 'bird'];

for (let i = 0; i < name.length; i++) {
    console.log(name[i]);
};
```

- while
```
let i = 0;
while (i < 10) {
    console.log(i);
    i++;
};
```

- for ... of
```
const name = ['dog', 'cat', 'bird'];
for (let item of name) {
    console.log(item);
};
```
- for ... in : to iterate through the properties of an object
```
const object = {name : 'kevin', age : 30, city : 'seoul'};

for (let prop in object) {
    console.log(`prop : ${prop}, value : ${object[prop]}`);
};
```
- break and continue
```
for (let i = 0; i < 10; i++) {
    if (i === 2) {
        console.log('STOP!');
        continue;
    }
    if (i === 5) {
        break;
    }
    console.log(i);
};
```
```
for (let i = 0; i < 10; i++) {
    if (i == 2) {
        console.log('STOP!');
        continue;
    }
    if (i == 5) {
        break;
    }
    console.log(i);
};
```
- **forEach**
```
const name = ['dog', 'cat', 'bird'];

for (let i = 0; i < name.length; i++) {
    console.log(name[i]);
};
```
```
name.forEach(mem => {
    console.log(mem);
})
```
