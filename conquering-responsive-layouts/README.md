# My Notes for Kevin Powell's Online Course: "Conquering Responsive Layouts"

- See [here](https://courses.kevinpowell.co/view/courses/conquering-responsive-layouts) for the course.
- He calls it a "drip"-course, because content is spread out over 21 days and you cannot go faster.
- This approach should give you time to practice things, which you absolutely should do!

## How to use `clamp` for responsive design

Author: [RetroApe](https://github.com/RetroApe/meet-landing-page/blob/main/README.md#what-i-learned)

You need:
- Max and min value for clamp
- Beginning and end of those two values, i.e. width of the screen
- Used elementary math to write two equations with two variables and got a nice formula when solving it

`clamp: (C_min, x + y, C_max)`

**W_b** - Width of the screen at the beginning

**W_e** - Width of the screen at the end

The above are known constants which you yourself decide.

Below are variables that need to be solved.

**x** - Value in pixels or `rem`

**y** - Value in `vw`

The two equations we set:

$$x = C_{min} - W_e*y$$

$$x = C_{max} - W_b*y$$

When we solve for **y**, we get:

$$y = \frac{C{max} - C{min}}{W_b - W_e}$$

Now for an example...

Let's suppose we want to have a font size of `2.5rem` at `1440px` and `1rem` at `768px`.

$$C{min} = 1rem$$ 
$$C{max} = 2.5rem$$
$$W_b = 1440px$$
$$W_e = 768px$$

First, we would need the units to be the same, so:

$$W_b = 90rem$$
$$W_e = 48rem$$

When we enter the numbers into an equation:

$$y = \frac{2.5rem - 1rem}{90rem - 48rem}$$
$$y = 0.03571428571428571428571428571429$$
$$y \approx 0.035714$$
$$y \approx 3.5714vw$$

This is your **y**. 

For **x** you enter the numbers into one of the equations. For example:

$$x = 2.5rem - 90rem * 0.03571428571428571428571428571429$$
$$x = -0.714rem$$

When put in `clamp`:

`clamp: (1rem,  -0.714rem + 3.5714vw, 2.5rem)`

Hoping that the calculation is correct.

This way, the font size will smoothly go from its max size at 1440px screen width to its min size at 768px width.

And you can do this with padding and margins as well. Anything really.

Pretty cool!
