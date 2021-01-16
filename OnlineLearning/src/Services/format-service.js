export const formatRating = (oldStr)=>{
        //convert to string
        oldStr = oldStr + "";

        let newStr = "";

        if(oldStr.length === 1)
          newStr = oldStr+".00";
        else if(oldStr.length === 3)
          newStr = oldStr+"0";
        else if(oldStr.length > 4)
          newStr = oldStr.slice(0,4);
        return newStr;
}