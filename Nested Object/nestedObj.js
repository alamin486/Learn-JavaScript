const user = {
    id: 486,
    name: "Alamin",
    age: 21,
    education: {
        degree: "Master",
    }
}

const { education: { degree:x } } = user;
console.log(x)