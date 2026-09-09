/* ===============================================================
   YOUR WRITING LIVES HERE. This is the only file you ever edit.

   Each note needs four things: subject, date, folder, body.
   Slug, preview, initials and sort order are generated for you.
   A new folder value creates a new folder in the sidebar.

   The body is plain text. Blank line = new paragraph. Also:
     ## Heading        - bullet        > quote
     **bold**          _italic_        [link text](https://...)
     ---               (horizontal rule)
   =============================================================== */

const NOTES = [

{
  subject: "Owning the data is half the battle in physical AI",
  date: "2026-09-09",
  folder: "Bits & Pieces",
  body: `
Physical AI is where the monetization layer ends up, and vertical integration is how you get there.

The training stack borrows its shape from the frontier labs — imitation first, then reinforcement, then careful reward design. What breaks is the input. Text generalizes across tasks because the internet is one enormous corpus of it. Robot data doesn't travel nearly as far: it's action-conditioned, tied to a specific body in a specific room doing a specific job. So collecting it isn't a step toward the product. It is the product.

## Two ways to solve the same problem

**Sunday** collects real data and refuses to teleoperate. Their Skill Capture Glove costs somewhere around $200 to make, against roughly $20,000 for a teleop rig, and they've shipped thousands of them to a distributed network of US households they call Memory Developers. Over 500 homes, on the order of ten million recorded chore episodes, all feeding a model called ACT-1. The robot, Memo, is wheeled rather than bipedal — a deliberate refusal of the humanoid form factor. Fifty households get one in the founding beta.

**Veeda** thinks that whole approach tops out. Sanja Fidler left NVIDIA's Spatial Intelligence Lab in mid-2026 and raised north of $90M from Khosla and Radical on the opposite premise: that embodied intelligence won't emerge from imitation alone, because the real world is too slow, too expensive, and too dangerous to fail in a million times. Their bet is generative world models good enough that a robot can learn by trial and error inside them.

That's the actual argument in physical AI right now, and it's worth stating plainly: is the scarce asset proprietary real-world demonstrations, or a simulator faithful enough that you never needed them?

**World Labs** sits between the two, building spatial reconstructions of real environments. **Generalist** is running at the generalization problem from the model side — its Gen 1.5 hits 59% task success from a single 3-to-12-second human demonstration, no fine-tuning. Figure, Skild, and Dyna are each somewhere on the same map.

## What the capital is saying

Skild closed $1.4B at over $14B in January. Figure sits at $39B on paper from its September 2025 round. Generalist went from $2B to $3B in about ten weeks. Physical Intelligence's confirmed mark is $5.6B, with a reported round above $11B that I'd treat as unpriced until it prints.

None of these companies has meaningful disclosed revenue. Sector-wide, humanoids shipped roughly 13,000 units in 2025 against under $1B in disclosed revenue. Morgan Stanley's $5 trillion-by-2050 number is a scenario, not a forecast, and it assumes adoption doesn't really accelerate until the late 2030s.

> The gap between $39 billion and thirteen thousand units is the whole investment question. You're not underwriting a market. You're underwriting whoever owns the data loop when one shows up.
`
},

{
  subject: "Inference engineering moves to center stage",
  date: "2026-09-09",
  folder: "Bits & Pieces",
  body: `
Pre-training stopped being the differentiator. The value moved to post-training and the last-mile fit between a capable general model and a workload that actually needs to work.

The serving side is the other half. As open-weight models close the accuracy gap, running inference yourself starts to look better than paying closed-model rates — and the gap is now small enough to argue about. Epoch puts the best open-weight models roughly four months behind the closed frontier as of early 2026, about eight points on their composite index. Stanford's AI Index had the top US model's lead over the best Chinese model down to 2.7% in March.

But "the gap" is a composite, and composites hide the shape. Coding has effectively converged — DeepSeek, MiniMax and Xiaomi's MiMo sit within striking distance of the closed flagships on real coding workloads. Reasoning hasn't: closed models still lead by roughly 3 to 8 points on the hard reasoning benchmarks. Which means the honest version of the thesis isn't "open weights win," it's *route by task and stop paying frontier rates for classification.*

## The volume story is already over

Chinese open-weight providers went from under 2% of OpenRouter traffic to more than 45% in about a year. That inversion happened before most of the commentary about it did.

## Two things that complicate the cheap-inference story

**The economics aren't as clean as the rate card.** Per-token prices for a fixed capability level are collapsing — Epoch's median is something like 50x a year, faster since 2024. Yet bills go up, because an agentic task fires ten to twenty calls instead of one and hidden reasoning tokens bill at output rates. Cheaper tokens, larger invoice. Self-hosting only pays if your utilization curve is flat and high; a trillion-parameter MoE still wants A100-class hardware to serve at production speed.

**Open weights aren't automatically free.** Moonshot's K3 license carries a revenue share of up to 30% for inference providers clearing $20M a year. Read the license before modeling the savings.

The useful read isn't that the labs are in trouble. It's that the skill of *serving* — routing, quantization, caching, batching, knowing which 5% of traffic actually needs the frontier — is becoming the thing that separates margin from no margin.
`
},

{
  subject: "A note on why this site looks like an inbox",
  date: "2026-05-14",
  folder: "Genesis",
  body: `
My inbox is where I stay organized — work and personal both. So this felt like an honest way to show the bits and pieces of how I see the world.
`
}

{
  subject: "About Me",
  date: "2026-05-14",
  folder: "Genesis",
  body: `
Hi there! My name is Carolyn and I enjoy reading up on tech news and experimenting with new AI tools.

Outside of work, I'm a big fan of photography (guilty of having over 120k+ photos & counting). My camera is my excuse to wake up before dawn, hike farther than planned, and linger in places most people pass through.

Originally from sunny SoCal, grew up in Beijing, China, then moved to Chicago for school. 
Now based in San Francisco - where I'm fortunate to say hi to Karl the Fog every now and then :')
`
}

];

// Your details — used for the avatar, the byline, and the reply button.
const AUTHOR = {
  name: "Carolyn Lu",
  tagline: "Bits & Pieces",
  email: "ccarolyn.lu@gmail.com",
  links: [
    { label: "LinkedIn", href: "https://linkedin.com/in/carolyn-lu" },
    { label: "Email", href: "mailto:ccarolyn.lu@gmail.com" }
  ]
};
