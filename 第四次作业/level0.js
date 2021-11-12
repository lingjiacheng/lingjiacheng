const person = {
    name: '露露姐姐',
    age: 1000000,
    address: {
      city: 'ChongQing',
      area: 'NanShan'
    },
    title: ['student',{year:2021, title:'GoodStudent'}]
  }
  
  const{name}=person;
  const{age:year}=person;
  const{address:{city}}=person;
  const{address:{area:mountain}}=person;
  const{title:[title1,{title:title2}]}=person;
  const{title3='God'}=person;


  console.log(name) // 露露姐姐
  console.log(year) // 1000000
  console.log(city) // ChongQing
  console.log(mountain) // NanShan
  console.log(title1) // student
  console.log(title2) // GoodStudent
  console.log(title3) // God