
// this function 'function Sum(a,b){}' creates a mathematical addition between two numbers. adding the numebers and returning a result of that mathematical addition 

// create a test 
if (Sum(13,14)!=27)
{
    console.log("Test Failed");
}

if (Sum(8,5)==13)
{
    console.log("Test Passed");
}

if (Sum(9,2)==undefined)
{
    console.log("Test Failed");
}

// Write the code 
function Sum(a,b)
{
    return (a+b)
}


// this function 'function Subtraction(a,b){}'creates a mathematical subtraction between two numbers. adding the numebers and returning a result of the subcraction 

// create a test 
if (Subtraction(14,13)!= 1)
{
    console.log("Test Failed");
}

if (Subtraction(9,9)==0)
{
    console.log("Test Passed");
}

if (Subtraction(3,1)==undefined)
{
    console.log("Test Failed");
}

// Write the code 
function Subtraction(a,b)
{
    return (a-b)
}



// this function 'function Multiplication(a,b){}'creates a mathematical multiplication between two numbers. adding the numebers and returning a result of the multiplication 

// create a test
if (Multiplication(2,4)!= 8)
{
    console.log("Test Failed");
}

if (Multiplication(2,2)==4)
{
    console.log("Test Passed");
}

if (Multiplication(5,3)==undefined)
{
    console.log("Test Failed");
}

// Write the code 
function Multiplication(a,b)
{
    return (a*b)
}


// this function 'function Division(a,b){}' creates a mathematical division between two numbers. adding the numebers and returning a result of the division

// create a test 
if (Division(18,2)!= 9)
{
    console.log("Test Failed");
}

if (Division(9,9)==1)
{
    console.log("Test Passed");
}

if (Division(3,1)==undefined)
{
    console.log("Test Failed");
}
// Write the code
function Division(a,b)
{
    return (a/b)
}
