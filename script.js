
function generate_pick_arr () {
    var pick_arr = new Array(5);
    var unique_set = new Set();
    var i = 0;
    while (i < pick_arr.length && unique_set.size() < 5){
        var random_number =  Math.floor(Math.random() * 48) + 1;
        if (!unique_set.has(random_number)){
            pick_arr[i] = random_number;
            unique_set.add(random_number);
            i += 1;
        }
    }
    lucky_num = Math.floor(Math.random() * 18) + 1;
    var pick = [pick_arr, lucky_num]
    return pick
}

function num_matches (pick_arr) {
    var count = 0;   
    winning_nums = new Set([12, 15, 24, 35, 48]);
    for (var i = 0; i < pick[0].length; i++) {
        if (winning_nums.has(pick[0][i])){
            count += 1;
        }
    }
    var lucky = false;
    if (pick[1] == 3){
        lucky = true;
    }
    return [count, lucky]
}

function calc_payout (res) {
    var s = "";
    if (res[0] == 5) {
        if (res[1]) {
            s = "<p>You Won: $7,000 a WEEK for LIFE</p>";
        }else{
            s = "<p>Your Winnings: $25,000 a YEAR for LIFE</p>";
        }
    }else if (res[0] == 4) {
        if (res[1]) {
            s = "<p>Your Winnings: $5,000</p>"
        }else{
            s = "<p>Your Winnings: $200</p>"
        }
    }else if (res[0] == 3) {
        if (res[1]) {
            s = "<p>Your Winnings: $150</p>"
        }else{
            s = "<p>Your Winnings: $20</p>"
        }
    } else if (res[0] == 2) {
        if (res[1]) {
            s = "<p>Your Winnings: $25</p>"
        }else{
            s = "<p>Your Winnings: $3</p>"
        }
    }else if (res[0] == 1) {
        if (res[1]) {
            s = "<p>Your Winnings: $6</p>";
        }else{
            s = "<p>Your Winnings: $0</p>";
        }
    } else {
        if (res[1]) {
            s = "<p>Your Winnings: $4</p>";
        }else{
            s = "<p>Your Winnings: $0</p>";
        }
    }
    return s;
}

function display_script() {
    var pick = generate_pick_arr();
    // pick = [[ran, ran, ran, ran, ran], lucky_num]
    // print pick
    document.write("<p>Your pick was: " + pick[0] + ", and your lucky number was: " + pick[1] + "</p>");
    // print sorted pick and lucky ball
    document.write("<p>Your pick sorted was: " + pick.sort((a,b) => a - b) + ", and your lucky number was: " + pick[1] + "</p>");
    // print winning numbers and winning lucky ball
    document.write("<p>The winning numbers are: [12, 15, 24, 35, 48], and the lucky number is: 3</p>");
    var matches = num_matches(pick);
    // matches = [count, luckly]
    
    // print number matches and if lucky ball matched
    document.write("<p>You had " + matches[0] + " matches");
    if (matches[1]){
        document.write("Your lucky number matched!");
    }else{
        document.write("Your lucky number did not match!");
    }
    var payout = calc_payout(matches);
    // print payout
    document.write("payout");
}   