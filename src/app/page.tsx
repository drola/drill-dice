import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import RollTheDice from "./RollTheDice";

const card = (
  <>
    <CardContent>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        Word of the Day
      </Typography>
      <Typography variant="h5" component="div">
        practice
      </Typography>
      <Typography sx={{ mb: 1.5 }} color="text.secondary">
        noun
      </Typography>
      <Typography variant="body2">
        Practice is the act of rehearsing a behaviour repeatedly, to help learn
        and eventually master a skill. The word derives from the Greek
        "πρακτική" (praktike), feminine of "πρακτικός" (praktikos), "fit for or
        concerned with action, practical", and that from the verb "πράσσω"
        (prasso), "to achieve, bring about, effect, accomplish".
      </Typography>
    </CardContent>
    <CardActions>
      <Button
        size="small"
        href="https://en.wikipedia.org/wiki/Practice_(learning_method)"
        target="_blank"
      >
        Learn More
      </Button>
    </CardActions>
  </>
);

export default function HomePage() {
  return (
    <>
      <Typography variant="h4">Let's use warmup for learning</Typography>
      <Typography paragraph></Typography>
      <Typography paragraph>
        In front out you is an app, than can help you warm-up for your climbing
        effectively by suggesting a random drill.
      </Typography>
      <Typography paragraph>
        Roll the dice to discover how you'll improve your movement on the wall
        today!
      </Typography>
      {/* <Card variant="elevation">{card}</Card> */}
      <RollTheDice />
    </>
  );
}
