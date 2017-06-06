'use strict';

function countSameElements(collection) {
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
