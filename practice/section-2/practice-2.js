'use strict';
function countSameElements(collection) {
  var collection2 = [];
  for(var i = 0; i< collection.length; i ++)
  {
    if(collection[i].length!==1)
    {
      var arr = collection[i].split('-');
      for(var j = 0;j<arr[1];j++)
      {
        collection2.push(arr[0]);
      }
    }
    else {
      collection2.push(collection[i]);
    }
  }
  return test1(collection2);
}

function check(element,result) {
  for(var i = 0;i<result.length;i++)
  {
    if (element == result[i].key)
    {
      return 1;
    }
  }
  return 0;
}
function find(element,result) {
  for(var i = 0;i<result.length;i++)
  {
    if (element == result[i].key)
    {
      return i;
    }
  }

}
function test1(collection) {
  var result = [];
  for(var i = 0; i< collection.length; i ++)
  {
    if(!check(collection[i],result))
    {
      result.push({key:collection[i],count:1});
    }
    else {
      result[find(collection[i],result)].count++;
    }
  }
  return result;

}
