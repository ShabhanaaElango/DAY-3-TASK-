// iteration over json
var resume = {
    firstname: 'shabhanaa',
    lastname: 'Elango',
    dob: 'dd/mm/yyyy',
    address: 'Tvr',
    nationality:'Indian',
    gmail: 'shabhanaa98@gmail.com',
    qualification: ['B.Tech','ME'],
    skills: ['c++','Python', 'Js'],
    interpersonalskills: ['team player','quick learner'],
    projects:[
        {name: 'Explore Big Data', lang:'java'},
        {name: 'online student rooster',lang:'js'}
    ],
}
//for in loop
for (var key in resume){
    console.log(key, resume[key]);
    }

Object.keys(resume).forEach((x)  => console.log(x, resume[x]));

//iteration of an array using for,forin,forEach,forof
//for in
var arr1 =  ['Hi', 'hello', 1, 2 , 'fine'];
for(var  x  in arr1)
{console.log(x, arr1[x]);
}
// forof
for(var  x  of arr1)
{console.log(x);
}
// foreach
arr1.forEach(function(x)
{console.log(x);
})
arr1.forEach(function(y, index)
{console.log(y);
    console.log('index',index, arr1);
})