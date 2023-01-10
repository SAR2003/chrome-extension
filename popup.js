let p1=fetch("https://kontests.net/api/v1/codeforces");

let totalContests;
p1.then((response)=>{

     console.log(response.status);
     return response.json();
}).then((data)=>{

    //  const date= new Date();
    //  const currentTime=date.getTime()/1000;

     totalContests=data;
     console.log(totalContests)
    
    //  const  upComingContest=data.result.filter(c=>{

    //     return currentTime<=c.startTimeSeconds;
    //  })
    //  console.log(upComingContest);




});


let p2=fetch("https://kontests.net/api/v1/leet_code");


p2.then((response)=>{
    return response.json();
}).then((data)=>{
   console.log(data);
   console.log(totalContests);
   totalContests= totalContests.concat(data);
   console.log(totalContests);
   
});

console.log(totalContests);



if(totalContests ===undefined)
{
    
}
else
{
    console.log(totalContests);
    totalContests.sort((a,b)=>{

        return a.start_time<=b.start_time;
    });
}


console.log(totalContests);








