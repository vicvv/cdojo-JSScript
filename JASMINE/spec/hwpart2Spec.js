// Either in the same file or a different file, create a test for a function that returns 
// the largest number in the array.  For example, returnLargest([1,3,10]) should return 10.  
// returnLargest([-2,-5,-10]) should return -2.  Once you write the test, run the test 
// (without writing the full function to make sure that the tests all fail), then 
// complete the function to make sure all the tests pass.

function returnLargest(arr){
    var max = arr[0];
    for (i=0; i < arr.length; i++){
        if (arr[i] > max){
            max = arr[i];
        }
    }
    return max;
}


describe("returnLargest", function() { 
    it("should return -2 when we pass [-2,-5,-10] as an argument", function() { 
        expect(returnLargest([-2,-5,-10])).toEqual(-2); 
    }); 
    it("should return 6 when we pass [1,3,6] as an argument", function() { 
        expect(returnLargest([1,3,6] )).toEqual(6); 
    }); 
    it("should return 10 when we pass [1,3,10] as an argument", function() { 
        expect(returnLargest([1,3,10])).toEqual(10); 
    }); 
});