<script>

var guess = "red";
var answer = null;

var answers = [ "red",
"green",
"blue"];

var index = Math.floor(Math.random() * answers.length);

if (guess == answers[index]) {
answer = "Yes! I was thinking " + answers[index];
} else {
answer = "No. I was thinking " + answers[index];
}
alert(answer);

</script>
