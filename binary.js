done.onclick = function binary() {
    let numb = input.value
    let result = parseInt(numb).toString(2)
    console.log(result);

      if(result == 1) {
        holder.innerHTML = `wink`
    } else if (result == 10) {
        holder.innerHTML = `double blink`
    }else if (result == 11) {
        holder.innerHTML = `wink, double blink`
    }else if (result == 100) {
        holder.innerHTML = `close your eyes`
    } else if ((result>100)&&(result<1000)) {
        holder.innerHTML = `wink,double blink,close your eyes`  
    } else if(result == 1000) {
        holder.innerHTML =`jump`
    }else if((result>1000)&&(result<10000)) {
        holder.innerHTML = `wink, double blink,close your eyes,jump`
    }
   
}