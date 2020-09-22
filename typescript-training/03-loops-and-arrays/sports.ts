let sportsOne : string[] = ["Golf", "Cricket" , "Tennis" , "Swimming"];

console.log("----------------------------------------------------");
for (let tempsSport of sportsOne){
    if (tempsSport == "Cricket") {
        console.log(tempsSport + "<< Favorite Sport");
    }
        else
    console.log(tempsSport);
}