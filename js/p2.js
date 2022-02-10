let DayEntered = prompt("Enter a day of the week:")
let FollowingDay
switch (DayEntered) {
   case "sun":
      FollowingDay = "mon";
      break;
   case "mon":
      FollowingDay = "tue";
      break;
   case "tue":
      FollowingDay = "wed";
      break;
   case "wed":
      FollowingDay = "thu";
      break;
   case "thu":
      FollowingDay = "fri";
      break;
   case "fri":
      FollowingDay = "sat";
      break;
   case "sat":
      FollowingDay = "sun";
      break;
      defualt:
      console.log("Not a valid day type");
}
console.log(`You entered:${DayEntered}`);
console.log(`The next day is ${FollowingDay}`);