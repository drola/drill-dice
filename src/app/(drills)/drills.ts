export interface Drill {
  title: string;
  slug: string;
  video?: string;
  text: string;
}

export const drills: Drill[] = [
  {
    title: "Robot",
    slug: "robot",
    video: "https://www.youtube.com/watch?v=MSoKP919jxo&t=36s",
    text: `The goal is to eliminate all momentum from climbing.
Typically, when we release any of the 4 limbs, our hips will fall into some new balanced position. In this drill, anticipate the new position of balance. Unweight the limb before actually releasing it from the wall. You can unweight a limb by making the adjustment in body position while all 4 limbs are still in contact with the holds.`,
  },
  {
    title: "Pogoing Limbs",
    slug: "pogoing-limbs",
    video: "https://www.youtube.com/watch?v=MSoKP919jxo&t=230s",
    text: `Pick one of 4 limbs to be your pogoing limb. This limb will not be allowed to touch any of the holds. But it will be crucial in generating momentum.  Perform a whole climb 4 times, each time with a different pogoing limb. To make a move, perform a big swing with the pogoing limb. This momentum will allow you to move one or more of the remaining 3 limbs into new position.

**Pro tip:** Avoid balancing positions with strength. Instead, quickly transition into new balanced position, for example by switching feet.`,
  },
  {
    title: "Readjustment = Sudden Death",
    slug: "readjustment-is-sudden-death",
    video: "https://www.youtube.com/watch?v=MSoKP919jxo&t=508s",
    text: `The rules are simple. If you readjust your grip on a hold, you've fallen. Once you make contact with a hold, you're not allowed to re-grip into a better position. Neither you're allowed to shift the foot onto a better part of a foothold. Instead, commit to the position you're in, and try to make moves with imperfect gripping positions. This drill will teach you to be comfortable with worse grips.`,
  },
  {
    title: "Max One Foothold",
    slug: "max-one-foothold",
    text: `At any point in the climb, at most one of the feet is allowed to stand on an actual foothold. The other foot has to smear or flag. You're allowed to switch feet during the climb. When switching feet, you're not allowed to simultaneously stand with both on footholds. To switch feet, first move the previous feet away from a foothold. Now both feet are smearing. Afterwards, bring the next foot onto a foothold.`,
  },
  {
    title: "Silent Feet",
    slug: "silent-feet",
    text: `Climb as quietly as possible. Pay attention to your feet placements. Before moving a foot, find a balanced position. Place the foot into new position slowly and precisely. Look at your foot through the whole movement, until it's settled on the new foothold.`,
  },
  {
    title: "Climb Down",
    slug: "climb-down",
    text: `You can supplement any of the other exercises by climbing down. You can climb down without any restrictions. Switch to an easier route or add in some holds if necessary. Climbing down will make your legs used to deeper squat positions. Reversing moves will improve your motor skills.`,
  },
  {
    title: "Finding Rests",
    slug: "finding-rests",
    text: `After each move, stay on holds for a couple of seconds. Try to find a position, that is as relaxed as possible. Preferably with straight arms.`,
  },
];
