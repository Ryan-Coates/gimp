/**
 * defaults.js
 *
 * Seed data for a new GIMP campaign.
 *
 * HOW TO CUSTOMISE:
 *  - Each object in `features` becomes a card on the home screen.
 *  - `icon`        — single emoji shown on the card and detail page.
 *  - `name`        — short title (shown on home card).
 *  - `description` — one-liner shown under the name on the home card.
 *  - `content`     — free-text notes shown on the feature detail page.
 *                    Use newlines freely; they are preserved in the UI.
 *  - `randomizers` — array of named random-pick lists.
 *                    Each has a `name` and an `items` array of strings.
 *                    The Randomise button picks one item at random.
 *
 * HOW IDs WORK:
 *  IDs here are stable placeholder strings.  On first load, storage.js
 *  replaces any id equal to "" or a duplicate with crypto.randomUUID(),
 *  so you can safely leave all ids as "" in this file and they will be
 *  generated automatically.
 */

/** @type {import('./storage.js').Feature[]} */
export const DEFAULT_FEATURES = [
  {
    id: "",
    name: "Player Characters",
    icon: "🧑‍🤝‍🧑",
    description: "The party — backstories and key traits.",
    content: `PLAYER CHARACTERS
=================

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
COLIN — Borin Oakenshore
  Player:    Colin
  Race:      Human (raised by dwarves)
  Class:     Barbarian
  Alignment: Chaotic Good
  Starting:  With the group from the beginning

  SUMMARY
    A man caught between two worlds. Raised deep in dwarven culture,
    Borin carries himself with dwarven pride and honour — yet he will
    never truly be one of them. He caused a mine collapse, then held the
    entrance open with his bare strength so every dwarf could escape.
    They gave him his dwarven name for it. Then they banished him for
    causing it. He now travels to make money, but quietly wonders
    whether he can ever earn back what he lost.

  PERSONALITY
    + Fiercely protective of those he travels with — treats companions
      like clan.
    + Honest to a fault. Doesn't know how to lie convincingly.
    + Hard worker. Pulls more than his share without being asked.
    - Loud and blunt in social situations — diplomacy is a foreign land.
    - Desperately wants approval but acts like he doesn't care.
    - Still carries dwarven superstitions and rituals others find odd.

  PERCEIVED FLAWS (how others see him)
    "Reckless." His willingness to take punishment for others looks like
    a death wish from the outside. People assume he's simple because
    he's direct. His dwarven mannerisms in a human body read as strange
    to both races. He never quite fits anywhere.

  PERSONAL CONFLICT
    Banishment without acknowledgement of the sacrifice. He saved them
    all — and they still threw him out. He doesn't talk about it.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SHANE — Lorcan
  Player:    Shane
  Race:      Mountain Dwarf
  Class:     Druid
  Alignment: Lawful Good
  Starting:  Picked up on the road to Hollows Reach
  Resources: 1gp

  SUMMARY
    A veteran soldier in his 40s who has seen too much war and buried
    too many friends. Lorcan wants nothing more than to disappear
    quietly into the world and never fight again — a wish the universe
    keeps refusing to grant. He carries the nature magic of his people
    like a tool he resents needing, and keeps his head down hoping no
    one notices him. They always notice him.

  PERSONALITY
    + Dependable under pressure — when cornered, the coward vanishes
      and something formidable takes over.
    + Dry, crude sense of humour used to deflect everything serious.
    + Respects competence. Will follow capable leadership without ego.
    - Obeys authority he considers just; ignores authority he doesn't.
    - Refuses to admit he is wrong. Ever. About anything.
    - Does not respect people who haven't fought or suffered. Warm up
      to him takes time, and non-warriors start at the bottom.
    - Haunted. Flashbacks, flinching at sounds, dark humour about death.

  PERCEIVED FLAWS (how others see him)
    Grumpy, closed-off, and dismissive. He says the wrong thing
    constantly — not out of malice but because he genuinely can't tell
    what people need to hear. Strangers read his trauma as arrogance.
    He looks like a dwarf who thinks he's better than everyone. He
    actually thinks he's worse than most.

  PERSONAL CONFLICT
    Lost and purposeless. He was a soldier — that identity is gone.
    He doesn't know what he is now, and the open road is just a way
    to avoid answering that question.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
MARTIN — Vortak Kalimba
  Player:    Martin
  Race:      Gnome
  Class:     Cleric (Alchemist)
  Alignment: Neutral Evil (masked as Neutral Good)
  Starting:  In Hollows Reach

  SUMMARY
    Vortak was on the fast track to the top of the church — charming,
    clever, and utterly convinced of his own genius — until the ministry
    discovered he'd been medicating his congregation with alchemical
    compounds. He calls it healing. They called it poisoning. He was
    expelled. Now he wears his faith like armour over a hunger for power
    and a very specific, very personal list of people who will pay.

  PERSONALITY
    + Genuinely skilled alchemist — his concoctions often work, just
      not in the way or timeframe anyone expects.
    + Charismatic and persuasive when he wants to be.
    + Quotes religious scripture confidently and incorrectly. Always.
    - Power hungry. Every decision filters through "how does this
      benefit Vortak?"
    - Suspicious of strangers until they've proven useful.
    - Believes he was right about the drugs. Still believes it.
      Would do it again tomorrow.

  PERCEIVED FLAWS (how others see him)
    A dangerous true believer who has replaced faith with ambition and
    doesn't know the difference. His misquoting of holy texts unsettles
    religious NPCs. His "medicine" is objectively addiction. He's
    helpful right up until he isn't, and the switch is hard to predict.

  SPECIAL EQUIPMENT — "Cure Wounds" (Drug a Brother)
    DM rolls d20 on use.
      10+  → Patient gains advantage on their next attack roll.
      After any short rest → Patient suffers disadvantage on all rolls.
      Disadvantage continues until DM rolls 12+ at each subsequent rest.

  PERSONAL CONFLICT
    Revenge against the church leadership that expelled him. He wants
    reinstatement, recognition, and then to dismantle the people who
    humiliated him from the inside.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
ZANDER — Charmaine 'The Finisher' Periwinkle
  Player:    Zander
  Race:      Human (Noble)
  Class:     Sorcerer (believes he is a Bard)
  Alignment: Chaotic Neutral
  Starting:  With the group
  Item:      A diamond (family heirloom, he considers it pocket change)

  SUMMARY
    Born into absurd wealth, raised on unconditional praise, and armed
    with an ivory recorder carved from behemoth bone that he is certain
    is the source of all his power. It is not. Charmaine is a Sorcerer
    — his magic is entirely innate — but no one has ever managed to
    convince him of this, largely because he stops listening when
    people say things he doesn't want to hear. He calls himself
    "The Finisher." Tavern patrons coined the name to mock his romantic
    shortcomings. He interpreted it as a battlefield title. He kept it.

  PERSONALITY
    + Genuinely fearless — not from courage but from a total inability
      to accurately assess danger.
    + Enthusiastic and charming in a way that occasionally works despite
      everything.
    + Unexpectedly loyal. The party are his "entourage" and he is
      protective of his entourage.
    - No concept of money, rations, carrying things, or consequences.
    - Expects the party to handle logistics while he handles "the art."
    - His recorder playing sounds like an animal in serious distress.
      He cannot hear this.
    - Interrupts serious moments with performance.

  PERCEIVED FLAWS (how others see him)
    Useless. Oblivious. A liability in any situation requiring subtlety,
    restraint, or budgeting. His magic fires when it fires and he takes
    full credit. When it doesn't, he blames the acoustics. The party
    carry him. He considers this natural and correct.

  PERSONAL CONFLICT
    None that he's aware of. Somewhere beneath the performance is a
    person who was never told "no" and has no idea who he actually is —
    but that is not a thought Charmaine has ever had, or intends to.`,
    randomizers: []
  },

  {
    id: "",    name: "Corruption",
    icon: "🧬",
    description: "Corruption mechanic — roll d20 + total corruption.",
    content: `CORRUPTION MECHANIC
===================

Each time a character gains corruption, roll a d20 and add their
current total corruption score to the result. Consult the table below.

HOW IT WORKS
  Roll: d20 + [current corruption total]
  Then make a CON save at the listed DC.
    Success → gain a Boon
    Failure → suffer a Drawback

CORRUPTION TABLE
================

  1–5    DC 10
    ✓ Minor Boon       — +1 to your next roll.
    ✗ Minor Quirk      — Harmless twitch, odd eye flicker.

  6–8    DC 11
    ✓ Clear Mind       — Advantage on your next WIS save.
    ✗ Whisper Trace    — Faint whispers only you can hear.

  9–11   DC 12
    ✓ Hardened Flesh   — +1 max HP permanently.
    ✗ Skin Shift       — Slight discoloration or texture change.

  12–14  DC 13
    ✓ Keen Senses      — +1 to Perception permanently.
    ✗ Flicker Sight    — Pupils change shape; disadvantage on next CHA check.

  15–17  DC 14
    ✓ Eldritch Reflex  — +1 to initiative permanently.
    ✗ Bone Ache        — Joints crack loudly; disadvantage on Stealth.

  18–20  DC 15
    ✓ Psychic Spark    — Once per long rest, add +1d4 to any roll.
    ✗ Vein Glow        — Bioluminescent veins; sheds dim light 5 ft.

  21–23  DC 15
    ✓ Eldritch Resilience — Resistance to psychic damage for 24 hours.
    ✗ Minor Mutation   — Small physical change, no mechanical effect.

  24–26  DC 16
    ✓ Focused Will     — +1 WIS permanently.
    ✗ Unstable Mutation — Minor mutation + disadvantage on WIS saves for 24 hours.

  27–29  DC 16
    ✓ Eldritch Strength — +1 STR permanently.
    ✗ Psychic Echo     — Disadvantage on next WIS save; constant whispers.

  30–32  DC 17
    ✓ Bone Shield      — +1 AC permanently.
    ✗ Bone Spurs       — +1 AC but disadvantage on DEX saves.

  33–35  DC 17
    ✓ Deep Insight     — Once per long rest, cast Detect Thoughts.
    ✗ Mind Slip        — Short-term madness.

  36–38  DC 18
    ✓ Eldritch Gift    — +1 to any ability score (your choice).
    ✗ Flesh Warp       — Visible mutation; gain one boon AND one drawback (DM chooses).

  39–41  DC 18
    ✓ Psychic Surge    — Next attack deals +1d8 psychic damage.
    ✗ Long-term madness; mutation becomes permanent.

  42–44  DC 19
    ✓ Reality Bend     — Once per long rest, teleport 10 ft as a bonus action.
    ✗ Paranoia Mark    — Disadvantage on Insight; you distrust everyone.

  45–47  DC 19
    ✓ Eldritch Evolution — Gain a powerful mutation (DM chooses).
    ✗ Radiant Vulnerability — Vulnerability to radiant; resistance to psychic.

  48–50  DC 20
    ✓ Deep One's Favor — +1 to any two ability checks permanently.
    ✗ Indefinite madness; you hear the Deep One's voice constantly.

  51+    DC 20
    ✓ Ascendant Boon   — Choose one:
        • +2 to any ability score
        • Immunity to psychic damage
        • Blindsight 30 ft
        • Once per long rest, auto-succeed any roll
    ✗ MIND COLLAPSE    — You lose yourself. You become an NPC under DM
        control until the party finds a way to save you.`,
    randomizers: []
  },

  {
    id: "",    name: "Madness",
    icon: "🌀",
    description: "Madness mechanic — types, duration, and effects table.",
    content: `MADNESS MECHANIC
================

TYPES OF MADNESS
  Short       — Lasts 10 minutes.
  Long        — Lasts d4 hours (cleared on short rest).
  Indefinite  — Persists until treated.

WHEN TO REROLL
  Reroll every round of combat, or every significant beat while
  moving through affected areas.

MADNESS TABLE (d20)
===================

  1        Moment of Sanity
             You shake it off. No effect.

  2–5      Shaken
             Disadvantage on your next saving throw.

  6–8      Distracted
             Disadvantage on Perception and Insight until next long rest.

  9–11     Jittery
             Disadvantage on ranged attacks for 1 hour.

  12–13    Compelled
             When you see something unusual, make a DC 12 WIS save
             or move toward it.

  14–15    Echoes
             You hear whispers. Lose your bonus action on your next turn.

  16–17    Panic
             You must move away from the nearest creature on your next turn.

  18–19    Violent Instinct
             You must attack the nearest creature on your next turn
             (melee or ranged, your choice).

  20       Break
             You lose control for 1d4 rounds. The DM chooses your
             actions — but you do not intentionally harm yourself.`,
    randomizers: [
      {
        id: "",
        name: "Madness Roll (d20)",
        items: [
          "1 — Moment of Sanity: You shake it off. No effect.",
          "2 — Shaken: Disadvantage on your next saving throw.",
          "3 — Shaken: Disadvantage on your next saving throw.",
          "4 — Shaken: Disadvantage on your next saving throw.",
          "5 — Shaken: Disadvantage on your next saving throw.",
          "6 — Distracted: Disadvantage on Perception and Insight until next long rest.",
          "7 — Distracted: Disadvantage on Perception and Insight until next long rest.",
          "8 — Distracted: Disadvantage on Perception and Insight until next long rest.",
          "9 — Jittery: Disadvantage on ranged attacks for 1 hour.",
          "10 — Jittery: Disadvantage on ranged attacks for 1 hour.",
          "11 — Jittery: Disadvantage on ranged attacks for 1 hour.",
          "12 — Compelled: See something unusual → DC 12 WIS save or approach it.",
          "13 — Compelled: See something unusual → DC 12 WIS save or approach it.",
          "14 — Echoes: You hear whispers. Lose your bonus action next turn.",
          "15 — Echoes: You hear whispers. Lose your bonus action next turn.",
          "16 — Panic: Must move away from the nearest creature next turn.",
          "17 — Panic: Must move away from the nearest creature next turn.",
          "18 — Violent Instinct: Must attack the nearest creature next turn.",
          "19 — Violent Instinct: Must attack the nearest creature next turn.",
          "20 — BREAK: Lose control for 1d4 rounds. DM controls your actions."
        ]
      }
    ]
  },

  {
    id: "",
    name: "Items & Loot",
    icon: "💰",
    description: "Tiered loot and curse tables for the mine.",
    content: `LOOT & CURSE TIERS
==================

LOOT TIERS
  Tier 1 (d20)  — Common / Mundane / Useful
  Tier 2 (d20)  — Uncommon / Minor Magic / Strange
  Tier 3 (d20)  — Rare / Strong Magic / Aberrant Weirdness
  Tier 4 (d20)  — Very Rare / Dangerous / Wild Aberrant Stuff
  Tier 5 (d20)  — Legendary / Horrifying / Campaign-Changing

CURSE TIERS
  Tier 1 (d20)  — Minor Curses: annoying, creepy, inconvenient
  Tier 2 (d20)  — Moderate Curses: useful but risky, tempting
  Tier 3 (d20)  — Major Curses: real campaign-changing drawbacks
  Tier 4 (d20)  — Severe Curses: powerful and ruinous
  Tier 5 (d20)  — Catastrophic Curses: use sparingly`,
    randomizers: [
      {
        id: "",
        name: "Loot — Tier 1 (Common)",
        items: [
          "A miner's lucky charm (worth 5 gp)",
          "A flask of strong dwarven spirits",
          "A pouch of glowing ore fragments",
          "A cracked gemstone (faint light)",
          "A Warden's whistle (loud, piercing)",
          "A half-burned journal page",
          "A set of reinforced mining gloves",
          "A small vial of cave-moss salve (heals 1 HP)",
          "A rusted but sturdy pickaxe",
          "A pouch of powdered chalk",
          "A lantern that flickers blue near corruption",
          "A miner's badge with a name etched",
          "A coil of rope soaked in mineral oil",
          "A cracked dwarven rune stone (non-magical)",
          "A small bag of gemstones (10 gp)",
          "A flask of purified water",
          "A set of stone-carving tools",
          "A metal flask that stays warm",
          "A carved wooden idol of a dwarven ancestor",
          "A map of the upper mine (incomplete)"
        ]
      },
      {
        id: "",
        name: "Loot — Tier 2 (Uncommon)",
        items: [
          "Vein-Marked Stone — glows faintly when corruption is near",
          "Potion of Stoneflesh — gain +1 AC for 10 minutes",
          "Lantern of Echoes — reveals illusions once per long rest",
          "Pickaxe of the Deep — deals +1 damage to aberrations",
          "Warden's Badge of Authority — advantage on Persuasion with Wardens",
          "Gem-Dust Vial — sprinkle to reveal invisible footprints",
          "Stone-Scribed Scroll — cast Detect Thoughts once",
          "Dwarven Spirit Rune — advantage on one saving throw",
          "Miner's Luck Token — reroll one failed ability check",
          "Cave-Mender Salve — heals 2d4 HP",
          "Glowworm Jar — sheds dim light, whispers faintly",
          "Chime of Warning — rings when aberrations are within 30 ft",
          "Fragment of the Old Seal — hums when near the prison",
          "Warden's Field Kit — advantage on Survival checks underground",
          "Stone-Eater Beetle (harmless pet)",
          "Ore-Infused Band — resistance to acid for 1 hour",
          "Dwarven Compass — always points to the nearest exit",
          "Rune-Etched Bracer — +1 to Strength checks",
          "Bottle of Deep Fog — create 10 ft of heavy mist",
          "Candle of Clear Thought — advantage on next Intelligence check"
        ]
      },
      {
        id: "",
        name: "Loot — Tier 3 (Rare)",
        items: [
          "Aberrant Eye Gem — once per day cast Detect Magic",
          "Stone-Fused Gauntlet — unarmed strikes deal 1d6",
          "Lantern of the Lost — reveals hidden doors",
          "Vein-Linked Charm — resistance to psychic for 1 minute",
          "Dwarven Rune-Hammer Head — attach to a weapon for +1 damage",
          "Echo-Shard — once per day mimic any sound perfectly",
          "Mind-Ward Band — advantage vs charm",
          "Gem of the Deep Breath — breathe underwater for 10 minutes",
          "Stone-Skin Draught — resistance to non-magical damage for 1 round",
          "Corrupted Crystal — cast Chaos Bolt once",
          "Warden Captain's Seal — command lesser Wardens",
          "Ore-Heart Pendant — +1 HP per level while worn",
          "Psychic Residue Vial — cast Dissonant Whispers once",
          "Dwarven Battle Rune — add +2 to one attack roll",
          "Gem-Scribed Shield Plate — attach to shield for +1 AC",
          "Stone-Singing Flute — charm beasts underground",
          "Deep-Glow Crystal — 30 ft bright light, reveals invisible creatures",
          "Mind-Echo Stone — ask one yes/no question (DM answers cryptically)",
          "Aberrant Tendril Whip — finesse, reach, 1d6 psychic",
          "Fragment of the Dreaming Deep — once per day cast Sleep (2nd level)"
        ]
      },
      {
        id: "",
        name: "Loot — Tier 4 (Very Rare)",
        items: [
          "Living Stone Shard — crawls slowly, harmless but unsettling",
          "Vein-Pulse Crystal — once per day cast Fear",
          "Mind-Linked Circlet — telepathy with one creature for 1 hour",
          "Stone-Fused Armor Plate — resistance to slashing",
          "Aberrant Heart Core — cast Hold Person once",
          "Gem of Echoed Steps — move silently for 10 minutes",
          "Psychic Leech Worm — grants +1 INT for 24 hours, then dies",
          "Stone-Meld Salve — phase through 5 ft of stone",
          "Deep-Sight Lens — see in magical darkness",
          "Rune of the Old Seal — advantage on sealing attempts",
          "Mind-Tear Crystal — 2d6 psychic damage in 10 ft burst",
          "Aberrant Bone Charm — once per day cast Blur",
          "Gem-Eater Beetle Swarm (contained) — eats magical traps",
          "Stone-Bound Tome — learn one dwarven ritual",
          "Psychic Echo Lantern — reveals past events as faint illusions",
          "Vein-Marked Cloak — resistance to psychic",
          "Mind-Scream Idol — once per day cast Shatter",
          "Stone-Fused Boots — ignore difficult terrain underground",
          "Aberrant Blood Vial — heal 3d6 HP but gain a minor mutation",
          "Crystal Spine Dagger — 1d4 piercing + 1d4 psychic"
        ]
      },
      {
        id: "",
        name: "Loot — Tier 5 (Legendary)",
        items: [
          "Heart of the Deep Stone — once per long rest cast Stoneskin",
          "Mind-Forge Crown — +2 INT while worn",
          "Aberrant Spine Shield — resistance to psychic & acid",
          "Gem of the Sleeper's Dream — glimpse the Aboleth's memories",
          "Stone-Soul Amulet — immune to being frightened",
          "Vein-Crown of Command — charm humanoids once per day",
          "Crystal-Fused Gauntlets — unarmed strikes deal 1d8 psychic",
          "Mind-Rend Shard — cast Synaptic Static once",
          "Stone-Eater Worm Queen — can dissolve stone walls",
          "Deep-One's Whisper — ask the Aboleth one question (dangerous)",
          "Gem of the Cracking Seal — weakens psychic barriers",
          "Aberrant Limb Growth — gain a temporary extra arm (1 hour)",
          "Stone-Fused Familiar — tiny rock creature, telepathic link",
          "Mind-Echo Blade — +1 weapon, deals psychic on crit",
          "Crystal Heart Engine — powers dwarven machinery",
          "Vein-Marked Armor — +1 AC, resistance to psychic",
          "Deep-Sight Crown — see invisible, ethereal, and aberrations",
          "Stone-Bound Contract — bind a creature to a promise",
          "Aberrant Mutation Surge — roll on a mutation table",
          "Fragment of the Aboleth's Dream — once per campaign cast Dominate Monster (but the Aboleth notices)"
        ]
      },
      {
        id: "",
        name: "Curse — Tier 1 (Minor)",
        items: [
          "Whispering Pebble — whispers your name when you're alone",
          "Miner's Locket — shows a stranger's face instead of yours",
          "Glow-Moss Pouch — glows brighter the closer danger is… but also when you lie",
          "Candle of the Lost — won't stay lit unless someone is watching you",
          "Stone-Dust Charm — you leave faint stone footprints everywhere",
          "Lantern of Echoes — repeats sounds from 10 minutes ago",
          "Dwarven Rune Chip — makes your voice echo unnaturally",
          "Ore-Stained Gloves — your hands always feel damp",
          "Cracked Gemstone — vibrates when held, but only in total darkness",
          "Pickaxe Tooth — you taste metal constantly",
          "Warden's Badge (False) — Wardens distrust you on sight",
          "Stone-Scented Oil — you smell like wet rock",
          "Tunnel-Dust Pouch — dust leaks out endlessly",
          "Glowworm Jar — worms whisper secrets you can't quite hear",
          "Broken Compass — always points behind you",
          "Miner's Dice — always roll 1s unless someone else rolls them",
          "Cave-Mender Salve — heals 1 HP but causes mild hallucinations",
          "Stone-Etched Coin — flips itself in your pocket",
          "Echo-Shard — repeats your thoughts aloud when stressed",
          "Dwarven Spirit Flask — refills itself… with foul-tasting water"
        ]
      },
      {
        id: "",
        name: "Curse — Tier 2 (Moderate)",
        items: [
          "Vein-Marked Stone — glows near corruption but drains 1 HP/day",
          "Rune-Etched Bracer — +1 STR, but you mutter in Deep Speech",
          "Gem-Dust Vial — reveals invisible creatures but blinds you for 1 round",
          "Pickaxe of the Deep — +1 damage, but you hear digging behind you",
          "Lantern of the Forgotten — reveals hidden doors but attracts undead",
          "Stone-Scribed Scroll — cast Detect Thoughts, but target learns your name",
          "Dwarven Spirit Rune — advantage on a save, but disadvantage on next",
          "Ore-Infused Band — resistance to acid, vulnerability to psychic",
          "Glowworm Crown — sheds bright light, but worms crawl into your ears at night",
          "Chime of Warning — alerts you to danger but also alerts enemies",
          "Fragment of the Old Seal — stabilizes psychic effects but cracks slowly",
          "Stone-Eater Beetle — eats metal in your pack",
          "Rune-Marked Cloak — +1 AC, but you leave glowing footprints",
          "Gem-Scribed Shield Plate — +1 AC, but shield weighs double",
          "Mind-Echo Stone — ask one question; answer causes nightmares",
          "Ore-Heart Pendant — +1 HP/level, but you dream of drowning",
          "Deep-Glow Crystal — bright light, but you can't sleep near it",
          "Psychic Residue Vial — cast Dissonant Whispers, but take 1d4 psychic",
          "Stone-Bound Idol — advantage vs fear, but disadvantage vs charm",
          "Cave-Singer's Flute — charm beasts, but attracts aberrations"
        ]
      },
      {
        id: "",
        name: "Curse — Tier 3 (Major)",
        items: [
          "Aberrant Eye Gem — cast Detect Magic, but eye opens on your skin",
          "Stone-Fused Gauntlet — +1d6 unarmed, but hand slowly petrifies",
          "Vein-Linked Charm — resistance to psychic, but veins glow visibly",
          "Gem of Deep Breath — breathe underwater, but choke on air for 1 round",
          "Corrupted Crystal — cast Chaos Bolt, but wild magic surge on 1–2",
          "Warden Captain's Seal — command Wardens, but cultists sense you",
          "Mind-Ward Band — advantage vs charm, but disadvantage vs fear",
          "Stone-Skin Draught — resistance to physical damage, but speed halved",
          "Echo-Shard Mirror — shows future danger, but hides current threats",
          "Aberrant Tendril Whip — psychic damage, but whispers tempt violence",
          "Gem-Eater Beetle Swarm — eats magical traps, but also eats magic items",
          "Deep-Sight Lens — see invisible, but can't see mundane writing",
          "Mind-Echo Lantern — reveals past events, but drains 1 spell slot",
          "Stone-Bound Tome — learn a ritual, but lose a memory",
          "Psychic Leech Worm — +1 INT, but worm grows inside you",
          "Vein-Marked Cloak — resistance to psychic, but you hear whispers",
          "Mind-Scream Idol — cast Shatter, but take 1d6 psychic",
          "Stone-Fused Boots — ignore difficult terrain, but leave stone footprints",
          "Aberrant Blood Vial — heal 3d6, but gain a mutation",
          "Crystal Spine Dagger — psychic crits, but dagger screams when drawn"
        ]
      },
      {
        id: "",
        name: "Curse — Tier 4 (Severe)",
        items: [
          "Living Stone Shard — grants +1 AC, but crawls under your skin",
          "Vein-Pulse Crystal — cast Fear, but you become frightened too",
          "Mind-Linked Circlet — telepathy, but thoughts leak uncontrollably",
          "Stone-Fused Armor Plate — resistance to slashing, but speed –10 ft",
          "Aberrant Heart Core — cast Hold Person, but heart beats audibly",
          "Gem of Echoed Steps — silent movement, but you hear phantom footsteps",
          "Stone-Meld Salve — phase through stone, but risk getting stuck",
          "Deep-Sight Crown — see everything… including things that see you back",
          "Rune of the Old Seal — advantage on sealing, but Aboleth senses you",
          "Mind-Tear Crystal — psychic burst, but stuns you for 1 round",
          "Aberrant Bone Charm — cast Blur, but bones shift audibly",
          "Stone-Bound Contract — bind a creature, but bind yourself too",
          "Crystal Heart Engine — powers machinery, but drains HP to run",
          "Vein-Marked Armor — +1 AC, but armor fuses to skin",
          "Mind-Echo Blade — +1 weapon, but blade whispers kill-urges",
          "Stone-Soul Amulet — immune to fear, but cannot feel joy",
          "Gem of the Sleeper's Dream — visions of the Aboleth, exhaustion on use",
          "Aberrant Mutation Surge — gain a powerful mutation, lose a stat point",
          "Deep-One's Whisper — ask a question, but Aboleth learns your name",
          "Stone-Eater Worm Queen — dissolves stone, but tries to burrow into you"
        ]
      },
      {
        id: "",
        name: "Curse — Tier 5 (Catastrophic)",
        items: [
          "Heart of the Deep Stone — cast Stoneskin, but slowly petrify",
          "Mind-Forge Crown — +2 INT, but lose 1 WIS permanently",
          "Aberrant Spine Shield — resistance to psychic & acid, but grows spines",
          "Fragment of the Cracking Seal — boosts sealing, but cracks widen",
          "Stone-Soul Core — immunity to fear, but emotions fade entirely",
          "Vein-Crown of Command — charm humanoids, but veins burst on crit",
          "Crystal-Fused Gauntlets — 1d8 psychic, but hands become crystalline",
          "Mind-Rend Shard — cast Synaptic Static, but take 3d6 psychic",
          "Deep-Sight Crown — see all aberrations, but they see you too",
          "Stone-Bound Familiar — loyal, but shares your HP pool",
          "Gem of the Sleeper's Eye — gain truesight, but Aboleth watches you",
          "Aberrant Limb Growth — extra arm, but it acts independently",
          "Crystal Heart Engine (Awakened) — powers anything, drains 1 HP/round",
          "Mind-Echo Idol — cast Dominate Person, but lose 1 INT",
          "Stone-Fused Wings — glide, but wings are heavy stone",
          "Vein-Marked Crown — +1 AC, but whispers never stop",
          "Deep-One's Gift — breathe underwater, but gills replace lungs",
          "Aberrant Soul Fragment — +1 spell slot, but nightmares deal psychic dmg",
          "Stone-Bound Curse — you cannot leave the mine until curse broken",
          "Fragment of the Aboleth's Dream — cast Dominate Monster once… but the Aboleth knows exactly where you are"
        ]
      }
    ]
  },

  {
    id: "",    name: "Factions",
    icon: "⚔️",
    description: "The Miners, the Wardens, and the Cultists.",
    content: `FACTIONS
========

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
THE MINERS — Hollows Reach Mining Guild
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Purpose: Extract gems from the Hollows Reach mine.
Funded by: A mysterious, wealthy benefactor who demands strict quotas.
The Gems: Magical in nature — not massively valuable on the open market,
  but clearly significant to whoever is paying.

SITUATION
  Miners have suffered escalating attacks inside the mine:
    Phase 1 — Minor psychological disturbances, strange critters.
    Phase 2 — Attacks turned significantly more aggressive.
    Phase 3 — Last assault resulted in many deaths and many miners missing.
  Remaining miners refuse to return until the threat is dealt with.

THE STANDOFF
  The Wardens are refusing to send anyone into the mine. They argue the
  Miners Guild should fund its own protective force — despite the Wardens
  being formally charged with protecting the mining operation.
  Neither side will move. Work has stopped completely.

WORKING WITH THE MINERS
  Foreman Durnik Coaljaw will offer a reward if the party clears whatever
  is down there. Additional reward for finding any missing miners.
  Missing miners can be located in the mine — some can be persuaded
  to fight alongside the party to rescue the others.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
THE WARDENS — The Pale Hand
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Public Face: Police force of Hollows Reach. Funded by the benefactor
  to keep the mine running and protected.

SECRET: They are members of a mysterious order — The Pale Hand.
  They know there is a great power sealed beneath Hollows Reach.
  They have been syphoning energy from this entity to empower their
  faction. They know the seal is breaking — and they are desperate
  to figure out how to restore it.

THEIR FEAR
  They are terrified to enter the mine. They know not only the terrible
  power of what lies beneath, but also its deep hatred of them
  specifically — born of years of being drained against its will.

RELATIONSHIP WITH THE PARTY
  Will actively obstruct adventurers they believe intend to destroy
  the deep one or break the seal further.
  Will support — cautiously — anyone working to reseal it.
  Deeply distrustful of strangers. Will not reveal the Pale Hand
  or its true purpose.

THE HIDDEN TRUTH
  The Pale Hand serves a mighty necromancer and lich who is gathering
  the syphoned power to fuel dark rituals — building an army of undead.
  Captain Elira Vance knows more than she admits.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
THE CULTISTS — The Choir of the Deep
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Nature: Weak minds coerced or fully controlled by the deep one.
  Many show physical corruption and disfigurement.

DEMEANOUR
  Blissfully happy and welcoming on the surface.
  Will share everything they know if convinced you share their purpose.
  Will fight savagely if they believe you threaten or intend to destroy
  or enslave their master.

HOW IT STARTED
  A miner — mind eroded from proximity to the deep one — secretly chipped
  away at the seal before going fully insane and beginning the first attacks.
  The initial assaults were slow and uncoordinated. As the seal cracked
  further, the entity's influence grew and the attacks intensified.
  The Choir formed around those who fell under its sway rather than dying.

KEY FACT
  The cultists cracked the seal. They do not see this as a crime.
  In their minds, they freed something that was wrongfully imprisoned.`,
    randomizers: []
  },

  {
    id: "",    name: "NPCs",
    icon: "🧙",
    description: "Key characters, townsfolk, and encounter tables.",
    content: `IMPORTANT NPCs
==============

Willie Whistletop
  Role: Delivery driver
  Notes: Takes the party to Hallows Reach.

Durnik Coaljaw
  Role: Miner Foreman
  Notes: Runs the mining operation. No-nonsense.

Captain Elira Vance
  Role: Warden Captain
  Notes: Head of the local guard. See also Wardens table.

THE SEVEN DWARVES
=================
  Grumblejack  (was Grumpy)
  Merrin        (was Happy)
  Drowse        (was Sleepy)
  Tinkerfoot    (was Doc)
  Bramble       (was Bashful)
  Rally         (was Sneezy)
  Spryke        (was Dopey)`,
    randomizers: [
      {
        id: "",
        name: "Townsfolk (1d20)",
        items: [
          "Mara Tallow", "Joren Pike", "Lysa Bramble", "Fenrick Cole",
          "Talla Wint", "Orrin Hobb", "Sera Dovetail", "Brannic Holt",
          "Willa Marn", "Darrin Quill", "Pella Soot", "Thommer Reed",
          "Nessa Vale", "Garron Wick", "Elma Croft", "Ruddon Hayle",
          "Mira Fen", "Jasker Lode", "Tovin Brack", "Hela Moss"
        ]
      },
      {
        id: "",
        name: "Dwarven Miners (1d20)",
        items: [
          "Borin Slatejaw", "Durgan Emberpick", "Marda Ironshank", "Rurik Coalbrow",
          "Kelda Deepburrow", "Harlik Stonevein", "Silda Pickwhisper", "Bramm Orebelly",
          "Torla Gravelstride", "Korrin Dustbeard", "Faldor Hammerlung", "Yanna Rockbinder",
          "Thrain Copperhelm", "Dorna Flintback", "Garrik Tunnelborn", "Vilda Oreheart",
          "Bromm Flintgut", "Keldor Shalehand", "Sarn Coalbreaker", "Tessa Gemwhisper"
        ]
      },
      {
        id: "",
        name: "Wardens / Guards (1d20)",
        items: [
          "Captain Elira Vance", "Jorren Hale", "Sera Kestrel", "Bram Varric",
          "Lysa Thorn", "Corvin Stroud", "Tallen Marr", "Ressa Pike",
          "Dorn Halwick", "Mira Senn", "Karr Holt", "Fenna Vale",
          "Jastor Wynn", "Pella Strake", "Ruddon Karr", "Vessa Thornwall",
          "Orric Dane", "Toma Varr", "Sillan Crowe", "Hasker Flint"
        ]
      },
      {
        id: "",
        name: "Strange Newcomers (1d20)",
        items: [
          "Eddin Crowcall", "Vellin Shade", "Mara Quietstep", "Orrick Pale",
          "Sella Drift", "Dorn Hollow", "Tessa Mire", "Jasker Still",
          "Venn Blackroot", "Hela Murmure", "Rook Fenlow", "Sarn Holloway",
          "Mira Gloam", "Pellin Wraith", "Torren Silt", "Vassa Mireborn",
          "Orrin Palevein", "Talla Shiver", "Fenrick Gloom", "Sera Nightwhisper"
        ]
      },
      {
        id: "",
        name: "Mutated / Corrupted (1d20)",
        items: [
          "Tholl the Bent", "Mira Three-Eyes", "Garrik Split-Jaw", "Sella the Whispered",
          "Ruddon the Hollow", "Vessa the Crooked", "Jasker the Pale", "Tovin the Shuddering",
          "Hela the Veinlit", "Bramm the Twisted", "Dorna the Shard-Skin", "Orric the Listener",
          "Sarn the Crawling", "Yanna the Echoed", "Keldor the Warped", "Tessa the Glimmered",
          "Faldor the Bone-Thin", "Vilda the Shifting", "Torla the Unbound", "The One Who Returned"
        ]
      },
      {
        id: "",
        name: "Travellers & Outsiders (1d20)",
        items: [
          "Loran Wayfell", "Mira Thornstep", "Garron Farrow", "Sella Driftwood",
          "Orrin Marsh", "Vessa Trailwind", "Jasker Longstride", "Talla Reedfoot",
          "Brannic Wayward", "Hela Moorwalker", "Ruddon Pike", "Sera Fenlow",
          "Dorn Marshlight", "Pella Roadstone", "Korrin Dustpath", "Yanna Hillstride",
          "Faldor Mirewalker", "Torla Stonepath", "Venn Farshore", "Tovin Wander"
        ]
      },
      {
        id: "",
        name: "Quick Titles / Nicknames (1d20)",
        items: [
          "the Quiet", "the Hollow", "the Bent", "the Watcher",
          "the Pale", "the Shard", "the Whispered", "the Lost",
          "the Returned", "the Crooked", "the Deep-Touched", "the Lantern",
          "the Miner's Ghost", "the Stone-Marked", "the Veinlit", "the Echoed",
          "the Shiver", "the Still", "the Gloam", "the Last"
        ]
      }
    ]
  }
];

/**
 * Default app settings.
 * @type {import('./storage.js').Settings}
 */
export const DEFAULT_SETTINGS = {
  theme: 'dark',
  accentColour: '#e94560',
};
