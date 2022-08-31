// given the following array, create a function that returns an array containing
//the IDs of the users which membership has expired

const users = [
  {
    id: 1,
    name: "John",
    lastName: "Jones",
    membershipStatus: "expired",
  },
  {
    id: 2,
    name: "Sergei",
    lastName: "Nikolov",
    membershipStatus: "expired",
  },
  {
    id: 3,
    name: "Mikaela",
    lastName: "Peterson",
    membershipStatus: "paid",
  },
  {
    id: 4,
    name: "John",
    lastName: "Doe",
    membershipStatus: "paid",
  },
  {
    id: 5,
    name: "Steven",
    lastName: "Connor",
    membershipStatus: "expired",
  },
  {
    id: 6,
    name: "Mary",
    lastName: "Smith",
    membershipStatus: "paid",
  },
  {
    id: 7,
    name: "Jefrey",
    lastName: "Williams",
    membershipStatus: "paid",
  },
  {
    id: 8,
    membershipStatus: "paid",
  },
  {
    id: 9,
    name: "John",
    lastName: "Jones",
    membershipStatus: "expired",
  },
  {
    id: 10,
    name: "Sergei",
    lastName: "Nikolov",
    membershipStatus: "paid",
  },
  {
    id: 11,
    name: "Mikaela",
    lastName: "Peterson",
    membershipStatus: "paid",
  },
  {
    id: 12,
    name: "John",
    lastName: "Doe",
    membershipStatus: "paid",
  },
  {
    id: 13,
    name: "Steven",
    lastName: "Connor",
    membershipStatus: "expired",
  },
  {
    id: 14,
    name: "Mary",
    lastName: "Smith",
    membershipStatus: "paid",
  },
  {
    id: 15,
    name: "Jefrey",
    lastName: "Williams",
    membershipStatus: "paid",
  },
  {
    id: 16,
    membershipStatus: "expired",
  },
  {
    id: 17,
    name: "John",
    lastName: "Jones",
    membershipStatus: "paid",
  },
  {
    id: 18,
    name: "Sergei",
    lastName: "Nikolov",
    membershipStatus: "expired",
  },
  {
    id: 19,
    name: "Mikaela",
    lastName: "Peterson",
    membershipStatus: "expired",
  },
  {
    id: 20,
    name: "John",
    lastName: "Doe",
    membershipStatus: "expired",
  },
  {
    id: 21,
    name: "Steven",
    lastName: "Connor",
    membershipStatus: "paid",
  },
  {
    id: 22,
    name: "Mary",
    lastName: "Smith",
    membershipStatus: "paid",
  },
  {
    id: 23,
    name: "Jefrey",
    lastName: "Williams",
    membershipStatus: "paid",
  },
  {
    id: 24,
    membershipStatus: "paid",
  },
  {
    id: 25,
    name: "John",
    lastName: "Jones",
    membershipStatus: "paid",
  },
  {
    id: 26,
    name: "Sergei",
    lastName: "Nikolov",
    membershipStatus: "expired",
  },
  {
    id: 27,
    name: "Mikaela",
    lastName: "Peterson",
    membershipStatus: "paid",
  },
  {
    id: 28,
    name: "John",
    lastName: "Doe",
    membershipStatus: "paid",
  },
  {
    id: 29,
    name: "Steven",
    lastName: "Connor",
    membershipStatus: "expired",
  },
  {
    id: 30,
    name: "Mary",
    lastName: "Smith",
    membershipStatus: "expired",
  },
];

const membership = () => {
  const result = [];
  users.forEach((user) => {
    if (user.membershipStatus === "expired") result.push(user.id);
  });
  //  if(members.membershipStatus === "expired"? members.id : null)

  return result;
};
console.log(membership());



//1.devolver un objeto sin las propiedades con valores nullables
const obj = {
  name: 'John',
  age: 35,
  address: undefined,
  id: '123',
  phoneNumber: '',
  taxId: null,
  isAdmin: false,
  lastName: 'Connor',

}


const newObjet = () => {
  const clone = { }
  for (let key in obj) {
      // console.log(obj[key])
      if(obj[key] ){
          clone[key] = obj[key]

      }    
  }
  return clone
}
console.log(newObjet())