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
    name: "Encounters",
    icon: "🐉",
    description: "Monster stat blocks — tap to expand.",
    content: "",
    randomizers: [],
    encounters: [
      {
        id: "",
        name: "Cultist",
        cr: "1/8", xp: 25,
        size: "Medium", type: "Humanoid (any race)", alignment: "Any non-good alignment",
        ac: "12 (leather armor)", hp: "9 (2d8)", speed: "30 ft.",
        str: 11, dex: 12, con: 10, int: 10, wis: 11, cha: 10,
        skills: "Deception +2, Religion +2",
        senses: "Passive Perception 10",
        languages: "Any one language (usually Common)",
        description: "Cultists serve a powerful master or patron, worshipping dark powers in secret. They present a normal face in society, concealing their devotion.",
        narrative: "The figure moves deliberately, robes brushing the stone floor. As they turn to face you, you see the glassy devotion in their eyes — not fear, not curiosity, just the hollow certainty of someone who has given themselves away completely. Their lips are moving in a low, almost inaudible prayer.",
        traits: [
          { name: "Dark Devotion", text: "The cultist has advantage on saving throws against being charmed or frightened." }
        ],
        actions: [
          { name: "Scimitar", text: "Melee Weapon Attack: +3 to hit, reach 5 ft., one creature. Hit: 4 (1d6 + 1) slashing damage." }
        ]
      },
      {
        id: "",
        name: "Zombie",
        cr: "1/4", xp: 50,
        size: "Medium", type: "Undead", alignment: "Neutral Evil",
        ac: "8", hp: "22 (3d8 + 9)", speed: "20 ft.",
        str: 13, dex: 6, con: 16, int: 3, wis: 6, cha: 5,
        saves: "Wis +0",
        damageImmunities: "Poison",
        conditionImmunities: "Poisoned",
        senses: "Darkvision 60 ft., Passive Perception 8",
        languages: "Understands all languages it knew in life but can't speak",
        description: "Zombies are the animated corpses of once-living creatures, driven by insatiable hunger and the will of whoever raised them.",
        narrative: "The smell hits you before you see it — rot and damp stone. A shape lurches from the darkness, limbs moving with no grace but terrible purpose. Its eyes are milky white, its jaw working silently. Whatever this person was, they're long gone.",
        traits: [
          { name: "Undead Fortitude", text: "If damage reduces the zombie to 0 hit points, it must make a Constitution saving throw with a DC of 5 + the damage taken, unless the damage is radiant or from a critical hit. On a success, the zombie drops to 1 hit point instead." }
        ],
        actions: [
          { name: "Slam", text: "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 4 (1d6 + 1) bludgeoning damage." }
        ]
      },
      {
        id: "",
        name: "Dwarf Miner (Corrupted)",
        cr: "1/4", xp: 50,
        size: "Medium", type: "Humanoid (dwarf)", alignment: "Neutral / Chaotic Evil when corrupted",
        ac: "12 (hide armor)", hp: "16 (3d8 + 3)", speed: "25 ft.",
        str: 14, dex: 10, con: 13, int: 10, wis: 11, cha: 8,
        skills: "Athletics +4, Perception +2",
        senses: "Darkvision 60 ft., Passive Perception 12",
        languages: "Common, Dwarvish",
        description: "Hollows Reach miners. Corrupted versions display blackened veins, blank stares, and unnatural aggression driven by the Deep One's influence.",
        narrative: "A figure in mine gear emerges from the tunnel ahead — thick arms, a pickaxe dragging sparks across the stone. But something is wrong. The veins running along their neck and hands are black, threaded with something that pulses faintly. Their eyes don't focus on you. They raise the pickaxe without a word.",
        traits: [
          { name: "Dwarven Resilience", text: "Advantage on saving throws against poison; resistance to poison damage." },
          { name: "Stonecunning", text: "Doubles proficiency bonus on Intelligence (History) checks related to the origin of stonework." }
        ],
        actions: [
          { name: "Pickaxe", text: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 6 (1d8 + 2) piercing damage." },
          { name: "Light Crossbow", text: "Ranged Weapon Attack: +2 to hit, range 80/320 ft., one target. Hit: 4 (1d8) piercing damage." }
        ]
      },
      {
        id: "",
        name: "Ghoul",
        cr: "1", xp: 200,
        size: "Medium", type: "Undead", alignment: "Chaotic Evil",
        ac: "12", hp: "22 (5d8)", speed: "30 ft.",
        str: 13, dex: 15, con: 10, int: 7, wis: 10, cha: 6,
        damageImmunities: "Poison",
        conditionImmunities: "Charmed, Exhaustion, Poisoned",
        senses: "Darkvision 60 ft., Passive Perception 10",
        languages: "Common",
        description: "Ghouls are ravenous undead haunting graveyards and slaughter-sites. Their paralysing claws make them deadly even against armoured opponents.",
        narrative: "A wet, tearing sound echoes from the shadows before you spot it — crouched low, fingers ending in yellowed nails, head tilting in quick jerks like a dog catching scent. It turns to face you and whatever intelligence was once behind those eyes is entirely absent, replaced by something that only wants.",
        actions: [
          { name: "Bite", text: "Melee Weapon Attack: +2 to hit, reach 5 ft., one creature. Hit: 9 (2d6 + 2) piercing damage." },
          { name: "Claws", text: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 7 (2d4 + 2) slashing damage. If the target is a creature other than an elf or undead, it must succeed on a DC 10 Constitution saving throw or be paralyzed for 1 minute. The target can repeat the saving throw at the end of each of its turns, ending the effect on a success." }
        ]
      },
      {
        id: "",
        name: "Cult Fanatic",
        cr: "2", xp: 450,
        size: "Medium", type: "Humanoid (any race)", alignment: "Any non-good alignment",
        ac: "13 (leather armor)", hp: "33 (6d8 + 6)", speed: "30 ft.",
        str: 11, dex: 14, con: 12, int: 10, wis: 13, cha: 14,
        skills: "Deception +4, Persuasion +4, Religion +2",
        senses: "Passive Perception 11",
        languages: "Any one language (usually Common)",
        description: "Deeply corrupted zealots of the Choir of the Deep. Their mutations are visible — blackened veins, extra pupils, hands that end in talon-like growths — but they speak with utter serenity.",
        narrative: "They step forward with the unhurried confidence of someone who believes they cannot be touched. You notice the veins first — black, branching across their face and hands — and then the eyes: two pupils in each, all fixed on you. Their voice, when they speak, is almost warm. 'You've heard it too, haven't you? The voice from below.'",
        traits: [
          { name: "Dark Devotion", text: "Advantage on saving throws against being charmed or frightened." },
          { name: "Spellcasting", text: "Wis-based (spell save DC 11, +3 to hit). Cantrips (at will): light, sacred flame, thaumaturgy. 1st level (4 slots): command, inflict wounds, shield of faith. 2nd level (3 slots): hold person, spiritual weapon." }
        ],
        actions: [
          { name: "Multiattack", text: "The fanatic makes two Corrupted Claws attacks or one Corrupted Claws and one Dagger." },
          { name: "Corrupted Claws", text: "Melee Weapon Attack: +4 to hit, reach 5 ft., one creature. Hit: 5 (1d6 + 2) slashing damage + 2 (1d4) psychic damage." },
          { name: "Dagger", text: "Melee or Ranged Weapon Attack: +4 to hit, reach 5 ft. or range 20/60 ft., one creature. Hit: 4 (1d4 + 2) piercing damage." },
          { name: "Psychic Pulse (Recharge 5–6)", text: "All creatures within 10 ft. must make a DC 13 Wisdom saving throw. On a failure, they take 3 (1d6) psychic damage and have disadvantage on their next attack roll." },
          { name: "Whispers of the Deep (1/Combat)", text: "The fanatic targets one creature it can see within 30 ft. That creature must make a DC 13 Wisdom saving throw or be frightened of the fanatic until the end of its next turn." }
        ]
      },
      {
        id: "",
        name: "Bandit Captain",
        cr: "2", xp: 450,
        size: "Medium", type: "Humanoid (any race)", alignment: "Any non-lawful alignment",
        ac: "15 (studded leather)", hp: "65 (10d8 + 20)", speed: "30 ft.",
        str: 15, dex: 16, con: 14, int: 14, wis: 11, cha: 14,
        saves: "Str +4, Dex +5, Wis +2",
        skills: "Athletics +4, Deception +4",
        senses: "Passive Perception 10",
        languages: "Any two languages",
        description: "A ruthless leader who has clawed their way to the top — and made dark pacts to stay there. This captain bears a crude paladin's oath sworn to a fallen ideal, granting them a measure of divine power.",
        narrative: "The figure at the back of the group hasn't drawn a blade — yet. They're watching you with the calculated patience of someone who has done this many times before. When they finally speak, there's a flicker at their fingertips — not quite firelight, something older. 'This doesn't have to go badly,' they say, already knowing it will.",
        traits: [
          { name: "Aura of Command", text: "Friendly creatures within 10 ft. that can see the captain have advantage on saving throws against being frightened." },
          { name: "Spellcasting (Paladin, Cha-based, DC 12, +4 to hit)", text: "1st level (2 slots): bless, thunderous smite, wrathful smite. 2nd level (1 slot): branding smite, misty step." }
        ],
        actions: [
          { name: "Multiattack", text: "The captain makes three melee attacks: two with its scimitar and one with its dagger. Or the captain makes two ranged attacks with its daggers." },
          { name: "Scimitar", text: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 6 (1d6 + 3) slashing damage." },
          { name: "Dagger", text: "Melee or Ranged Weapon Attack: +5 to hit, reach 5 ft. or range 20/60 ft., one target. Hit: 5 (1d4 + 3) piercing damage." },
          { name: "Divine Smite (1/Turn)", text: "When the captain hits with a melee attack, it can expend a spell slot to deal an extra 2d8 radiant damage (1st-level slot) or 3d8 (2nd-level slot)." },
          { name: "Lay on Hands (5 HP/Day)", text: "The captain touches a creature and restores up to 5 HP from a pool that refreshes on a long rest." }
        ],
        reactions: [
          { name: "Parry", text: "The captain adds 2 to its AC against one melee attack that would hit it. To do so, the captain must see the attacker and be wielding a melee weapon." }
        ]
      },
      {
        id: "",
        name: "Owlbear",
        cr: "3", xp: 700,
        size: "Large", type: "Monstrosity", alignment: "Unaligned",
        ac: "13 (natural armor)", hp: "59 (7d10 + 21)", speed: "40 ft.",
        str: 20, dex: 12, con: 17, int: 3, wis: 12, cha: 7,
        skills: "Perception +3",
        senses: "Darkvision 60 ft., Passive Perception 13",
        languages: "—",
        description: "A territorial predator combining the ferocity of a bear with the keen senses of a great owl. Owlbears are aggressive, unpredictable, and notoriously difficult to drive off.",
        narrative: "You hear it before you see it — a sound like a screech folded inside a roar, reverberating off the rock walls. Then it emerges from the passage: vast feathered shoulders, a beak like sheared iron, eyes that catch your lanternlight and hold it. It doesn't care why you're here. You're in its tunnel.",
        traits: [
          { name: "Keen Sight and Smell", text: "The owlbear has advantage on Wisdom (Perception) checks that rely on sight or smell." }
        ],
        actions: [
          { name: "Multiattack", text: "The owlbear makes two attacks: one with its beak and one with its claws." },
          { name: "Beak", text: "Melee Weapon Attack: +7 to hit, reach 5 ft., one creature. Hit: 10 (1d10 + 5) piercing damage." },
          { name: "Claws", text: "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 14 (2d8 + 5) slashing damage." }
        ]
      },
      {
        id: "",
        name: "Hooked Horror",
        cr: "3", xp: 700,
        size: "Large", type: "Monstrosity", alignment: "Chaotic Neutral",
        ac: "14 (natural armor + Gemstone Core)", hp: "75 (10d10 + 20)", speed: "30 ft., climb 30 ft.",
        str: 20, dex: 10, con: 15, int: 4, wis: 12, cha: 5,
        skills: "Perception +3, Stealth +2",
        resistances: "Bludgeoning, Piercing, Slashing from nonmagical attacks (Stone-Fused Hide)",
        senses: "Blindsight 60 ft. (blind beyond this radius), Passive Perception 13",
        languages: "Hooked Horror (clicks, rattles, and clacks)",
        description: "Blind Underdark predators corrupted by proximity to the Deep One. A vein of glowing ore runs through their chitin — making them harder, stranger, and more dangerous than their kin above.",
        narrative: "Silence — and then a sound like two stones struck together, rapid and rhythmic, echoing from above. Something on the ceiling. You can't see them clearly, just shapes clinging to the rock, but you hear the clicks resolve into a pattern that sounds almost like language. The clicking stops. Then something drops.",
        traits: [
          { name: "Echolocation", text: "The hooked horror can't use its blindsight while deafened." },
          { name: "Keen Hearing", text: "The hooked horror has advantage on Wisdom (Perception) checks that rely on hearing." },
          { name: "Stone-Fused Hide", text: "The horror has resistance to nonmagical bludgeoning, piercing, and slashing damage." },
          { name: "Gemstone Core", text: "When reduced to 0 HP, the horror explodes in psychic shards. Each creature within 5 ft. must make a DC 13 Dexterity saving throw, taking 2d6 psychic + 2d6 piercing damage on a failure, or half on a success." }
        ],
        actions: [
          { name: "Multiattack", text: "The hooked horror makes two hook attacks." },
          { name: "Hook", text: "Melee Weapon Attack: +7 to hit, reach 10 ft., one target. Hit: 11 (2d6 + 5) piercing damage." },
          { name: "Psychic Echo (Recharge 5–6)", text: "The horror emits a shriek of psychic resonance. Each creature within 15 ft. must make a DC 13 Wisdom saving throw. On a failure, the creature takes 7 (2d6) psychic damage and is deafened until the end of its next turn." }
        ]
      },
      {
        id: "",
        name: "Aboleth",
        cr: "10", xp: 5900,
        size: "Large", type: "Aberration", alignment: "Lawful Evil",
        ac: "17 (natural armor)", hp: "68 (9d10 + 18) [weakened — half normal]", speed: "10 ft., swim 40 ft.",
        str: 21, dex: 9, con: 15, int: 18, wis: 15, cha: 18,
        saves: "Con +6, Int +8, Wis +6",
        skills: "History +12, Perception +10",
        senses: "Darkvision 120 ft., Passive Perception 20",
        languages: "Deep Speech, telepathy 120 ft.",
        description: "Aboleths are ancient, immortal beings of incomprehensible intelligence who remember the age before gods. This one has been syphoning power into the cracking seal for decades — it is weakened, but its mind is as vast and predatory as ever.",
        narrative: "The water is still. Then, from somewhere deep below, a pressure you feel in your back teeth rather than hear. The surface of the pool ripples from beneath. What rises is vast, pale, and ancient — three red eyes surfacing first, then the bulk of it, too large to fully comprehend in the dark. And then, without warning, it is inside your head. Not attacking. Curious. It has been waiting here for a very long time, and it has questions about you.",
        traits: [
          { name: "Amphibious", text: "The aboleth can breathe air and water." },
          { name: "Mucous Cloud", text: "While underwater, the aboleth is surrounded by transformative mucus. A creature that touches the aboleth or hits it with a melee attack within 5 feet must make a DC 14 Constitution saving throw. On a failure, the creature is diseased for 1d4 hours. The diseased creature can breathe only underwater." },
          { name: "Probing Telepathy", text: "If a creature communicates telepathically with the aboleth, the aboleth learns the creature's greatest desires if the aboleth can see the creature." }
        ],
        actions: [
          { name: "Multiattack", text: "The aboleth makes three tentacle attacks." },
          { name: "Tentacle", text: "Melee Weapon Attack: +9 to hit, reach 10 ft., one target. Hit: 12 (2d6 + 5) bludgeoning damage. If the target is a creature, it must succeed on a DC 14 Constitution saving throw or become diseased. After 1 minute, the diseased creature's skin becomes translucent and slimy, it can't regain hit points unless underwater, and the disease can only be removed by heal or a disease-curing spell of 6th level or higher." },
          { name: "Tail", text: "Melee Weapon Attack: +9 to hit, reach 10 ft., one target. Hit: 15 (3d6 + 5) bludgeoning damage." },
          { name: "Enslave (3/Day)", text: "The aboleth targets one creature it can see within 30 feet. The target must succeed on a DC 14 Wisdom saving throw or be magically charmed by the aboleth until the aboleth dies or is on a different plane. The charmed target obeys the aboleth's telepathic commands and can't take reactions." }
        ],
        legendaryActions: [
          { name: "Detect", text: "The aboleth makes a Wisdom (Perception) check." },
          { name: "Psychic Drain (Costs 2 Actions)", text: "One creature charmed by the aboleth takes 10 (3d6) psychic damage, and the aboleth regains hit points equal to the damage dealt." }
        ]
      },
      {
        id: "",
        name: "Shadow",
        cr: "1/2", xp: 100,
        size: "Medium", type: "Undead", alignment: "Chaotic Evil",
        ac: "12", hp: "16 (3d8 + 3)", speed: "40 ft.",
        str: 6, dex: 14, con: 13, int: 6, wis: 10, cha: 8,
        skills: "Stealth +4",
        vulnerabilities: "Radiant",
        resistances: "Acid, Fire, Lightning, Thunder; Bludgeoning, Piercing, Slashing from nonmagical attacks",
        damageImmunities: "Cold, Necrotic, Poison",
        conditionImmunities: "Exhaustion, Frightened, Grappled, Paralyzed, Petrified, Poisoned, Prone, Restrained",
        senses: "Darkvision 60 ft., Passive Perception 10",
        languages: "—",
        description: "Shadows are undead born from the souls of those who died in darkness — or who had their soul drained away. In the mine, they coalesce from the ambient corruption. A creature slain by a shadow rises as a new shadow under the Deep One's influence.",
        narrative: "Your torch dims. Just for a moment — but in that moment you see it: a shape on the wall that has no source. It moves when nothing else does. When your light returns, the shadow is closer than it was, and you realise with cold certainty that it is not cast by anything in this room.",
        traits: [
          { name: "Amorphous", text: "The shadow can move through a space as narrow as 1 inch wide without squeezing." },
          { name: "Shadow Stealth", text: "While in dim light or darkness, the shadow can take the Hide action as a bonus action." },
          { name: "Sunlight Weakness", text: "While in sunlight, the shadow has disadvantage on attack rolls, ability checks, and saving throws." }
        ],
        actions: [
          { name: "Strength Drain", text: "Melee Weapon Attack: +4 to hit, reach 5 ft., one creature. Hit: 9 (2d6 + 2) necrotic damage, and the target's Strength score is reduced by 1d4. The target dies if this reduces its Strength to 0. Otherwise, the reduction lasts until the target finishes a short or long rest. If a non-evil humanoid dies from this attack, a new shadow rises from the corpse 1d4 hours later." }
        ]
      },
      {
        id: "",
        name: "Dwarf Miner (Non-Corrupted)",
        cr: "1/4", xp: 50,
        size: "Medium", type: "Humanoid (dwarf)", alignment: "Lawful Neutral",
        ac: "12 (hide armor)", hp: "16 (3d8 + 3)", speed: "25 ft.",
        str: 14, dex: 10, con: 13, int: 10, wis: 11, cha: 9,
        skills: "Athletics +4, Perception +2",
        senses: "Darkvision 60 ft., Passive Perception 12",
        languages: "Common, Dwarvish",
        description: "Hollows Reach miners who haven't yet succumbed to the Deep One's influence. Frightened, exhausted, and reluctant fighters — but they know the mine tunnels better than anyone. Missing miners found underground can be persuaded to fight alongside the party.",
        narrative: "From deeper in the tunnel: 'Who's there?! Wardens?' A dwarf steps into the edge of your light, pickaxe raised but shaking. Their eyes are bloodshot, their face smeared with dust and something dried that might be tears. They look at you — really look at you, the way someone does when they're deciding whether to run or beg. 'Are you... are you with the miners? Are you here to get us out?'",
        traits: [
          { name: "Dwarven Resilience", text: "Advantage on saving throws against poison; resistance to poison damage." },
          { name: "Stonecunning", text: "Doubles proficiency bonus on Intelligence (History) checks related to the origin of stonework." },
          { name: "Mine Knowledge", text: "Advantage on Survival checks while navigating underground tunnels and shafts." }
        ],
        actions: [
          { name: "Pickaxe", text: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 6 (1d8 + 2) piercing damage." },
          { name: "Light Crossbow", text: "Ranged Weapon Attack: +2 to hit, range 80/320 ft., one target. Hit: 4 (1d8) piercing damage." },
          { name: "Flare (1/Day)", text: "The miner ignites a mining flare. Creatures within 10 ft. that are sensitive to bright light (including shadows) have disadvantage on attacks until the start of the miner's next turn." }
        ]
      }
    ]
  },

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
    id: "",
    name: "Crits",
    icon: "🎯",
    description: "Critical success, failure, and enemy crit tables.",
    content: `CRITICAL HIT & FAIL TABLES
==========================

Four tables — use the randomizers on this page.

  Player Critical Success (d20) — something goes spectacularly right.
  Player Critical Failure (d20) — something goes catastrophically wrong.
  Enemy Critical Hit (d20)      — the enemy lands a devastating blow.
  Enemy Critical Fail (d20)     — the enemy embarrasses itself.`,
    randomizers: [
      {
        id: "",
        name: "Player Critical Success (d20)",
        items: [
          "1 — Surge of clarity: gain advantage on your next attack or check.",
          "2 — Perfect strike: deal an additional d6 damage.",
          "3 — Swift reflex: avoid all damage from the triggering effect.",
          "4 — Momentum: take an immediate bonus action.",
          "5 — Terrifying precision: target makes a WIS save or is frightened.",
          "6 — Lucky break: an environmental feature helps you (DM decides).",
          "7 — Chain reaction: hit a second nearby target for half damage.",
          "8 — Tactical insight: ally within 10 ft gains advantage on their next roll.",
          "9 — Eldritch resonance: gain 1d6 temporary HP.",
          "10 — Reality flicker: teleport 5 ft to a safe spot.",
          "11 — Focused mind: automatically succeed your next concentration check.",
          "12 — Brutal impact: knock the target prone.",
          "13 — Surge of strength: +2 to your next STR-based roll.",
          "14 — Surge of agility: +2 to your next DEX-based roll.",
          "15 — Surge of will: +2 to your next WIS save.",
          "16 — Mutation stabilises: if you have a mutation it grants a minor benefit for 1 minute; otherwise gain +1 corruption.",
          "17 — Echo of the Deep One: gain blindsight 10 ft for 1 minute.",
          "18 — Eldritch empowerment: next attack deals +1d8 psychic damage.",
          "19 — Permanent boon (rare): +1 to a single ability check type permanently (e.g. Athletics).",
          "20 — Permanent mutation-boon (very rare): gain a harmless mutation with a small benefit (DM chooses — e.g. extra eyelid grants advantage vs bright light; bioluminescent veins shed dim light 5 ft)."
        ]
      },
      {
        id: "",
        name: "Player Critical Failure (d20)",
        items: [
          "1 — Catastrophic blunder: action fails and enemy gains advantage against you until your next turn.",
          "2 — Permanent maiming (rare): lose a finger, gain a scar, or suffer −1 to a specific check (DM chooses).",
          "3 — Horrific misfire: hit an ally or yourself (DM chooses).",
          "4 — Equipment slip: drop your weapon, focus, or held item.",
          "5 — Stumble: move 5 ft in a random direction.",
          "6 — Panic: disadvantage on your next attack or check.",
          "7 — Eldritch backlash: take 1d6 psychic damage.",
          "8 — Environmental hazard: trigger a nearby trap or collapse.",
          "9 — Mutation flare: temporary mutation causes disadvantage on your next save.",
          "10 — Psychic echo: disadvantage on your next WIS save.",
          "11 — Friendly fire: nearest ally takes half damage.",
          "12 — Reality tear: lose your next reaction.",
          "13 — Shaken: frightened of the nearest enemy until end of your next turn.",
          "14 — Fumble: your next attack deals minimum damage.",
          "15 — Exhaustion spike: gain 1 level of exhaustion (lasts 10 minutes).",
          "16 — Eldritch contamination: take 1d4 corruption (DM tracks).",
          "17 — Mutation surge: gain a temporary mutation (extra eye, twitching limb).",
          "18 — Deep One's notice: the next enemy attack against you has advantage.",
          "19 — Permanent mutation (rare): gain a minor unsettling mutation with no mechanical benefit (e.g. blackened veins, translucent skin).",
          "20 — Permanent deformity (very rare): −1 to a single ability score OR gain a mutation with a drawback (DM chooses)."
        ]
      },
      {
        id: "",
        name: "Enemy Critical Hit (d20)",
        items: [
          "1 — Glancing Blow: +2 damage.",
          "2 — Glancing Blow: +2 damage.",
          "3 — Deep Cut: +1d6 damage.",
          "4 — Deep Cut: +1d6 damage.",
          "5 — Brutal Impact: target makes DC 10 CON save or is staggered (disadvantage on next attack).",
          "6 — Brutal Impact: target makes DC 10 CON save or is staggered (disadvantage on next attack).",
          "7 — Bleeding Wound: +1d6 damage and target takes 1 bleed damage at start of next turn.",
          "8 — Bleeding Wound: +1d6 damage and target takes 1 bleed damage at start of next turn.",
          "9 — Cracked Rib: target makes DC 12 CON save or loses 5 ft movement next turn.",
          "10 — Cracked Rib: target makes DC 12 CON save or loses 5 ft movement next turn.",
          "11 — Rattled: target makes DC 12 WIS save or has disadvantage on next saving throw.",
          "12 — Rattled: target makes DC 12 WIS save or has disadvantage on next saving throw.",
          "13 — Knocked Off Balance: target makes DC 12 DEX save or is knocked prone.",
          "14 — Knocked Off Balance: target makes DC 12 DEX save or is knocked prone.",
          "15 — Armor Break: target's AC is reduced by 1 until repaired or healed.",
          "16 — Armor Break: target's AC is reduced by 1 until repaired or healed.",
          "17 — Vicious Strike: +2d6 damage.",
          "18 — Vicious Strike: +2d6 damage.",
          "19 — Crippling Blow: target makes DC 14 CON save or loses their bonus action next turn.",
          "20 — Lethal Precision: max damage + roll again on this table (ignore another 20)."
        ]
      },
      {
        id: "",
        name: "Enemy Critical Fail (d20)",
        items: [
          "1 — Slip: enemy has disadvantage on their next attack.",
          "2 — Slip: enemy has disadvantage on their next attack.",
          "3 — Overextend: target gets advantage on their next attack against this enemy.",
          "4 — Overextend: target gets advantage on their next attack against this enemy.",
          "5 — Stumble: enemy loses 5 ft movement next turn.",
          "6 — Stumble: enemy loses 5 ft movement next turn.",
          "7 — Drop Guard: enemy's AC is reduced by 1 until the start of its next turn.",
          "8 — Drop Guard: enemy's AC is reduced by 1 until the start of its next turn.",
          "9 — Lose Grip: enemy drops its weapon (or loses its next attack if unarmed).",
          "10 — Lose Grip: enemy drops its weapon (or loses its next attack if unarmed).",
          "11 — Misjudge Distance: enemy provokes an opportunity attack from the nearest PC.",
          "12 — Misjudge Distance: enemy provokes an opportunity attack from the nearest PC.",
          "13 — Self-Harm: enemy deals 1d4 damage to itself.",
          "14 — Self-Harm: enemy deals 1d4 damage to itself.",
          "15 — Wild Swing: enemy hits an ally within reach for half damage.",
          "16 — Wild Swing: enemy hits an ally within reach for half damage.",
          "17 — Off-Balance: enemy falls prone.",
          "18 — Off-Balance: enemy falls prone.",
          "19 — Break Something: enemy takes 1d6 damage and loses its bonus action next turn.",
          "20 — Catastrophic Failure: enemy is stunned until the end of its next turn."
        ]
      }
    ]
  },

  {
    id: "",
    name: "Corruption",
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
