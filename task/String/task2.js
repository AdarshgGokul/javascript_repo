function replacer(text){
    var new_array = text.split("@");
    console.log(new_array);
    var hidden = "Unknown_user...@" + new_array[1];
    console.log(hidden)
}
replacer("adarsggokul15@gmail.com");