const Student ={
    name:"Edwin",
    age:19,
    course:"Data Science",
    score:50,
    isRegistered:"true",
} 
   //Print Name:
   console.log("name:"+Student.name);

   //Print age:
    console.log("age:"+ Student.age);

    //Print course:
    console.log("course:"+Student.course);

    //Print All details:
    console.log("Student Details:",   Student );


       if(Student.score >=50){
        console.log("Result: passed");
       }else{
          console.log("Result: failed");
       }

    //Creating an Array:Let
    let Students=["Matthew"  ,"Job",  "Maya", "Patel", "Habib"];{
                    
    } 
              
    //Print Array
    console.log("Students:" + Students)

    //Print First and last array
function bringStudentsName(Students){
    console.log("bringStudentsname", Students);
    console.log("First Student:", Students[0]);
    console.log("Last student:", Students[Students.length-1]);

}
       bringStudentsName(Students);


    //Add one student
     Students.push("June");
     console.log(Students);

     //Remove one student
     Students.shift("Matthew");

     //Print updated Array list
     console.log("Updated array:" + Students);

     //loop through all names
     function dispalayEachStudents(Students) {
        Students.forEach(function (Students){
                console.log(Students);
        })
     }
                     
        dispalayEachStudents(Students)

  //Arrays oF objects.
const ClassList = [
    {Name:"Job:",Score:59,},
    
    {Name:"Maya:",Score:44,},

    {Name:"Patel",Score:50,},

    {Name:"Habib:",Score:42,},

    {Name:"June:",Score:35,},
   ];

      //Loop and display objects.
      for(const  Students of ClassList){
        console.log(`Students Name: ${Students.Name}`);
        console.log(`Students Score: ${Students.Score}`);
        
               if(Students.score >= 50) {
                console.log("Result: Passed");
             } else {
                console.log("Result: Failed");
            }

            console.log("===============");
      }

        //Use lower case
         class StudentClass {
            constructor(name, age, course, score) {
                this.name=name; 
                this.age=age;
                this.course=course;
                this.score=score;
            }

            introduce() {
                console.log(`Hello ${this.name} `);
            }
               
           checkResult() {
             if(this.score >=50) {
                console.log("pass");
             } else {
                console.log("fail");
             }



           }
           


    }
     
 const Student1= new StudentClass("Tevin",19,"Data Science",85 );
 const Student2 = new StudentClass("Ronald",23,"Python",35);
 const Student3 = new StudentClass("Maya", 24,"Web Design",50);
 
 
 Student1.introduce();
 Student1.checkResult();
 
Student2.introduce();
Student2.checkResult();


Student3.introduce();
Student3.checkResult();



      
