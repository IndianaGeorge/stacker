# Stacker
Visualize your html in 3D

- Stacker is a small trick to visualize the structure of your design using CSS 3D Transforms.
- It's a neat trick, but it won't always work.

# Can I see it in action?
- [yes, here](https://indianageorge.github.io/stacker/index.html)

# When will it *not* work?
- If you have transforms anywhere in your page, they will conflict with Stacker's rules
- If you have set perspective-origin in your page, it might break stacker's 3D effect
- If you already have a class with the name "stacker"
- The Body tag itself is never show in the stack display

# How do I use it in my page?
- Link the stacker.js, link stacker.css
- Choose an element to be the toggle button and set it's id to stacker-toggle.
- If you'd like another kind of toggle, you may write your own javascript instead of the included stacker.js. It should add/remove class "stacker" to the body element.