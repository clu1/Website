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
  subject: "Everyone caught up, so the battleground shifted",
  date: "2026-09-12",
  folder: "Venture",
  body: `
## The accuracy argument is mostly over

For two years, the pitch for a frontier lab was simple: our model is better, so pay us. That's getting harder to say with a straight face.

[Epoch](https://epoch.ai/data-insights/open-closed-eci-gap) tracks how far behind the open models are, and since January they've been about four months back — one minor version, closer to the difference between GPT-5 and GPT-5.5 than to a generation.

Almost all of that progress came out of China, and the names are worth knowing. Moonshot's Kimi K3 landed in July and took first place on Arena's frontend coding leaderboard, where developers vote on which model writes better interface code — the first time an open model has led any coding board outright. Z.ai's GLM-5.2 and DeepSeek's V4 are the workhorses underneath it, with Xiaomi's MiMo and MiniMax filling out the cheap end. On [OpenRouter](https://openrouter.ai/rankings), which routes traffic for thousands of developers, Chinese open models went from a rounding error at the end of 2024 to roughly half of everything on the platform by April.

There is still a gap, and it's worth being specific about. Open models aren't worse at thinking. They're worse at knowing things and better at making things up — ask one for a fact it doesn't have and it's much likelier to invent one than Claude or Gemini would be. So keep a frontier model in the loop for anything where being wrong is expensive. There's no reason to run your document classification there.

One trap worth flagging, because it's new. Open weights are not automatically free anymore. Kimi K3 shipped with a license that lets you download and run it however you like inside your own company, but requires anyone reselling it as a service past $20M in revenue to negotiate terms with Moonshot first. Alibaba and MiniMax are reportedly looking at something similar. If you're buying hosted inference, this is your vendor's problem. If you are the vendor, read it before you price anything.

## So companies started pulling the stack in-house

Once you stop believing the closed model is meaningfully smarter, the bill becomes the whole conversation. And once the bill is the conversation, you want control over the model layer instead of renting it by the token.

This usually doesn't mean buying GPUs, which is the part people get wrong. Running a big open model yourself is almost always more expensive than letting someone else run the same model for you, because their hardware stays busy and yours won't. What it actually means is switching to an open model you can tune on your own data, hosted by a company whose entire job is keeping that hardware full.

That shift is showing up in fundraising. Fireworks raised $1.5B in July at $17.5B, and the detail that matters more than the valuation is that 95% of the tokens it serves come from models customized on a customer's own data. Together raised $800M. [Baseten](https://www.baseten.co) is now valued at $13B.

[Gimlet](https://gimletlabs.ai) is attacking the same cost problem one layer down. Its observation is that a single request isn't one job — the part where the model reads your prompt and the part where it writes the answer stress completely different things about a chip. So Gimlet splits the request and sends each piece to whichever hardware handles it best, mixing GPUs, CPUs and specialized inference chips. Three to ten times the throughput for the same power. The number behind the pitch: most AI hardware sitting in datacenters today is idle 70–85% of the time. They raised $80M in March and $300M more at a $3B valuation in early September.

## My read: these companies aren't staying inference companies

An agent does the same three things over and over. It asks a model what to do, runs the resulting code somewhere, and — in the good version — gets a little better next time because of how that went.

Inference, then execution, then a record of what happened, then learning, then back to inference. Each of those stages has historically belonged to a different vendor.

The inference companies are buying their way into all of them.

Baseten is the clearest example, and the order tells you it wasn't opportunistic. In December it bought Parsed, a startup that takes a record of how an agent performed and uses it to retrain the model — the last stage. Then in September, it bought Blaxel, which runs the secure environments where agent code actually executes — the second stage. Both after raising at $13B. The point of owning both ends is that the record of what the agent did lands in the same place the training job reads from, so improving the model stops being a separate project.

[Modal](https://modal.com) got to the same place by building rather than buying, and it has the more convincing number. When it raised $355M this spring, it disclosed that execution environments alone — just that second stage — already account for more than a third of its revenue.

This is why cheap tokens don't scare them. If you sell tokens, prices falling is a problem. If you sell the loop the tokens run inside, prices falling just frees up your customer's budget for the rest of what you charge for.

One thing that could break this. The appealing version of the story is that these platforms accumulate data from millions of agent runs and get permanently smarter. I don't think that's quite right. Baseten's customers include Abridge, which handles clinical documentation, and Blaxel sells on the promise that customer data stays walled off and stays put. Those customers will not let their records train anything shared. The narrower version still works: you win that business because the data is already sitting on your infrastructure and nobody wants to move it. That's convenience, not a moat.
`
},

{
  subject: "A note on why this site looks like an inbox",
  date: "2026-05-14",
  folder: "Genesis",
  body: `
My inbox is where I stay organized — work and personal both. So this felt like an honest way to show the bits and pieces of how I see the world.
`
},

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
